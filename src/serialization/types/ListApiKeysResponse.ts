/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";
import { ApiKey } from "./ApiKey";
import { ListMetadata } from "./ListMetadata";

export const ListApiKeysResponse: core.serialization.ObjectSchema<
    serializers.ListApiKeysResponse.Raw,
    Vectara.ListApiKeysResponse
> = core.serialization.object({
    apiKeys: core.serialization.property("api_keys", core.serialization.list(ApiKey).optional()),
    metadata: ListMetadata.optional(),
});

export declare namespace ListApiKeysResponse {
    interface Raw {
        api_keys?: ApiKey.Raw[] | null;
        metadata?: ListMetadata.Raw | null;
    }
}
