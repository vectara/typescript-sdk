import { VectaraClient } from "../../src";

describe('Test Encoders Manager', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });


    test('test list encoders', async () => {
        const response = await client.encoders.list();
        for await (const encoder of response) {
            expect(encoder.name).not.toBeNull();
        }
    });
});