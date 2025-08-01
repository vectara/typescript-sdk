/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The factual consistency of the generation.
 */
export interface FactualConsistencyScoreSpan {
    type: "fcs";
    /** Time taken in milliseconds. */
    latency_millis?: number;
    /** When the span started. */
    started_at?: string;
    /** The probability that the summary is factually consistent with the results. */
    score?: number;
}
