import { Plugin } from 'obsidian';

// Import all utility modules
import * as BannerUtils from './banner';
import * as StringUtils from './strings';
// ... import other utility modules

// Define all utility modules
const UTILITY_MODULES = {
    BannerUtils,
    StringUtils,
    // ... other utility modules
} as const;

// Stop editing this file after this point 

// Create type that includes all utility functions
type UtilityModules = typeof UTILITY_MODULES;
type UtilityFunctions = {
    [K in keyof UtilityModules]: UtilityModules[K];
}[keyof UtilityModules];

// Extend Plugin type to include all utilities
declare module 'obsidian' {
    interface Plugin {
        Utils: typeof Utils;
        [K: string]: any;
    }
}

// Create the Utils object
export const Utils = Object.entries(UTILITY_MODULES).reduce((acc, [_, module]) => {
    // Process each module
    Object.entries(module).forEach(([name, util]) => {
        // Add the utility function to the accumulator
        acc[name] = util;
    });
    // Return the accumulator
    return acc;
}, {} as Record<string, Function>);

/**
 * Registers all utility functions from the Utils object on the plugin.
 * 
 * @param plugin The Obsidian plugin instance.
 * @returns void
 */
export function registerAllUtils(plugin: Plugin) {
    // Set the Utils object on the plugin itself
    (plugin as any).Utils = Utils;
    
    // Register all utils from all modules
    Object.values(UTILITY_MODULES).forEach(module => {
        // Process each module
        Object.values(module).forEach(util => {
            // Check if the utility is a function
            if (typeof util === 'function') {
                // Add the utility function to the plugin
                (plugin as any)[util.name] = util;
            }
        });
    });
    return Utils;
}