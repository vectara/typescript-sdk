/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * How much extraction quota the document used. This information is currently not returned when retrieving the document, and only returned when indexing a document.
 */
export interface ExtractionUsage {
    /** The number of pages from the document that consumed the extraction quota. */
    table_extraction_used?: number;
}
