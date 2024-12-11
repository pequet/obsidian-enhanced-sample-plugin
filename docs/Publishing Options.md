# Publishing Options for Obsidian Plugins

This document outlines the different approaches to publishing your Obsidian plugin.

## 1. Self-Publishing on GitHub

This is the simplest approach if you just want to make your plugin available for others to use.

### Required Files
- `main.js` (compiled JavaScript)
- `manifest.json`
- `styles.css` (if using styles)
- `README.md`

### Publishing Options

#### Option A: Compiled-Only Release
- Include only compiled files (`main.js` and supporting files)
- Keep TypeScript source private
- Suitable when you want to:
  - Maintain private source code
  - Minimize repository size
  - Provide simple installation

#### Option B: Full Source Code Release
- Include TypeScript (`.ts`) files
- Include build configuration
- Include compiled files
- Better for:
  - Open source collaboration
  - Community contributions
  - Code transparency
  - Learning resource for others

## 2. Community Plugin Submission

This is the official route for including your plugin in Obsidian's community plugins list.

### Required Files (All Mandatory)
- All TypeScript source files (`.ts`)
- Build configuration (`tsconfig.json`, `package.json`, etc.)
- Compiled `main.js`
- `manifest.json`
- Comprehensive `README.md`

### Requirements
- Repository must be public
- Must follow Obsidian's coding guidelines
- Goes through review process
- Full source code transparency required

### Process
1. Prepare your repository with all required files
2. Follow the [plugin guidelines](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines)
3. Submit PR to [obsidianmd/obsidian-releases](https://github.com/obsidianmd/obsidian-releases)
4. Respond to review feedback if needed
