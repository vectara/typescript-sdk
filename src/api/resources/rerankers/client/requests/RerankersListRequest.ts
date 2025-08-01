/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         filter: "vectara.*"
 *     }
 */
export interface RerankersListRequest {
    /**
     * A regular expression against reranker names and descriptions.
     */
    filter?: string;
    /**
     * The maximum number of rerankers to return in the list.
     */
    limit?: number;
    /**
     * Used to retrieve the next page of rerankers after the limit has been reached.
     */
    page_key?: string;
    /**
     * The API will make a best effort to complete the request in the specified seconds or time out.
     */
    "Request-Timeout"?: number;
    /**
     * The API will make a best effort to complete the request in the specified milliseconds or time out.
     */
    "Request-Timeout-Millis"?: number;
}
