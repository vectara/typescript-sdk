/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vectara from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Encoders {
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
 * List encoders that turn text into vectors such as Boomerang
 */
export class Encoders {
    constructor(protected readonly _options: Encoders.Options = {}) {}

    /**
     * Encoders are used to store and retrieve from a corpus.
     *
     * @param {Vectara.EncodersListRequest} request
     * @param {Encoders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     *
     * @example
     *     await client.encoders.list({
     *         filter: "vectara.*"
     *     })
     */
    public async list(
        request: Vectara.EncodersListRequest = {},
        requestOptions?: Encoders.RequestOptions
    ): Promise<core.Page<Vectara.Encoder>> {
        const list = async (request: Vectara.EncodersListRequest): Promise<Vectara.ListEncodersResponse> => {
            const { filter, limit, pageKey, requestTimeout, requestTimeoutMillis } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (filter != null) {
                _queryParams["filter"] = filter;
            }
            if (limit != null) {
                _queryParams["limit"] = limit.toString();
            }
            if (pageKey != null) {
                _queryParams["page_key"] = pageKey;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                        .default,
                    "v2/encoders"
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
                return serializers.ListEncodersResponse.parseOrThrow(_response.body, {
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
        };
        return new core.Pageable<Vectara.ListEncodersResponse, Vectara.Encoder>({
            response: await list(request),
            hasNextPage: (response) => response?.metadata?.pageKey != null,
            getItems: (response) => response?.encoders ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "pageKey", response?.metadata?.pageKey));
            },
        });
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
