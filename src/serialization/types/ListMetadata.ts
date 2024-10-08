/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";

export const ListMetadata: core.serialization.ObjectSchema<serializers.ListMetadata.Raw, Vectara.ListMetadata> =
    core.serialization.object({
        pageKey: core.serialization.property("page_key", core.serialization.string().optional()),
    });

export declare namespace ListMetadata {
    interface Raw {
        page_key?: string | null;
    }
}
