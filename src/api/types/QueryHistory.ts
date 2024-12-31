/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../index";

export interface QueryHistory {
    /** The ID of the query history. */
    id?: string;
    query?: unknown;
    /** The ID of the chat the query is a part of. */
    chatId?: string;
    /** Time taken to complete the query, measured in milliseconds. */
    latencyMillis?: number;
    /** ISO date time indicating when the query was first received. */
    startedAt?: Date;
    /** Parts of the query pipeline. Each span explains what happened during that stage of the query pipeline. */
    spans?: Vectara.QueryHistorySpan[];
}