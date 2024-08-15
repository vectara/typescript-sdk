/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface ChatsListRequest {
    /**
     * The maximum number of results to return in the list.
     */
    limit?: number;
    /**
     * Used to the retrieve the next page of chats after the limit has been reached.
     */
    pageKey?: string;
}
