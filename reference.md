# Reference

<details><summary><code>client.<a href="/src/Client.ts">chat</a>({ ...params }) -> Vectara.ChatFullResponse</code></summary>
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
await client.chat({
    query: "How can I use the Vectara platform?",
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

**request:** `Vectara.ChatRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VectaraClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

##

## Corpora

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">list</a>({ ...params }) -> core.Page<Vectara.Corpus></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List corpora in the account. The corpus objects that are returned are less
detailed than the direct corpus retrieval operation.

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
await client.corpora.list();
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

Create a corpus, which is a container to store documents and associated metadata. This is where you
create the unique `corpus_key` that identifies the corpus. The `corpus_key` can be custom-defined
following your preferred naming convention, allowing you to easily manage the corpus's data and
reference it in queries. For more information, see
[Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).

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
    key: "my-corpus",
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

Get metadata about a corpus. This operation is not a method of searching a corpus.
Specify the `corpus_key` to identify the corpus whose metadata you want to
retrieve. The `corpus_key` is created when the corpus is set up, either through
the Vectara Console UI or the Create Corpus API. For more information,
see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).

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

Delete a corpus and all the data that it contains. The `corpus_key` uniquely identifies
the corpus. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).

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

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the corpus to delete

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

Enable, disable, or update the name and description of a corpus. This lets you
manage data availability without deleting the corpus, which is useful for
maintenance and security purposes. The `corpus_key` uniquely identifies the corpus.
For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).
Update the name and description of a corpus dynamically to help keep your data
aligned with changing business needs.

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

Resets a corpus, which removes all documents and data from the specified corpus,
while keeping the corpus itself. The `corpus_key` uniquely identifies the corpus.
For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).

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

Replace the filter attributes of a corpus. This does not happen immediately, but
instead creates a job and will complete when that job completes. Until that
job completes, using new filter attributes will not work.

You can monitor the status of the filter change using the returned job ID. The
`corpus_key` uniquely identifies the corpus. For more information, see
[Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).

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
    filterAttributes: [
        {
            name: "Title",
            level: Vectara.FilterAttributeLevel.Document,
            type: Vectara.FilterAttributeType.Integer,
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

**corpusKey:** `Vectara.CorpusKey` — Key of the corpus to have filters replaced.

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

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">search</a>(corpusKey, { ...params }) -> Vectara.QueryFullResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search a single corpus with a straightforward query request, specifying the corpus key and query parameters.

-   Specify the unique `corpus_key` identifying the corpus to query. The `corpus_key` is
    [created in the Vectara Console UI](https://docs.vectara.com/docs/console-ui/creating-a-corpus) or the [Create Corpus API definition](https://docs.vectara.com/docs/api-reference/admin-apis/create-corpus). When creating a new corpus, you have the option to assign a custom `corpus_key` following your preferred naming convention. This key serves as a unique identifier for the corpus, allowing it to be referenced in search requests. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).
-   Enter the search `query` string for the corpus, which is the question you want to ask.
-   Set the maximum number of results (`limit`) to return. **Default**: 10, **minimum**: 1
-   Define the `offset` position from which to start in the result set.

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

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">queryStream</a>(corpusKey, { ...params }) -> core.Stream<Vectara.QueryStreamedResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a specific corpus and find relevant results, highlight relevant snippets, and use Retrieval Augmented Generation:

-   Specify the unique `corpus_key` identifying the corpus to query. The `corpus_key` is [created in the Vectara Console UI](https://docs.vectara.com/docs/console-ui/creating-a-corpus) or the [Create Corpus API definition](https://docs.vectara.com/docs/api-reference/admin-apis/create-corpus). When creating a new corpus, you have the option to assign a custom `corpus_key` following your preferred naming convention. This key serves as a unique identifier for the corpus, allowing it to be referenced in search requests. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).
-   Customize your search by specifying the query text (`query`), pagination details (`offset` and `limit`), and metadata filters (`metadata_filter`) to tailor your search results. [Learn more](https://docs.vectara.com/docs/api-reference/search-apis/search#query-definition)
-   Leverage advanced search capabilities like reranking (`reranker`) and Retrieval Augmented Generation (RAG) (`generation`) for enhanced query performance. Generation is opt in by setting the `generation` property. By excluding the property or by setting it to null, the response
    will not include generation. [Learn more](https://docs.vectara.com/docs/learn/grounded-generation/configure-query-summarization).
-   Use hybrid search to achieve optimal results by setting different values for `lexical_interpolation` (e.g., `0.025`). [Learn more](https://docs.vectara.com/docs/learn/hybrid-search)
-   Specify Vectara's RAG-focused LLM (Mockingbird) for the `generation_preset_name`. [Learn more](https://docs.vectara.com/docs/learn/mockingbird-llm)
-   Use advanced summarization options that utilize detailed summarization parameters such as `max_response_characters`, `temperature`, and `frequency_penalty` for generating precise and relevant summaries. [Learn more](https://docs.vectara.com/docs/api-reference/search-apis/search#advanced-summarization-options)

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
await client.corpora.queryStream("string", {
    requestTimeout: 1,
    requestTimeoutMillis: 1,
    query: "string",
    search: {
        customDimensions: {
            string: 1.1,
        },
        metadataFilter: "string",
        lexicalInterpolation: 1.1,
        semantics: Vectara.SearchSemantics.Default,
        offset: 1,
        limit: 1,
        contextConfiguration: {
            charactersBefore: 1,
            charactersAfter: 1,
            sentencesBefore: 1,
            sentencesAfter: 1,
            startTag: "string",
            endTag: "string",
        },
        reranker: {
            type: "customer_reranker",
            rerankerId: "string",
            rerankerName: "string",
            limit: 1,
            cutoff: 1.1,
        },
    },
    generation: {
        generationPresetName: "string",
        promptName: "string",
        maxUsedSearchResults: 1,
        promptTemplate: "string",
        promptText: "string",
        maxResponseCharacters: 1,
        responseLanguage: Vectara.Language.Auto,
        modelParameters: {
            maxTokens: 1,
            temperature: 1.1,
            frequencyPenalty: 1.1,
            presencePenalty: 1.1,
        },
        citations: {
            style: Vectara.CitationParametersStyle.None,
            urlPattern: "string",
            textPattern: "string",
        },
        enableFactualConsistencyScore: true,
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

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">query</a>(corpusKey, { ...params }) -> Vectara.QueryFullResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a specific corpus and find relevant results, highlight relevant snippets, and use Retrieval Augmented Generation:

-   Specify the unique `corpus_key` identifying the corpus to query. The `corpus_key` is [created in the Vectara Console UI](https://docs.vectara.com/docs/console-ui/creating-a-corpus) or the [Create Corpus API definition](https://docs.vectara.com/docs/api-reference/admin-apis/create-corpus). When creating a new corpus, you have the option to assign a custom `corpus_key` following your preferred naming convention. This key serves as a unique identifier for the corpus, allowing it to be referenced in search requests. For more information, see [Corpus Key Definition](https://docs.vectara.com/docs/api-reference/search-apis/search#corpus-key-definition).
-   Customize your search by specifying the query text (`query`), pagination details (`offset` and `limit`), and metadata filters (`metadata_filter`) to tailor your search results. [Learn more](https://docs.vectara.com/docs/api-reference/search-apis/search#query-definition)
-   Leverage advanced search capabilities like reranking (`reranker`) and Retrieval Augmented Generation (RAG) (`generation`) for enhanced query performance. Generation is opt in by setting the `generation` property. By excluding the property or by setting it to null, the response
    will not include generation. [Learn more](https://docs.vectara.com/docs/learn/grounded-generation/configure-query-summarization).
-   Use hybrid search to achieve optimal results by setting different values for `lexical_interpolation` (e.g., `0.025`). [Learn more](https://docs.vectara.com/docs/learn/hybrid-search)
-   Specify Vectara's RAG-focused LLM (Mockingbird) for the `generation_preset_name`. [Learn more](https://docs.vectara.com/docs/learn/mockingbird-llm)
-   Use advanced summarization options that utilize detailed summarization parameters such as `max_response_characters`, `temperature`, and `frequency_penalty` for generating precise and relevant summaries. [Learn more](https://docs.vectara.com/docs/api-reference/search-apis/search#advanced-summarization-options)

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

<details><summary><code>client.upload.<a href="/src/api/resources/upload/client/Client.ts">file</a>(file, corpusKey, { ...params }) -> Vectara.Document</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload files such as PDFs and Word Documents. Vectara will attempt to automatically extract text and any metadata.
The File Upload endpoint request expects a `multipart/form-data` request containing the following parts:

-   `metadata` - (Optional) Specifies a JSON object representing any additional metadata to be associated with the extracted document. For example, `'metadata={"key": "value"};type=application/json'`
-   `file` - Specifies the file that you want to upload.
-   `filename` - Specified as part of the file field with the file name that you want to associate with the uploaded file. For a curl example, use the following syntax: `'file=@/path/to/file/file.pdf;filename=desired_filename.pdf'`

For more detailed information, see this [File Upload API guide.](https://docs.vectara.com/docs/api-reference/indexing-apis/file-upload/file-upload)

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
await client.upload.file(fs.createReadStream("/path/to/your/file"), "my-corpus", {});
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

**file:** `File | fs.ReadStream | Blob`

</dd>
</dl>

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.list("my-corpus");
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

Add a document to a corpus. You can add documents that are either in a typical structured format,
or in a format that explicitly specifies each document part. Each part becomes a separate search result.

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
await client.documents.create("my-corpus", {
    body: {
        id: "my-doc-id",
        type: "core",
        documentParts: [
            {
                text: "I'm a nice document part.",
            },
        ],
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

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">getCorpusDocument</a>(corpusKey, documentId, { ...params }) -> Vectara.Document</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.getCorpusDocument("my-corpus", "document_id");
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

**documentId:** `string`

The Document ID of the document to retrieve.
The `document_id` must be percent encoded.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.GetCorpusDocumentRequest`

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

**documentId:** `string`

The Document ID of the document to delete.
The `document_id` must be percent encoded.

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
await client.chats.list();
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
await client.chats.listTurns("chat_id");
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

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">createTurnsStream</a>(chatId, { ...params }) -> core.Stream<Vectara.ChatStreamedResponse></code></summary>
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
await client.chats.createTurnsStream("string", {
    requestTimeout: 1,
    requestTimeoutMillis: 1,
    query: "string",
    search: {
        corpora: [
            {
                corpusKey: undefined,
                customDimensions: {
                    string: 1.1,
                },
                metadataFilter: "string",
                lexicalInterpolation: 1.1,
                semantics: Vectara.SearchSemantics.Default,
            },
        ],
        offset: 1,
        limit: 1,
        contextConfiguration: {
            charactersBefore: 1,
            charactersAfter: 1,
            sentencesBefore: 1,
            sentencesAfter: 1,
            startTag: "string",
            endTag: "string",
        },
        reranker: {
            type: "customer_reranker",
            rerankerId: "string",
            rerankerName: "string",
            limit: 1,
            cutoff: 1.1,
        },
    },
    generation: {
        generationPresetName: "string",
        promptName: "string",
        maxUsedSearchResults: 1,
        promptTemplate: "string",
        promptText: "string",
        maxResponseCharacters: 1,
        responseLanguage: Vectara.Language.Auto,
        modelParameters: {
            maxTokens: 1,
            temperature: 1.1,
            frequencyPenalty: 1.1,
            presencePenalty: 1.1,
        },
        citations: {
            style: Vectara.CitationParametersStyle.None,
            urlPattern: "string",
            textPattern: "string",
        },
        enableFactualConsistencyScore: true,
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

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">createTurns</a>(chatId, { ...params }) -> Vectara.ChatFullResponse</code></summary>
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
    query: "How can I use the Vectara platform?",
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
await client.chats.updateTurn("chat_id", "turn_id");
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

List LLMs that can be used with query and chat endpoints. The LLM is not directly specified in a query,
but instead a `generation_preset_name` is used. The `generation_preset_name` property in generation parameters
can be found as the `name` property on the Generations Presets retrieved from `/v2/generation_presets`.

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
await client.llms.list();
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

## GenerationPresets

<details><summary><code>client.generationPresets.<a href="/src/api/resources/generationPresets/client/Client.ts">listGenerationPresets</a>({ ...params }) -> Vectara.ListGenerationPresetsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List generation presets used for query or chat requests. Generation presets are
the build of properties used to configure generation for a request. This includes
the template that renders the prompt, and various generation settings like
`temperature`.

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
await client.generationPresets.listGenerationPresets();
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

**request:** `Vectara.ListGenerationPresetsRequest`

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
await client.encoders.list({
    filter: "vectara.*",
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
await client.rerankers.list({
    filter: "vectara.*",
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
await client.jobs.list();
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
await client.users.list();
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

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">create</a>({ ...params }) -> Vectara.User</code></summary>
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

Get a user and view details like thei email, username, and associated roles.

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

**username:** `string`

Specifies the user ID that to retrieve.
Note that the username must be percent encoded.

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

**username:** `string`

Specifies the user ID to delete.
Note that the username must be percent encoded.

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

**username:** `string`

Specifies the user ID to update.
Note that the username must be percent encoded.

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

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">resetPassword</a>(username, { ...params }) -> void</code></summary>
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

**username:** `string`

Specifies the user ID to update.
Note that the username must be percent encoded and URI safe.

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.list({
    corpusKey: "my-corpus",
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
    apiKeyRole: Vectara.ApiKeyRole.Serving,
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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.appClients.list();
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

**appClientId:** `string` — The name of App Client.

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
    clientId: "client_id",
    clientSecret: "client_secret",
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
