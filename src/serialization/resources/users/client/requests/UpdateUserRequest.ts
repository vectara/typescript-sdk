/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vectara from "../../../../../api/index";
import * as core from "../../../../../core";
import { ApiRole } from "../../../../types/ApiRole";

export const UpdateUserRequest: core.serialization.Schema<
    serializers.UpdateUserRequest.Raw,
    Vectara.UpdateUserRequest
> = core.serialization.object({
    enabled: core.serialization.boolean().optional(),
    apiRoles: core.serialization.property("api_roles", core.serialization.list(ApiRole).optional()),
});

export declare namespace UpdateUserRequest {
    interface Raw {
        enabled?: boolean | null;
        api_roles?: ApiRole.Raw[] | null;
    }
}
