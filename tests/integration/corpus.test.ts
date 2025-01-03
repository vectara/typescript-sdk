import { VectaraClient } from "../../src";
import {
    FilterAttribute,
    GenerationParameters,
    CoreDocument,
    SearchCorpusParameters
} from "../../src/api";

describe('Test Corpora Manager', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });

    async function deleteAllCorpora(){
        const corporaPages = await client.corpora.list();
        const deletePromises = corporaPages.data
            .filter((corpus): corpus is { key: string } => corpus.key !== undefined)
            .map(corpus => client.corpora.delete(corpus.key));
        await Promise.all(deletePromises);
    }

    afterEach(async () => {
        try {
            await deleteAllCorpora();
        }
        finally {
            await deleteAllCorpora();
        }
    });

    it('should create corpora', async () => {
        const filterAttributes: FilterAttribute = {
            name: "Title",
            level: "document",
            description: "The title of the document.",
            indexed: true,
            type: "text"
        };

        const response = await client.corpora.create({
            key: "test-create-corpus",
            name: "test-create-corpus",
            description: "test description",
            queriesAreAnswers: true,
            documentsAreQuestions: true,
            encoderName: "boomerang-2023-q3",
            filterAttributes: [filterAttributes]
        });

        await new Promise(resolve => setTimeout(resolve, 30000));

        expect(response.key).toBe("test-create-corpus");
        expect(response.name).toBe("test-create-corpus");
        expect(response.description).toBe("test description");
        expect(response.queriesAreAnswers).toBe(true);
        expect(response.documentsAreQuestions).toBe(true);
        expect(response.encoderName).toBe("boomerang-2023-q3");
        expect(response.filterAttributes).toEqual([filterAttributes]);
    });

    it('should list corpora', async () => {
        await client.corpora.create({ key: "corpus-1" });
        await client.corpora.create({ key: "corpus-2" });
        await new Promise(resolve => setTimeout(resolve, 30000));

        const page = await client.corpora.list();
        const corpora = [];
        for await (const corpus of page) {
            corpora.push(corpus);
        }

        expect(corpora.length).toBe(2);
        expect(corpora.map(c => c.key)).toContain("corpus-1");
        expect(corpora.map(c => c.key)).toContain("corpus-2");
    });

    it('should delete corpora', async () => {
        await client.corpora.create({ key: "test-delete-corpus" });
        await client.corpora.delete("test-delete-corpus");
        await new Promise(resolve => setTimeout(resolve, 30000));

        const page = await client.corpora.list();
        const corpora = [];
        for await (const corpus of page) {
            corpora.push(corpus);
        }
        expect(corpora.length).toBe(0);
    });

    it('should update corpora', async () => {
        const response = await client.corpora.create({ key: "test-update-corpus" });
        await new Promise(resolve => setTimeout(resolve, 30000));

        expect(response.key).toBe("test-update-corpus");
        expect(response.name).toBe("test-update-corpus");

        const updatedResponse = await client.corpora.update("test-update-corpus", {
            name: "updated-name",
            description: "updated-description"
        });

        await new Promise(resolve => setTimeout(resolve, 30000));

        expect(updatedResponse.description).toBe("updated-description");
        expect(updatedResponse.name).toBe("updated-name");
    });

    it('should query corpora', async () => {
        await client.corpora.create({ name: "test-search", key: "test-search" });
        await new Promise(resolve => setTimeout(resolve, 60000));

        const document: CoreDocument = {
            id: "my-doc-id",
            type: "core",
            documentParts: [{
                text: "Robot Utility Models are trained on a diverse set of environments and objects, and then can " +
                    "be deployed in novel environments with novel objects without any further data or training."
            }]
        };

        await client.documents.create("test-search", {body:document});

        const searchParams: SearchCorpusParameters = {
            contextConfiguration: {
                sentencesBefore: 2,
                sentencesAfter: 2,
            },
            reranker: {
                type: "customer_reranker",
                rerankerId: "rnk_272725719"
            },
        };
        const    generationParams: GenerationParameters = {
            responseLanguage: "eng",
            citations: {
                style: "none",
            },
            enableFactualConsistencyScore: false,
        };

        const response = await client.corpora.query("test-search", {
            query: "Robot Utility Models",
            search: searchParams,
            generation: generationParams
        });

        expect(response.summary).not.toBeNull();
        expect(response?.searchResults?.length).toBeGreaterThan(0);
    });
});