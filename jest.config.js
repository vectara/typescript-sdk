/** @type {import('jest').Config} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testEnvironmentOptions: {
        dotenv: {
            path: '.env'
        }
    },
    testTimeout: 60000,
};
