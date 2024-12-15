export class StatusBarIcon {
    private iconSpan: HTMLElement;

    constructor(parentElement: HTMLElement) {
        this.iconSpan = parentElement.createSpan({cls: 'status-bar-item-icon'});
        this.setIcon();
        this.setAccessibilityAttributes();
    }

    private setIcon() {
        this.iconSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svg-icon"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 12h18M12 3v18"/></g></svg>`;
    }

    private setAccessibilityAttributes() {
        this.iconSpan.setAttribute('aria-label', 'Sample Plugin');
        this.iconSpan.setAttribute('data-tooltip-position', 'top');
    }

    public getElement(): HTMLElement {
        return this.iconSpan;
    }
}