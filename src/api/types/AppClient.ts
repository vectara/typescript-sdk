/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../index.js";

/**
 * An OAuth application client configuration used for authentication.
 */
export interface AppClient {
    /** The Vectara App Client ID. This ID is not used during an OAuth flow.  However, the ID used within the Vectara API. */
    id?: string;
    /** The human-readable name of the App Client. */
    name?: string;
    /** Description of the App Client. */
    description?: string;
    /** The client ID used with the OAuth flow. */
    client_id?: string;
    /** The client secret used in API requests.  The secret should be kept secure. */
    client_secret?: string;
    /** The API roles attached to the App Client. */
    api_roles?: Vectara.ApiRole[];
    api_policy?: Vectara.ApiPolicy;
}
