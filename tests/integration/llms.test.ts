import { VectaraClient } from "../../src";

describe('Test Llms Manager', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });

    test('test list llms', async () => {
        const response = await client.llms.list();
        for await (const reranker of response) {
            expect(reranker.name).not.toBeNull();
        }
    });
});