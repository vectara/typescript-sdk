/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Auth } from "./api/resources/auth/client/Client";
import { ApiKeys } from "./api/resources/apiKeys/client/Client";
import { AppClients } from "./api/resources/appClients/client/Client";
import { Chats } from "./api/resources/chats/client/Client";
import { Corpora } from "./api/resources/corpora/client/Client";
import { Documents } from "./api/resources/documents/client/Client";
import { Encoders } from "./api/resources/encoders/client/Client";
import { Jobs } from "./api/resources/jobs/client/Client";
import { LargeLanguageModels } from "./api/resources/largeLanguageModels/client/Client";
import { Queries } from "./api/resources/queries/client/Client";
import { Rerankers } from "./api/resources/rerankers/client/Client";
import { Upload } from "./api/resources/upload/client/Client";
import { Users } from "./api/resources/users/client/Client";

export declare namespace VectaraClient {
    interface Options {
        environment?: core.Supplier<environments.VectaraEnvironment | environments.VectaraEnvironmentUrls>;
        clientId?: core.Supplier<string | undefined>;
        clientSecret?: core.Supplier<string | undefined>;
        /** Override the x-api-key header */
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the x-api-key header */
        apiKey?: string | undefined;
    }
}

export class VectaraClient {
    private readonly _oauthTokenProvider: core.OAuthTokenProvider;

    constructor(protected readonly _options: VectaraClient.Options) {
        const clientId = this._options.clientId ?? process.env["VECTARA_CLIENT_ID"];
        if (clientId == null) {
            throw new Error(
                "clientId is required; either pass it as an argument or set the VECTARA_CLIENT_ID environment variable"
            );
        }

        const clientSecret = this._options.clientSecret ?? process.env["VECTARA_CLIENT_SECRET"];
        if (clientSecret == null) {
            throw new Error(
                "clientSecret is required; either pass it as an argument or set the VECTARA_CLIENT_SECRET environment variable"
            );
        }

        this._oauthTokenProvider = new core.OAuthTokenProvider({
            clientId,
            clientSecret,
            authClient: new Auth({
                environment: this._options.environment,
            }),
        });
    }

    protected _apiKeys: ApiKeys | undefined;

    public get apiKeys(): ApiKeys {
        return (this._apiKeys ??= new ApiKeys({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _appClients: AppClients | undefined;

    public get appClients(): AppClients {
        return (this._appClients ??= new AppClients({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _auth: Auth | undefined;

    public get auth(): Auth {
        return (this._auth ??= new Auth({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _chats: Chats | undefined;

    public get chats(): Chats {
        return (this._chats ??= new Chats({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _corpora: Corpora | undefined;

    public get corpora(): Corpora {
        return (this._corpora ??= new Corpora({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _documents: Documents | undefined;

    public get documents(): Documents {
        return (this._documents ??= new Documents({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _encoders: Encoders | undefined;

    public get encoders(): Encoders {
        return (this._encoders ??= new Encoders({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _jobs: Jobs | undefined;

    public get jobs(): Jobs {
        return (this._jobs ??= new Jobs({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _largeLanguageModels: LargeLanguageModels | undefined;

    public get largeLanguageModels(): LargeLanguageModels {
        return (this._largeLanguageModels ??= new LargeLanguageModels({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _queries: Queries | undefined;

    public get queries(): Queries {
        return (this._queries ??= new Queries({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _rerankers: Rerankers | undefined;

    public get rerankers(): Rerankers {
        return (this._rerankers ??= new Rerankers({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _upload: Upload | undefined;

    public get upload(): Upload {
        return (this._upload ??= new Upload({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _users: Users | undefined;

    public get users(): Users {
        return (this._users ??= new Users({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }
}
