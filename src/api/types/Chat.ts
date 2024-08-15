/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Chat {
    /** ID of the chat. */
    id?: string;
    /** The first query of the chat. */
    firstQuery?: string;
    /** The first answer of the chat. */
    firstAnswer?: string;
    /** Indicates whether this chat is enabled and can have further turns. */
    enabled?: boolean;
    /** Specifies when this chat was created. */
    createdAt?: Date;
}
