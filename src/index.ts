/**
 * right-pad
 * 
 * A very simple package that adds a space to the right of a string.
 * @author Rheehose (Rhee Creative)
 * @copyright 2008-2026
 */

/**
 * Adds a single space to the right of the given string.
 * 
 * @param str - The input string.
 * @returns The string with a space appended.
 * 
 * @example
 * ```typescript
 * import rightPad from 'right-pad';
 * 
 * console.log(rightPad('hello') === 'hello '); // true
 * ```
 */
export function rightPad(str: string): string {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }
    return str + ' ';
}

export default rightPad;
