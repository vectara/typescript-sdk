/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vectara from "../../../../../api/index";
import * as core from "../../../../../core";
import { SearchCorpusParameters } from "../../types/SearchCorpusParameters";
import { GenerationParameters } from "../../../../types/GenerationParameters";

export const QueriesQueryCorpusRequest: core.serialization.Schema<
    serializers.QueriesQueryCorpusRequest.Raw,
    Vectara.QueriesQueryCorpusRequest
> = core.serialization.object({
    query: core.serialization.string(),
    search: SearchCorpusParameters.optional(),
    generation: GenerationParameters.optional(),
});

export declare namespace QueriesQueryCorpusRequest {
    interface Raw {
        query: string;
        search?: SearchCorpusParameters.Raw | null;
        generation?: GenerationParameters.Raw | null;
    }
}
