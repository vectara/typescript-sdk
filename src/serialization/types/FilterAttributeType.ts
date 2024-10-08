/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";

export const FilterAttributeType: core.serialization.Schema<
    serializers.FilterAttributeType.Raw,
    Vectara.FilterAttributeType
> = core.serialization.enum_([
    "integer",
    "real_number",
    "text",
    "boolean",
    "list[integer]",
    "list[real_number]",
    "list[text]",
]);

export declare namespace FilterAttributeType {
    type Raw = "integer" | "real_number" | "text" | "boolean" | "list[integer]" | "list[real_number]" | "list[text]";
}
