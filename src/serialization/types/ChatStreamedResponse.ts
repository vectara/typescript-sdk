/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";
import { StreamSearchResponse } from "./StreamSearchResponse";
import { ChatInfoResponse } from "./ChatInfoResponse";
import { StreamGenerationChunk } from "./StreamGenerationChunk";
import { StreamGenerationEnd } from "./StreamGenerationEnd";
import { GenerationInfo } from "./GenerationInfo";
import { FactualConsistencyScore } from "./FactualConsistencyScore";
import { StreamResponseEnd } from "./StreamResponseEnd";
import { StreamError } from "./StreamError";

export const ChatStreamedResponse: core.serialization.Schema<
    serializers.ChatStreamedResponse.Raw,
    Vectara.ChatStreamedResponse
> = core.serialization.undiscriminatedUnion([
    StreamSearchResponse,
    ChatInfoResponse,
    StreamGenerationChunk,
    StreamGenerationEnd,
    GenerationInfo,
    FactualConsistencyScore,
    StreamResponseEnd,
    StreamError,
]);

export declare namespace ChatStreamedResponse {
    type Raw =
        | StreamSearchResponse.Raw
        | ChatInfoResponse.Raw
        | StreamGenerationChunk.Raw
        | StreamGenerationEnd.Raw
        | GenerationInfo.Raw
        | FactualConsistencyScore.Raw
        | StreamResponseEnd.Raw
        | StreamError.Raw;
}
