/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";

export const StreamGenerationChunk: core.serialization.ObjectSchema<
    serializers.StreamGenerationChunk.Raw,
    Vectara.StreamGenerationChunk
> = core.serialization.object({
    type: core.serialization.stringLiteral("generation_chunk"),
    generationChunk: core.serialization.property("generation_chunk", core.serialization.string().optional()),
});

export declare namespace StreamGenerationChunk {
    interface Raw {
        type: "generation_chunk";
        generation_chunk?: string | null;
    }
}
