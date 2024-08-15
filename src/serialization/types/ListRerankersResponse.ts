/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";
import { Reranker } from "./Reranker";
import { ListMetadata } from "./ListMetadata";

export const ListRerankersResponse: core.serialization.ObjectSchema<
    serializers.ListRerankersResponse.Raw,
    Vectara.ListRerankersResponse
> = core.serialization.object({
    rerankers: core.serialization.list(Reranker).optional(),
    metadata: ListMetadata.optional(),
});

export declare namespace ListRerankersResponse {
    interface Raw {
        rerankers?: Reranker.Raw[] | null;
        metadata?: ListMetadata.Raw | null;
    }
}
