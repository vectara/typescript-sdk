/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Error returned when a requested resource does not exist.
 */
export interface NotFoundErrorBody {
    /** The ID cannot be found. */
    id?: string;
    messages?: string[];
    /** The ID of the request that can be used to help Vectara support debug what went wrong. */
    request_id?: string;
}
