import { Plugin } from 'obsidian';
import { Utils } from './utils';

/**
 * Extends the Obsidian Plugin interface to include our utility functions.
 * 
 * This declaration merges with Obsidian's existing Plugin interface to:
 * 1. Add our Utils object containing all utility functions
 * 2. Allow dynamic properties to be added to Plugin instances
 *    (needed because we dynamically add utility functions to the plugin)
 */
declare module 'obsidian' {
    interface Plugin {
        Utils: typeof Utils;
        [key: string]: any;  // To allow dynamic properties
    }
}

/**
 * Represents an event listener or interval that needs to be tracked and cleaned up.
 * 
 * This interface is used to store both event listeners and intervals in a consistent way,
 * allowing them to be properly cleaned up when the plugin is disabled.
 * 
 * @property type - Indicates whether this is an event listener ('event') or an interval timer ('interval')
 * @property cleanup - A function that handles proper cleanup - either removing the event listener
 *                    or clearing the interval when called
 */
export interface EventListener {
    type: 'event' | 'interval';
    cleanup: () => void;
}