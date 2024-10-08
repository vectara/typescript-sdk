/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Reranker that is specific to the customer.
 */
export interface CustomerSpecificReranker {
    type: "customer_reranker";
    /**
     * The ID of the reranker. Current reranker that may be used by Scale customers is rnk_272725719.
     * Do not specify the MMR reranker ID here, and instead use the MMR reranker object type.
     * **Deprecated**: Use `reranker_name` instead.
     */
    rerankerId?: string;
    /** The name of the reranker. Do not specify the MMR reranker name here. Instead use the MMR reranker object type. */
    rerankerName?: string;
}
