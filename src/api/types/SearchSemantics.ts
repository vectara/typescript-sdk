/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates whether to consider a query against this corpus as a query or a response.
 */
export type SearchSemantics = "default" | "query" | "response";
export const SearchSemantics = {
    Default: "default",
    Query: "query",
    Response: "response",
} as const;
