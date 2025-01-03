import { VectaraClient } from "../../src";

describe('Test GenerationPresets Manager', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });

    test('test list generation presets', async () => {
        const response = await client.generationPresets.listGenerationPresets();
        for (const gp of response.generationPresets ?? []) {
            expect(gp.name).not.toBeNull();
        }
    });
});