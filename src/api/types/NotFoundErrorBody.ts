/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface NotFoundErrorBody {
    /** The ID cannot be found. */
    id?: string;
    messages?: string[];
    /** ID of the request that can be used to help Vectara support debug what went wrong. */
    requestId?: string;
}
