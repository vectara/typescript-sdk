/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as Vectara from "../../../index.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as errors from "../../../../errors/index.js";

export declare namespace GenerationPresets {
    export interface Options {
        environment?: core.Supplier<environments.VectaraEnvironment | environments.VectaraEnvironmentUrls>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the x-api-key header */
        apiKey?: core.Supplier<string | undefined>;
        /** Additional headers to include in requests. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the x-api-key header */
        apiKey?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
    }
}

/**
 * Manage generation presets for controlling the behavior of generative AI responses
 */
export class GenerationPresets {
    protected readonly _options: GenerationPresets.Options;

    constructor(_options: GenerationPresets.Options = {}) {
        this._options = _options;
    }

    /**
     * List generation presets used for query or chat requests. Generation presets are the build of properties used to configure generation for a request. This includes the template that renders the prompt, and various generation settings like `temperature`.
     *
     * @param {Vectara.GenerationPresetsListRequest} request
     * @param {GenerationPresets.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     *
     * @example
     *     await client.generationPresets.list()
     */
    public async list(
        request: Vectara.GenerationPresetsListRequest = {},
        requestOptions?: GenerationPresets.RequestOptions,
    ): Promise<core.Page<Vectara.GenerationPreset>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Vectara.GenerationPresetsListRequest,
            ): Promise<core.WithRawResponse<Vectara.ListGenerationPresetsResponse>> => {
                const {
                    llm_name: llmName,
                    limit,
                    page_key: pageKey,
                    "Request-Timeout": requestTimeout,
                    "Request-Timeout-Millis": requestTimeoutMillis,
                } = request;
                const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
                if (llmName != null) {
                    _queryParams["llm_name"] = llmName;
                }
                if (limit != null) {
                    _queryParams["limit"] = limit.toString();
                }
                if (pageKey != null) {
                    _queryParams["page_key"] = pageKey;
                }
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: core.url.join(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (
                                (await core.Supplier.get(this._options.environment)) ??
                                environments.VectaraEnvironment.Production
                            ).default,
                        "v2/generation_presets",
                    ),
                    method: "GET",
                    headers: mergeHeaders(
                        this._options?.headers,
                        mergeOnlyDefinedHeaders({
                            Authorization: await this._getAuthorizationHeader(),
                            "Request-Timeout": requestTimeout != null ? requestTimeout.toString() : undefined,
                            "Request-Timeout-Millis":
                                requestTimeoutMillis != null ? requestTimeoutMillis.toString() : undefined,
                            "x-api-key": requestOptions?.apiKey,
                        }),
                        requestOptions?.headers,
                    ),
                    queryParameters: _queryParams,
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        data: _response.body as Vectara.ListGenerationPresetsResponse,
                        rawResponse: _response.rawResponse,
                    };
                }
                if (_response.error.reason === "status-code") {
                    switch (_response.error.statusCode) {
                        case 403:
                            throw new Vectara.ForbiddenError(
                                _response.error.body as Vectara.Error_,
                                _response.rawResponse,
                            );
                        default:
                            throw new errors.VectaraError({
                                statusCode: _response.error.statusCode,
                                body: _response.error.body,
                                rawResponse: _response.rawResponse,
                            });
                    }
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.VectaraError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                            rawResponse: _response.rawResponse,
                        });
                    case "timeout":
                        throw new errors.VectaraTimeoutError(
                            "Timeout exceeded when calling GET /v2/generation_presets.",
                        );
                    case "unknown":
                        throw new errors.VectaraError({
                            message: _response.error.errorMessage,
                            rawResponse: _response.rawResponse,
                        });
                }
            },
        );
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Pageable<Vectara.ListGenerationPresetsResponse, Vectara.GenerationPreset>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) =>
                response?.metadata?.page_key != null &&
                !(typeof response?.metadata?.page_key === "string" && response?.metadata?.page_key === ""),
            getItems: (response) => response?.generation_presets ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "page_key", response?.metadata?.page_key));
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
