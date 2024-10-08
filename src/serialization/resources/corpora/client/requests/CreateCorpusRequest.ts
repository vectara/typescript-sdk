/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vectara from "../../../../../api/index";
import * as core from "../../../../../core";
import { CorpusKey } from "../../../../types/CorpusKey";
import { FilterAttribute } from "../../../../types/FilterAttribute";
import { CorpusCustomDimension } from "../../../../types/CorpusCustomDimension";

export const CreateCorpusRequest: core.serialization.Schema<
    serializers.CreateCorpusRequest.Raw,
    Omit<Vectara.CreateCorpusRequest, "requestTimeout" | "requestTimeoutMillis">
> = core.serialization.object({
    key: CorpusKey,
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    queriesAreAnswers: core.serialization.property("queries_are_answers", core.serialization.boolean().optional()),
    documentsAreQuestions: core.serialization.property(
        "documents_are_questions",
        core.serialization.boolean().optional()
    ),
    encoderId: core.serialization.property("encoder_id", core.serialization.string().optional()),
    encoderName: core.serialization.property("encoder_name", core.serialization.string().optional()),
    filterAttributes: core.serialization.property(
        "filter_attributes",
        core.serialization.list(FilterAttribute).optional()
    ),
    customDimensions: core.serialization.property(
        "custom_dimensions",
        core.serialization.list(CorpusCustomDimension).optional()
    ),
});

export declare namespace CreateCorpusRequest {
    interface Raw {
        key: CorpusKey.Raw;
        name?: string | null;
        description?: string | null;
        queries_are_answers?: boolean | null;
        documents_are_questions?: boolean | null;
        encoder_id?: string | null;
        encoder_name?: string | null;
        filter_attributes?: FilterAttribute.Raw[] | null;
        custom_dimensions?: CorpusCustomDimension.Raw[] | null;
    }
}
