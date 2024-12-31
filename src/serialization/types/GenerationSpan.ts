/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";

export const GenerationSpan: core.serialization.ObjectSchema<serializers.GenerationSpan.Raw, Vectara.GenerationSpan> =
    core.serialization.object({
        type: core.serialization.stringLiteral("generation"),
        latencyMillis: core.serialization.property("latency_millis", core.serialization.number().optional()),
        startedAt: core.serialization.property("started_at", core.serialization.date().optional()),
        prompt: core.serialization.string().optional(),
        generation: core.serialization.string().optional(),
    });

export declare namespace GenerationSpan {
    interface Raw {
        type: "generation";
        latency_millis?: number | null;
        started_at?: string | null;
        prompt?: string | null;
        generation?: string | null;
    }
}