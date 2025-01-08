import * as core from "./core";

/**
 * Base client class that handles common API client functionality
 */
export class APIClient {
    protected readonly _headers: Record<string, core.Supplier<string>>;

    constructor(headers: Record<string, core.Supplier<string>> = {}) {
        this._headers = headers;
    }

    /**
     * Gets all headers as a plain Record<string, string>
     */
    public async getAllHeaders(): Promise<Record<string, string>> {
        const resolvedHeaders: Record<string, string> = {};
        
        for (const [key, supplier] of Object.entries(this._headers)) {
            const value = await core.Supplier.get(supplier);
            if (value != null) {
                resolvedHeaders[key] = value;
            }
        }

        return resolvedHeaders;
    }
}
