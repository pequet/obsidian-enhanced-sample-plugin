/**
 * Registers a sample interval that logs a message every 30 seconds.
 * 
 * This function sets up a recurring interval that prints a debug message
 * to the console periodically. The interval continues until cleared.
 * 
 * @returns {number} The interval ID that can be used to clear the interval
 */
export function registerSampleInterval() {
    const intervalId = window.setInterval(() => {
        console.log('Persist Output Plugin interval check 30 seconds!');
    }, 1 * 60 * 1000); // Milliseconds

    return intervalId;  // Just return the ID
}