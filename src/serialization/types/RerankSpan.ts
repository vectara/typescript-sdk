/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";
import { RerankedSearchResult } from "./RerankedSearchResult";

export const RerankSpan: core.serialization.ObjectSchema<serializers.RerankSpan.Raw, Vectara.RerankSpan> =
    core.serialization.object({
        type: core.serialization.stringLiteral("rerank"),
        latencyMillis: core.serialization.property("latency_millis", core.serialization.number().optional()),
        startedAt: core.serialization.property("started_at", core.serialization.date().optional()),
        rerankedSearchResults: core.serialization.property(
            "reranked_search_results",
            core.serialization.list(RerankedSearchResult).optional()
        ),
    });

export declare namespace RerankSpan {
    interface Raw {
        type: "rerank";
        latency_millis?: number | null;
        started_at?: string | null;
        reranked_search_results?: RerankedSearchResult.Raw[] | null;
    }
}
