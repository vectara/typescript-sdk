import { VectaraClient } from "../../src";
import { FilterAttribute } from "../../src/api";

describe('Test Jobs Manager', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });
    let jobId: string;
    let corpusKey: string;

    beforeEach(async () => {
        const testName = expect.getState().currentTestName?.replace(/\s+/g, '-').toLowerCase();
        const maxKeyLength = 50;
        const corpusName = `${testName}-corpus`.slice(-maxKeyLength);
        const response = await client.corpora.create({ name: corpusName, key: corpusName });
        if (response.key) corpusKey = response.key

        const filterAttributes: FilterAttribute = {
            name: "Title",
            level: "document",
            description: "The title of the document.",
            indexed: true,
            type: "text"
        };

        const res = await client.corpora.replaceFilterAttributes(corpusKey, {
            filterAttributes: [filterAttributes]
        });

        jobId = res.jobId;
    });

    test('test get job', async () => {
        const res = await client.jobs.get(jobId );

        expect(res.id).toBe(jobId);
        expect(res.corpusKeys).toEqual([corpusKey]);
    });

    test('test list jobs', async () => {
        const jobs = await client.jobs.list();
        for await (const job of jobs) {
            expect(job.id).not.toBeNull();
        }
    });
    async function deleteAllCorpora(){
        const corporaPages = await client.corpora.list();
        const deletePromises = corporaPages.data
            .filter((corpus): corpus is { key: string } => corpus.key !== undefined)
            .map(corpus => client.corpora.delete(corpus.key));
        await Promise.all(deletePromises);
    }

    afterEach(async () => {
        await deleteAllCorpora();
    });

});