import { VectaraClient } from "../../src";

describe('Test Auth Manager', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });
    let clientId: string;
    let clientSecret: string;

    beforeEach(async () => {
        const response = await client.appClients.create({ body: {
            type: "client_credentials",
            name: "test-client",
            apiRoles: ["owner"]
        }});
        clientId = response.clientId ?? "";
        clientSecret = response.clientSecret ?? "";
    });

    afterEach(async () => {
        const appClients = await client.appClients.list();
        for await (const appClient of appClients) {
            await client.appClients.delete(appClient.id ?? "");
        }
    });

    test('test get access token', async () => {
        const response = await client.auth.getToken({
            clientId: clientId,
            clientSecret: clientSecret,
        });

        expect(response.accessToken).not.toBeNull();
        expect(response.tokenType).not.toBeNull();
        expect(response.expiresIn).not.toBeNull();
    });
});