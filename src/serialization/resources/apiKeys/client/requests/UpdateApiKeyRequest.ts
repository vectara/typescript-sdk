/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vectara from "../../../../../api/index";
import * as core from "../../../../../core";

export const UpdateApiKeyRequest: core.serialization.Schema<
    serializers.UpdateApiKeyRequest.Raw,
    Omit<Vectara.UpdateApiKeyRequest, "requestTimeout" | "requestTimeoutMillis">
> = core.serialization.object({
    enabled: core.serialization.boolean().optional(),
});

export declare namespace UpdateApiKeyRequest {
    interface Raw {
        enabled?: boolean | null;
    }
}
