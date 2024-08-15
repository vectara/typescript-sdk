/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The chunk response from the generation, possibly a partial generation.
 */
export interface StreamGenerationChunk {
    type: "generation_chunk";
    /**
     * Part of the message from the generator. All summary chunks must be appended together in order
     * to get the full summary.
     */
    generationChunk?: string;
}
