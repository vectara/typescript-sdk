/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../../../../index";

/**
 * @example
 *     {
 *         requestTimeout: 1,
 *         requestTimeoutMillis: 1,
 *         query: "string",
 *         search: {
 *             corpora: [{
 *                     corpusKey: {
 *                         "key": "value"
 *                     },
 *                     customDimensions: {
 *                         "string": 1.1
 *                     },
 *                     metadataFilter: "string",
 *                     lexicalInterpolation: 1.1,
 *                     semantics: Vectara.SearchSemantics.Default
 *                 }],
 *             offset: 1,
 *             limit: 1,
 *             contextConfiguration: {
 *                 charactersBefore: 1,
 *                 charactersAfter: 1,
 *                 sentencesBefore: 1,
 *                 sentencesAfter: 1,
 *                 startTag: "string",
 *                 endTag: "string"
 *             },
 *             reranker: {
 *                 type: "customer_reranker",
 *                 rerankerId: "string",
 *                 rerankerName: "string"
 *             }
 *         },
 *         generation: {
 *             generationPresetName: "string",
 *             promptName: "string",
 *             maxUsedSearchResults: 1,
 *             promptTemplate: "string",
 *             promptText: "string",
 *             maxResponseCharacters: 1,
 *             responseLanguage: Vectara.Language.Auto,
 *             modelParameters: {
 *                 maxTokens: 1,
 *                 temperature: 1.1,
 *                 frequencyPenalty: 1.1,
 *                 presencePenalty: 1.1
 *             },
 *             citations: {
 *                 style: Vectara.CitationParametersStyle.None,
 *                 urlPattern: "string",
 *                 textPattern: "string"
 *             },
 *             enableFactualConsistencyScore: true
 *         },
 *         chat: {
 *             store: true
 *         }
 *     }
 */
export interface ChatsCreateTurnsStreamRequest {
    /**
     * The API will make a best effort to complete the request in the specified seconds or time out.
     */
    requestTimeout?: number;
    /**
     * The API will make a best effort to complete the request in the specified milliseconds or time out.
     */
    requestTimeoutMillis?: number;
    /** The chat message or question. */
    query: string;
    search: Vectara.SearchCorporaParameters;
    generation?: Vectara.GenerationParameters;
    chat?: Vectara.ChatParameters;
}
