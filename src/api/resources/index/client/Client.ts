/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vectara from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Index {
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
 * Index and manage both core and structured documents to enable efficient search and retrieval
 */
export class Index {
    constructor(protected readonly _options: Index.Options = {}) {}

    /**
     * Updates document identified by its unique `document_id` from a specific
     * corpus. The request body metadata is merged with the existing metadata,
     * adding or modifying only the specified fields.
     *
     * @param {Vectara.CorpusKey} corpusKey - The unique key identifying the corpus with the document to update.
     * @param {string} documentId - The document ID of the document to update.
     *                              This `document_id` must be percent encoded.
     * @param {Vectara.UpdateCorpusDocumentRequest} request
     * @param {Index.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     * @throws {@link Vectara.NotFoundError}
     *
     * @example
     *     await client.index.updateCorpusDocument("my-corpus", "document_id", {
     *         body: {}
     *     })
     */
    public async updateCorpusDocument(
        corpusKey: Vectara.CorpusKey,
        documentId: string,
        request: Vectara.UpdateCorpusDocumentRequest,
        requestOptions?: Index.RequestOptions
    ): Promise<Vectara.Document> {
        const { requestTimeout, requestTimeoutMillis, body: _body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                    .default,
                `v2/corpora/${encodeURIComponent(
                    serializers.CorpusKey.jsonOrThrow(corpusKey)
                )}/documents/${encodeURIComponent(documentId)}`
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
            body: serializers.UpdateDocumentRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
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
     * Replaces metadata of a document identified by its unique `document_id`
     * from a specific corpus.
     *
     * @param {Vectara.CorpusKey} corpusKey - The unique key identifying the corpus with the document to update.
     * @param {string} documentId - The document ID of the document to update.
     *                              This `document_id` must be percent encoded.
     * @param {Vectara.ReplaceCorpusDocumentMetadataRequest} request
     * @param {Index.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vectara.ForbiddenError}
     * @throws {@link Vectara.NotFoundError}
     *
     * @example
     *     await client.index.replaceCorpusDocumentMetadata("my-corpus", "document_id", {
     *         body: {}
     *     })
     */
    public async replaceCorpusDocumentMetadata(
        corpusKey: Vectara.CorpusKey,
        documentId: string,
        request: Vectara.ReplaceCorpusDocumentMetadataRequest,
        requestOptions?: Index.RequestOptions
    ): Promise<Vectara.Document> {
        const { requestTimeout, requestTimeoutMillis, body: _body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VectaraEnvironment.Production)
                    .default,
                `v2/corpora/${encodeURIComponent(
                    serializers.CorpusKey.jsonOrThrow(corpusKey)
                )}/documents/${encodeURIComponent(documentId)}/metadata`
            ),
            method: "PUT",
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
            body: serializers.UpdateDocumentRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
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

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
