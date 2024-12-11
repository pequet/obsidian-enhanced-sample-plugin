export interface EnhancedSamplePluginAPI {
    v1: {
        toTitleCaseFromAPI: (output: string, id?: string) => Promise<string>;
    };
}

declare module "obsidian" {
    interface Plugin {
        api?: EnhancedSamplePluginAPI;
    }
}
