import { VectaraClient } from "../../src";

describe('Test ApiKeys', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });
    let key: string;

    beforeEach(async () => {
        const testName = expect.getState().currentTestName;
        const corpusName = `${testName?.replace(/\s+/g, '-').toLowerCase()}`;
        const response = await client.corpora.create({
            name: corpusName,
            key: corpusName
        });
        if (response.key) {
            key = response.key;
        }
    });

    test('test create api key', async () => {
        const response = await client.apiKeys.create({
            name: "test-create-key",
            apiKeyRole: "serving",
            corpusKeys: [key]
        });

        expect(response.name).toBe("test-create-key");
        expect(response.enabled).toBe(true);
        expect(response.apiKeyRole).toBe("serving");
    });

    test('test delete api key', async () => {
        const createResponse = await client.apiKeys.create({
            name: "test-delete-key",
            apiKeyRole: "serving",
            corpusKeys: [key]
        });

        const deleteResponse = await client.apiKeys.delete(createResponse.id ?? "");
        expect(deleteResponse).toBeUndefined();
    });

    test('test get api key', async () => {
        const createResponse = await client.apiKeys.create({
            name: "test-get-key",
            apiKeyRole: "serving",
            corpusKeys: [key]
        });

        const getResponse = await client.apiKeys.get(createResponse.id ?? "");
        expect(getResponse.name).toBe(createResponse.name);
    });

    test('test update api key', async () => {
        const createResponse = await client.apiKeys.create({
            name: "test-update-key",
            apiKeyRole: "serving",
            corpusKeys: [key]
        });

        const updateResponse = await client.apiKeys.update(createResponse.id ?? "", { enabled: false });
        expect(updateResponse.enabled).toBe(false);
    });

    test('test list api keys', async () => {
        const apiKeysNames: string[] = [];
        const testPrefix = `test-key-${Date.now()}-`;

        for (let index = 0; index < 2; index++) {
            const createResponse = await client.apiKeys.create({
                name: `${testPrefix}${index}`,
                apiKeyRole: "serving",
                corpusKeys: [key],
            });
            if (createResponse.name) apiKeysNames.push(createResponse.name);
        }

        const apiKeys = await client.apiKeys.list();

        const filteredApiKeys = apiKeys.data.filter(apiKey =>
            apiKey.name?.startsWith(testPrefix)
        );

        for (const apiKey of filteredApiKeys) {
            expect(apiKeysNames).toContain(apiKey.name);
        }
    });


    async function deleteAllApiKeys() {
        const apiKeysPage = await client.apiKeys.list();
        const deletePromises = apiKeysPage.data
            .filter((apiKey): apiKey is { id: string } => apiKey.id !== undefined)
            .map(apiKey => client.apiKeys.delete(apiKey.id));

        await Promise.all(deletePromises);
    }

    async function deleteAllCorpora() {
        const corporaPages = await client.corpora.list();
        const deletePromises = corporaPages.data
            .filter((corpus): corpus is { key: string } => corpus.key !== undefined)
            .map(corpus => client.corpora.delete(corpus.key));
        await Promise.all(deletePromises);
    }

    afterAll(async () => {
            await deleteAllCorpora();
            await deleteAllApiKeys()
    });

});