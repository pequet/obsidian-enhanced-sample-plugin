/**
 * Creates a debounced version of a callback function that delays its execution until after a specified time has elapsed
 * since the last time it was invoked.
 * 
 * This is useful for rate-limiting function calls that would otherwise be called very frequently,
 * such as handling window resize events, search input changes, or saving files.
 * 
 * @param delay - The number of milliseconds to delay execution after the last call
 * @param callback - The function to be debounced. Takes a single argument of any type.
 * @returns A debounced version of the callback function that will only execute after the specified delay
 * @example
 * ```ts
 * const debouncedSave = debounce(1000, (file) => {
 *   console.log('Saving file:', file.path);
 * });
 * 
 * // Called multiple times but will only execute once after 1 second of inactivity
 * debouncedSave(file);
 * ```
 */
export function debounce(delay: number, callback: (arg: any) => void) {
    let timeoutId: number | null = null;

    return (arg: any) => {
        console.log('Debounce function called with arg:', arg);
        if (timeoutId!== null) {
            console.log('Clearing existing timeout');
            window.clearTimeout(timeoutId);
        }

        console.log('Setting new timeout with delay:', delay);
        timeoutId = window.setTimeout(() => {
            console.log('Timeout callback executed');
            callback(arg);
            timeoutId = null;
            console.log('Timeout callback finished');
        }, delay);
    };
}