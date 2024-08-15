/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The value type of the filter.
 */
export type FilterAttributeType =
    | "integer"
    | "real_number"
    | "text"
    | "boolean"
    | "list[integer]"
    | "list[real_number]"
    | "list[text]";

export const FilterAttributeType = {
    Integer: "integer",
    RealNumber: "real_number",
    Text: "text",
    Boolean: "boolean",
    ListInteger: "list[integer]",
    ListRealNumber: "list[real_number]",
    ListText: "list[text]",
} as const;
