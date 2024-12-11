import { Plugin } from 'obsidian';
import { StatusBarIcon } from '../ui/StatusBarIcon';

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

        // // Add icon span with SVG
        // this.iconSpan = this.statusBarItem.createSpan({cls: 'status-bar-item-icon'});
        // this.iconSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svg-icon"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7v10m4-10v10m4-10l2 10"/></g></svg>`;
        // this.iconSpan.setAttribute('aria-label', 'Sample Plugin');
        // this.iconSpan.setAttribute('data-tooltip-position', 'top');

        // Create the status bar icon
        this.icon = new StatusBarIcon(this.statusBarItem); // Use the new icon component

        // Add text span with default text
        this.textSpan = this.statusBarItem.createSpan({cls: 'status-bar-item-segment'});
        this.textSpan.setText('Initializing...');
    }

    // Simple text update
    public updateText(text: string) {
        this.textSpan.setText(text);
    }

    // Show/hide the status bar
    public updateVisibility(show: boolean) {
        this.statusBarItem.style.display = show ? 'flex' : 'none';
    }

    // Make clickable/not clickable
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

    // Set click handler
    public setClickHandler(handler: () => void) {
        this.statusBarItem.onclick = handler;
    }

    // Remove click handler
    public removeClickHandler() {
        this.statusBarItem.onclick = null;
    }
}