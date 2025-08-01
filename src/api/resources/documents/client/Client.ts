/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as Vectara from "../../../index.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as errors from "../../../../errors/index.js";

export declare namespace Documents {
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
 * Retrieve and manage documents stored in a corpus for administrative tasks
 */
export class Documents {
    protected readonly _options: Documents.Options;

    constructor(_options: Documents.Options = {}) {
        this._options = _options;
    }

    /**
     * Retrieve a list of documents stored in a specific corpus. This endpoint provides an overview of document metadata without returning the full content of each document.
     *
     * @param {Vectara.CorpusKey} corpusKey - The unique key identifying the queried corpus.
     * @param {Vectara.DocumentsListRequest} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     * @throws {@link Vectara.NotFoundError}
     *
     * @example
     *     await client.documents.list("my-corpus")
     */
    public async list(
        corpusKey: Vectara.CorpusKey,
        request: Vectara.DocumentsListRequest = {},
        requestOptions?: Documents.RequestOptions,
    ): Promise<core.Page<Vectara.Document>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Vectara.DocumentsListRequest,
            ): Promise<core.WithRawResponse<Vectara.ListDocumentsResponse>> => {
                const {
                    limit,
                    metadata_filter: metadataFilter,
                    page_key: pageKey,
                    "Request-Timeout": requestTimeout,
                    "Request-Timeout-Millis": requestTimeoutMillis,
                } = request;
                const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
                if (limit != null) {
                    _queryParams["limit"] = limit.toString();
                }
                if (metadataFilter != null) {
                    _queryParams["metadata_filter"] = metadataFilter;
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
                        `v2/corpora/${encodeURIComponent(corpusKey)}/documents`,
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
                        data: _response.body as Vectara.ListDocumentsResponse,
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
                        case 404:
                            throw new Vectara.NotFoundError(
                                _response.error.body as Vectara.NotFoundErrorBody,
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
                            "Timeout exceeded when calling GET /v2/corpora/{corpus_key}/documents.",
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
        return new core.Pageable<Vectara.ListDocumentsResponse, Vectara.Document>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) =>
                response?.metadata?.page_key != null &&
                !(typeof response?.metadata?.page_key === "string" && response?.metadata?.page_key === ""),
            getItems: (response) => response?.documents ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "page_key", response?.metadata?.page_key));
            },
        });
    }

    /**
     * Add a document to a corpus. This endpoint supports two document formats: structured and core.
     *
     * * **Structured** documents have a conventional structure that provides document sections and parts in a format created by our proprietary strategy automatically. You provide a logical document structure, and Vectara handles the partitioning.
     * * **Core** documents differ in that they follow an advanced, granular structure that explicitly defines each document part in an array. Each part becomes a distinct, searchable item in query results. You have precise control over the document structure and content.
     *
     * For more details, see [Indexing](https://docs.vectara.com/docs/learn/select-ideal-indexing-api).
     *
     * @param {Vectara.CorpusKey} corpusKey - The unique key identifying the queried corpus.
     * @param {Vectara.DocumentsCreateRequest} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.BadRequestError}
     * @throws {@link Vectara.ForbiddenError}
     * @throws {@link Vectara.NotFoundError}
     * @throws {@link Vectara.ConflictError}
     *
     * @example
     *     await client.documents.create("my-corpus-key", {
     *         body: {
     *             id: "my-doc-id",
     *             type: "structured",
     *             sections: [{
     *                     id: 1,
     *                     title: "A nice title.",
     *                     text: "I'm a nice document section.",
     *                     metadata: {
     *                         "section": "1.1"
     *                     }
     *                 }, {
     *                     id: 2,
     *                     title: "Another nice title.",
     *                     text: "I'm another document section on something else.",
     *                     metadata: {
     *                         "section": "1.2"
     *                     }
     *                 }],
     *             metadata: {
     *                 "url": "https://example.com"
     *             }
     *         }
     *     })
     */
    public create(
        corpusKey: Vectara.CorpusKey,
        request: Vectara.DocumentsCreateRequest,
        requestOptions?: Documents.RequestOptions,
    ): core.HttpResponsePromise<Vectara.Document> {
        return core.HttpResponsePromise.fromPromise(this.__create(corpusKey, request, requestOptions));
    }

    private async __create(
        corpusKey: Vectara.CorpusKey,
        request: Vectara.DocumentsCreateRequest,
        requestOptions?: Documents.RequestOptions,
    ): Promise<core.WithRawResponse<Vectara.Document>> {
        const {
            "Request-Timeout": requestTimeout,
            "Request-Timeout-Millis": requestTimeoutMillis,
            body: _body,
        } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                        .default,
                `v2/corpora/${encodeURIComponent(corpusKey)}/documents`,
            ),
            method: "POST",
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
            contentType: "application/json",
            requestType: "json",
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Vectara.Document, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Vectara.BadRequestError(
                        _response.error.body as Vectara.BadRequestErrorBody,
                        _response.rawResponse,
                    );
                case 403:
                    throw new Vectara.ForbiddenError(_response.error.body as Vectara.Error_, _response.rawResponse);
                case 404:
                    throw new Vectara.NotFoundError(
                        _response.error.body as Vectara.NotFoundErrorBody,
                        _response.rawResponse,
                    );
                case 409:
                    throw new Vectara.ConflictError(_response.error.body as Vectara.Error_, _response.rawResponse);
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
                    "Timeout exceeded when calling POST /v2/corpora/{corpus_key}/documents.",
                );
            case "unknown":
                throw new errors.VectaraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Retrieve the content and metadata of a specific document, identified by its unique `document_id` from a specific corpus.
     *
     * @param {Vectara.CorpusKey} corpusKey - The unique key identifying the corpus containing the document to retrieve.
     * @param {string} documentId - The document ID of the document to retrieve. This `document_id` must be percent encoded.
     * @param {Vectara.DocumentsGetRequest} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     * @throws {@link Vectara.NotFoundError}
     *
     * @example
     *     await client.documents.get("my-corpus", "document_id")
     */
    public get(
        corpusKey: Vectara.CorpusKey,
        documentId: string,
        request: Vectara.DocumentsGetRequest = {},
        requestOptions?: Documents.RequestOptions,
    ): core.HttpResponsePromise<Vectara.Document> {
        return core.HttpResponsePromise.fromPromise(this.__get(corpusKey, documentId, request, requestOptions));
    }

    private async __get(
        corpusKey: Vectara.CorpusKey,
        documentId: string,
        request: Vectara.DocumentsGetRequest = {},
        requestOptions?: Documents.RequestOptions,
    ): Promise<core.WithRawResponse<Vectara.Document>> {
        const { "Request-Timeout": requestTimeout, "Request-Timeout-Millis": requestTimeoutMillis } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                        .default,
                `v2/corpora/${encodeURIComponent(corpusKey)}/documents/${encodeURIComponent(documentId)}`,
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Vectara.Document, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 403:
                    throw new Vectara.ForbiddenError(_response.error.body as Vectara.Error_, _response.rawResponse);
                case 404:
                    throw new Vectara.NotFoundError(
                        _response.error.body as Vectara.NotFoundErrorBody,
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
                    "Timeout exceeded when calling GET /v2/corpora/{corpus_key}/documents/{document_id}.",
                );
            case "unknown":
                throw new errors.VectaraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Permanently delete a document identified by its unique `document_id` from a specific corpus. This operation cannot be undone, so use it with caution.
     *
     * @param {Vectara.CorpusKey} corpusKey - The unique key identifying the corpus with the document to delete.
     * @param {string} documentId - The document ID of the document to delete. This `document_id` must be percent encoded.
     * @param {Vectara.DocumentsDeleteRequest} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     * @throws {@link Vectara.NotFoundError}
     *
     * @example
     *     await client.documents.delete("my-corpus", "document_id")
     */
    public delete(
        corpusKey: Vectara.CorpusKey,
        documentId: string,
        request: Vectara.DocumentsDeleteRequest = {},
        requestOptions?: Documents.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__delete(corpusKey, documentId, request, requestOptions));
    }

    private async __delete(
        corpusKey: Vectara.CorpusKey,
        documentId: string,
        request: Vectara.DocumentsDeleteRequest = {},
        requestOptions?: Documents.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const { "Request-Timeout": requestTimeout, "Request-Timeout-Millis": requestTimeoutMillis } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                        .default,
                `v2/corpora/${encodeURIComponent(corpusKey)}/documents/${encodeURIComponent(documentId)}`,
            ),
            method: "DELETE",
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 403:
                    throw new Vectara.ForbiddenError(_response.error.body as Vectara.Error_, _response.rawResponse);
                case 404:
                    throw new Vectara.NotFoundError(
                        _response.error.body as Vectara.NotFoundErrorBody,
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
                    "Timeout exceeded when calling DELETE /v2/corpora/{corpus_key}/documents/{document_id}.",
                );
            case "unknown":
                throw new errors.VectaraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Updates document identified by its unique `document_id` from a specific corpus. The request body metadata is merged with the existing metadata, adding or modifying only the specified fields.
     *
     * @param {Vectara.CorpusKey} corpusKey - The unique key identifying the corpus with the document to update.
     * @param {string} documentId - The document ID of the document to update. This `document_id` must be percent encoded.
     * @param {Vectara.DocumentsUpdateRequest} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     * @throws {@link Vectara.NotFoundError}
     * @throws {@link Vectara.TooManyRequestsError}
     *
     * @example
     *     await client.documents.update("my-corpus", "document_id", {
     *         body: {}
     *     })
     */
    public update(
        corpusKey: Vectara.CorpusKey,
        documentId: string,
        request: Vectara.DocumentsUpdateRequest,
        requestOptions?: Documents.RequestOptions,
    ): core.HttpResponsePromise<Vectara.Document> {
        return core.HttpResponsePromise.fromPromise(this.__update(corpusKey, documentId, request, requestOptions));
    }

    private async __update(
        corpusKey: Vectara.CorpusKey,
        documentId: string,
        request: Vectara.DocumentsUpdateRequest,
        requestOptions?: Documents.RequestOptions,
    ): Promise<core.WithRawResponse<Vectara.Document>> {
        const {
            "Request-Timeout": requestTimeout,
            "Request-Timeout-Millis": requestTimeoutMillis,
            body: _body,
        } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                        .default,
                `v2/corpora/${encodeURIComponent(corpusKey)}/documents/${encodeURIComponent(documentId)}`,
            ),
            method: "PATCH",
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
            contentType: "application/json",
            requestType: "json",
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Vectara.Document, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 403:
                    throw new Vectara.ForbiddenError(_response.error.body as Vectara.Error_, _response.rawResponse);
                case 404:
                    throw new Vectara.NotFoundError(
                        _response.error.body as Vectara.NotFoundErrorBody,
                        _response.rawResponse,
                    );
                case 429:
                    throw new Vectara.TooManyRequestsError(
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
                    "Timeout exceeded when calling PATCH /v2/corpora/{corpus_key}/documents/{document_id}.",
                );
            case "unknown":
                throw new errors.VectaraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Replaces metadata of a document identified by its unique `document_id` from a specific corpus.
     *
     * @param {Vectara.CorpusKey} corpusKey - The unique key identifying the corpus with the document to update.
     * @param {string} documentId - The document ID of the document to update. This `document_id` must be percent encoded.
     * @param {Vectara.DocumentsUpdateMetadataRequest} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     * @throws {@link Vectara.NotFoundError}
     * @throws {@link Vectara.TooManyRequestsError}
     *
     * @example
     *     await client.documents.updateMetadata("my-corpus", "document_id", {
     *         body: {}
     *     })
     */
    public updateMetadata(
        corpusKey: Vectara.CorpusKey,
        documentId: string,
        request: Vectara.DocumentsUpdateMetadataRequest,
        requestOptions?: Documents.RequestOptions,
    ): core.HttpResponsePromise<Vectara.Document> {
        return core.HttpResponsePromise.fromPromise(
            this.__updateMetadata(corpusKey, documentId, request, requestOptions),
        );
    }

    private async __updateMetadata(
        corpusKey: Vectara.CorpusKey,
        documentId: string,
        request: Vectara.DocumentsUpdateMetadataRequest,
        requestOptions?: Documents.RequestOptions,
    ): Promise<core.WithRawResponse<Vectara.Document>> {
        const {
            "Request-Timeout": requestTimeout,
            "Request-Timeout-Millis": requestTimeoutMillis,
            body: _body,
        } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                        .default,
                `v2/corpora/${encodeURIComponent(corpusKey)}/documents/${encodeURIComponent(documentId)}/metadata`,
            ),
            method: "PUT",
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
            contentType: "application/json",
            requestType: "json",
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Vectara.Document, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 403:
                    throw new Vectara.ForbiddenError(_response.error.body as Vectara.Error_, _response.rawResponse);
                case 404:
                    throw new Vectara.NotFoundError(
                        _response.error.body as Vectara.NotFoundErrorBody,
                        _response.rawResponse,
                    );
                case 429:
                    throw new Vectara.TooManyRequestsError(
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
                    "Timeout exceeded when calling PUT /v2/corpora/{corpus_key}/documents/{document_id}/metadata.",
                );
            case "unknown":
                throw new errors.VectaraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Summarize a document identified by its unique `document_id` from a specific corpus.
     *
     * @param {Vectara.CorpusKey} corpusKey - The unique key identifying the corpus containing the document to retrieve.
     * @param {string} documentId - The document ID of the document to retrieve. This `document_id` must be percent encoded.
     * @param {Vectara.SummarizeDocumentRequest} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     * @throws {@link Vectara.NotFoundError}
     *
     * @example
     *     await client.documents.summarize("my-corpus", "document_id", {
     *         llm_name: "llm_name"
     *     })
     */
    public summarize(
        corpusKey: Vectara.CorpusKey,
        documentId: string,
        request: Vectara.SummarizeDocumentRequest,
        requestOptions?: Documents.RequestOptions,
    ): core.HttpResponsePromise<Vectara.SummarizeDocumentResponse> {
        return core.HttpResponsePromise.fromPromise(this.__summarize(corpusKey, documentId, request, requestOptions));
    }

    private async __summarize(
        corpusKey: Vectara.CorpusKey,
        documentId: string,
        request: Vectara.SummarizeDocumentRequest,
        requestOptions?: Documents.RequestOptions,
    ): Promise<core.WithRawResponse<Vectara.SummarizeDocumentResponse>> {
        const { "Request-Timeout": requestTimeout, "Request-Timeout-Millis": requestTimeoutMillis, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                        .default,
                `v2/corpora/${encodeURIComponent(corpusKey)}/documents/${encodeURIComponent(documentId)}/summarize`,
            ),
            method: "POST",
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
            contentType: "application/json",
            requestType: "json",
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Vectara.SummarizeDocumentResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 403:
                    throw new Vectara.ForbiddenError(_response.error.body as Vectara.Error_, _response.rawResponse);
                case 404:
                    throw new Vectara.NotFoundError(
                        _response.error.body as Vectara.NotFoundErrorBody,
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
                    "Timeout exceeded when calling POST /v2/corpora/{corpus_key}/documents/{document_id}/summarize.",
                );
            case "unknown":
                throw new errors.VectaraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
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
