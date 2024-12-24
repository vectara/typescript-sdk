/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../../../../index";

/**
 * @example
 *     {
 *         key: "my-corpus"
 *     }
 */
export interface CreateCorpusRequest {
    /**
     * The API will make a best effort to complete the request in the specified seconds or time out.
     */
    requestTimeout?: number;
    /**
     * The API will make a best effort to complete the request in the specified milliseconds or time out.
     */
    requestTimeoutMillis?: number;
    key: Vectara.CorpusKey;
    /** The name for the corpus. This value defaults to the key. */
    name?: string;
    /** Description of the corpus. */
    description?: string;
    /** Queries made to this corpus are considered answers, and not questions. */
    queriesAreAnswers?: boolean;
    /** Documents inside this corpus are considered questions, and not answers. */
    documentsAreQuestions?: boolean;
    /**
     * *Deprecated*: Use `encoder_name` instead.
     *
     */
    encoderId?: string;
    /** The encoder used by the corpus. */
    encoderName?: string;
    /**
     * The new filter attributes of the corpus.
     * If unset then the corpus will not have filter attributes.
     *
     */
    filterAttributes?: Vectara.FilterAttribute[];
    /**
     * A custom dimension is an additional numerical field attached to a document part. You
     * can then multiply this numerical field with a query time custom dimension of the same
     * name. This allows boosting (or burying) document parts for arbitrary reasons.
     * This feature is only enabled for Pro and Enterprise customers.
     *
     */
    customDimensions?: Vectara.CorpusCustomDimension[];
}
