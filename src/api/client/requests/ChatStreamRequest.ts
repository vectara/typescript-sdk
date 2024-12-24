/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../../index";

/**
 * @example
 *     {
 *         query: "What is a hallucination?",
 *         search: {
 *             corpora: [{
 *                     corpusKey: "corpus_key",
 *                     metadataFilter: "",
 *                     lexicalInterpolation: 0.005
 *                 }],
 *             contextConfiguration: {
 *                 sentencesBefore: 2,
 *                 sentencesAfter: 2
 *             },
 *             reranker: {
 *                 type: "customer_reranker",
 *                 rerankerId: "rnk_272725719"
 *             }
 *         },
 *         generation: {
 *             responseLanguage: Vectara.Language.Eng,
 *             citations: {
 *                 style: Vectara.CitationParametersStyle.None
 *             },
 *             enableFactualConsistencyScore: true
 *         },
 *         chat: {
 *             store: true
 *         }
 *     }
 */
export interface ChatStreamRequest {
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
    /** Indicates whether to save the chat in both the chat and query history. This overrides `chat.store`. */
    saveHistory?: boolean;
}
