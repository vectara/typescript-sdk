import { VectaraClient } from "../../src";

describe('Test Rerankers Manager', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });

    test('test list rerankers', async () => {
        const response = await client.rerankers.list();
        for await (const llm of response) {
            expect(llm.name).not.toBeNull();
        }
    });
});