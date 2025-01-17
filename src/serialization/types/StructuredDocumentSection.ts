/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";
import { Table } from "./Table";

export const StructuredDocumentSection: core.serialization.ObjectSchema<
    serializers.StructuredDocumentSection.Raw,
    Vectara.StructuredDocumentSection
> = core.serialization.object({
    id: core.serialization.number().optional(),
    title: core.serialization.string().optional(),
    text: core.serialization.string(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    tables: core.serialization.list(Table).optional(),
    sections: core.serialization
        .list(core.serialization.lazyObject(() => serializers.StructuredDocumentSection))
        .optional(),
});

export declare namespace StructuredDocumentSection {
    interface Raw {
        id?: number | null;
        title?: string | null;
        text: string;
        metadata?: Record<string, unknown> | null;
        tables?: Table.Raw[] | null;
        sections?: serializers.StructuredDocumentSection.Raw[] | null;
    }
}
