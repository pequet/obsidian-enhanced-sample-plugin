/**
 * Converts text to Title Case, handling common articles and conjunctions correctly
 * @param text The string to convert
 * @returns The string in Title Case
 */
export function toTitleCase(text: string): string {
    const minorWords = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'up'];
    
    return text.toLowerCase().split(' ').map((word, index) => {
        if (index === 0 || index === text.length - 1) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        if (minorWords.includes(word)) {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

