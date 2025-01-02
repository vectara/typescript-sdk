import { VectaraClient } from "../../src";
import { CoreDocument } from "../../src/api";


describe('Test Document Manager', () => {

    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });

    beforeEach(async () => {

        await client.corpora.create({ name: "test-document", key: "test-document" });
        await new Promise(resolve => setTimeout(resolve, 30000));
    });

    async function deleteAllCorpora() {
        const corporaPages = await client.corpora.list();
        const deletePromises = corporaPages.data
            .filter((corpus): corpus is { key: string } => corpus.key !== undefined)
            .map(corpus => client.corpora.delete(corpus.key));
        await Promise.all(deletePromises);
    }

    afterEach(async () => {
        try {
            await deleteAllCorpora();
        }
        finally {
            await deleteAllCorpora();
        }
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

        const response = await client.documents.create("test-document", {body: document});

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

        await client.documents.create("test-document", {body: document});
        const response = await client.documents.delete("test-document", "my-doc-id")

        expect(response).toBeNull();
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

        await client.documents.create("test-document", {body: document});
        const response = await client.documents.getCorpusDocument("test-document", "my-doc-id")
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

            const response = await client.documents.create("test-document", {body: document});
            if (response.id) {
                docIds.push(response.id);
            }
        }

        const documentPages = await client.documents.list("test-document");
        for (const doc of documentPages.data) {
            expect(docIds).toContain(doc.id);
        }
    });



});