/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";
import { Language } from "./Language";
import { IndividualSearchResult } from "./IndividualSearchResult";

export const QueryFullResponse: core.serialization.ObjectSchema<
    serializers.QueryFullResponse.Raw,
    Vectara.QueryFullResponse
> = core.serialization.object({
    summary: core.serialization.string().optional(),
    responseLanguage: core.serialization.property("response_language", Language.optional()),
    searchResults: core.serialization.property(
        "search_results",
        core.serialization.list(IndividualSearchResult).optional()
    ),
    factualConsistencyScore: core.serialization.property(
        "factual_consistency_score",
        core.serialization.number().optional()
    ),
    renderedPrompt: core.serialization.property("rendered_prompt", core.serialization.string().optional()),
});

export declare namespace QueryFullResponse {
    interface Raw {
        summary?: string | null;
        response_language?: Language.Raw | null;
        search_results?: IndividualSearchResult.Raw[] | null;
        factual_consistency_score?: number | null;
        rendered_prompt?: string | null;
    }
}
