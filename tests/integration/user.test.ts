import { VectaraClient } from "../../src";


describe('Test User Manager', () => {
    const client = new VectaraClient({
        apiKey: process.env.APIKEY,
    });

    afterEach(async () => {
        const users = await client.users.list();
        for await (const user of users) {
            await client.users.delete(user.username ?? "");
        }
    });

    test('test create user', async () => {
        const response = await client.users.create({
            email: "test-email@example.com",
            username: "test-user",
            apiRoles: ["administrator"]
        });

        expect(response.username).toBe("test-user");
        expect(response.email).toBe("test-email@example.com");
        expect(response.apiRoles).toEqual(["administrator"]);
        expect(response.enabled).toBe(false);
    });

    test('test update user', async () => {
        const createResponse = await client.users.create({
            email: "test-email@example.com",
            username: "test-user",
            apiRoles: ["administrator"]
        });

        expect(createResponse.apiRoles).toEqual(["administrator"]);
        expect(createResponse.enabled).toBe(false);

        const updateResponse = await client.users.update("test-user",{
            enabled: true,
            apiRoles: ["corpus_administrator"]
        });

        expect(updateResponse.apiRoles).toEqual(["corpus_administrator"]);
        expect(updateResponse.enabled).toBe(true);
    });

    test('test delete user', async () => {
        const createResponse = await client.users.create({
            email: "test-email@example.com",
            username: "test-user",
            apiRoles: ["administrator"]
        });

        const deleteResponse = await client.users.delete(createResponse.username ?? "");

        expect(deleteResponse).toBeNull();
    });

    test('test get user', async () => {
        const createResponse = await client.users.create({
            email: "test-email@example.com",
            username: "test-user",
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
                email: "test-email@example.com",
                username: `test-user-${index}`,
                apiRoles: ["administrator"]
            });
            if (createResponse.username) usernames.push(createResponse.username);
        }

        const users = await client.users.list();

        for await (const user of users) {
            expect(usernames).toContain(user.username);
        }
    });
});
