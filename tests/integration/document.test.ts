import { VectaraClient } from "../../src";
import { CoreDocument } from "../../src/api";


describe('Test Document Manager', () => {

    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });
    let corpusKey: string;

    beforeEach(async () => {
        const testName = expect.getState().currentTestName?.replace(/\s+/g, '-').toLowerCase();
        const maxKeyLength = 50;
        const corpusName = `${testName}-corpus`.slice(-maxKeyLength);
        const response = await client.corpora.create({ name: corpusName, key: corpusName });
        if (response.key) corpusKey = response.key
    });

    test('create document', async () => {
        const document: CoreDocument  = {
            id: "my-doc-id",
            type: "core",
            documentParts: [
                {
                    text: "Robot Utility Models are trained on a diverse set of environments and objects, and then can " +
                        "be deployed in novel environments with novel objects without any further data or training."
                }
            ]
        };

        const response = await client.documents.create(corpusKey, {body: document});

        expect(response.id).toEqual("my-doc-id");
    });

    test('delete document', async () => {
        const document: CoreDocument  = {
            id: "my-doc-id",
            type: "core",
            documentParts: [
                {
                    text: "Robot Utility Models are trained on a diverse set of environments and objects, and then can " +
                        "be deployed in novel environments with novel objects without any further data or training."
                }
            ]
        };

        await client.documents.create(corpusKey, {body: document});
        const response = await client.documents.delete(corpusKey, "my-doc-id")

        expect(response).toBeUndefined();
    });

    test('get document', async () => {
        const document: CoreDocument  = {
            id: "my-doc-id",
            type: "core",
            documentParts: [
                {
                    text: "Robot Utility Models are trained on a diverse set of environments and objects, and then can " +
                        "be deployed in novel environments with novel objects without any further data or training."
                }
            ]
        };

        await client.documents.create(corpusKey, {body: document});
        const response = await client.documents.getCorpusDocument(corpusKey, "my-doc-id")
        expect(response.id).toEqual("my-doc-id");
    });


    test('list documents', async () => {
        const docIds: string[] = [];

        for (let i = 0; i < 2; i++) {
            const document: CoreDocument  = {
                id: `my-doc-id-${i}`,
                type: "core",
                documentParts: [
                    {
                        text: "Robot Utility Models are trained on a diverse set of environments and objects, and then can " +
                            "be deployed in novel environments with novel objects without any further data or training."
                    }
                ]
            };

            const response = await client.documents.create(corpusKey, {body: document});
            if (response.id) {
                docIds.push(response.id);
            }
        }

        const documentPages = await client.documents.list(corpusKey);
        for (const doc of documentPages.data) {
            expect(docIds).toContain(doc.id);
        }
    });

    async function deleteAllCorpora() {
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