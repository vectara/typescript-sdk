import { VectaraClient } from "../../src";
import * as path from "node:path";
import fs from "fs";

describe('Test Upload Manager', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });

    beforeEach(async () => {

        await client.corpora.create({ name: "test-upload", key: "test-upload" });
        await new Promise(resolve => setTimeout(resolve, 30000));
    });

    test('test upload', async () => {
        const filePath = path.join(__dirname, 'example/resources/arxiv', '2409.05866v1.pdf');
        const fileStream = fs.createReadStream(filePath);
        const response = await client.upload.file(fileStream, "test-upload", {filename: "test-upload.pdf"})

        expect(response.id).toBe('string');
    });
});