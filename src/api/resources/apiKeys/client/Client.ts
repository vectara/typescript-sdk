/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vectara from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace ApiKeys {
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
    }
}

/**
 * Manage API keys for the account
 */
export class ApiKeys {
    constructor(protected readonly _options: ApiKeys.Options = {}) {}

    /**
     * @param {Vectara.ApiKeysListRequest} request
     * @param {ApiKeys.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.BadRequestError}
     * @throws {@link Vectara.ForbiddenError}
     *
     * @example
     *     await client.apiKeys.list({
     *         corpusKey: "my-corpus"
     *     })
     */
    public async list(
        request: Vectara.ApiKeysListRequest = {},
        requestOptions?: ApiKeys.RequestOptions
    ): Promise<core.Page<Vectara.ApiKey>> {
        const list = async (request: Vectara.ApiKeysListRequest): Promise<Vectara.ListApiKeysResponse> => {
            const { limit, pageKey, corpusKey, requestTimeout, requestTimeoutMillis } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (limit != null) {
                _queryParams["limit"] = limit.toString();
            }
            if (pageKey != null) {
                _queryParams["page_key"] = pageKey;
            }
            if (corpusKey != null) {
                _queryParams["corpus_key"] = corpusKey;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                        .default,
                    "v2/api_keys"
                ),
                method: "GET",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                    "x-api-key":
                        (await core.Supplier.get(this._options.apiKey)) != null
                            ? await core.Supplier.get(this._options.apiKey)
                            : undefined,
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "vectara",
                    "X-Fern-SDK-Version": "0.1.3",
                    "User-Agent": "vectara/0.1.3",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                    "Request-Timeout": requestTimeout != null ? requestTimeout.toString() : undefined,
                    "Request-Timeout-Millis":
                        requestTimeoutMillis != null ? requestTimeoutMillis.toString() : undefined,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return serializers.ListApiKeysResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new Vectara.BadRequestError(
                            serializers.BadRequestErrorBody.parseOrThrow(_response.error.body, {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                skipValidation: true,
                                breadcrumbsPrefix: ["response"],
                            })
                        );
                    case 403:
                        throw new Vectara.ForbiddenError(
                            serializers.Error_.parseOrThrow(_response.error.body, {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                skipValidation: true,
                                breadcrumbsPrefix: ["response"],
                            })
                        );
                    default:
                        throw new errors.VectaraError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.VectaraError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.VectaraTimeoutError();
                case "unknown":
                    throw new errors.VectaraError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        return new core.Pageable<Vectara.ListApiKeysResponse, Vectara.ApiKey>({
            response: await list(request),
            hasNextPage: (response) => response?.metadata?.pageKey != null,
            getItems: (response) => response?.apiKeys ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "pageKey", response?.metadata?.pageKey));
            },
        });
    }

    /**
     * An API key is to authenticate when calling Vectara APIs.
     *
     * @param {Vectara.CreateApiKeyRequest} request
     * @param {ApiKeys.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.BadRequestError}
     * @throws {@link Vectara.ForbiddenError}
     *
     * @example
     *     await client.apiKeys.create({
     *         name: "name",
     *         apiKeyRole: Vectara.ApiKeyRole.Serving
     *     })
     */
    public async create(
        request: Vectara.CreateApiKeyRequest,
        requestOptions?: ApiKeys.RequestOptions
    ): Promise<Vectara.ApiKey> {
        const { requestTimeout, requestTimeoutMillis, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                    .default,
                "v2/api_keys"
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
                "X-Fern-SDK-Version": "0.1.3",
                "User-Agent": "vectara/0.1.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Request-Timeout": requestTimeout != null ? requestTimeout.toString() : undefined,
                "Request-Timeout-Millis": requestTimeoutMillis != null ? requestTimeoutMillis.toString() : undefined,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateApiKeyRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ApiKey.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Vectara.BadRequestError(
                        serializers.BadRequestErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new Vectara.ForbiddenError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.VectaraError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VectaraError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VectaraTimeoutError();
            case "unknown":
                throw new errors.VectaraError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} apiKeyId - The ID of the API key.
     * @param {Vectara.ApiKeysGetRequest} request
     * @param {ApiKeys.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     *
     * @example
     *     await client.apiKeys.get("api_key_id")
     */
    public async get(
        apiKeyId: string,
        request: Vectara.ApiKeysGetRequest = {},
        requestOptions?: ApiKeys.RequestOptions
    ): Promise<Vectara.ApiKey> {
        const { requestTimeout, requestTimeoutMillis } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                    .default,
                `v2/api_keys/${encodeURIComponent(apiKeyId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vectara",
                "X-Fern-SDK-Version": "0.1.3",
                "User-Agent": "vectara/0.1.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Request-Timeout": requestTimeout != null ? requestTimeout.toString() : undefined,
                "Request-Timeout-Millis": requestTimeoutMillis != null ? requestTimeoutMillis.toString() : undefined,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ApiKey.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 403:
                    throw new Vectara.ForbiddenError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.VectaraError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VectaraError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VectaraTimeoutError();
            case "unknown":
                throw new errors.VectaraError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete API keys to help you manage the security and lifecycle of API keys in your application.
     *
     * @param {string} apiKeyId - The ID of the API key.
     * @param {Vectara.ApiKeysDeleteRequest} request
     * @param {ApiKeys.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     *
     * @example
     *     await client.apiKeys.delete("api_key_id")
     */
    public async delete(
        apiKeyId: string,
        request: Vectara.ApiKeysDeleteRequest = {},
        requestOptions?: ApiKeys.RequestOptions
    ): Promise<void> {
        const { requestTimeout, requestTimeoutMillis } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                    .default,
                `v2/api_keys/${encodeURIComponent(apiKeyId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vectara",
                "X-Fern-SDK-Version": "0.1.3",
                "User-Agent": "vectara/0.1.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Request-Timeout": requestTimeout != null ? requestTimeout.toString() : undefined,
                "Request-Timeout-Millis": requestTimeoutMillis != null ? requestTimeoutMillis.toString() : undefined,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 403:
                    throw new Vectara.ForbiddenError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.VectaraError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VectaraError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VectaraTimeoutError();
            case "unknown":
                throw new errors.VectaraError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update an API key such as the roles attached to the key.
     *
     * @param {string} apiKeyId - The ID of the API key.
     * @param {Vectara.UpdateApiKeyRequest} request
     * @param {ApiKeys.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     *
     * @example
     *     await client.apiKeys.update("api_key_id")
     */
    public async update(
        apiKeyId: string,
        request: Vectara.UpdateApiKeyRequest = {},
        requestOptions?: ApiKeys.RequestOptions
    ): Promise<Vectara.ApiKey> {
        const { requestTimeout, requestTimeoutMillis, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                    .default,
                `v2/api_keys/${encodeURIComponent(apiKeyId)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vectara",
                "X-Fern-SDK-Version": "0.1.3",
                "User-Agent": "vectara/0.1.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Request-Timeout": requestTimeout != null ? requestTimeout.toString() : undefined,
                "Request-Timeout-Millis": requestTimeoutMillis != null ? requestTimeoutMillis.toString() : undefined,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UpdateApiKeyRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ApiKey.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 403:
                    throw new Vectara.ForbiddenError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.VectaraError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VectaraError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VectaraTimeoutError();
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
