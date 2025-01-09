 import { VectaraClient as FernClient } from "../client";
 import * as core from "../core";
 import {
     ChatFullResponse,
    ChatParameters,
    ChatStreamedResponse,
    GenerationParameters,
    SearchCorporaParameters
} from "../api";
 import RequestOptions = FernClient.RequestOptions;


 class ChatSession {
     private client: any;
     private chatId: string | null;
     private search: SearchCorporaParameters;
     private generation: GenerationParameters | undefined;
     private chatConfig: ChatParameters | undefined;
     private requestTimeout: number | undefined;
     private requestTimeoutMillis: number | undefined;
     private requestOptions: RequestOptions | undefined;

     constructor({
         client,
         search,
         generation,
         chatConfig,
         requestTimeout,
         requestTimeoutMillis,
         requestOptions,
         chatId = null,
     }: {
         client: FernClient;
         search: SearchCorporaParameters;
         generation?: GenerationParameters;
         chatConfig?: ChatParameters;
         requestTimeout?: number;
         requestTimeoutMillis?: number;
         requestOptions?: RequestOptions;
         chatId?: string | null;
     }) {
         this.client = client;
         this.chatId = chatId;
         this.search = search;
         this.generation = generation;
         this.chatConfig = chatConfig;
         this.requestTimeout = requestTimeout;
         this.requestTimeoutMillis = requestTimeoutMillis;
         this.requestOptions = requestOptions;
     }

     async chat(query: string): Promise<ChatFullResponse> {
         if (!this.chatId) {
             const response = await this.client.chat({
                 query,
                 search: this.search,
                 generation: this.generation,
                 chat: this.chatConfig,
             }, {
                 requestTimeout: this.requestTimeout,
                 requestTimeoutMillis: this.requestTimeoutMillis,
                 requestOptions: this.requestOptions
             });
             this.chatId = response.chatId || null;
             return response;
         } else {
             return await this.client.chats.createTurns(this.chatId, {
                 query,
                 search: this.search,
                 generation: this.generation,
                 chat: this.chatConfig,
                 requestTimeout: this.requestTimeout,
                 requestTimeoutMillis: this.requestTimeoutMillis,
             }, this.requestOptions);
         }
     }

     async chatStream(query: string): Promise<core.Stream<ChatStreamedResponse>> {
         const request = {
             query,
             search: this.search,
             generation: this.generation,
             chat: this.chatConfig,
             requestTimeout: this.requestTimeout,
             requestTimeoutMillis: this.requestTimeoutMillis,
             requestOptions: this.requestOptions,
         };

         let response: core.Stream<ChatStreamedResponse>;

         if (!this.chatId) {
             response = await this.client.chatStream(request);
             for await (const event of response) {
                 if (event.type === "chat_info" && event.chatId) {
                     this.chatId = event.chatId;
                     break;
                 }
             }
         } else {
             response = await this.client.chats.createTurnsStream({
                 ...request,
                 chatId: this.chatId,
             });
         }

         return response;
     }
 }


export class VectaraClient extends FernClient {

    async createChatSession(
        search: SearchCorporaParameters,
        requestTimeout?: number,
        requestTimeoutMillis?: number,
        generation?: GenerationParameters,
        chatConfig?: ChatParameters,
        requestOptions?: RequestOptions
    ): Promise<ChatSession> {

        return new ChatSession({
            client: this,
            search,
            generation,
            chatConfig,
            requestTimeout,
            requestTimeoutMillis,
            requestOptions,
        });
    }

}