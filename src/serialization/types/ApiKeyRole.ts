/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";

export const ApiKeyRole: core.serialization.Schema<serializers.ApiKeyRole.Raw, Vectara.ApiKeyRole> =
    core.serialization.enum_(["serving", "serving_and_indexing", "personal"]);

export declare namespace ApiKeyRole {
    type Raw = "serving" | "serving_and_indexing" | "personal";
}
