/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";
import { Language } from "./Language";
import { ModelParameters } from "./ModelParameters";
import { CitationParameters } from "./CitationParameters";

export const GenerationParameters: core.serialization.ObjectSchema<
    serializers.GenerationParameters.Raw,
    Vectara.GenerationParameters
> = core.serialization.object({
    generationPresetName: core.serialization.property("generation_preset_name", core.serialization.string().optional()),
    promptName: core.serialization.property("prompt_name", core.serialization.string().optional()),
    maxUsedSearchResults: core.serialization.property(
        "max_used_search_results",
        core.serialization.number().optional()
    ),
    promptTemplate: core.serialization.property("prompt_template", core.serialization.string().optional()),
    promptText: core.serialization.property("prompt_text", core.serialization.string().optional()),
    maxResponseCharacters: core.serialization.property(
        "max_response_characters",
        core.serialization.number().optional()
    ),
    responseLanguage: core.serialization.property("response_language", Language.optional()),
    modelParameters: core.serialization.property("model_parameters", ModelParameters.optional()),
    citations: CitationParameters.optional(),
    enableFactualConsistencyScore: core.serialization.property(
        "enable_factual_consistency_score",
        core.serialization.boolean().optional()
    ),
});

export declare namespace GenerationParameters {
    interface Raw {
        generation_preset_name?: string | null;
        prompt_name?: string | null;
        max_used_search_results?: number | null;
        prompt_template?: string | null;
        prompt_text?: string | null;
        max_response_characters?: number | null;
        response_language?: Language.Raw | null;
        model_parameters?: ModelParameters.Raw | null;
        citations?: CitationParameters.Raw | null;
        enable_factual_consistency_score?: boolean | null;
    }
}
