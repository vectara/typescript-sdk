/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Event containing information on how the generation was accomplished.
 */
export interface GenerationInfo {
    type: "generation_info";
    /** The rendered prompt sent to the LLM. Useful when creating customer `prompt_template` templates. */
    rendered_prompt?: string;
    /** View the actual query made to backend that was rephrased by the LLM from the input query. */
    rephrased_query?: string;
}
