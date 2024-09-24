/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vectara from "../../../../../api/index";
import * as core from "../../../../../core";

export const UpdateCorpusRequest: core.serialization.Schema<
    serializers.UpdateCorpusRequest.Raw,
    Omit<Vectara.UpdateCorpusRequest, "requestTimeout" | "requestTimeoutMillis">
> = core.serialization.object({
    enabled: core.serialization.boolean().optional(),
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
});

export declare namespace UpdateCorpusRequest {
    interface Raw {
        enabled?: boolean | null;
        name?: string | null;
        description?: string | null;
    }
}
