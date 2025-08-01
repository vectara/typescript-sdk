/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Response containing the computed size of a corpus
 */
export interface ComputeCorpusSizeResponse {
    /** Number of documents in the corpus */
    used_docs?: number;
    /** Number of document parts in the corpus */
    used_parts?: number;
    /** Total number of characters in the corpus */
    used_characters?: number;
    /** Number of metadata characters in the corpus */
    used_metadata_characters?: number;
}
