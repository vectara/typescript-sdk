import { VectaraClient } from "../../src";
import { FilterAttribute } from "../../src/api";

describe('Test Jobs Manager', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });
    let jobId: string;

    beforeEach(async () => {
        await client.corpora.create({ key: "test-reset-filters" });

        const filterAttributes: FilterAttribute = {
            name: "Title",
            level: "document",
            description: "The title of the document.",
            indexed: true,
            type: "text"
        };

        const res = await client.corpora.replaceFilterAttributes("test-reset-filters", {
            filterAttributes: [filterAttributes]
        });

        jobId = res.jobId;
    });

    afterEach(async () => {
        const corpora = await client.corpora.list();
        for await (const corpus of corpora) {
            await client.corpora.delete(corpus.key ?? "");
        }
    });

    test('test get job', async () => {
        const res = await client.jobs.get(jobId );

        expect(res.id).toBe(jobId);
        expect(res.corpusKeys).toEqual(["test-reset-filters"]);
    });

    test('test list jobs', async () => {
        const jobs = await client.jobs.list();
        for await (const job of jobs) {
            expect(job.id).not.toBeNull();
        }
    });
});