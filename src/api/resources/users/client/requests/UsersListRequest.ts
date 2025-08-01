/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../../../../index.js";

/**
 * @example
 *     {
 *         corpus_key: "my-corpus"
 *     }
 */
export interface UsersListRequest {
    /**
     * The maximum number of users to return at one time.
     */
    limit?: number;
    /**
     * Used to retrieve the next page of users after the limit has been reached.
     */
    page_key?: string;
    /**
     * Filter users by access to this corpus.
     */
    corpus_key?: Vectara.CorpusKey;
    /**
     * The API will make a best effort to complete the request in the specified seconds or time out.
     */
    "Request-Timeout"?: number;
    /**
     * The API will make a best effort to complete the request in the specified milliseconds or time out.
     */
    "Request-Timeout-Millis"?: number;
}
