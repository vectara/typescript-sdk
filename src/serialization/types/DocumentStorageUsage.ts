/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";

export const DocumentStorageUsage: core.serialization.ObjectSchema<
    serializers.DocumentStorageUsage.Raw,
    Vectara.DocumentStorageUsage
> = core.serialization.object({
    bytesUsed: core.serialization.property("bytes_used", core.serialization.number().optional()),
    metadataBytesUsed: core.serialization.property("metadata_bytes_used", core.serialization.number().optional()),
});

export declare namespace DocumentStorageUsage {
    interface Raw {
        bytes_used?: number | null;
        metadata_bytes_used?: number | null;
    }
}
