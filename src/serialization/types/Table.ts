/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";
import { Data } from "./Data";

export const Table: core.serialization.ObjectSchema<serializers.Table.Raw, Vectara.Table> = core.serialization.object({
    id: core.serialization.string().optional(),
    title: core.serialization.string().optional(),
    data: Data.optional(),
    description: core.serialization.string().optional(),
});

export declare namespace Table {
    interface Raw {
        id?: string | null;
        title?: string | null;
        data?: Data.Raw | null;
        description?: string | null;
    }
}
