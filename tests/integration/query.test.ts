import { VectaraClient } from "../../src";
import { GenerationParameters, SearchCorporaParameters, CoreDocument } from "../../src/api";


describe('Multiple Corpora Query', () => {
    let searchParams: SearchCorporaParameters;
    let generationParams: GenerationParameters;

    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });

    beforeEach(async () => {

        await client.corpora.create({ name: "test-search-1", key: "test-search-1" });
        await client.corpora.create({ name: "test-search-2", key: "test-search-2" });

        await new Promise(resolve => setTimeout(resolve, 30000));

        const testSearch1Document: CoreDocument  = {
            id: "my-doc-id",
            type: "core",
            documentParts: [
                {
                    text: "Robot Utility Models are trained on a diverse set of environments and objects, and then can " +
                        "be deployed in novel environments with novel objects without any further data or training."
                }
            ]
        };

        const testSearch2Document: CoreDocument = {
            id: "my-doc-id",
            type: "core",
            documentParts: [
                {
                    text: "We show that it is possible to create general Robot Utility Models with a moderate amount " +
                        "of data in the order of 1,000 demonstrations (Section 2). These RUMs achieve a 90% average " +
                        "success rate on zero-shot deployment in 25 novel environments (Section 3.1)."
                }
            ]
        };

        await client.documents.create("test-search-1", {body: testSearch1Document});
        await client.documents.create("test-search-2", {body: testSearch2Document});

        searchParams = {
            corpora: [
                {
                    corpusKey: "test-search-1",
                    metadataFilter: "",
                    lexicalInterpolation: 1,
                },
               {
                    corpusKey: "test-search-2",
                    metadataFilter: "",
                    lexicalInterpolation: 1,
                }
            ],
            contextConfiguration: {
                sentencesBefore: 2,
                sentencesAfter: 2,
            },
            reranker: {
                type: "customer_reranker",
                rerankerId: "rnk_272725719"
            },
        };

        generationParams = {
            responseLanguage: "eng",
            citations: {
                style: "none",
            },
            enableFactualConsistencyScore: false,
        };
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

        test('query', async () => {
            const response = await client.query({
                query: "Robot Utility Models",
                search: searchParams,
                generation: generationParams,
            });

            expect(response.summary).not.toBeNull();
            expect(response?.searchResults?.length).toBeGreaterThan(0);
        });

    test('query with different lambda', async () => {
        // Test with lexical interpolation 0
        let search: SearchCorporaParameters = {
            corpora: [
                {
                    corpusKey: "test-search-1",
                    metadataFilter: "",
                    lexicalInterpolation: 0,
                },
                {
                    corpusKey: "test-search-2",
                    metadataFilter: "",
                    lexicalInterpolation: 0,
                }
            ],
            contextConfiguration: {
                sentencesBefore: 2,
                sentencesAfter: 2,
            },
            reranker: {
                type: "customer_reranker",
                rerankerId: "rnk_272725719"
            },
        };

        let response = await client.query({
            query: "Robot Utility Models",
            search: search,
            generation: generationParams
        });

        expect(response.summary).not.toBeNull();
        expect(response?.searchResults?.length).toBeGreaterThan(0);

        // Test with lexical interpolation 0.1
        search = {
            corpora: [
                {
                    corpusKey: "test-search-1",
                    metadataFilter: "",
                    lexicalInterpolation: 0.1,
                },
                {
                    corpusKey: "test-search-2",
                    metadataFilter: "",
                    lexicalInterpolation: 0.1,
                }
            ],
            contextConfiguration: {
                sentencesBefore: 2,
                sentencesAfter: 2,
            },
            reranker: {
                type: "customer_reranker",
                rerankerId: "rnk_272725719"
            },
        };

        response = await client.query({
            query: "Robot Utility Models",
            search: search,
            generation: generationParams,
        });

        expect(response.summary).not.toBeNull();
        expect(response?.searchResults?.length).toBeGreaterThan(0);
    });

    test('query with MMR reranker', async () => {
        const search: SearchCorporaParameters = {
            corpora: [
                {
                    corpusKey: "test-search-1",
                    metadataFilter: "",
                    lexicalInterpolation: 0,
                },
                {
                    corpusKey: "test-search-2",
                    metadataFilter: "",
                    lexicalInterpolation: 0,
                }
            ],
            contextConfiguration: {
                sentencesBefore: 2,
                sentencesAfter: 2,
            },
            reranker: {
                type: "mmr",
                diversityBias: 0.3
            },
        };

        const response = await client.query({
            query: "Robot Utility Models",
            search: search,
            generation: generationParams,
        });

        expect(response.summary).not.toBeNull();
        expect(response?.searchResults?.length).toBeGreaterThan(0);
    });

    test('query with none reranker', async () => {
        const search: SearchCorporaParameters = {
            corpora: [
                {
                    corpusKey: "test-search-1",
                    metadataFilter: "",
                    lexicalInterpolation: 0,
                },
                {
                    corpusKey: "test-search-2",
                    metadataFilter: "",
                    lexicalInterpolation: 0,
                }
            ],
            contextConfiguration: {
                sentencesBefore: 2,
                sentencesAfter: 2,
            },
            reranker: {
                type: "none"
            },
        };

        const response = await client.query({
            query: "Robot Utility Models",
            search: search,
            generation: generationParams,
        });

        expect(response.summary).not.toBeNull();
        expect(response?.searchResults?.length).toBeGreaterThan(0);
    });

    test('query with UDF reranker', async () => {
        const search: SearchCorporaParameters = {
            corpora: [
                {
                    corpusKey: "test-search-1",
                    metadataFilter: "",
                    lexicalInterpolation: 0,
                },
                {
                    corpusKey: "test-search-2",
                    metadataFilter: "",
                    lexicalInterpolation: 0,
                }
            ],
            contextConfiguration: {
                sentencesBefore: 2,
                sentencesAfter: 2,
            },
            reranker: {
                type: "userfn",
                userFunction: "if (get('$.score') < 0.7) null else get('$.score') + 1"
            },
        };

        const response = await client.query({
            query: "Robot Utility Models",
            search: search,
            generation: generationParams,
        });

        response?.searchResults?.forEach((result: any) => {
            expect(result.score).toBeGreaterThan(1);
        });
    });

    test('query with chain reranker', async () => {
        const search: SearchCorporaParameters = {
            corpora: [
                {
                    corpusKey: "test-search-1",
                    metadataFilter: "",
                    lexicalInterpolation: 0,
                },
                {
                    corpusKey: "test-search-2",
                    metadataFilter: "",
                    lexicalInterpolation: 0,
                }
            ],
            contextConfiguration: {
                sentencesBefore: 2,
                sentencesAfter: 2,
            },
            reranker: {
                type: "chain",
                rerankers: [
                   {
                       type:"customer_reranker",
                        rerankerId: "rnk_272725719"
                    },
                    {
                        type: "userfn",
                        userFunction: "if (get('$.score') < 0.7) null else get('$.score') + 1"
                    },
                ]
            },
        };

        const response = await client.query({
            query: "Robot Utility Models",
            search: search,
            generation: generationParams,
        });

        response?.searchResults?.forEach((result: any) => {
            expect(result.score).toBeGreaterThan(1);
        });
    });

    test('query with FCS enabled', async () => {
        const generationParamsWithFCS: GenerationParameters = {
            responseLanguage: "eng",
            citations: {
                style: "none",
            },
            enableFactualConsistencyScore: true,
        };

        const response = await client.query({
            query: "Robot Utility Models",
            search: searchParams,
            generation: generationParamsWithFCS
        });

        expect(response.summary).not.toBeNull();
        expect(response?.searchResults?.length).toBeGreaterThan(0);
    });

    test('query stream', async () => {
        const responseStream = await client.queryStream({
            query: "Robot Utility Models",
            search: searchParams,
            generation: generationParams
        });

        const responseItems = [];
        for await (const item of responseStream) {
            responseItems.push(item);
        }

        expect(responseItems.length).toBeGreaterThan(0);
    });
});