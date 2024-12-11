/**
 * Registers an interval that logs a message periodically.
 *
 * @returns The interval id, which can be used to clear the interval.
 */
export function registerSampleInterval(): number {
    return window.setInterval(() => {
        console.log('Enhanced Sample plugin interval check');
    }, 5 * 60 * 1000);
}