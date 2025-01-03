/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Turn {
    /** The ID of the turn. */
    id?: string;
    /** The ID of the chat the turn resides in. */
    chatId?: string;
    /** The query made to produce this turn. */
    query?: string;
    /** The response to the query. */
    answer?: string;
    /** Indicates whether the turn is enabled and shown in future turns of the chat. */
    enabled?: boolean;
    /** Specifies when the turn was created. */
    createdAt?: Date;
}
