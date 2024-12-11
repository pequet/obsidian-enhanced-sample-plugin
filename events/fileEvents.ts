import { App, TFile } from 'obsidian';

/**
 * Registers an event handler for whenever a file is saved.
 *
 * @param {App} app - The Obsidian application instance.
 * @returns {Function} - The event handler function.
 */
export function registerFileSaveEvent(app: App) {
    return app.vault.on('modify', (file: TFile) => {
        console.log('Enhanced Sample Plugin: Save event triggered for:', file.path);
    });
}