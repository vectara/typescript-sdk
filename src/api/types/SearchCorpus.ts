/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vectara from "../index.js";

/**
 * Configuration for search parameters specific to a single corpus within a customer account, including filters and semantics.
 */
export interface SearchCorpus {
    custom_dimensions?: Vectara.CustomDimensions;
    /** The filter string used to narrow the search based on metadata attributes. The query against this corpus will be confined to document parts that match the `metadata_filter`. Only metadata fields set as `filter_attributes` on the corpus can be filtered. Filter syntax is similar to a SQL WHERE clause. See [metadata filters documentation](https://docs.vectara.com/docs/learn/metadata-search-filtering/filter-overview) for more information. */
    metadata_filter?: string;
    /** How much to weigh lexical scores compared to the embedding score. 0 means lexical search is not used at all, and 1 means only lexical search is used. */
    lexical_interpolation?: number;
    semantics?: Vectara.SearchSemantics;
}
