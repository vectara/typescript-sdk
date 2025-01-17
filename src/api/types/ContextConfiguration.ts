/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Configuration on the presentation of each document part in the result set.
 */
export interface ContextConfiguration {
    /**
     * The number of characters that are shown before the matching document part.
     * This is useful to show the context of the document part in the wider document.
     * Ignored if `sentences_before` is set.
     * Vectara will capture the full sentence that contains the captured characters,
     * to not lose the meaning caused by a truncated word or sentence.
     */
    charactersBefore?: number;
    /**
     * The number of characters that are shown after the matching document part.
     * This is useful to show the context of the document part in the wider document.
     * Ignored if `sentences_after` is set.
     * Vectara will capture the full sentence that contains the captured characters,
     * to not lose the meaning caused by a truncated word or sentence.
     */
    charactersAfter?: number;
    /**
     * The number of sentences that are shown before the matching document part.
     * This is useful to show the context of the document part in the wider document.
     */
    sentencesBefore?: number;
    /**
     * The number of sentences that are shown after the matching document part.
     * This is useful to show the context of the document part in the wider document.
     */
    sentencesAfter?: number;
    /**
     * The tag that wraps the document part at the start. This is often used to
     * provide a start HTML/XML tag or some other delimiter you can use in an
     * application to understand where to provide highlighting in your UI and
     * understand where the context before ends and the document part begins.
     */
    startTag?: string;
    /**
     * The tag that wraps the document part at the end. This is often used to
     * provide a start HTML/XML tag or some other delimiter you can use in an
     * application to understand where to provide highlighting in your UI and
     * understand where the context before ends and the document part begins.
     */
    endTag?: string;
}
