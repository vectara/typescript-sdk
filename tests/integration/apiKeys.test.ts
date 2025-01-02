import { VectaraClient } from "../../src";

describe('Test ApiKeys', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });
    let key: string;

    beforeEach(async () => {
        const response = await client.corpora.create({
            name: "test-api-key-manager",
            key: "test-document-manager"
        });
        if (response.key) {
            key = response.key;
        }

        await new Promise((resolve) => setTimeout(resolve, 60000));
    });

    afterEach(async () => {
        const corpora = await client.corpora.list();
        for await (const corpus of corpora) {
            await client.corpora.delete(corpus.key ?? "");
        }
        const apiKeys = await client.apiKeys.list();
        for await (const apiKey of apiKeys) {
            await client.apiKeys.delete(apiKey.id ?? "");
        }
    });

    test('test create api key', async () => {
        const response = await client.apiKeys.create({
            name: "test-key",
            apiKeyRole: "serving",
            corpusKeys: [key]
        });

        expect(response.name).toBe("test-key");
        expect(response.enabled).toBe(true);
        expect(response.apiKeyRole).toBe("serving");
    });

    test('test delete api key', async () => {
        const createResponse = await client.apiKeys.create({
            name: "test-key",
            apiKeyRole: "serving",
            corpusKeys: [key]
        });

        const deleteResponse = await client.apiKeys.delete(createResponse.id ?? "");
        expect(deleteResponse).toBeNull();
    });

    test('test get api key', async () => {
        const createResponse = await client.apiKeys.create({
            name: "test-key",
            apiKeyRole: "serving",
            corpusKeys: [key]
        });

        const getResponse = await client.apiKeys.get(createResponse.id ?? "");
        expect(getResponse.name).toBe(createResponse.name);
    });

    test('test update api key', async () => {
        const createResponse = await client.apiKeys.create({
            name: "test-key",
            apiKeyRole: "serving",
            corpusKeys: [key]
        });

        const updateResponse = await client.apiKeys.update(createResponse.id ?? "", { enabled: false });
        expect(updateResponse.enabled).toBe(false);
    });

    test('test list api keys', async () => {
        const apiKeysNames: string[] = [];

        for (let index = 0; index < 2; index++) {
            const createResponse = await client.apiKeys.create({
                name: `test-key-${index}`,
                apiKeyRole: "serving",
                corpusKeys: [key]
            });
            if (createResponse.name) apiKeysNames.push(createResponse.name);
        }

        const apiKeys = await client.apiKeys.list();
        for await (const apiKey of apiKeys) {
            expect(apiKeysNames).toContain(apiKey.name);
        }
    });
});