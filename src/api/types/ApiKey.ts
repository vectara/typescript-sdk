/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../index.js";

/**
 * An API key used to authenticate and authorize requests to the Vectara platform.
 */
export interface ApiKey {
    /** The ID of the API key. */
    id?: string;
    /** The human-readable name of the API key. */
    name?: string;
    /** The key used in API requests. The key should be kept secure. */
    secret_key?: string;
    /** If this API key is enabled. */
    enabled?: boolean;
    api_key_role?: Vectara.ApiKeyRole;
    api_policy?: Vectara.ApiPolicy;
}
