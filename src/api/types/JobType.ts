/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of job.
 */
export type JobType = "rebuild_vector_index" | "replace_filter_attributes" | "unknown";

export const JobType = {
    RebuildVectorIndex: "rebuild_vector_index",
    ReplaceFilterAttributes: "replace_filter_attributes",
    Unknown: "unknown",
} as const;
