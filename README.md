# Obsidian Enhanced Sample Plugin

This enhanced sample plugin for Obsidian demonstrates a modular and scalable approach to plugin development, focusing on code organization and maintainability. It builds upon the original Obsidian Sample Plugin by introducing a more structured and maintainable architecture.

## Project Structure and Architectural Improvements

### Modular Directory Structure

```
obsidian-enhanced-sample-plugin/
├── api
│   └── v1
│       ├── index.ts
│       └── strings.ts
├── commands
│   ├── convertSelection.ts
│   └── index.ts
├── components
│   ├── SettingsTab.ts
│   └── StatusBar.ts
├── events
│   ├── fileEvents.ts
│   ├── index.ts
│   └── intervalEvents.ts
├── ui
│   └── StatusBarIcon.ts
├── utils
│   ├── banner.ts
│   ├── index.ts
│   └── strings.ts
├── README.md
├── main.ts
├── package.json
├── settings.ts
└── styles.css
```

### Key Design Principles

1. **Separation of Concerns**
   - Each directory represents a specific domain of functionality.
   - Promotes clean, organized, and easily navigable codebase.

2. **Dynamic Registration Mechanism**
   - Centralized registration of:
     - APIs (`api/index.ts`)
     - Commands (`commands/index.ts`)
     - Events (`events/index.ts`)
     - Utilities (`utils/index.ts`)
   - Eliminates manual hardcoding in `main.ts`.
   - Simplifies adding new features.

3. **Scalability and Extensibility**
   - Modular architecture allows easy addition of new components.
   - Reduces cognitive load when navigating and maintaining the plugin.
   - Follows best practices in TypeScript and plugin development.

### Benefits

- Improved code readability.
- Easier maintenance.
- Simplified feature addition.
- Better separation of concerns.
- More predictable and manageable codebase.

## Future Enhancements

- More functions and features will be added to the enhanced-sample-plugin.
- Modals, Ribbons, and Leaf Panels will be added. 

## Publishing Your Plugin

If you're using this as a template for your own plugin, see  the documentation in the `/docs` directory for guides and instructions on how to publish your plugin.

## License

This plugin is for educational purposes only, and there is no guarantee that it does what it is supposed to do.

## Support

You can buy me a coffee: 
https://buymeacoffee.com/pequet 

☕️



