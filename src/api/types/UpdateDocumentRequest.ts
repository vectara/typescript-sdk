/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Schema for updating the document. For PUT requests, the request body metadata replaces the existing
 * metadata. For PATCH requests, the request body metadata is merged with the existing metadata,
 * adding or modifying only the specified fields.
 */
export interface UpdateDocumentRequest {
    /**
     * The metadata for a document as an arbitrary object. Properties of this object
     * can be used by document level filter attributes.
     */
    metadata?: Record<string, unknown>;
}