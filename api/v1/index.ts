/**
 * Exposes the toTitleCase utility as an example API from anywhere in your vault (Dataview, CustomJS, etc).
 *
 * Example usage from JavaScript console:
 * ```js
 * const plugin = app.plugins.plugins['enhanced-sample-plugin'];
 * if (plugin?.api?.v1) {
 *     await plugin.api.v1.toTitleCaseFromAPI('hello, world!');
 * }
 * ```
 *
 * Example usage from TypeScript:
 * ```ts
 * const plugin = this.app.plugins.plugins['enhanced-sample-plugin'] as EnhancedSamplePlugin;
 * if (plugin?.api?.v1) {
 *     await plugin.api.v1.toTitleCaseFromAPI('hello, world!');
 * }
 * ```
 */

import EnhancedSamplePlugin from '../../main';
import { EnhancedSamplePluginAPI } from '../types'; 

// Import all API modules
import * as StringOutputAPI from './strings';
// ... import other API modules

// Define all API modules
const API_MODULES = {
    StringOutputAPI
    // ... other API modules
} as const;

// Stop editing this file after this point 

// Create the API object from all modules
export const API: EnhancedSamplePluginAPI = {
    v1: {
        toTitleCaseFromAPI: StringOutputAPI.toTitleCaseFromAPI // Ensure this is correctly assigned
    }
};

/**
 * Registers all APIs on the plugin instance instead of app
 * 
 * @param plugin The EnhancedSamplePlugin instance
 * @returns void
 */
export function registerAllAPIs(plugin: EnhancedSamplePlugin) {
    plugin.api = {
        v1: API.v1 // Ensure the v1 property is correctly assigned
    };
}






