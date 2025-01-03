/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface DocumentsListRequest {
    /**
     * The maximum number of documents to return at one time.
     */
    limit?: number;
    /**
     * Filter documents by metadata. Uses the same expression as a query metadata filter, but only
     * allows filtering on document metadata.
     */
    metadataFilter?: string;
    /**
     * Used to retrieve the next page of documents after the limit has been reached.
     */
    pageKey?: string;
    /**
     * The API will make a best effort to complete the request in the specified seconds or time out.
     */
    requestTimeout?: number;
    /**
     * The API will make a best effort to complete the request in the specified milliseconds or time out.
     */
    requestTimeoutMillis?: number;
}
