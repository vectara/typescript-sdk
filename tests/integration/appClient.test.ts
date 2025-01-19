import { VectaraClient } from "../../src";

describe('Test AppClient', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });

    test('test create app client', async () => {
        const response = await client.appClients.create({ body: {
            type: "client_credentials",
            name: "test-create-client",
            apiRoles: ["owner"]
        }});

        expect(response.name).toBe("test-create-client");
        expect(response.clientId).not.toBeNull();
        expect(response.clientSecret).not.toBeNull();
    });

    test('test get app client', async () => {
        const createResponse = await client.appClients.create({ body: {
                type: "client_credentials",
                name: "test-get-client",
                apiRoles: ["owner"]
            }});

        const getResponse = await client.appClients.get(createResponse.id ?? "");

        expect(getResponse.clientId).toBe(createResponse.clientId);
        expect(getResponse.clientSecret).toBe(createResponse.clientSecret);
    });

    test('test delete app client', async () => {
        const createResponse = await client.appClients.create({ body: {
                type: "client_credentials",
                name: "test-delete-client",
                apiRoles: ["owner"]
            }});

        const delResponse = await client.appClients.delete(createResponse.id ?? "");

        expect(delResponse).toBeUndefined();
    });

    test('test update app client', async () => {
        const createResponse = await client.appClients.create({ body: {
                type: "client_credentials",
                name: "test-update-client",
                apiRoles: ["owner"]
            }});

        const updateResponse = await client.appClients.update(createResponse.id ?? "", {
            apiRoles: ["administrator"],
            description: "test client"
        });

        expect(updateResponse.apiRoles).toEqual(["owner", "administrator"]);
        expect(updateResponse.description).toBe("test client");
    });

    test('test list app clients', async () => {
        const clientIds: string[] = [];
        const testPrefix = `test-client-${Date.now()}-`;
        for (let index = 0; index < 2; index++) {
            const createResponse = await client.appClients.create({ body: {
                type: "client_credentials",
                name: `${testPrefix}-${index}`,
                apiRoles: ["owner"]
            }});
            if (createResponse.clientId) clientIds.push(createResponse.clientId);
        }

        const appClients = await client.appClients.list();

        const filteredAppClients = appClients.data.filter(appClient =>
            appClient.name?.startsWith(testPrefix)
        );

        for await (const client of filteredAppClients) {
            expect(clientIds).toContain(client.clientId);
        }
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