import { Editor } from 'obsidian';

/**
 * Example command from the Enhanced Sample Plugin that shows how to interact with the current selection.
 */
export const convertToTitleCase = {
    id: 'convert-to-title-case',
    name: 'Convert selection to Title Case',
    editorCallback: (editor: Editor, utils: any) => {
        const selection = editor.getSelection();
        if (selection) {
            const newText = utils.toTitleCase(selection);
            editor.replaceSelection(newText);
        }
    }
};