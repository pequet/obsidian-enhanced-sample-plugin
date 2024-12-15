import { App, Plugin } from 'obsidian';
import { default as PersistOutputPlugin } from '../main';

// Import all event modules
import * as FileEvents from './fileEvents';
import * as IntervalEvents from './intervalEvents';
// ... import other event modules

// Define all event modules
const EVENT_MODULES = {
    FileEvents,
    IntervalEvents
} as const;

/**
 * Registers all event listeners and intervals defined in the EVENT_MODULES.
 * 
 * This function iterates through all event modules and registers their event handlers
 * and intervals with the Obsidian app. It handles two types of registrations:
 * 1. Intervals - Identified by returning a numeric interval ID
 * 2. Event listeners - Identified by returning an event reference
 * 
 * Each registered listener/interval is stored in the plugin's eventListeners array
 * along with its cleanup function for proper disposal later.
 * 
 * @param app - The Obsidian App instance
 * @param plugin - The PersistOutputPlugin instance where listeners will be stored
 * @returns void
 */
export function registerAllEvents(app: App, plugin: PersistOutputPlugin) {
    plugin.eventListeners = [];
    console.log('Starting event registration...');

    Object.values(EVENT_MODULES).forEach(module => {
        Object.values(module).forEach(eventRegistration => {
            if (typeof eventRegistration === 'function') {
                const result = eventRegistration(app);
                
                if (typeof result === 'number') {
                    // It's an interval
                    plugin.eventListeners.push({
                        type: 'interval',
                        cleanup: () => window.clearInterval(result)
                    });
                    console.log('Registered interval:', eventRegistration.name);
                } else {
                    // It's an event reference
                    plugin.eventListeners.push({
                        type: 'event',
                        cleanup: () => app.vault.offref(result)
                    });
                    console.log('Registered event:', eventRegistration.name);
                }
            }
        });
    });

    console.log(`Total registered listeners: ${plugin.eventListeners.length}`);
}

/**
 * Unregisters all event listeners and intervals that were previously registered.
 * 
 * This function iterates through the plugin's eventListeners array and calls the cleanup
 * function for each registered listener/interval. After cleanup, it clears the array.
 * The function handles both interval and event type listeners.
 * 
 * @param plugin - The PersistOutputPlugin instance containing the listeners to unregister
 * @returns void
 */
export function unregisterAllEvents(plugin: PersistOutputPlugin) {
    console.log('Starting to unregister all events...');
    
    plugin.eventListeners?.forEach((listener, index) => {
        console.log(`Cleaning up ${listener.type} listener #${index}`);
        listener.cleanup();
    });

    plugin.eventListeners = [];
    console.log('All events unregistered and array cleared');
}