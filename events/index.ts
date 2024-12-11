import { App, Plugin } from 'obsidian';

// Import all event modules
import * as FileEvents from './fileEvents';
import * as IntervalEvents from './intervalEvents';
// ... import other event modules

// Define all event modules
const EVENT_MODULES = {
    FileEvents,
    IntervalEvents
    // ... other event modules
} as const;

/**
 * Registers all events from all modules on the plugin.
 * 
 * @param app The Obsidian application instance.
 * @param plugin The Obsidian plugin instance.
 * @returns void
 */
export function registerAllEvents(app: App, plugin: Plugin) {
    // Register all events from all modules
    Object.values(EVENT_MODULES).forEach(module => {
        Object.values(module).forEach(eventRegistration => {
            if (typeof eventRegistration === 'function') {
                const event = eventRegistration(app);
                // Check if the event is a number (interval in milliseconds)
                if (typeof event === 'number') {
                    plugin.registerInterval(event);
                } else {
                    plugin.registerEvent(event);
                }
            }
        });
    });
}