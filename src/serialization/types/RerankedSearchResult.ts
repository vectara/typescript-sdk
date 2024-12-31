/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";

export const RerankedSearchResult: core.serialization.ObjectSchema<
    serializers.RerankedSearchResult.Raw,
    Vectara.RerankedSearchResult
> = core.serialization.object({
    text: core.serialization.string().optional(),
    score: core.serialization.number().optional(),
    originalScore: core.serialization.property("original_score", core.serialization.number().optional()),
});

export declare namespace RerankedSearchResult {
    interface Raw {
        text?: string | null;
        score?: number | null;
        original_score?: number | null;
    }
}