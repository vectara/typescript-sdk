/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vectara from "../../../../../api/index";
import * as core from "../../../../../core";
import { SearchCorporaParameters } from "../../../../types/SearchCorporaParameters";
import { GenerationParameters } from "../../../../types/GenerationParameters";
import { ChatParameters } from "../../../../types/ChatParameters";

export const ChatsCreateTurnsRequest: core.serialization.Schema<
    serializers.ChatsCreateTurnsRequest.Raw,
    Omit<Vectara.ChatsCreateTurnsRequest, "requestTimeout" | "requestTimeoutMillis">
> = core.serialization.object({
    query: core.serialization.string(),
    search: SearchCorporaParameters,
    generation: GenerationParameters.optional(),
    chat: ChatParameters.optional(),
    saveHistory: core.serialization.property("save_history", core.serialization.boolean().optional()),
});

export declare namespace ChatsCreateTurnsRequest {
    interface Raw {
        query: string;
        search: SearchCorporaParameters.Raw;
        generation?: GenerationParameters.Raw | null;
        chat?: ChatParameters.Raw | null;
        save_history?: boolean | null;
    }
}
