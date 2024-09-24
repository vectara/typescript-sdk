/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vectara from "../../../../../api/index";
import * as core from "../../../../../core";
import { FilterAttribute } from "../../../../types/FilterAttribute";

export const ReplaceFilterAttributesRequest: core.serialization.Schema<
    serializers.ReplaceFilterAttributesRequest.Raw,
    Omit<Vectara.ReplaceFilterAttributesRequest, "requestTimeout" | "requestTimeoutMillis">
> = core.serialization.object({
    filterAttributes: core.serialization.property("filter_attributes", core.serialization.list(FilterAttribute)),
});

export declare namespace ReplaceFilterAttributesRequest {
    interface Raw {
        filter_attributes: FilterAttribute.Raw[];
    }
}
