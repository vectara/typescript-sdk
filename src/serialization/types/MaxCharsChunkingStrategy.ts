/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";

export const MaxCharsChunkingStrategy: core.serialization.ObjectSchema<
    serializers.MaxCharsChunkingStrategy.Raw,
    Vectara.MaxCharsChunkingStrategy
> = core.serialization.object({
    type: core.serialization.stringLiteral("max_chars_chunking_strategy"),
    maxCharsPerChunk: core.serialization.property("max_chars_per_chunk", core.serialization.number()),
});

export declare namespace MaxCharsChunkingStrategy {
    interface Raw {
        type: "max_chars_chunking_strategy";
        max_chars_per_chunk: number;
    }
}
