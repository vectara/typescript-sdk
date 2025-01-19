 import {
    ChatFullResponse,
    ChatParameters,
    ChatStreamedResponse,
    GenerationParameters,
    SearchCorporaParameters
} from "../api";
import { VectaraClient as FernClient } from "../Client";
import * as core from "../core";
 import * as serializers from "../serialization/index";
import RequestOptions = FernClient.RequestOptions;


 class ChatSession {
     private client: any;
     private chatId: string | null;
     private search: SearchCorporaParameters;
     private generation: GenerationParameters | undefined;
     private chatConfig: ChatParameters | undefined;
     private requestOptions: RequestOptions | undefined;

     constructor({
         client,
         search,
         generation,
         chatConfig,
         requestOptions,
         chatId = null,
     }: {
         client: FernClient;
         search: SearchCorporaParameters;
         generation?: GenerationParameters;
         chatConfig?: ChatParameters;
         requestOptions?: RequestOptions;
         chatId?: string | null;
     }) {
         this.client = client;
         this.chatId = chatId;
         this.search = search;
         this.generation = generation;
         this.chatConfig = chatConfig;
         this.requestOptions = requestOptions;
     }

     async chat(query: string): Promise<ChatFullResponse> {
         if (!this.chatId) {
             const response = await this.client.chat({
                 query,
                 search: this.search,
                 generation: this.generation,
                 chat: this.chatConfig,
             },
                 this.requestOptions
             );

             this.chatId = response.chatId || null;
             return response;
         } else {
             return await this.client.chats.createTurns(this.chatId, {
                 query,
                 search: this.search,
                 generation: this.generation,
                 chat: this.chatConfig,
             },
                 this.requestOptions
             );
         }
     }

     async chatStream(query: string): Promise<core.Stream<ChatStreamedResponse>> {
         const request = {
             query,
             search: this.search,
             generation: this.generation,
             chat: this.chatConfig,
         };

         let response: core.Stream<ChatStreamedResponse>;

         if (!this.chatId) {
             response = await this.client.chatStream(request, this.requestOptions,);
             const stream = new ReadableStream<ChatStreamedResponse>({
                 start: async (controller) => {
                     for await (const event of response) {
                         if (event.type === "chat_info" && event.chatId) {
                             this.chatId = event.chatId;
                         }
                         const eventString = `data: ${JSON.stringify(event)}\n\n`;
                         const encoder = new TextEncoder();
                         // @ts-ignore
                         controller.enqueue(encoder.encode(eventString));
                     }
                     const terminatorString = `data: [DONE]\n\n`;
                     // @ts-ignore
                     controller.enqueue(new TextEncoder().encode(terminatorString));
                     controller.close();
                     controller.close();
                 },
             });

             return new core.Stream({
                 stream: stream,
                 parse: async (data) => {
                     return data as ChatStreamedResponse
                 },
                 signal: this.requestOptions?.abortSignal,
                 eventShape:  {
                     type: "sse",
                     streamTerminator: "[DONE]",
                 },
             });

         } else {
             response = await this.client.chats.createTurnsStream(this.chatId, request, this.requestOptions);
             return response
         }
     }
 }


export class VectaraClient extends FernClient {

    async createChatSession(
        search: SearchCorporaParameters,
        generation?: GenerationParameters,
        chatConfig?: ChatParameters,
        requestOptions?: RequestOptions
    ): Promise<ChatSession> {

        return new ChatSession({
            client: this,
            search,
            generation,
            chatConfig,
            requestOptions,
        });
    }

}