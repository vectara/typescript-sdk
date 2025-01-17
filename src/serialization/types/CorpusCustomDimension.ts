/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";

export const CorpusCustomDimension: core.serialization.ObjectSchema<
    serializers.CorpusCustomDimension.Raw,
    Vectara.CorpusCustomDimension
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    indexingDefault: core.serialization.property("indexing_default", core.serialization.number().optional()),
    queryingDefault: core.serialization.property("querying_default", core.serialization.number().optional()),
});

export declare namespace CorpusCustomDimension {
    interface Raw {
        name: string;
        description?: string | null;
        indexing_default?: number | null;
        querying_default?: number | null;
    }
}
