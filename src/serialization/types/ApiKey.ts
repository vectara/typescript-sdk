/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";
import { ApiKeyRole } from "./ApiKeyRole";
import { ApiPolicy } from "./ApiPolicy";

export const ApiKey: core.serialization.ObjectSchema<serializers.ApiKey.Raw, Vectara.ApiKey> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        name: core.serialization.string().optional(),
        secretKey: core.serialization.property("secret_key", core.serialization.string().optional()),
        enabled: core.serialization.boolean().optional(),
        apiKeyRole: core.serialization.property("api_key_role", ApiKeyRole.optional()),
        apiPolicy: core.serialization.property("api_policy", ApiPolicy.optional()),
    });

export declare namespace ApiKey {
    interface Raw {
        id?: string | null;
        name?: string | null;
        secret_key?: string | null;
        enabled?: boolean | null;
        api_key_role?: ApiKeyRole.Raw | null;
        api_policy?: ApiPolicy.Raw | null;
    }
}
