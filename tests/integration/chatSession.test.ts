import { VectaraClient, VectaraError } from "../../src";
import { VectaraClient as FernClient } from "../../src/Client";
import {
    SearchCorporaParameters,
    GenerationParameters,
    ChatParameters, CoreDocument
} from "../../src/api";

describe("VectaraClient ChatSession Tests", () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });
    let searchParams: SearchCorporaParameters;
    let generationParams: GenerationParameters;
    let chatParams: ChatParameters;
    let requestOptions: FernClient.RequestOptions;

    beforeAll(async () => {
        await client.corpora.create({ name: "test-chat", key: "test-chat" });
        const testSearchDocument: CoreDocument = {
            id: "my-doc-id",
            type: "core",
            documentParts: [
                {
                    text: "Robot Utility Models are trained on a diverse set of environments and objects," +
                        "and then can be deployed in novel environments with novel objects without any further" +
                        "data or training.",
                },
            ],
        };
        await client.documents.create("test-chat", {body: testSearchDocument});

        searchParams = {
            corpora: [
                {
                    corpusKey: "test-chat",
                    metadataFilter: "",
                    lexicalInterpolation: 1,
                },
            ],
            contextConfiguration: {
                sentencesBefore: 2,
                sentencesAfter: 2,
            },
            reranker: {
                type: "customer_reranker",
                rerankerId: "rnk_272725719"
            },
        };

        generationParams = {
            responseLanguage: "eng",
            citations: {
                style: "none",
            },
            enableFactualConsistencyScore: false,
        };

        chatParams = { store: true };
        requestOptions = { timeoutInSeconds: 100 };
    });

    test("ChatSession chat()", async () => {
        const session = await client.createChatSession(
            searchParams,
            generationParams,
            chatParams,
            requestOptions
        );

        const response1 = await session.chat("Robot Utility Models");
        expect(response1.chatId).toBeDefined();
        expect(response1.answer).toBeDefined();

        const response2 = await session.chat("Utility Models");
        expect(response2.chatId).toEqual(response1.chatId);
        expect(response2.answer).toBeDefined();
    });

    test("ChatSession with default parameters", async () => {
        const session = await client.createChatSession({
            corpora: [
                {
                    corpusKey: "test-chat",
                    metadataFilter: "",
                    lexicalInterpolation: 1,
                },
            ],
        });

        const response = await session.chat("Robot Utility Models");
        expect(response.chatId).toBeDefined();
        expect(response.answer).toBeDefined();
    });

    test("ChatSession exception handling", async () => {
        const session = await client.createChatSession({ corpora: [] });

        await expect(session.chat("Robot Utility Models")).rejects.toThrow(VectaraError);
    });

    test("ChatSession chatStream()", async () => {
        const session = await client.createChatSession(
            searchParams,
            generationParams,
            chatParams,
            requestOptions
        );
        const responseStream = await session.chatStream("Robot Utility Models")
        const responseChunks: any[] = [];
        let chatId: string = "";
        for await (const chunk of responseStream) {
            if (chunk.type === "chat_info" && chunk.chatId) {
                chatId = chunk.chatId;
            }
            responseChunks.push(chunk);
        }

        expect(responseChunks.length).toBeGreaterThan(0);

        const secondResponse = await session.chatStream("Robot Utility Models")
        const chunks: any[] = [];
        for await (const chunk of secondResponse) {
            if (chunk.type === "chat_info" && chunk.chatId) {
                expect(chatId).toEqual(chunk.chatId);
            }
            responseChunks.push(chunk);
        }

        expect(responseChunks.length).toBeGreaterThan(0);

    });
    async function deleteAllCorpora() {
        const corporaPages = await client.corpora.list();
        const deletePromises = corporaPages.data
            .filter((corpus): corpus is { key: string } => corpus.key !== undefined)
            .map(corpus => client.corpora.delete(corpus.key));
        await Promise.all(deletePromises);
    }

    afterAll(async () => {
        await deleteAllCorpora();
    });

});
