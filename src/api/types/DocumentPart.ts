/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../index";

/**
 * A part of a document. This section gets converted into an embedding and directly maps to a search result. Usually a sentence.
 */
export interface DocumentPart {
    /** The text of the document part. */
    text: string;
    /** The metadata for a document part. Attributes matching corpus document part filter attributes are used as document part filter attributes. */
    metadata?: Record<string, unknown>;
    /** The context text for the document part. */
    context?: string;
    customDimensions?: Vectara.CustomDimensions;
}