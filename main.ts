import { Plugin } from 'obsidian';
import { SettingsTab } from './components/SettingsTab';
import { StatusBar, setupStatusBar } from './components/StatusBar';
import { registerAllEvents, unregisterAllEvents } from './events';
import { registerAllUtils } from './utils';
import { registerAllCommands } from './commands';
import { registerAllAPIs } from './api/v1';
import { DEFAULT_SETTINGS, type EnhancedSamplePluginSettings } from './settings';
import { EnhancedSamplePluginAPI } from './api/types';
import { EventListener } from './types';

const PLUGIN_META = {

    name:      "Enhanced Sample Plugin",
    version:   "1.0.1",
    author:    "Benjamin Pequet",
    github:    "https://github.com/pequet/obsidian-enhanced-sample-plugin",
	logo:      `
				▛  ▜

				▙  ▟
				`
};	

/** 
 * Overview
 * This plugin provides a basic structure for developing an Obsidian plugin.
 * It includes components for managing settings, events, commands, utils, and APIs.
 * 
 * Key Features:
 * - Settings management using the SettingsTab component.
 * - Event registration using the registerAllEvents function.
 * - Command registration using the registerAllCommands function.
 * - Util functions registration using the registerAllUtils function.
 * - API registration using the registerAllAPIs function.
 * 
 * Usage:
 * - Create a new plugin instance and register components using the respective functions.
 */

// Remember to rename these classes and interfaces!

export default class EnhancedSamplePlugin extends Plugin {
	settings: EnhancedSamplePluginSettings;
    statusBar: StatusBar;
    api: EnhancedSamplePluginAPI;
    eventListeners: EventListener[] = [];

	async onload() {
		console.log('Loading Enhanced Sample Plugin');

		// Load settings
		await this.loadSettings();

		// Register APIs first so they're available
        registerAllAPIs(this);

		// Register utils
        registerAllUtils(this);

		// Add settings tab
		this.addSettingTab(new SettingsTab(this.app, this));

		// Status bar
		this.statusBar = new StatusBar(this); // Initialize 
		setupStatusBar(this); 

        // Register all events (typically asynchronous)
        await registerAllEvents(this.app, this);

		// Register commands
        await registerAllCommands(this);

		// Banner
		const logoColor = this.getAnsiColorFromPalette(3, 6); 
		console.log(this.renderBanner(this.trimLogo(PLUGIN_META.logo), PLUGIN_META, { logoColor: logoColor, inlineMeta: false, excludeKeys: ["name"], hideKeys: ["logo"] }));

	} 

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }
 
    async saveSettings() {
        await this.saveData(this.settings);
    }

    onunload() {
        console.log('Unloading Enhanced Sample Plugin');
        
        // Unregister all events
        unregisterAllEvents(this);

        if (this.settings.clearDataOnDisable) {
            console.log('Clearing Enhanced Sample Plugin settings on unload');
            this.saveData(null);
        }
    }
}