/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         query: "query"
 *     }
 */
export interface CorporaSearchRequest {
    /**
     * The search query string for the corpus, which is the question the user is asking.
     */
    query: string;
    /**
     * Maximum number of results to return.
     */
    limit?: number;
    /**
     * Position from which to start in the result set.
     */
    offset?: number;
    /**
     * The API will make a best effort to complete the request in the specified seconds or time out.
     */
    requestTimeout?: number;
    /**
     * The API will make a best effort to complete the request in the specified milliseconds or time out.
     */
    requestTimeoutMillis?: number;
}
