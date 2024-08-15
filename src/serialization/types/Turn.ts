/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vectara from "../../api/index";
import * as core from "../../core";

export const Turn: core.serialization.ObjectSchema<serializers.Turn.Raw, Vectara.Turn> = core.serialization.object({
    id: core.serialization.string().optional(),
    chatId: core.serialization.property("chat_id", core.serialization.string().optional()),
    query: core.serialization.string().optional(),
    answer: core.serialization.string().optional(),
    enabled: core.serialization.boolean().optional(),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
});

export declare namespace Turn {
    interface Raw {
        id?: string | null;
        chat_id?: string | null;
        query?: string | null;
        answer?: string | null;
        enabled?: boolean | null;
        created_at?: string | null;
    }
}
