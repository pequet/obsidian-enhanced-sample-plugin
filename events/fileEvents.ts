import { App, TFile } from 'obsidian';
import { Utils } from '../utils';

/**
 * Registers an event listener for file modifications in the Obsidian vault.
 * 
 * This function sets up two types of logging:
 * 1. An immediate console log that fires on every file modification
 * 2. A debounced log that only fires after the specified delay of inactivity
 * 
 * @param app - The Obsidian App instance
 * @returns An event reference that can be used to unregister the listener
 */
export function registerFileSaveEvent(app: App) {

    const debouncedLog = Utils.debounce(5000, (file: TFile) => {
        console.log('DEBOUNCED Persist Output Plugin: Save event triggered for:', file.path);
    });

    const listener = app.vault.on('modify', (file: TFile) => {
        // Immediate feedback
        console.log('IMMEDIATE Persist Output Plugin: Save event triggered for:', file.path);
        // Call the debounced log function
        debouncedLog(file);
    });

    return listener;
} 