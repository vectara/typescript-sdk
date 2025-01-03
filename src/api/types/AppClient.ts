/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../index";

export interface AppClient {
    /**
     * The Vectara App Client ID. This ID is not used during an OAuth
     * flow.  However, the ID used within the Vectara API.
     */
    id?: string;
    /** The human-readable name of the App Client. */
    name?: string;
    /** Description of the App Client. */
    description?: string;
    /** The client ID used with the OAuth flow. */
    clientId?: string;
    /** The client secret used in API requests.  The secret should be kept secure. */
    clientSecret?: string;
    /** The API roles attached to the App Client. */
    apiRoles?: Vectara.ApiRole[];
    apiPolicy?: Vectara.ApiPolicy;
}
