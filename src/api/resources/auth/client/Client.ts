/**
 * This file was auto-generated by Fern from our API Definition.
 */

import urlJoin from "url-join";
import * as core from "../../../../core";
import * as environments from "../../../../environments";
import * as errors from "../../../../errors/index";
import * as serializers from "../../../../serialization/index";
import * as Vectara from "../../../index";

export declare namespace Auth {
    interface Options {
        environment?: core.Supplier<environments.VectaraEnvironment | environments.VectaraEnvironmentUrls>;
        token?: core.Supplier<core.BearerToken | undefined>;
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
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Auth {
    constructor(protected readonly _options: Auth.Options = {}) {}

    /**
     * Obtain an OAuth2 access token using client credentials
     *
     * @param {Vectara.AuthGetTokenRequest} request
     * @param {Auth.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.auth.getToken({
     *         clientId: "client_id",
     *         clientSecret: "client_secret"
     *     })
     */
    public async getToken(
        request: Vectara.AuthGetTokenRequest,
        requestOptions?: Auth.RequestOptions
    ): Promise<Vectara.GetTokenResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                    .auth,
                "oauth/token"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vectara",
                "X-Fern-SDK-Version": "0.1.5",
                "User-Agent": "vectara/0.1.5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/x-www-form-urlencoded",
            requestType: "urlencoded",
            body: undefined,
            queryParameters: {
                ...serializers.AuthGetTokenRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                grant_type: "client_credentials",
            },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GetTokenResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VectaraError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VectaraError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VectaraTimeoutError("Timeout exceeded when calling POST /oauth/token.");
            case "unknown":
                throw new errors.VectaraError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
