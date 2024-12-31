import * as core from "./core";
import * as environments from "./environments";

/**
 * Configuration options for initializing the Vectara client.
 * 
 * The client can be initialized in one of two ways:
 * 1. Using an API key for authentication
 * 2. Using OAuth client credentials (client ID and secret)
 * 
 */
export type ClientOptions = ApiKeyOptions | OAuthOptions;

interface BaseOptions {
    environment?: core.Supplier<environments.VectaraEnvironment | environments.VectaraEnvironmentUrls>;
    fetcher?: core.FetchFunction;
}

interface ApiKeyOptions extends BaseOptions { 
    /** Override the x-api-key header */
    apiKey: core.Supplier<string>;
}

interface OAuthOptions extends BaseOptions {
    clientId: core.Supplier<string>;
    clientSecret: core.Supplier<string>;
}


export function isOAuthOptions(options: ClientOptions): options is OAuthOptions {
    return (options as OAuthOptions)?.clientId !== undefined;
}

export function isApiKeyOptions(options: ClientOptions): options is ApiKeyOptions {
    return (options as ApiKeyOptions)?.apiKey !== undefined;
}
