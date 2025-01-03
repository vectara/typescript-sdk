/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../../../../index";

/**
 * @example
 *     {}
 */
export interface JobsListRequest {
    /**
     * The unique key identifying the corpus with the job.
     */
    corpusKey?: Vectara.CorpusKey | Vectara.CorpusKey[];
    /**
     * Filter by jobs created after a particular date-time.
     */
    after?: Date;
    /**
     * Filter by jobs in particular states.
     */
    state?: Vectara.JobState | Vectara.JobState[];
    /**
     * The maximum number of jobs to return at one time.
     */
    limit?: number;
    /**
     * Used to retrieve the next page of jobs after the limit has been reached.
     */
    pageKey?: string;
    /**
     * The API will make a best effort to complete the request in the specified seconds or time out.
     */
    requestTimeout?: number;
    /**
     * The API will make a best effort to complete the request in the specified milliseconds or time out.
     */
    requestTimeoutMillis?: number;
}
