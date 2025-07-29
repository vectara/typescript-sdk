# Reference

## Corpora

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">list</a>({ ...params }) -> core.Page<Vectara.Corpus></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List corpora in the account. The returned corpus objects contain less detail compared to those retrieved the direct corpus retrieval operation.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.corpora.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.corpora.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.CorporaListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Corpora.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">create</a>({ ...params }) -> Vectara.Corpus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a corpus, which is a container to store documents and associated metadata. Here, you define the unique `corpus_key` that identifies the corpus. The `corpus_key` can be custom-defined following your preferred naming convention, allowing you to easily manage the corpus's data and reference it in queries. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corpora.create({
    key: "fin_esg_docs",
    name: "EU Bank ESG Compliance",
    description:
        "A corpus for storing and querying financial documents, such as annual reports and ESG compliance filings, for European banks in 2023.",
    save_history: true,
    encoder_name: "boomerang-2023-q3",
    filter_attributes: [
        {
            name: "industry",
            level: "part",
            description: "The industry sector of the document (banking).",
            indexed: true,
            type: "text",
        },
        {
            name: "region",
            level: "part",
            description: "The geographical region of the document (EU).",
            indexed: true,
            type: "text",
        },
        {
            name: "year",
            level: "part",
            description: "The publication year of the document (2023).",
            indexed: true,
            type: "integer",
        },
        {
            name: "doc_type",
            level: "part",
            description: "The type of document (annual_report).",
            indexed: true,
            type: "text",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.CreateCorpusRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Corpora.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">get</a>(corpusKey, { ...params }) -> Vectara.Corpus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get metadata about a corpus. This operation does not search the corpus contents. Specify the `corpus_key` to identify the corpus whose metadata you want to retrieve. The `corpus_key` is created when the corpus is set up, either through the Vectara Console UI or the Create Corpus API. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corpora.get("my-corpus");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus to retrieve.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.CorporaGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Corpora.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">delete</a>(corpusKey, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete a corpus and all its associated data. The `corpus_key` uniquely identifies the corpus. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corpora.delete("my-corpus");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus to delete.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.CorporaDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Corpora.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">update</a>(corpusKey, { ...params }) -> Vectara.Corpus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enable, disable, or update the name and description of a corpus. This lets you manage data availability without deleting the corpus, which is useful for maintenance and security purposes. The `corpus_key` uniquely identifies the corpus. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition). Consider updating the name and description of a corpus dynamically to help keep your data aligned with changing business needs.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corpora.update("my-corpus");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus to update.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.UpdateCorpusRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Corpora.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">reset</a>(corpusKey, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resets a corpus, which removes all documents and data from the specified corpus, while keeping the corpus itself. The `corpus_key` uniquely identifies the corpus. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corpora.reset("my-corpus");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus to reset.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.CorporaResetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Corpora.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">replaceFilterAttributes</a>(corpusKey, { ...params }) -> Vectara.ReplaceFilterAttributesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replace the filter attributes of a corpus. This does not happen immediately, as this operation creates a job that completes asynchronously. These new filter attributes will not work until the job completes.
You can monitor the status of the filter change using the returned job ID. The `corpus_key` uniquely identifies the corpus. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corpora.replaceFilterAttributes("my-corpus", {
    filter_attributes: [
        {
            name: "Title",
            level: "document",
            type: "integer",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus having its filters replaced.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.ReplaceFilterAttributesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Corpora.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">computeSize</a>(corpusKey, { ...params }) -> Vectara.ComputeCorpusSizeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Compute the current size of a corpus, including number of documents, parts, and characters. The `corpus_key` uniquely identifies the corpus. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corpora.computeSize("my-corpus");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus to compute size for.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.CorporaComputeSizeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Corpora.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">search</a>(corpusKey, { ...params }) -> Vectara.QueryFullResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search a single corpus with a straightforward query request, specifying the corpus key and query parameters.

- Specify the unique `corpus_key` identifying the corpus to query. The `corpus_key` is [created in the Vectara Console UI](https://docs.vectara.com/docs/console-ui/creating-a-corpus) or the [Create Corpus API definition](https://docs.vectara.com/docs/api-reference/admin-apis/create-corpus). When creating a new corpus, you have the option to assign a custom `corpus_key` following your preferred naming convention. This key serves as a unique identifier for the corpus, allowing it to be referenced in search requests. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).
- Enter the search `query` string for the corpus, which is the question you want to ask.
- Set the maximum number of results (`limit`) to return. **Default**: 10, **minimum**: 1

For more detailed information, see this [Query API guide](https://docs.vectara.com/docs/api-reference/search-apis/search).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corpora.search("my-corpus", {
    query: "query",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus to query.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.CorporaSearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Corpora.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">queryStream</a>(corpusKey, { ...params }) -> core.Stream<Vectara.CorporaQueryStreamResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Perform an advanced query on a specific corpus to find relevant results, highlight relevant snippets, and use Retrieval Augmented Generation.

- Specify the unique `corpus_key` identifying the corpus to query. The `corpus_key` is [created in the Vectara Console UI](https://docs.vectara.com/docs/console-ui/creating-a-corpus) or the [Create Corpus API definition](https://docs.vectara.com/docs/api-reference/admin-apis/create-corpus). When creating a new corpus, you have the option to assign a custom `corpus_key` following your preferred naming convention. This key serves as a unique identifier for the corpus, allowing it to be referenced in search requests. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).
- Customize your search by specifying the query text (`query`), pagination details (`offset` and `limit`), and metadata filters (`metadata_filter`) to tailor your search results. [Learn more](https://docs.vectara.com/docs/api-reference/search-apis/search#query-definition)
- Leverage advanced search capabilities like reranking (`reranker`) and Retrieval Augmented Generation (RAG) (`generation`) for enhanced query performance. Generation is opt in by setting the `generation` property. By excluding the property or by setting it to null, the response will not include generation. [Learn more](https://docs.vectara.com/docs/learn/grounded-generation/configure-query-summarization).
- Use hybrid search to achieve optimal results by setting different values for `lexical_interpolation` (e.g., `0.005`). [Learn more](https://docs.vectara.com/docs/learn/hybrid-search)
- Specify Vectara's RAG-focused LLM (Mockingbird) for the `generation_preset_name`. [Learn more](https://docs.vectara.com/docs/learn/mockingbird-llm)
- Use advanced summarization options that utilize detailed summarization parameters such as `max_response_characters`, `temperature`, and `frequency_penalty` for generating precise and relevant summaries. [Learn more](https://docs.vectara.com/docs/api-reference/search-apis/search#advanced-summarization-options)

For more detailed information, see [Query API guide](https://docs.vectara.com/docs/api-reference/search-apis/search).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.corpora.queryStream("my-corpus", {
    query: "How to configure OAuth2 for microservices in Kubernetes?",
    search: {
        limit: 50,
        context_configuration: {
            sentences_before: 2,
            sentences_after: 2,
            start_tag: "<em>",
            end_tag: "</em>",
        },
        reranker: {
            type: "customer_reranker",
            reranker_name: "Rerank_Multilingual_v1",
            limit: 50,
            include_context: true,
        },
        metadata_filter: "doc.topic = 'authentication' and doc.platform = 'kubernetes'",
        lexical_interpolation: 0.005,
    },
    generation: {
        generation_preset_name: "vectara-summary-ext-24-05-med-omni",
        max_used_search_results: 10,
        citations: {
            style: "markdown",
            url_pattern: "https://vectara.com/documents/{doc.id}",
            text_pattern: "{doc.title}",
        },
    },
    save_history: true,
    intelligent_query_rewriting: true,
});
for await (const item of response) {
    console.log(item);
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus to query.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.CorporaQueryStreamRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Corpora.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">query</a>(corpusKey, { ...params }) -> Vectara.CorporaQueryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Perform an advanced query on a specific corpus to find relevant results, highlight relevant snippets, and use Retrieval Augmented Generation.

- Specify the unique `corpus_key` identifying the corpus to query. The `corpus_key` is [created in the Vectara Console UI](https://docs.vectara.com/docs/console-ui/creating-a-corpus) or the [Create Corpus API definition](https://docs.vectara.com/docs/api-reference/admin-apis/create-corpus). When creating a new corpus, you have the option to assign a custom `corpus_key` following your preferred naming convention. This key serves as a unique identifier for the corpus, allowing it to be referenced in search requests. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).
- Customize your search by specifying the query text (`query`), pagination details (`offset` and `limit`), and metadata filters (`metadata_filter`) to tailor your search results. [Learn more](https://docs.vectara.com/docs/api-reference/search-apis/search#query-definition)
- Leverage advanced search capabilities like reranking (`reranker`) and Retrieval Augmented Generation (RAG) (`generation`) for enhanced query performance. Generation is opt in by setting the `generation` property. By excluding the property or by setting it to null, the response will not include generation. [Learn more](https://docs.vectara.com/docs/learn/grounded-generation/configure-query-summarization).
- Use hybrid search to achieve optimal results by setting different values for `lexical_interpolation` (e.g., `0.005`). [Learn more](https://docs.vectara.com/docs/learn/hybrid-search)
- Specify Vectara's RAG-focused LLM (Mockingbird) for the `generation_preset_name`. [Learn more](https://docs.vectara.com/docs/learn/mockingbird-llm)
- Use advanced summarization options that utilize detailed summarization parameters such as `max_response_characters`, `temperature`, and `frequency_penalty` for generating precise and relevant summaries. [Learn more](https://docs.vectara.com/docs/api-reference/search-apis/search#advanced-summarization-options)

For more detailed information, see [Query API guide](https://docs.vectara.com/docs/api-reference/search-apis/search).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corpora.query("my-corpus", {
    query: "How to configure OAuth2 for microservices in Kubernetes?",
    search: {
        limit: 50,
        context_configuration: {
            sentences_before: 2,
            sentences_after: 2,
            start_tag: "<em>",
            end_tag: "</em>",
        },
        reranker: {
            type: "customer_reranker",
            reranker_name: "Rerank_Multilingual_v1",
            limit: 50,
            include_context: true,
        },
        metadata_filter: "doc.topic = 'authentication' and doc.platform = 'kubernetes'",
        lexical_interpolation: 0.005,
    },
    generation: {
        generation_preset_name: "vectara-summary-ext-24-05-med-omni",
        max_used_search_results: 10,
        citations: {
            style: "markdown",
            url_pattern: "https://vectara.com/documents/{doc.id}",
            text_pattern: "{doc.title}",
        },
    },
    save_history: true,
    intelligent_query_rewriting: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus to query.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.CorporaQueryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Corpora.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Upload

<details><summary><code>client.upload.<a href="/src/api/resources/upload/client/Client.ts">file</a>(corpusKey, { ...params }) -> Vectara.Document</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload files such as PDFs and Word Documents for automatic text extraction and metadata parsing.

The request expects a `multipart/form-data` format containing the following parts:

- `metadata` - Optionally specifies a JSON object representing any additional metadata to be associated with the extracted document. For example, `''metadata={\"key\": \"value\"};type=application/json''`
- `chunking_strategy` - If provided, specifies the chunking strategy for the platform to use. If you do not set this option, the platform uses the default strategy, which creates one chunk per sentence. You can explicitly set sentence chunking with `''chunking_strategy={\"type\":\"sentence_chunking_strategy\"};type=application/json''` or use max chars chunking with `''chunking_strategy={\"type\":\"max_chars_chunking_strategy\",\"max_chars_per_chunk\":200};type=application/json''`
- `table_extraction_config` - You can optionally specify whether to extract table data from the uploaded file. If you do not set this option, the platform does not extract tables from PDF files. Example config, `''table_extraction_config={\"extract_tables\":true};type=application/json''` \n* `file` - Specifies the file that you want to upload. * `filename` - Specified as part of the file field with the file name that you want to associate with the uploaded file. For a curl example, use the following syntax: `''file=@/path/to/file/file.pdf;filename=desired_filename.pdf''`\n\nFor more detailed information, see this [File Upload API guide.](https://docs.vectara.com/docs/api-reference/indexing-apis/file-upload/file-upload)"
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.upload.file("my-corpus", {
    file: fs.createReadStream("/path/to/your/file"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey`

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.UploadFileRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Upload.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Documents

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">list</a>(corpusKey, { ...params }) -> core.Page<Vectara.Document></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of documents stored in a specific corpus. This endpoint provides an overview of document metadata without returning the full content of each document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.documents.list("my-corpus");
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.documents.list("my-corpus");
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the queried corpus.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.DocumentsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">create</a>(corpusKey, { ...params }) -> Vectara.Document</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a document to a corpus. This endpoint supports two document formats: structured and core.

- **Structured** documents have a conventional structure that provides document sections and parts in a format created by our proprietary strategy automatically. You provide a logical document structure, and Vectara handles the partitioning.
- **Core** documents differ in that they follow an advanced, granular structure that explicitly defines each document part in an array. Each part becomes a distinct, searchable item in query results. You have precise control over the document structure and content.

For more details, see [Indexing](https://docs.vectara.com/docs/learn/select-ideal-indexing-api).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.create("my-corpus-key", {
    body: {
        id: "my-doc-id",
        type: "structured",
        sections: [
            {
                id: 1,
                title: "A nice title.",
                text: "I'm a nice document section.",
                metadata: {
                    section: "1.1",
                },
            },
            {
                id: 2,
                title: "Another nice title.",
                text: "I'm another document section on something else.",
                metadata: {
                    section: "1.2",
                },
            },
        ],
        metadata: {
            url: "https://example.com",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the queried corpus.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.DocumentsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">get</a>(corpusKey, documentId, { ...params }) -> Vectara.Document</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the content and metadata of a specific document, identified by its unique `document_id` from a specific corpus.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.get("my-corpus", "document_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus containing the document to retrieve.

</dd>
</dl>

<dl>
<dd>

**documentId:** `string` — The document ID of the document to retrieve. This `document_id` must be percent encoded.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.DocumentsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">delete</a>(corpusKey, documentId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete a document identified by its unique `document_id` from a specific corpus. This operation cannot be undone, so use it with caution.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.delete("my-corpus", "document_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus with the document to delete.

</dd>
</dl>

<dl>
<dd>

**documentId:** `string` — The document ID of the document to delete. This `document_id` must be percent encoded.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.DocumentsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">update</a>(corpusKey, documentId, { ...params }) -> Vectara.Document</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates document identified by its unique `document_id` from a specific corpus. The request body metadata is merged with the existing metadata, adding or modifying only the specified fields.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.update("my-corpus", "document_id", {
    body: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus with the document to update.

</dd>
</dl>

<dl>
<dd>

**documentId:** `string` — The document ID of the document to update. This `document_id` must be percent encoded.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.DocumentsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">updateMetadata</a>(corpusKey, documentId, { ...params }) -> Vectara.Document</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replaces metadata of a document identified by its unique `document_id` from a specific corpus.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.updateMetadata("my-corpus", "document_id", {
    body: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus with the document to update.

</dd>
</dl>

<dl>
<dd>

**documentId:** `string` — The document ID of the document to update. This `document_id` must be percent encoded.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.DocumentsUpdateMetadataRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">summarize</a>(corpusKey, documentId, { ...params }) -> Vectara.SummarizeDocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Summarize a document identified by its unique `document_id` from a specific corpus.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.summarize("my-corpus", "document_id", {
    llm_name: "llm_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus containing the document to retrieve.

</dd>
</dl>

<dl>
<dd>

**documentId:** `string` — The document ID of the document to retrieve. This `document_id` must be percent encoded.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.SummarizeDocumentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Queries

<details><summary><code>client.queries.<a href="/src/api/resources/queries/client/Client.ts">queryStream</a>({ ...params }) -> core.Stream<Vectara.QueriesQueryStreamResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Perform a multipurpose query to retrieve relevant information from one or more corpora and generate a response using Retrieval Augmented Generation (RAG).

- Specify the unique `corpus_key` identifying the corpus to query. The `corpus_key` is [created in the Vectara Console UI](https://docs.vectara.com/docs/console-ui/creating-a-corpus) or the [Create Corpus API definition](https://docs.vectara.com/docs/api-reference/admin-apis/create-corpus). When creating a new corpus, you have the option to assign a custom `corpus_key` following your preferred naming convention. This key serves as a unique identifier for the corpus, allowing it to be referenced in search requests. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).
- Customize your search by specifying the query text (`query`), pagination details (`offset` and `limit`), and metadata filters (`metadata_filter`) to tailor your search results. [Learn more](https://docs.vectara.com/docs/api-reference/search-apis/search#query-definition)
- Leverage advanced search capabilities like reranking (`reranker`) and opt-in Retrieval Augmented Generation (RAG) (`generation`) for enhanced query performance. Generation is opt-in by setting the `generation` property. By excluding the property or by setting it to null, the response will not include generation. [Learn more](https://docs.vectara.com/docs/learn/grounded-generation/configure-query-summarization)
- Specify Vectara's RAG-focused LLM (Mockingbird) for the `generation_preset_name`. [Learn more](https://docs.vectara.com/docs/learn/mockingbird-llm)
- Use advanced summarization options that utilize detailed summarization parameters such as `max_response_characters`, `temperature`, and `frequency_penalty` for generating precise and relevant summaries. [Learn more](https://docs.vectara.com/docs/api-reference/search-apis/search#advanced-summarization-customization-options)
- Customize citation formats in summaries using the `citations` object to include numeric, HTML, or Markdown links. [Learn more](https://docs.vectara.com/docs/api-reference/search-apis/search#citation-format-in-summary)

For more detailed information, see this [Query API guide](https://docs.vectara.com/docs/api-reference/search-apis/search).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.queries.queryStream({
    query: "What is a hallucination?",
    search: {
        corpora: [
            {
                corpus_key: "corpus_key",
                metadata_filter: "",
                lexical_interpolation: 0.005,
            },
        ],
        context_configuration: {
            sentences_before: 2,
            sentences_after: 2,
        },
        reranker: {
            type: "customer_reranker",
            reranker_id: "rnk_272725719",
        },
    },
    generation: {
        response_language: "eng",
        enable_factual_consistency_score: true,
    },
});
for await (const item of response) {
    console.log(item);
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.QueriesQueryStreamRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Queries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.queries.<a href="/src/api/resources/queries/client/Client.ts">query</a>({ ...params }) -> Vectara.QueriesQueryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Perform a multipurpose query to retrieve relevant information from one or more corpora and generate a response using Retrieval Augmented Generation (RAG).

- Specify the unique `corpus_key` identifying the corpus to query. The `corpus_key` is [created in the Vectara Console UI](https://docs.vectara.com/docs/console-ui/creating-a-corpus) or the [Create Corpus API definition](https://docs.vectara.com/docs/api-reference/admin-apis/create-corpus). When creating a new corpus, you have the option to assign a custom `corpus_key` following your preferred naming convention. This key serves as a unique identifier for the corpus, allowing it to be referenced in search requests. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).
- Customize your search by specifying the query text (`query`), pagination details (`offset` and `limit`), and metadata filters (`metadata_filter`) to tailor your search results. [Learn more](https://docs.vectara.com/docs/api-reference/search-apis/search#query-definition)
- Leverage advanced search capabilities like reranking (`reranker`) and opt-in Retrieval Augmented Generation (RAG) (`generation`) for enhanced query performance. Generation is opt-in by setting the `generation` property. By excluding the property or by setting it to null, the response will not include generation. [Learn more](https://docs.vectara.com/docs/learn/grounded-generation/configure-query-summarization)
- Specify Vectara's RAG-focused LLM (Mockingbird) for the `generation_preset_name`. [Learn more](https://docs.vectara.com/docs/learn/mockingbird-llm)
- Use advanced summarization options that utilize detailed summarization parameters such as `max_response_characters`, `temperature`, and `frequency_penalty` for generating precise and relevant summaries. [Learn more](https://docs.vectara.com/docs/api-reference/search-apis/search#advanced-summarization-customization-options)
- Customize citation formats in summaries using the `citations` object to include numeric, HTML, or Markdown links. [Learn more](https://docs.vectara.com/docs/api-reference/search-apis/search#citation-format-in-summary)

For more detailed information, see this [Query API guide](https://docs.vectara.com/docs/api-reference/search-apis/search).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.queries.query({
    query: "What is a hallucination?",
    search: {
        corpora: [
            {
                corpus_key: "corpus_key",
                metadata_filter: "",
                lexical_interpolation: 0.005,
            },
        ],
        context_configuration: {
            sentences_before: 2,
            sentences_after: 2,
        },
        reranker: {
            type: "customer_reranker",
            reranker_id: "rnk_272725719",
        },
    },
    generation: {
        response_language: "eng",
        enable_factual_consistency_score: true,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.QueriesQueryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Queries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Query History

<details><summary><code>client.queryHistory.<a href="/src/api/resources/queryHistory/client/Client.ts">get</a>(queryId, { ...params }) -> Vectara.QueryHistory</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a detailed history of previously executed query.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.queryHistory.get("query_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**queryId:** `string` — The ID of the query history

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.QueryHistoryGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryHistory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.queryHistory.<a href="/src/api/resources/queryHistory/client/Client.ts">list</a>({ ...params }) -> core.Page<Vectara.QueryHistorySummary></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve query histories.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.queryHistory.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.queryHistory.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.QueryHistoryListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryHistory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Chats

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">list</a>({ ...params }) -> core.Page<Vectara.Chat></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of previous chats in the Vectara account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.chats.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.chats.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.ChatsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">createStream</a>({ ...params }) -> core.Stream<Vectara.ChatsCreateStreamResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a chat while specifying the default retrieval parameters used by the prompt.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.chats.createStream({
    query: "What is a hallucination?",
    search: {
        corpora: [
            {
                corpus_key: "corpus_key",
                metadata_filter: "",
                lexical_interpolation: 0.005,
            },
        ],
        context_configuration: {
            sentences_before: 2,
            sentences_after: 2,
        },
        reranker: {
            type: "customer_reranker",
            reranker_id: "rnk_272725719",
        },
    },
    generation: {
        response_language: "eng",
        citations: {
            style: "none",
        },
        enable_factual_consistency_score: true,
    },
    chat: {
        store: true,
    },
});
for await (const item of response) {
    console.log(item);
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.ChatsCreateStreamRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">create</a>({ ...params }) -> Vectara.ChatsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a chat while specifying the default retrieval parameters used by the prompt.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.create({
    query: "What is a hallucination?",
    search: {
        corpora: [
            {
                corpus_key: "corpus_key",
                metadata_filter: "",
                lexical_interpolation: 0.005,
            },
        ],
        context_configuration: {
            sentences_before: 2,
            sentences_after: 2,
        },
        reranker: {
            type: "customer_reranker",
            reranker_id: "rnk_272725719",
        },
    },
    generation: {
        response_language: "eng",
        enable_factual_consistency_score: true,
        citations: {
            style: "none",
        },
    },
    chat: {
        store: true,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.ChatsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">get</a>(chatId, { ...params }) -> Vectara.Chat</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a chat summary to view what started the chat, but not subsequent turns.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.get("chat_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chatId:** `string` — The ID of the chat.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.ChatsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">delete</a>(chatId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a chat and any turns it contains permanently.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.delete("chat_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chatId:** `string` — The ID of the chat.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.ChatsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">listTurns</a>(chatId, { ...params }) -> Vectara.ListChatTurnsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all turns in a chat to see all message and response pairs that make up the dialog.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.listTurns("cht_1234567890");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chatId:** `string` — The ID of the chat.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.ChatsListTurnsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">createTurnsStream</a>(chatId, { ...params }) -> core.Stream<Vectara.ChatsCreateTurnsStreamResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new turn in the chat. Each conversation has a series of `turn` objects, which are the sequence of message and response pairs that make up the dialog.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.chats.createTurnsStream("chat_id", {
    query: "What are the carbon reduction efforts by EU banks in 2023?",
    search: {},
});
for await (const item of response) {
    console.log(item);
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chatId:** `string` — The ID of the chat.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.ChatsCreateTurnsStreamRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">createTurns</a>(chatId, { ...params }) -> Vectara.ChatsCreateTurnsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new turn in the chat. Each conversation has a series of `turn` objects, which are the sequence of message and response pairs that make up the dialog.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.createTurns("chat_id", {
    query: "What are the carbon reduction efforts by EU banks in 2023?",
    search: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chatId:** `string` — The ID of the chat.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.ChatsCreateTurnsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">getTurn</a>(chatId, turnId, { ...params }) -> Vectara.Turn</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific turn from a chat, which is a message and response pair from the conversation.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.getTurn("chat_id", "turn_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chatId:** `string` — The ID of the chat.

</dd>
</dl>

<dl>
<dd>

**turnId:** `string` — The ID of the turn.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.ChatsGetTurnRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">deleteTurn</a>(chatId, turnId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a turn from a chat. This will delete all subsequent turns in the chat.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.deleteTurn("chat_id", "turn_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chatId:** `string` — The ID of the chat.

</dd>
</dl>

<dl>
<dd>

**turnId:** `string` — The ID of the turn.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.ChatsDeleteTurnRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">updateTurn</a>(chatId, turnId, { ...params }) -> Vectara.Turn</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a turn; used to disable or enable a chat.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.updateTurn("cht_1234567890", "trn_987654321");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chatId:** `string` — The ID of the chat.

</dd>
</dl>

<dl>
<dd>

**turnId:** `string` — The ID of the turn.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.UpdateTurnRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Llms

<details><summary><code>client.llms.<a href="/src/api/resources/llms/client/Client.ts">list</a>({ ...params }) -> core.Page<Vectara.Llm></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List LLMs that can be used with query and chat endpoints. The LLM is not directly specified in a query, but instead a `generation_preset_name` is used. The `generation_preset_name` property in generation parameters can be found as the `name` property on the Generations Presets retrieved from `/v2/generation_presets`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.llms.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.llms.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.LlmsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Llms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.llms.<a href="/src/api/resources/llms/client/Client.ts">create</a>({ ...params }) -> Vectara.Llm</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new LLM for use with query and chat endpoints

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.llms.create({
    body: {
        type: "openai-compatible",
        name: "name",
        model: "model",
        uri: "uri",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.LlmsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Llms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.llms.<a href="/src/api/resources/llms/client/Client.ts">get</a>(llmId, { ...params }) -> Vectara.Llm</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details about a specific LLM.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.llms.get("llm_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**llmId:** `string` — The name of the LLM to retrieve.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.LlmsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Llms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.llms.<a href="/src/api/resources/llms/client/Client.ts">delete</a>(llmId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a custom LLM connection. Built-in LLMs cannot be deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.llms.delete("llm_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**llmId:** `string` — The name of the LLM to delete.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.LlmsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Llms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Llm

<details><summary><code>client.llm.<a href="/src/api/resources/llm/client/Client.ts">chatCompletion</a>({ ...params }) -> Vectara.CreateChatCompletionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

OpenAI-compatible endpoint for chat completions. Creates a response for the given chat conversation. The chat completion API allows you to chat with Vectara's language models in a way that's compatible with OpenAI's specification. This makes it easy to integrate with applications already designed for OpenAI's API.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.llm.chatCompletion({
    model: "model",
    messages: [
        {
            role: "role",
            content: "content",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.CreateChatCompletionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Llm.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Generation Presets

<details><summary><code>client.generationPresets.<a href="/src/api/resources/generationPresets/client/Client.ts">list</a>({ ...params }) -> core.Page<Vectara.GenerationPreset></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List generation presets used for query or chat requests. Generation presets are the build of properties used to configure generation for a request. This includes the template that renders the prompt, and various generation settings like `temperature`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.generationPresets.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.generationPresets.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.GenerationPresetsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GenerationPresets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## FactualConsistency

<details><summary><code>client.factualConsistency.<a href="/src/api/resources/factualConsistency/client/Client.ts">evaluate</a>({ ...params }) -> Vectara.EvaluateFactualConsistencyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Evaluate the factual consistency of a generated text (like a summary) against source documents. This determines how accurately the generated text reflects the information in the source documents, helping identify potential hallucinations or misrepresentations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.factualConsistency.evaluate({
    generated_text: "generated_text",
    source_texts: ["source_texts"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.EvaluateFactualConsistencyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FactualConsistency.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Encoders

<details><summary><code>client.encoders.<a href="/src/api/resources/encoders/client/Client.ts">list</a>({ ...params }) -> core.Page<Vectara.Encoder></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Encoders are used to store and retrieve from a corpus.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.encoders.list({
    filter: "vectara.*",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.encoders.list({
    filter: "vectara.*",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.EncodersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Encoders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encoders.<a href="/src/api/resources/encoders/client/Client.ts">create</a>({ ...params }) -> Vectara.Encoder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new encoder.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encoders.create({
    body: {
        type: "openai-compatible",
        name: "openai-text-encoder",
        description: "description",
        uri: "https://api.openai.com/v1/embeddings",
        model: "text-embedding-ada-002",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.EncodersCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Encoders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Rerankers

<details><summary><code>client.rerankers.<a href="/src/api/resources/rerankers/client/Client.ts">list</a>({ ...params }) -> core.Page<Vectara.Reranker></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Rerankers are used to improve the ranking (ordering) of search results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.rerankers.list({
    filter: "vectara.*",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.rerankers.list({
    filter: "vectara.*",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.RerankersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rerankers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Table Extractors

<details><summary><code>client.tableExtractors.<a href="/src/api/resources/tableExtractors/client/Client.ts">list</a>({ ...params }) -> Vectara.ListTableExtractorsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Table extractors are used to extract tabular data from documents during indexing.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tableExtractors.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.TableExtractorsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TableExtractors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hallucination Correctors

<details><summary><code>client.hallucinationCorrectors.<a href="/src/api/resources/hallucinationCorrectors/client/Client.ts">list</a>({ ...params }) -> core.Page<Vectara.HallucinationCorrector></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of available hallucination correctors used for detecting and correcting hallucinations in AI-generated content. This endpoint supports filtering by name or description, pagination, and metadata for navigating large result sets.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.hallucinationCorrectors.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hallucinationCorrectors.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.HallucinationCorrectorsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HallucinationCorrectors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.hallucinationCorrectors.<a href="/src/api/resources/hallucinationCorrectors/client/Client.ts">hallucinationCorrection</a>({ ...params }) -> Vectara.HallucinationCorrectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint identifies information in generated text that is not supported by the provided source documents and offers corrections with minimal changes. This can be used standalone or as part of a RAG workflow where the HHEM score indicates potential hallucinations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hallucinationCorrectors.hallucinationCorrection({
    generated_text: "generated_text",
    documents: [
        {
            text: "text",
        },
    ],
    model_name: "vhc-large-10",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.HallucinationCorrectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HallucinationCorrectors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Jobs

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">list</a>({ ...params }) -> core.Page<Vectara.Job></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List jobs for the account. Jobs are background processes like replacing the filterable metadata attributes.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.jobs.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.jobs.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.JobsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">get</a>(jobId, { ...params }) -> Vectara.Job</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a job by a specific ID. Jobs are background processes like replacing the filterable metadata attributes.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.get("job_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `string` — The ID of the job to get.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.JobsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">list</a>({ ...params }) -> core.Page<Vectara.User></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all users in the account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.users.list({
    corpus_key: "my-corpus",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.users.list({
    corpus_key: "my-corpus",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.UsersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">create</a>({ ...params }) -> Vectara.UsersCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a user for the current customer account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.create({
    email: "email",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.CreateUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">get</a>(username, { ...params }) -> Vectara.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a user and view details like the email, username, and associated roles.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.get("username");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**username:** `string` — Specifies the user ID that to retrieve. Note that the username must be percent encoded.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.UsersGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">delete</a>(username, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a user from the account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.delete("username");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**username:** `string` — Specifies the user ID to delete. Note that the username must be percent encoded.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.UsersDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">update</a>(username, { ...params }) -> Vectara.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update details about a user such as role names.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.update("username");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**username:** `string` — Specifies the user ID to update. Note that the username must be percent encoded.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.UpdateUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">resetPassword</a>(username, { ...params }) -> Vectara.UsersResetPasswordResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Reset the password for a user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.resetPassword("username");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**username:** `string` — Specifies the user ID to update. Note that the username must be percent encoded and URI safe.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.UsersResetPasswordRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## API Keys

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">list</a>({ ...params }) -> core.Page<Vectara.ApiKey></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of API keys for the customer account with optional filtering.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.apiKeys.list({
    corpus_key: "my-corpus",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.apiKeys.list({
    corpus_key: "my-corpus",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.ApiKeysListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">create</a>({ ...params }) -> Vectara.ApiKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

An API key is to authenticate when calling Vectara APIs.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.create({
    name: "name",
    api_key_role: "serving",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.CreateApiKeyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">get</a>(apiKeyId, { ...params }) -> Vectara.ApiKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve details of a specific API key by its ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.get("api_key_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKeyId:** `string` — The ID of the API key.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.ApiKeysGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">delete</a>(apiKeyId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete API keys to help you manage the security and lifecycle of API keys in your application.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.delete("api_key_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKeyId:** `string` — The ID of the API key.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.ApiKeysDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">update</a>(apiKeyId, { ...params }) -> Vectara.ApiKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an API key such as the roles attached to the key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.update("api_key_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**apiKeyId:** `string` — The ID of the API key.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.UpdateApiKeyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AppClients

<details><summary><code>client.appClients.<a href="/src/api/resources/appClients/client/Client.ts">list</a>({ ...params }) -> core.Page<Vectara.AppClient></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of application clients configured for the customer account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.appClients.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.appClients.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.AppClientsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppClients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.appClients.<a href="/src/api/resources/appClients/client/Client.ts">create</a>({ ...params }) -> Vectara.AppClient</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

An App Client is used for OAuth 2.0 authentication when calling Vectara APIs.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.appClients.create({
    body: {
        name: "name",
        type: "client_credentials",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.AppClientsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppClients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.appClients.<a href="/src/api/resources/appClients/client/Client.ts">get</a>(appClientId, { ...params }) -> Vectara.AppClient</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve details of a specific application client by its ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.appClients.get("app_client_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appClientId:** `string` — The ID of the App Client.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.AppClientsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppClients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.appClients.<a href="/src/api/resources/appClients/client/Client.ts">delete</a>(appClientId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove an application client configuration from the customer account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.appClients.delete("app_client_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appClientId:** `string` — The ID of App Client.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.AppClientsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppClients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.appClients.<a href="/src/api/resources/appClients/client/Client.ts">update</a>(appClientId, { ...params }) -> Vectara.AppClient</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the configuration or settings of an existing application client.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.appClients.update("app_client_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appClientId:** `string` — The name of App Client.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.UpdateAppClientRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppClients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Auth

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">getToken</a>({ ...params }) -> Vectara.GetTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Obtain an OAuth2 access token using client credentials

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.getToken({
    client_id: "client_id",
    client_secret: "client_secret",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vectara.AuthGetTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
