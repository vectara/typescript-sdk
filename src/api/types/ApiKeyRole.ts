/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Role of the API key.
 * A serving API key can only perform query type requests on its corpora. A serving and
 * indexing key can perform both indexing and query type requests on its corpora.
 * A personal API key has all the same permissions as the creator of the API key.
 */
export type ApiKeyRole = "serving" | "serving_and_indexing" | "personal";

export const ApiKeyRole = {
    Serving: "serving",
    ServingAndIndexing: "serving_and_indexing",
    Personal: "personal",
} as const;
