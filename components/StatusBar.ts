import { Plugin } from 'obsidian';
import { StatusBarIcon } from '../ui/StatusBarIcon';

/**
 * Sets up the status bar with initial text, click handler and clickable state
 * @param plugin Plugin instance containing the status bar
 */
export function setupStatusBar(plugin: Plugin) { // Specify the type here
    // Example: Update text
    plugin.statusBar.updateText('Ready!');

    // Example: Make it clickable with a handler
    plugin.statusBar.setClickable(true, 'Click me!');
    plugin.statusBar.setClickHandler(() => {
        // Do something when clicked
        plugin.statusBar.updateText('Clicked!');
        
        // Example: Make not clickable after click
        plugin.statusBar.setClickable(false, 'Processing...');
        
        // Example: Re-enable after 2 seconds
        setTimeout(() => {
            plugin.statusBar.setClickable(true, 'Click me again!');
        }, 2000);
    });
}

/**
 * Manages a status bar item with text, icon and click handling capabilities.
 * Note: Status bar functionality is not available on mobile devices.
 */
export class StatusBar {
    private statusBarItem: HTMLElement;
    private iconSpan: HTMLElement; 
    private textSpan: HTMLElement;
    icon: any;

    constructor(private plugin: Plugin) {
        this.initialize();
    }

    private initialize() {
        // Create status bar item (won't work on mobile)
        this.statusBarItem = this.plugin.addStatusBarItem();
        this.statusBarItem.addClass('enhanced-sample-plugin');
        this.statusBarItem.addClass('enhanced-sample-plugin-status');

        // Create the status bar icon
        this.icon = new StatusBarIcon(this.statusBarItem); // Use the icon component from the ui folder

        // Add text span with default text
        this.textSpan = this.statusBarItem.createSpan({cls: 'status-bar-item-segment'});
        this.textSpan.setText('Initializing...');
    }

    /** Updates the status bar text */
    public updateText(text: string) {
        this.textSpan.setText(text);
    }

    /** Shows or hides the status bar */
    public updateVisibility(show: boolean) {
        this.statusBarItem.style.display = show ? 'flex' : 'none';
    }

    /** Makes the status bar clickable/not clickable and optionally updates text */
    public setClickable(clickable: boolean, text?: string) {
        if (clickable) {
            this.statusBarItem.addClass('mod-clickable');
            this.statusBarItem.removeClass('mod-muted');
            if (text) this.textSpan.setText(text);
        } else {
            this.statusBarItem.removeClass('mod-clickable');
            this.statusBarItem.addClass('mod-muted');
            if (text) this.textSpan.setText(text);
        }
    }

    /** Sets click handler for the status bar */
    public setClickHandler(handler: () => void) {
        this.statusBarItem.onclick = handler;
    }

    /** Removes click handler from the status bar */
    public removeClickHandler() {
        this.statusBarItem.onclick = null;
    }
}