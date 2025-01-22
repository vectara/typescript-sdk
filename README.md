# Vectara TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=https%3A%2F%2Fgithub.com%2Fvectara%2Ftypescript-sdk)
[![npm shield](https://img.shields.io/npm/v/vectara)](https://www.npmjs.com/package/vectara)

The Vectara TypeScript library provides convenient access to the Vectara API from TypeScript.

## Documentation

API reference documentation is available [here](https://vectara.docs.buildwithfern.com/).

## Installation

```sh
npm i -s vectara
```

## Reference

A full reference for this library is available [here](./reference.md).

### Usage

First, create an SDK client.<br />
You can use either an `apiKey` or OAuth (`clientId` and `clientSecret`) for [authentication](https://docs.vectara.com/docs/console-ui/api-access-overview).

```Typescript
import { VectaraClient } from "vectara";

# creating the client using API key
client = VectaraClient(
    apiKey="YOUR_API_KEY"
)
    
# creating the client using oauth credentials
client = VectaraClient(
    clientId="YOUR_CLIENT_ID",
    clientSecret="YOUR_CLIENT_SECRET",
)  
```

If you don't already have a corpus, you can create it using the SDK:

```Typescript
client.corpora.create(name="my-corpus", key="my-corpus-key")
```

### Add a document to a corpus
You can add documents to a corpus in two formats: [structured](https://docs.vectara.com/docs/learn/select-ideal-indexing-api#structured-document-definition) or [core](https://docs.vectara.com/docs/learn/select-ideal-indexing-api#core-document-definition).<br/> For more information, refer to the [Indexing Guide](https://docs.vectara.com/docs/learn/select-ideal-indexing-api).

Here is an example for adding a Structured document
```typescript
const document: StructuredDocument  = {
    id: "my-doc-id",
    type: "structured",
    title: "my document",
    description: "test document",
    sections: [
        {
            id: 1,
            title: "A nice title.",
            text: "I'm a nice document section.",
            metadata: {'section': '1.1'}
        },
        {
            id: 2,
            title: "Another nice title.",
            text: "I'm another document section on something else.",
            metadata: {'section': '1.2'}
        }
    ],
    metadata: {'url': 'https://example.com'}
};

const response = await client.documents.create(corpusKey, {body: document});
```
And here is one with Core document:

```typescript
const document: CoreDocument  = {
    id: "my-doc-id",
    type: "core",
    documentParts: [
        {
            text: "I am part of a document."
        }
    ]
};

const response = await client.documents.create(corpusKey, {body: document});
```

### Upload a file to the corpus
In addition to creating a document as shown above (using StructuredDocument or CoreDocument), you can also upload files (such as PDFs or Word Documents) directly to Vectara.
In this case Vectara will parse the files automatically, extract text and metadata, chunk them and add them to the corpus.

Using the SDK you need to provide both the file name, the binary content of the file, and the content_type, as follows:

```typescript
const filename = "examples.pdf";
const fileStream = fs.createReadStream(filename);
const response = await client.upload.file(fileStream, "test-upload", {filename: "test-upload.pdf"})
```

### Querying the corpora
With the SDK it's super easy to run a query from one or more corpora. For more detailed information, see this [Query API guide](https://docs.vectara.com/docs/api-reference/search-apis/search)

A query uses two important objects:
* The `SearchCorporaParameters` object defines parameters for search such as hybrid search, metadata filtering or reranking
* The `GenerationParameters` object defines parameters for the generative step.

Here is an example query for our corpus above:

```typescript
const searchParams: SearchCorporaParameters = {
        corpora: [
            {
                corpusKey: "test-search-1",
                metadataFilter: "",
                lexicalInterpolation: 0.05,
            },
            {
                corpusKey: "test-search-2",
                metadataFilter: "",
                lexicalInterpolation: 0.05,
            }
        ],
        contextConfiguration: {
            sentencesBefore: 2,
            sentencesAfter: 2,
        },
        reranker: {
            type: "customer_reranker",
            rerankerId: "rnk_272725719"
        },
    };

const generationParams: GenerationParameters = {
        // LLM used for processing. For more details https://docs.vectara.com/docs/learn/grounded-generation/select-a-summarizer
        generationPresetName: "vectara-summary-ext-v1.2.0",
        responseLanguage: "eng",
        citations: {
            style: "none",
        },
        enableFactualConsistencyScore: true,
    };

const response = await client.query({
    query: "what is vectara?",
    search: searchParams,
    generation: generationParams,
});
```

### Using Chat

Vectara [chat](https://docs.vectara.com/docs/api-reference/chat-apis/chat-apis-overview) provides a way to automatically store chat history to support multi-turn conversations.

Here is an example of how to start a chat with the SDK:

```typescript
const searchParams: SearchCorporaParameters = {
            corpora: [
                {
                    corpusKey: "test-chat",
                    metadataFilter: "",
                    lexicalInterpolation: 1,
                },
            ],
            contextConfiguration: {
                sentencesBefore: 2,
                sentencesAfter: 2,
            },
            reranker: {
                type: "customer_reranker",
                rerankerId: "rnk_272725719"
            },
        };

const generationParams: GenerationParameters = {
            responseLanguage: "eng",
            citations: {
                style: "none",
            },
            enableFactualConsistencyScore: false,
        };

const chatParams: ChatParameters = { store: true };
const requestOptions: RequestOptions = { timeoutInSeconds: 100 };

const session = await client.createChatSession(
    searchParams,
    generationParams,
    chatParams,
    requestOptions
);

const response1 = await session.chat("what is vectara?");
const response2 = await session.chat("is vectara a vector database?");
```
Note that we used the `createChatSession` with `chatConfig` set for storing chat history. The resulting session can then be used for turn-by-turn chat, simply by using the `chat()` method of the session object.

### Streaming

The SDK supports streaming responses for both query and chat. When using streaming, the response will be a generator that you can iterate over.

Here's an example of calling `queryStream`:

Streaming the query response
```typescript
const searchParams: SearchCorporaParameters = {...}
const generationParams: GenerationParameters = {...}

const responseStream = await client.queryStream({
    query: "what is vectara?",
    search: searchParams,
    generation: generationParams
});

const responseItems = [];
for await (const event of responseStream) {
    if (event.type === "generation_chunk") {
        console.log(event.generationChunk)
    }
    if (event.type === "search_results") {
        console.log(event.searchResults)
    }
}
```

And stream with chat:

```typescript
const searchParams: SearchCorporaParameters = {...};
const generationParams: GenerationParameters = {...};
const chatParams: ChatParameters = { store: true };

const session = await client.createChatSession(
    searchParams,
    generationParams,
    chatParams,
    requestOptions
);
const responseStream = await session.chatStream("Tell me about machine learning")
for await (const event of responseStream) {
    // ChatInfo event contains metadata about the chat session
    // - chatId: Unique identifier for the chat
    // - turnId: Identifier for the current turn in the conversation
    if (event.type === "chat_info"){
        console.log(event.chatId)
        console.log(event.turnId)
    }
    // SearchResults event contains the relevant documents
    // - Contains matched text segments, their relevance scores, and metadata
    if (event.type === "search_results") {
        console.log(event.searchResults)
    }
    // GenerationChunk events contain pieces of the generated response
    if (event.type === "generation_chunk") {
        console.log(event.generationChunk)
    }
}


```

## Request And Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { Vectara } from "vectara";

const request: Vectara.CorporaListRequest = {
    ...
};
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a subclass of the following error
will be thrown.

```typescript
import { VectaraError } from "vectara";

try {
    await client.query(...);
} catch (err) {
    if (err instanceof VectaraError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
    }
}
```

## Pagination

List endpoints are paginated. The SDK provides an iterator so that you can simply loop over the items:

```typescript
import { VectaraClient } from "vectara";

const client = new VectaraClient({
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
    apiKey: "YOUR_API_KEY",
});
const response = await client.corpora.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.corpora.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

## Advanced

### Additional Headers

If you would like to send additional headers as part of the request, use the `headers` request option.

```typescript
const response = await client.query(..., {
    headers: {
        'X-Custom-Header': 'custom value'
    }
});
```

### Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retriable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2).

A request is deemed retriable when any of the following HTTP status codes is returned:

-   [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
-   [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
-   [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)

Use the `maxRetries` request option to configure this behavior.

```typescript
const response = await client.query(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

### Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to configure this behavior.

```typescript
const response = await client.query(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

### Aborting Requests

The SDK allows users to abort requests at any point by passing in an abort signal.

```typescript
const controller = new AbortController();
const response = await client.query(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

### Runtime Compatibility

The SDK defaults to `node-fetch` but will use the global fetch client if present. The SDK works in the following
runtimes:

-   Node.js 18+
-   Vercel
-   Cloudflare Workers
-   Deno v1.25+
-   Bun 1.0+
-   React Native

### Customizing Fetch Client

The SDK provides a way for your to customize the underlying HTTP client / Fetch function. If you're running in an
unsupported environment, this provides a way for you to break glass and ensure the SDK works.

```typescript
import { VectaraClient } from "vectara";

const client = new VectaraClient({
    ...
    fetcher: // provide your implementation here
});
```

## Author

👤 **Vectara**

- Website: https://vectara.com
- Twitter: [@vectara](https://twitter.com/vectara)
- GitHub: [@vectara](https://github.com/vectara)
- LinkedIn: [@vectara](https://www.linkedin.com/company/vectara/)
- Discord: [@vectara](https://discord.gg/GFb8gMz6UH)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br/>
Feel free to check [issues page](https://github.com/vectara/python-sdk/issues). You can also take a look at the [contributing guide](./CONTRIBUTING).

## Show your support

Give a ⭐️ if this project helped you!