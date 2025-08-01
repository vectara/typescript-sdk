/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A partial message update to be merged with previous chunks in a streaming response.
 */
export interface ChatCompletionStreamResponseDelta {
    /** The role of the author of this message, typically 'assistant' for responses. */
    role?: string;
    /** Accepts any additional properties */
    [key: string]: any;
}
