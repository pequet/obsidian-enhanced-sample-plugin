export interface EnhancedSamplePluginSettings {
    mySetting: string;
    clearDataOnDisable: boolean;
}

export const DEFAULT_SETTINGS: EnhancedSamplePluginSettings = {
    mySetting: 'default',
    clearDataOnDisable: false
};