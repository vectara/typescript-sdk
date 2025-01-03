/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";

export const FactualConsistencyScoreSpan: core.serialization.ObjectSchema<
    serializers.FactualConsistencyScoreSpan.Raw,
    Vectara.FactualConsistencyScoreSpan
> = core.serialization.object({
    type: core.serialization.stringLiteral("fcs"),
    latencyMillis: core.serialization.property("latency_millis", core.serialization.number().optional()),
    startedAt: core.serialization.property("started_at", core.serialization.date().optional()),
    score: core.serialization.number().optional(),
});

export declare namespace FactualConsistencyScoreSpan {
    interface Raw {
        type: "fcs";
        latency_millis?: number | null;
        started_at?: string | null;
        score?: number | null;
    }
}
