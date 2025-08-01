/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Policy to allow operations if only using the specified resource.
 */
export interface ApiOperationPolicy {
    /** If any resource is allowed for the operation. */
    allow_any_resource: boolean;
    /** Object with keys of resource paths to a list of allowed resources. A resource path starts with either body, path, or implicit. A body or path resource is within the operation body, and an implicit resource is a resource implied by the request. */
    allowed_resources?: Record<string, string[]>;
}
