/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vectara from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Documents {
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
 * Retrieve and manage documents stored in a corpus for administrative tasks
 */
export class Documents {
    constructor(protected readonly _options: Documents.Options = {}) {}

    /**
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
        requestOptions?: Documents.RequestOptions
    ): Promise<core.Page<Vectara.Document>> {
        const list = async (request: Vectara.DocumentsListRequest): Promise<Vectara.ListDocumentsResponse> => {
            const { limit, metadataFilter, pageKey, requestTimeout, requestTimeoutMillis } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
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
                url: urlJoin(
                    ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                        .default,
                    `v2/corpora/${encodeURIComponent(serializers.CorpusKey.jsonOrThrow(corpusKey))}/documents`
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
                return serializers.ListDocumentsResponse.parseOrThrow(_response.body, {
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
                    case 404:
                        throw new Vectara.NotFoundError(
                            serializers.NotFoundErrorBody.parseOrThrow(_response.error.body, {
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
        return new core.Pageable<Vectara.ListDocumentsResponse, Vectara.Document>({
            response: await list(request),
            hasNextPage: (response) => response?.metadata?.pageKey != null,
            getItems: (response) => response?.documents ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "pageKey", response?.metadata?.pageKey));
            },
        });
    }

    /**
     * Add a document to a corpus. You can add documents that are either in a typical structured format,
     * or in a format that explicitly specifies each document part that becomes a search result.
     *
     * @param {Vectara.CorpusKey} corpusKey - The unique key identifying the queried corpus.
     * @param {Vectara.DocumentsCreateRequest} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.BadRequestError}
     * @throws {@link Vectara.ForbiddenError}
     * @throws {@link Vectara.NotFoundError}
     *
     * @example
     *     await client.documents.create("my-corpus", {
     *         body: {
     *             id: "my-doc-id",
     *             type: "core",
     *             documentParts: [{
     *                     text: "I'm a nice document part."
     *                 }]
     *         }
     *     })
     */
    public async create(
        corpusKey: Vectara.CorpusKey,
        request: Vectara.DocumentsCreateRequest,
        requestOptions?: Documents.RequestOptions
    ): Promise<Vectara.Document> {
        const { requestTimeout, requestTimeoutMillis, body: _body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                    .default,
                `v2/corpora/${encodeURIComponent(serializers.CorpusKey.jsonOrThrow(corpusKey))}/documents`
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
            body: serializers.CreateDocumentRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Document.parseOrThrow(_response.body, {
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
                case 404:
                    throw new Vectara.NotFoundError(
                        serializers.NotFoundErrorBody.parseOrThrow(_response.error.body, {
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
     * @param {Vectara.CorpusKey} corpusKey - The unique key identifying the corpus containing the document to retrieve.
     * @param {string} documentId - The Document ID of the document to retrieve.
     *                              The `document_id` must be percent encoded.
     * @param {Vectara.GetCorpusDocumentRequest} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     * @throws {@link Vectara.NotFoundError}
     *
     * @example
     *     await client.documents.getCorpusDocument("my-corpus", "document_id")
     */
    public async getCorpusDocument(
        corpusKey: Vectara.CorpusKey,
        documentId: string,
        request: Vectara.GetCorpusDocumentRequest = {},
        requestOptions?: Documents.RequestOptions
    ): Promise<Vectara.Document> {
        const { requestTimeout, requestTimeoutMillis } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                    .default,
                `v2/corpora/${encodeURIComponent(
                    serializers.CorpusKey.jsonOrThrow(corpusKey)
                )}/documents/${encodeURIComponent(documentId)}`
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
            return serializers.Document.parseOrThrow(_response.body, {
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
                case 404:
                    throw new Vectara.NotFoundError(
                        serializers.NotFoundErrorBody.parseOrThrow(_response.error.body, {
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
     * @param {Vectara.CorpusKey} corpusKey - The unique key identifying the corpus with the document to delete.
     * @param {string} documentId - The Document ID of the document to delete.
     *                              The `document_id` must be percent encoded.
     * @param {Vectara.DocumentsDeleteRequest} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     * @throws {@link Vectara.NotFoundError}
     *
     * @example
     *     await client.documents.delete("my-corpus", "document_id")
     */
    public async delete(
        corpusKey: Vectara.CorpusKey,
        documentId: string,
        request: Vectara.DocumentsDeleteRequest = {},
        requestOptions?: Documents.RequestOptions
    ): Promise<void> {
        const { requestTimeout, requestTimeoutMillis } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                    .default,
                `v2/corpora/${encodeURIComponent(
                    serializers.CorpusKey.jsonOrThrow(corpusKey)
                )}/documents/${encodeURIComponent(documentId)}`
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
                case 404:
                    throw new Vectara.NotFoundError(
                        serializers.NotFoundErrorBody.parseOrThrow(_response.error.body, {
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
