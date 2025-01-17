/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The factual consistency of the generation.
 */
export interface FactualConsistencyScoreSpan {
    type: "fcs";
    /** Time taken in milliseconds. */
    latencyMillis?: number;
    /** When the span started. */
    startedAt?: Date;
    /** The probability that the summary is factually consistent with the results. */
    score?: number;
}
