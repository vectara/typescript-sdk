/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * An individual reranked search result from a query.
 */
export interface RerankedSearchResult {
    /** The document part altered by the context configuration that matches the query. */
    text?: string;
    /** The score of the individual result. */
    score?: number;
    /** The original score of the individual result before reranking. */
    originalScore?: number;
}
