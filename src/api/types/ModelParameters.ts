/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The parameters for the model. These are currently a Scale-only feature.
 * See [pricing](https://vectara.com/pricing/) for more details on becoming a Scale customer.
 * WARNING: This is an experimental feature, and breakable at any point with virtually no
 * notice. It is meant for experimentation to converge on optimal parameters that can then
 * be set in the prompt definitions.
 */
export interface ModelParameters {
    /** The maximum number of tokens to be returned by the model. */
    maxTokens?: number;
    /**
     * The sampling temperature to use. Higher values make the output more random, while lower
     * values make it more focused and deterministic.
     */
    temperature?: number;
    /**
     * Higher values penalize new tokens based on their existing frequency in the text so far,
     * decreasing the model's likelihood to repeat the same line verbatim.
     */
    frequencyPenalty?: number;
    /**
     * Higher values penalize new tokens based on whether they appear in the text so far,
     * increasing the model's likelihood to talk about new topics.
     */
    presencePenalty?: number;
}
