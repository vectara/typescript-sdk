/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";

export const UserFunctionReranker: core.serialization.ObjectSchema<
    serializers.UserFunctionReranker.Raw,
    Vectara.UserFunctionReranker
> = core.serialization.object({
    type: core.serialization.stringLiteral("userfn"),
    userFunction: core.serialization.property("user_function", core.serialization.string().optional()),
    limit: core.serialization.number().optional(),
    cutoff: core.serialization.number().optional(),
});

export declare namespace UserFunctionReranker {
    interface Raw {
        type: "userfn";
        user_function?: string | null;
        limit?: number | null;
        cutoff?: number | null;
    }
}
