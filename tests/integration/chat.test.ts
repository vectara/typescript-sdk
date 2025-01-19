import { ChatParameters, CoreDocument, GenerationParameters, SearchCorporaParameters } from "../../src/api";
import { VectaraClient } from "../../src";

describe('Test Chat Manager', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });
    let key: string;
    let chatId: string;
    let turnId: string;
    let searchParams: SearchCorporaParameters;
    let generationParams: GenerationParameters;
    let chatParams: ChatParameters;

    beforeEach(async () => {
        const testName = expect.getState().currentTestName?.replace(/\s+/g, '-').toLowerCase();
        const maxKeyLength = 50;
        const corpusName = `${testName}-corpus`.slice(-maxKeyLength);
        const response = await client.corpora.create({ name: corpusName, key: corpusName });
        if (response.key) {
            key = response.key;
        }

        searchParams = {
            corpora: [{
                corpusKey: key,
                lexicalInterpolation: 0
            }],
            contextConfiguration: {
                charactersBefore: 1,
                charactersAfter: 1,
                sentencesBefore: 1,
                sentencesAfter: 1
            }
        };

        generationParams = {
            citations: {
                style: "none"
            },
            enableFactualConsistencyScore: true
        };

        chatParams = { store: true };

        const document: CoreDocument = {
            id: "my-doc-id",
            type: "core",
            documentParts: [{
                text: "Robot Utility Models are trained on a diverse set of environments and objects, and then can be deployed in novel environments with novel objects without any further data or training."
            }]
        };

        await client.documents.create(key, { body: document });

        const chatResponse = await client.chat({
            query: "Robot Utility Models",
            search: searchParams,
            generation: generationParams,
            chat: chatParams
        });
        if (chatResponse.chatId) {
            chatId = chatResponse.chatId;
        }
        if (chatResponse.turnId) {
            turnId = chatResponse.turnId;
        }

    });

    afterEach(async () => {
        if (chatId) await client.chats.delete(chatId);
        chatId = ""
    });

    it('should get chat', async () => {
        const response = await client.chats.get(chatId);
        expect(response.id).toEqual(chatId);
    });

    it('should list chats', async () => {
        const chatIds: string[] = [];

        for (let i = 0; i < 2; i++) {
            const response = await client.chat({
                query: "Robot Utility Models",
                search: searchParams,
                generation: generationParams,
                chat: chatParams,
            });
            if (response.chatId) chatIds.push(response.chatId);
        }

        const response = await client.chats.list();
        for await (const chat of response) {
            expect(typeof chat.id).toBe('string');
        }
    });



    it('should delete chat', async () => {
        const response = await client.chats.delete(chatId);
        expect(response).toBeUndefined();
    });

    it('should create turn', async () => {
        const response = await client.chats.createTurns(chatId, {
            query: "Robot Utility Models",
            search: searchParams,
            generation: generationParams,
            chat: chatParams
        });

        expect(response.chatId).toEqual(chatId);
        expect(typeof response.turnId).toBe('string');
    });

    it('should get turn', async () => {
        const createResponse = await client.chats.createTurns(chatId, {
            query: "Robot Utility Models",
            search: searchParams,
            generation: generationParams,
            chat: chatParams
        });
        const getResponse = await client.chats.getTurn(chatId, createResponse.turnId ?? "");

        expect(getResponse.chatId).toEqual(chatId);
        expect(getResponse.id).toEqual(createResponse.turnId);
    });

    it('should delete turn', async () => {
        const createResponse = await client.chats.createTurns(chatId,{
            query: "Robot Utility Models",
            search: searchParams,
            generation: generationParams,
            chat: chatParams
        });

        const deleteResponse = await client.chats.deleteTurn(chatId, createResponse.turnId ?? "");
        expect(deleteResponse).toBeUndefined();
    });

    it('should update turn', async () => {
        const createResponse = await client.chats.createTurns(chatId, {
            query: "Robot Utility Models",
            search: searchParams,
            generation: generationParams,
            chat: chatParams
        });

        const turn = await client.chats.updateTurn(chatId,  createResponse.turnId ?? "",{
            enabled: false
        });

        expect(turn.enabled).toBeFalsy();
    });

    it('should list turns', async () => {
        const turnIds = [turnId];
        for (let i = 0; i < 2; i++) {
            const response = await client.chats.createTurns(chatId, {
                query: "Robot Utility Models",
                search: searchParams,
                generation: generationParams,
                chat: chatParams
            });
            if (response.turnId) turnIds.push(response.turnId);
        }

        const response = await client.chats.listTurns(chatId);

        expect(response).toBeDefined();
        expect(response?.turns).toBeDefined();
        for (const turn of response?.turns ?? []) {
            expect(turnIds).toContain(turn.id);
        }
    });
    async function deleteAllCorpora(){
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