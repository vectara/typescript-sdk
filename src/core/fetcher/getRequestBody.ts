export declare namespace GetRequestBody {
    interface Args {
        body: unknown;
        type: "json" | "file" | "bytes" | "urlencoded" | "other";
    }
}

export async function getRequestBody({ body, type }: GetRequestBody.Args): Promise<BodyInit | undefined> {
    if (type.includes("json")) {
        return JSON.stringify(body);
    } else if (type === "urlencoded") {
        const params = new URLSearchParams();
        if (typeof body === "object" && body !== null) {
            Object.entries(body).forEach(([key, value]) => {
                params.append(key, String(value));
            });
        }
        return params.toString();
    } else {
        return body as BodyInit;
    }
}
