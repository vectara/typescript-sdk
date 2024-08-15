/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../index";

export interface SearchCorpus {
    customDimensions?: Vectara.CustomDimensions;
    /**
     * The filter string to narrow the search to according to metadata attributes. The query against this
     * corpus will be confined to document parts that match the `metadata_filter`. Only metadata
     * set as `filter_attributes` on the corpus can be filtered. Filter syntax is similiar to
     * a SQL where clause. See [metadata filters documentation](https://docs.vectara.com/docs/learn/metadata-search-filtering/filter-overview)
     * for more information.
     */
    metadataFilter?: string;
    /** How much to weigh lexical scores compared to the embedding score. 0 means lexical search is not used at all, and 1 means only lexical search is used. */
    lexicalInterpolation?: number;
    semantics?: Vectara.SearchSemantics;
}
