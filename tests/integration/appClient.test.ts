import { VectaraClient } from "../../src";

describe('Test AppClient', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });

    afterEach(async () => {
        const appClients = await client.appClients.list();
        for await (const appClient of appClients) {
            await client.appClients.delete(appClient.id ?? "");
        }
    });

    test('test create app client', async () => {
        const response = await client.appClients.create({ body: {
            type: "client_credentials",
            name: "test-client",
            apiRoles: ["owner"]
        }});

        expect(response.name).toBe("test-client");
        expect(response.clientId).not.toBeNull();
        expect(response.clientSecret).not.toBeNull();
    });

    test('test get app client', async () => {
        const createResponse = await client.appClients.create({ body: {
                type: "client_credentials",
                name: "test-client",
                apiRoles: ["owner"]
            }});

        const getResponse = await client.appClients.get(createResponse.id ?? "");

        expect(getResponse.clientId).toBe(createResponse.clientId);
        expect(getResponse.clientSecret).toBe(createResponse.clientSecret);
    });

    test('test delete app client', async () => {
        const createResponse = await client.appClients.create({ body: {
                type: "client_credentials",
                name: "test-client",
                apiRoles: ["owner"]
            }});

        const delResponse = await client.appClients.delete(createResponse.id ?? "");

        expect(delResponse).toBeNull();
    });

    test('test update app client', async () => {
        const createResponse = await client.appClients.create({ body: {
                type: "client_credentials",
                name: "test-client",
                apiRoles: ["owner"]
            }});

        const updateResponse = await client.appClients.update(createResponse.id ?? "", {
            apiRoles: ["owner", "administrator"],
            description: "test client"
        });

        expect(updateResponse.apiRoles).toEqual(["administrator"]);
        expect(updateResponse.description).toBe("test client");
    });

    test('test list app clients', async () => {
        const clientIds: string[] = [];
        for (let index = 0; index < 2; index++) {
            const createResponse = await client.appClients.create({ body: {
                type: "client_credentials",
                name: `test-client-${index}`,
                apiRoles: ["owner"]
            }});
            if (createResponse.clientId) clientIds.push(createResponse.clientId);
        }

        const clients = await client.appClients.list();

        for await (const client of clients) {
            expect(clientIds).toContain(client.clientId);
        }
    });
});