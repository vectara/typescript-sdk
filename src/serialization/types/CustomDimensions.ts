/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";

export const CustomDimensions: core.serialization.Schema<serializers.CustomDimensions.Raw, Vectara.CustomDimensions> =
    core.serialization.record(core.serialization.string(), core.serialization.number());

export declare namespace CustomDimensions {
    type Raw = Record<string, number>;
}
