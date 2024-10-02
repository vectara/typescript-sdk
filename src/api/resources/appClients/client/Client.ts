/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vectara from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace AppClients {
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

export class AppClients {
    constructor(protected readonly _options: AppClients.Options = {}) {}

    /**
     * @param {Vectara.AppClientsListRequest} request
     * @param {AppClients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.BadRequestError}
     * @throws {@link Vectara.ForbiddenError}
     *
     * @example
     *     await client.appClients.list()
     */
    public async list(
        request: Vectara.AppClientsListRequest = {},
        requestOptions?: AppClients.RequestOptions
    ): Promise<core.Page<Vectara.AppClient>> {
        const list = async (request: Vectara.AppClientsListRequest): Promise<Vectara.ListAppClientsResponse> => {
            const { limit, filter, pageKey, requestTimeout, requestTimeoutMillis } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (limit != null) {
                _queryParams["limit"] = limit.toString();
            }
            if (filter != null) {
                _queryParams["filter"] = filter;
            }
            if (pageKey != null) {
                _queryParams["page_key"] = pageKey;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                        .default,
                    "v2/app_clients"
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
                    "X-Fern-SDK-Version": "0.1.2",
                    "User-Agent": "vectara/0.1.2",
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
                return serializers.ListAppClientsResponse.parseOrThrow(_response.body, {
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
        return new core.Pageable<Vectara.ListAppClientsResponse, Vectara.AppClient>({
            response: await list(request),
            hasNextPage: (response) => response?.metadata?.pageKey != null,
            getItems: (response) => response?.appClients ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "pageKey", response?.metadata?.pageKey));
            },
        });
    }

    /**
     * An App Client is used for OAuth 2.0 authentication when calling Vectara APIs.
     *
     * @param {Vectara.AppClientsCreateRequest} request
     * @param {AppClients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.BadRequestError}
     * @throws {@link Vectara.ForbiddenError}
     *
     * @example
     *     await client.appClients.create({
     *         body: {
     *             name: "name",
     *             type: "client_credentials"
     *         }
     *     })
     */
    public async create(
        request: Vectara.AppClientsCreateRequest,
        requestOptions?: AppClients.RequestOptions
    ): Promise<Vectara.AppClient> {
        const { requestTimeout, requestTimeoutMillis, body: _body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                    .default,
                "v2/app_clients"
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
                "X-Fern-SDK-Version": "0.1.2",
                "User-Agent": "vectara/0.1.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Request-Timeout": requestTimeout != null ? requestTimeout.toString() : undefined,
                "Request-Timeout-Millis": requestTimeoutMillis != null ? requestTimeoutMillis.toString() : undefined,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.ComponentsSchemasCreateClientCredentialsRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.AppClient.parseOrThrow(_response.body, {
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
     * @param {string} appClientId - The name of the App Client.
     * @param {Vectara.AppClientsGetRequest} request
     * @param {AppClients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     *
     * @example
     *     await client.appClients.get("app_client_id")
     */
    public async get(
        appClientId: string,
        request: Vectara.AppClientsGetRequest = {},
        requestOptions?: AppClients.RequestOptions
    ): Promise<Vectara.AppClient> {
        const { requestTimeout, requestTimeoutMillis } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                    .default,
                `v2/app_clients/${encodeURIComponent(appClientId)}`
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
                "X-Fern-SDK-Version": "0.1.2",
                "User-Agent": "vectara/0.1.2",
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
            return serializers.AppClient.parseOrThrow(_response.body, {
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
     * @param {string} appClientId - The name of App Client.
     * @param {Vectara.AppClientsDeleteRequest} request
     * @param {AppClients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     *
     * @example
     *     await client.appClients.delete("app_client_id")
     */
    public async delete(
        appClientId: string,
        request: Vectara.AppClientsDeleteRequest = {},
        requestOptions?: AppClients.RequestOptions
    ): Promise<void> {
        const { requestTimeout, requestTimeoutMillis } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                    .default,
                `v2/app_clients/${encodeURIComponent(appClientId)}`
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
                "X-Fern-SDK-Version": "0.1.2",
                "User-Agent": "vectara/0.1.2",
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
     * @param {string} appClientId - The name of App Client.
     * @param {Vectara.UpdateAppClientRequest} request
     * @param {AppClients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     *
     * @example
     *     await client.appClients.update("app_client_id")
     */
    public async update(
        appClientId: string,
        request: Vectara.UpdateAppClientRequest = {},
        requestOptions?: AppClients.RequestOptions
    ): Promise<Vectara.AppClient> {
        const { requestTimeout, requestTimeoutMillis, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                    .default,
                `v2/app_clients/${encodeURIComponent(appClientId)}`
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
                "X-Fern-SDK-Version": "0.1.2",
                "User-Agent": "vectara/0.1.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Request-Timeout": requestTimeout != null ? requestTimeout.toString() : undefined,
                "Request-Timeout-Millis": requestTimeoutMillis != null ? requestTimeoutMillis.toString() : undefined,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UpdateAppClientRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.AppClient.parseOrThrow(_response.body, {
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
