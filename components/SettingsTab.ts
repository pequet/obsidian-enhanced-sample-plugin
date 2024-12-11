import { App, PluginSettingTab, Setting } from 'obsidian';
import type EnhancedSamplePlugin from '../main';


/**
 * The settings tab for the Enhanced Sample Plugin.
 *
 * @class SettingsTab
 * @extends PluginSettingTab
 * @param {App} app - The Obsidian application instance.
 * @param {EnhancedSamplePlugin} plugin - The Enhanced Sample Plugin instance.
 */
export class SettingsTab extends PluginSettingTab {
    plugin: EnhancedSamplePlugin;

    constructor(app: App, plugin: EnhancedSamplePlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;
        containerEl.empty();

        // Sample setting
        new Setting(containerEl)
            .setName('Sample Setting')
            .setDesc('A sample setting description')
            .addText(text => text
                .setPlaceholder('Enter value')
                .setValue(this.plugin.settings.mySetting)
                .onChange(async (value) => {
                    this.plugin.settings.mySetting = value;
                    await this.plugin.saveSettings();
                }));

        // Clear data on disable setting
        new Setting(containerEl)
        .setName('Clear data on disable')
        .setDesc('When enabled, all plugin settings will be cleared when the plugin is disabled')
        .addToggle(toggle => toggle
            .setValue(this.plugin.settings.clearDataOnDisable)
            .onChange(async (value) => {
                this.plugin.settings.clearDataOnDisable = value;
                await this.plugin.saveSettings();
            }));
    }
}