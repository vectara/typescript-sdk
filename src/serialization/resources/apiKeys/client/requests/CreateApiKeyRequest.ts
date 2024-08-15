/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vectara from "../../../../../api/index";
import * as core from "../../../../../core";
import { ApiKeyRole } from "../../../../types/ApiKeyRole";
import { CorpusKey } from "../../../../types/CorpusKey";

export const CreateApiKeyRequest: core.serialization.Schema<
    serializers.CreateApiKeyRequest.Raw,
    Vectara.CreateApiKeyRequest
> = core.serialization.object({
    name: core.serialization.string(),
    apiKeyRole: core.serialization.property("api_key_role", ApiKeyRole),
    corpusKeys: core.serialization.property("corpus_keys", core.serialization.list(CorpusKey).optional()),
});

export declare namespace CreateApiKeyRequest {
    interface Raw {
        name: string;
        api_key_role: ApiKeyRole.Raw;
        corpus_keys?: CorpusKey.Raw[] | null;
    }
}
