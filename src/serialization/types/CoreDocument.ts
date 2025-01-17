/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";
import { Table } from "./Table";
import { CoreDocumentPart } from "./CoreDocumentPart";

export const CoreDocument: core.serialization.ObjectSchema<serializers.CoreDocument.Raw, Vectara.CoreDocument> =
    core.serialization.object({
        id: core.serialization.string(),
        type: core.serialization.stringLiteral("core"),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        tables: core.serialization.list(Table).optional(),
        documentParts: core.serialization.property("document_parts", core.serialization.list(CoreDocumentPart)),
    });

export declare namespace CoreDocument {
    interface Raw {
        id: string;
        type: "core";
        metadata?: Record<string, unknown> | null;
        tables?: Table.Raw[] | null;
        document_parts: CoreDocumentPart.Raw[];
    }
}
