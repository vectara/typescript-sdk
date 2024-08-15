/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../index";

export interface ApiKey {
    /** The ID of the API key. */
    id?: string;
    /** The human-readable name of the API key. */
    name?: string;
    /** The key used in API requests. Should be kept secure. */
    secretKey?: string;
    /** If this API key is enabled. */
    enabled?: boolean;
    apiKeyRole?: Vectara.ApiKeyRole;
    apiPolicy?: Vectara.ApiPolicy;
}
