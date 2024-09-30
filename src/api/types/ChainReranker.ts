/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../index";

export interface ChainReranker {
    type: "chain";
    /** Specify an array of rerankers to search results consecutively after each other. */
    rerankers: Vectara.SearchReranker[];
}