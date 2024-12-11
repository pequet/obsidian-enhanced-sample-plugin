import { Plugin, Editor } from 'obsidian';

// Import all command modules
import * as ConvertSelectionCommands from './convertSelection';
// ... import other command modules

// Define all command modules
const COMMAND_MODULES = {
    ConvertSelectionCommands,
    // ... other command modules
} as const;

// Stop editing this file after this point 

/** 
 * Register all commands from all modules on the plugin.
 * 
 * @param plugin The Obsidian plugin instance.
 * @returns void
 */
export function registerAllCommands(plugin: Plugin) {    
    Object.values(COMMAND_MODULES).forEach(module => {
        // Process each module
        Object.values(module).forEach(command => {
            if (typeof command === 'object' && command.id) {
                // Register the command
                const boundCommand = {
                    ...command,
                    editorCallback: (editor: Editor) => {

                        return command.editorCallback(editor, plugin.Utils);
                    }
                };
                plugin.addCommand(boundCommand);
            }
        });
    });
} 