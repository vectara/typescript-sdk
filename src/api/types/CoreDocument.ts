/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../index.js";

/**
 * The document structure that most closely corresponds to Vectara's internal document data model.
 */
export interface CoreDocument {
    /** The document ID must be unique within the corpus. */
    id: string;
    type: "core";
    /** Arbitrary object of document level metadata. Properties of this object can be used by document filters if defined as a corpus filter attribute. */
    metadata?: Record<string, unknown>;
    /** The tables that this document contains. */
    tables?: Vectara.Table[];
    /** Parts of the document that make up the document. */
    document_parts: Vectara.CoreDocumentPart[];
}
