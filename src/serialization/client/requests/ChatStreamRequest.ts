/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../index";
import * as Vectara from "../../../api/index";
import * as core from "../../../core";
import { SearchCorporaParameters } from "../../types/SearchCorporaParameters";
import { GenerationParameters } from "../../types/GenerationParameters";
import { ChatParameters } from "../../types/ChatParameters";

export const ChatStreamRequest: core.serialization.Schema<
    serializers.ChatStreamRequest.Raw,
    Omit<Vectara.ChatStreamRequest, "requestTimeout" | "requestTimeoutMillis">
> = core.serialization.object({
    query: core.serialization.string(),
    search: SearchCorporaParameters,
    generation: GenerationParameters.optional(),
    chat: ChatParameters.optional(),
    saveHistory: core.serialization.property("save_history", core.serialization.boolean().optional()),
});

export declare namespace ChatStreamRequest {
    interface Raw {
        query: string;
        search: SearchCorporaParameters.Raw;
        generation?: GenerationParameters.Raw | null;
        chat?: ChatParameters.Raw | null;
        save_history?: boolean | null;
    }
}
