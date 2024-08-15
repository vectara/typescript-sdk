/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Vectara from "../index";

export class ForbiddenError extends errors.VectaraError {
    constructor(body: Vectara.Error_) {
        super({
            message: "ForbiddenError",
            statusCode: 403,
            body: body,
        });
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
