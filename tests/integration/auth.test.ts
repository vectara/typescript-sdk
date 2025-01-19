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

    test('test get access token', async () => {
        const response = await client.auth.getToken({
            clientId: clientId,
            clientSecret: clientSecret,
        });
        console.log(response.accessToken)
        expect(response.accessToken).not.toBeNull();
        expect(response.tokenType).not.toBeNull();
        expect(response.expiresIn).not.toBeNull();
    });
    async function deleteAllAppClients() {
        const appClients = await client.appClients.list();
        const deletePromises = appClients.data
            .filter((appClient): appClient is { id: string } => appClient.id !== undefined)
            .map(appClient => client.appClients.delete(appClient.id));
        await Promise.all(deletePromises);
    }

    afterAll(async () => {
        await deleteAllAppClients();
    });

});