# Reference

## API Keys

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">list</a>({ ...params }) -> Vectara.ListApiKeysResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.list();
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

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">get</a>(apiKeyId) -> Vectara.ApiKey</code></summary>
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

**apiKeyId:** `string` — The name of the API key.

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

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">delete</a>(apiKeyId) -> void</code></summary>
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

**apiKeyId:** `string` — The name of the API key.

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

**apiKeyId:** `string` — The name of the API key.

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

<details><summary><code>client.appClients.<a href="/src/api/resources/appClients/client/Client.ts">list</a>({ ...params }) -> Vectara.ListAppClientsResponse</code></summary>
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
    name: "name",
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

**request:** `Vectara.ComponentsSchemasCreateClientCredentialsRequest`

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

<details><summary><code>client.appClients.<a href="/src/api/resources/appClients/client/Client.ts">get</a>(appClientId) -> Vectara.AppClient</code></summary>
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

**appClientId:** `string` — The name of the App Client.

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

<details><summary><code>client.appClients.<a href="/src/api/resources/appClients/client/Client.ts">delete</a>(appClientId) -> void</code></summary>
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

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">getToken</a>({ ...params }) -> Vectara.AuthResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.getToken();
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

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">createStream</a>({ ...params }) -> core.Stream<Vectara.ChatStreamedResponse></code></summary>
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
await client.chats.createStream({
    query: "string",
    search: {
        corpora: [{}],
        offset: 1,
        limit: 1,
        contextConfiguration: {},
        reranker: {},
    },
    generation: {
        promptName: "string",
        maxUsedSearchResults: 1,
        promptText: "string",
        maxResponseCharacters: 1,
        responseLanguage: Vectara.Language.Auto,
        modelParameters: {
            maxTokens: 1,
            temperature: 1.1,
            frequencyPenalty: 1.1,
            presencePenalty: 1.1,
        },
        citations: {},
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

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">create</a>({ ...params }) -> Vectara.ChatFullResponse</code></summary>
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

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">get</a>(chatId) -> Vectara.Chat</code></summary>
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

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">delete</a>(chatId) -> void</code></summary>
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

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">listTurns</a>(chatId) -> Vectara.ListChatTurnsResponse</code></summary>
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

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">createTurnStream</a>(chatId, { ...params }) -> core.Stream<Vectara.ChatStreamedResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new turn in the chat. Each conversation has a series of `turn` objects, which are the sequence of message and response pairs tha make up the dialog.

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
await client.chats.createTurnStream("string", {
    query: "string",
    search: {
        corpora: [{}],
        offset: 1,
        limit: 1,
        contextConfiguration: {},
        reranker: {},
    },
    generation: {
        promptName: "string",
        maxUsedSearchResults: 1,
        promptText: "string",
        maxResponseCharacters: 1,
        responseLanguage: Vectara.Language.Auto,
        modelParameters: {
            maxTokens: 1,
            temperature: 1.1,
            frequencyPenalty: 1.1,
            presencePenalty: 1.1,
        },
        citations: {},
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

**request:** `Vectara.ChatsCreateTurnStreamRequest`

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

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">createTurn</a>(chatId, { ...params }) -> Vectara.ChatFullResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new turn in the chat. Each conversation has a series of `turn` objects, which are the sequence of message and response pairs tha make up the dialog.

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
await client.chats.createTurn("chat_id", {
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

**request:** `Vectara.ChatsCreateTurnRequest`

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

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">getTurn</a>(chatId, turnId) -> Vectara.Turn</code></summary>
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

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">deleteTurn</a>(chatId, turnId) -> void</code></summary>
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

Create a corpus, which is a container to store documents and associated metadata.

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

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">get</a>(corpusKey) -> Vectara.Corpus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get metadata about a corpus. This operation is not a method of searching a corpus.

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

**requestOptions:** `Corpora.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">delete</a>(corpusKey) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a corpus and all the data that it contains.

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

Enable or disable a corpus.

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

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">reset</a>(corpusKey) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resets a corpus, which removes all documents and data from the specified corpus, while keeping the corpus itself.

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

**requestOptions:** `Corpora.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.corpora.<a href="/src/api/resources/corpora/client/Client.ts">replaceFilters</a>(corpusKey, { ...params }) -> Vectara.ReplaceFilterAttributesResponse</code></summary>
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

You can monitor the status of the filter change using the returned job id.

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
await client.corpora.replaceFilters("my-corpus", {
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

## Documents

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">listCorpus</a>(corpusKey, { ...params }) -> Vectara.ListDocumentsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.listCorpus("my-corpus");
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

**request:** `Vectara.DocumentsListCorpusRequest`

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
or in a format that explicitly specifies each document part that becomes a search result.

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
    id: "my-doc-id",
    documentParts: [
        {
            text: "I'm a nice document part.",
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

**corpusKey:** `Vectara.CorpusKey` — The unique key identifying the queried corpus.

</dd>
</dl>

<dl>
<dd>

**request:** `Vectara.CreateDocumentRequest`

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

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">deleteCorpus</a>(corpusKey, documentId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.deleteCorpus("my-corpus", "document_id");
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

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Encoders

<details><summary><code>client.encoders.<a href="/src/api/resources/encoders/client/Client.ts">list</a>({ ...params }) -> Vectara.ListEncodersResponse</code></summary>
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

## Jobs

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">list</a>({ ...params }) -> Vectara.ListJobsResponse</code></summary>
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

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">get</a>(jobId) -> Vectara.Job</code></summary>
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

**jobId:** `string` — The ID of job to get.

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

## Large Language Models

<details><summary><code>client.largeLanguageModels.<a href="/src/api/resources/largeLanguageModels/client/Client.ts">list</a>({ ...params }) -> Vectara.ListLlMsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List LLMs that can be used with query and chat endpoints.

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
await client.largeLanguageModels.list();
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

**request:** `Vectara.LargeLanguageModelsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LargeLanguageModels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Queries

<details><summary><code>client.queries.<a href="/src/api/resources/queries/client/Client.ts">queryStream</a>({ ...params }) -> core.Stream<Vectara.QueryStreamedResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Perform a multi-purpose query that can retrieve relevant information from one or more corpora and generate a response using RAG.

Generation is opt in by setting the `generation` property. By excluding the property or by setting it to null, the response
will not include generation.

For more detailed information please see this [api guide](https://docs.vectara.com/docs/api-reference/search-apis/search).

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
await client.queries.queryStream({
    query: "string",
    search: {
        corpora: [{}],
        offset: 1,
        limit: 1,
        contextConfiguration: {},
        reranker: {},
    },
    generation: {
        promptName: "string",
        maxUsedSearchResults: 1,
        promptText: "string",
        maxResponseCharacters: 1,
        responseLanguage: Vectara.Language.Auto,
        modelParameters: {
            maxTokens: 1,
            temperature: 1.1,
            frequencyPenalty: 1.1,
            presencePenalty: 1.1,
        },
        citations: {},
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

<details><summary><code>client.queries.<a href="/src/api/resources/queries/client/Client.ts">query</a>({ ...params }) -> Vectara.QueryFullResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Perform a multi-purpose query that can retrieve relevant information from one or more corpora and generate a response using RAG.

Generation is opt in by setting the `generation` property. By excluding the property or by setting it to null, the response
will not include generation.

For more detailed information please see this [api guide](https://docs.vectara.com/docs/api-reference/search-apis/search).

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
    query: "Am I allowed to bring pets to work?",
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

<details><summary><code>client.queries.<a href="/src/api/resources/queries/client/Client.ts">search</a>(corpusKey, { ...params }) -> Vectara.QueryFullResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search a single corpus with a simple query request.

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
await client.queries.search("my-corpus", {
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

**request:** `Vectara.QueriesSearchRequest`

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

<details><summary><code>client.queries.<a href="/src/api/resources/queries/client/Client.ts">queryCorpusStream</a>(corpusKey, { ...params }) -> core.Stream<Vectara.QueryStreamedResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a specific corpus and find relevant results, highlight relevant snippets, and use Retrieval Augmented Generation.

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
await client.queries.queryCorpusStream("string", {
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
        contextConfiguration: {},
        reranker: {},
    },
    generation: {
        promptName: "string",
        maxUsedSearchResults: 1,
        promptText: "string",
        maxResponseCharacters: 1,
        responseLanguage: Vectara.Language.Auto,
        modelParameters: {
            maxTokens: 1,
            temperature: 1.1,
            frequencyPenalty: 1.1,
            presencePenalty: 1.1,
        },
        citations: {},
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

**request:** `Vectara.QueriesQueryCorpusStreamRequest`

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

<details><summary><code>client.queries.<a href="/src/api/resources/queries/client/Client.ts">queryCorpus</a>(corpusKey, { ...params }) -> Vectara.QueryFullResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query a specific corpus and find relevant results, highlight relevant snippets, and use Retrieval Augmented Generation.

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
await client.queries.queryCorpus("my-corpus", {
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

**request:** `Vectara.QueriesQueryCorpusRequest`

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

## Rerankers

<details><summary><code>client.rerankers.<a href="/src/api/resources/rerankers/client/Client.ts">list</a>({ ...params }) -> Vectara.ListRerankersResponse</code></summary>
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

## Users

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">list</a>({ ...params }) -> Vectara.ListUsersResponse</code></summary>
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

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">get</a>(username) -> Vectara.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a user and view details like the email, username, and roles associated with a user.

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

Specifies the User ID that to retrieve.
Note the username must be percent encoded.

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

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">delete</a>(username) -> void</code></summary>
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

Specifies the username to delete.
Note the username must be percent encoded.

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

Specifies the User ID to update.
Note the username must be percent encoded.

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

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">resetPassword</a>(username) -> void</code></summary>
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

Specifies the username to update.
Note the username must be percent encoded and URI safe.

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
