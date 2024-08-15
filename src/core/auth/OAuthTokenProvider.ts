/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../core";
import { Auth } from "../../api/resources/auth/client/Client";

/**
 * The OAuthTokenProvider retrieves an OAuth access token, refreshing it as needed.
 * The access token is then used as the bearer token in every authenticated request.
 */
export class OAuthTokenProvider {
    private readonly BUFFER_IN_MINUTES = 2;
    private readonly _clientId: core.Supplier<string | undefined>;
    private readonly _clientSecret: core.Supplier<string | undefined>;
    private readonly _authClient: Auth;
    private _accessToken: string | undefined;
    private _expiresAt: Date;

    constructor({
        clientId,
        clientSecret,
        authClient,
    }: {
        clientId: core.Supplier<string | undefined>;
        clientSecret: core.Supplier<string | undefined>;
        authClient: Auth;
    }) {
        this._clientId = clientId;
        this._clientSecret = clientSecret;
        this._authClient = authClient;
        this._expiresAt = new Date();
    }

    public async getToken(): Promise<string> {
        if (this._accessToken && this._expiresAt > new Date()) {
            return this._accessToken;
        }
        return this.refresh();
    }

    private async refresh(): Promise<string> {
        const tokenResponse = await this._authClient.getToken({
            clientId: await core.Supplier.get(this._clientId),
            clientSecret: await core.Supplier.get(this._clientSecret),
        });

        this._accessToken = tokenResponse.accessToken;
        this._expiresAt = this.getExpiresAt(tokenResponse.expiresIn, this.BUFFER_IN_MINUTES);
        return this._accessToken;
    }

    private getExpiresAt(expiresInSeconds: number, bufferInMinutes: number): Date {
        const now = new Date();
        return new Date(now.getTime() + expiresInSeconds * 1000 - bufferInMinutes * 60 * 1000);
    }
}
