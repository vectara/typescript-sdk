import { VectaraClient } from "../../src";


describe('Test User Manager', () => {
    let tempClient: VectaraClient;
    let client: VectaraClient;
    let email: string;
    let username: string;

    beforeAll(async () => {
        tempClient = new VectaraClient({
            apiKey: process.env.APIKEY,
        });
        const response = await tempClient.appClients.create({
            body: {
                type: "client_credentials",
                name: "test-create-client",
                apiRoles: ["owner"]
            }
        });

        client = new VectaraClient({
            clientId: response.clientId,
            clientSecret: response.clientSecret
        });
    });

    beforeEach(async () => {
        const testName = expect.getState().currentTestName?.replace(/\s+/g, '-').toLowerCase();
        const maxKeyLength = 25;
        email = `${testName}@example.com`.slice(-maxKeyLength);
        username = `${testName}`.slice(-maxKeyLength);
    })

    afterAll(async () => {
        const users = await client.users.list();
        for await (const user of users) {
            await client.users.delete(user.username ?? "");
        }
    });

    test('test create user', async () => {
        const response = await client.users.create({
            email: email,
            username: username,
            apiRoles: ["administrator"]
        });

        console.log(response)

        expect(response.username).toBe(username);
        expect(response.email).toBe(email);
        expect(response.apiRoles).toEqual(["administrator"]);
        expect(response.enabled).toBe(false);
    });

    test('test update user', async () => {
        const createResponse = await client.users.create({
            email: email,
            username: username,
            apiRoles: ["administrator"]
        });

        expect(createResponse.apiRoles).toEqual(["administrator"]);
        expect(createResponse.enabled).toBe(false);

        const updateResponse = await client.users.update(username,{
            enabled: true,
            apiRoles: ["corpus_administrator"]
        });

        expect(updateResponse.apiRoles).toEqual(["corpus_administrator"]);
        expect(updateResponse.enabled).toBe(true);
    });

    test('test delete user', async () => {
        const createResponse = await client.users.create({
            email: email,
            username: username,
            apiRoles: ["administrator"]
        });

        const deleteResponse = await client.users.delete(createResponse.username ?? "");

        expect(deleteResponse).toBeNull();
    });

    test('test get user', async () => {
        const createResponse = await client.users.create({
            email: email,
            username: username,
            apiRoles: ["administrator"]
        });

        const getResponse = await client.users.get(createResponse.username ?? "");

        expect(getResponse.username).toBe("test-user");
        expect(getResponse.email).toBe("test-email@example.com");
        expect(getResponse.apiRoles).toEqual(["administrator"]);
        expect(getResponse.enabled).toBe(false);
    });

    test('test list users', async () => {
        const usernames: string[] = [];

        for (let index = 0; index < 2; index++) {
            const createResponse = await client.users.create({
                email: `test-email-${index}@example.com`,
                username: `test-user-${index}`,
                apiRoles: ["administrator"]
            });
            if (createResponse.username) usernames.push(createResponse.username);
        }

        const users = await client.users.list();
        const filteredUsers = users.data.filter(user =>
            user.username?.startsWith("test-user-")
        );

        for (const user of filteredUsers) {
            expect(usernames).toContain(user.username);
        }
    });
});
