/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vectara from "../../../../../api/index";
import * as core from "../../../../../core";
import { ApiRole } from "../../../../types/ApiRole";

export const CreateUserRequest: core.serialization.Schema<
    serializers.CreateUserRequest.Raw,
    Omit<Vectara.CreateUserRequest, "requestTimeout" | "requestTimeoutMillis">
> = core.serialization.object({
    email: core.serialization.string(),
    username: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    apiRoles: core.serialization.property("api_roles", core.serialization.list(ApiRole).optional()),
});

export declare namespace CreateUserRequest {
    interface Raw {
        email: string;
        username?: string | null;
        description?: string | null;
        api_roles?: ApiRole.Raw[] | null;
    }
}
