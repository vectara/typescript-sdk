/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../../../../index";

/**
 * @example
 *     {
 *         query: "How can I use the Vectara platform?",
 *         search: {}
 *     }
 */
export interface ChatsCreateTurnsRequest {
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