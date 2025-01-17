/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../index";

/**
 * The parameters to control generation.
 */
export interface GenerationParameters {
    /**
     * The preset values to use to feed the query results and other context to the model.
     *
     * A `generation_preset` is an object with a bundle of properties that specifies:
     *   * The `prompt_template` that is rendered and then sent to the LLM.
     *   * The LLM used.
     *   * `model_parameter`s such as temperature.
     *
     * All of these properties except the model can be overridden by setting them in this
     * object. Even when a `prompt_template` is set, the `generation_preset_name` is used to set
     * the model used.
     *
     * If `generation_preset_name` is not set, the Vectara platform will use the default model and
     * prompt.
     */
    generationPresetName?: string;
    /** Use `generation_preset_name` instead of `prompt_name`. */
    promptName?: string;
    /** The maximum number of search results to be available to the prompt. */
    maxUsedSearchResults?: number;
    /**
     * Vectara manages both system and user roles and prompts for the generative
     * LLM out of the box by default. However, users can override the
     * `prompt_template` via this variable. The `prompt_template` is in the form of an
     * Apache Velocity template. For more details on how to configure the
     * `prompt_template`, see the [long-form documentation](https://docs.vectara.com/docs/prompts/vectara-prompt-engine).
     */
    promptTemplate?: string;
    /**
     * This property is deprecated in favor of clearer naming. Use `prompt_template`. This property will be
     * ignored if `prompt_template` is set.
     */
    promptText?: string;
    /**
     * Controls the length of the generated output.
     * This is a rough estimate and not a hard limit: the end output can be longer or shorter
     * than this value. This is generally implemented by including the `max_response_characters` in the
     * prompt, and the LLM's instruction following capability dictates how closely the generated output
     * is limited.
     */
    maxResponseCharacters?: number;
    responseLanguage?: Vectara.Language;
    /**
     * The parameters for the model.
     * WARNING: This is an experimental feature, and breakable at any point with virtually no
     * notice. It is meant for experimentation to converge on optimal parameters that can then
     * be set in the prompt definitions.
     */
    modelParameters?: Vectara.ModelParameters;
    citations?: Vectara.CitationParameters;
    /** Enable returning the factual consistency score with query results. */
    enableFactualConsistencyScore?: boolean;
}
