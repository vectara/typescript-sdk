/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface VectaraEnvironmentUrls {
    default: string;
    auth: string;
}

export const VectaraEnvironment = {
    Production: {
        default: "https://api.vectara.io",
        auth: "https://auth.vectara.io",
    },
} as const;

export type VectaraEnvironment = typeof VectaraEnvironment.Production;
