/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";
import { CustomDimensions } from "./CustomDimensions";

export const DocumentPart: core.serialization.ObjectSchema<serializers.DocumentPart.Raw, Vectara.DocumentPart> =
    core.serialization.object({
        text: core.serialization.string(),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        context: core.serialization.string().optional(),
        customDimensions: core.serialization.property("custom_dimensions", CustomDimensions.optional()),
    });

export declare namespace DocumentPart {
    interface Raw {
        text: string;
        metadata?: Record<string, unknown> | null;
        context?: string | null;
        custom_dimensions?: CustomDimensions.Raw | null;
    }
}
