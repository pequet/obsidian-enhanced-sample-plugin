# Preflight Checklist 

- [ ] **Change Plugin Name:**
  - [ ] Search and replace all instances of `EnhancedSamplePlugin` and `enhanced-sample-plugin` with your plugin's name.

- [ ] **Production Settings:**
  - [ ] Set `minifySyntax` and `minifyWhitespace` to `true` for production in your build configuration.

- [ ] **Edit Necessary Files:**
  - [ ] Update `README.md` with relevant information about your plugin.
  - [ ] Modify `package.json` to reflect your plugin's details.
  - [ ] Update `manifest.json` with the correct version and other metadata.

- [ ] **Prepare Files for Release:**
  - [ ] Ensure `manifest.json`, `main.js`, and `styles.css` are ready and upload them as binary attachments.
  - [ ] Place `manifest.json` in both the root directory of your repository and in the release package.

- [ ] **Publish the Release:**
  - [ ] Follow the steps to publish a new release of your plugin.

- [ ] **Add Plugin to Community List:**
  - [ ] Review the [plugin guidelines](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines).
  - [ ] Publish an initial version of your plugin.
  - [ ] Ensure `README.md` is present in the root of your repository.
  - [ ] Submit a pull request to [obsidianmd/obsidian-releases](https://github.com/obsidianmd/obsidian-releases) to add your plugin.

- [ ] **Improve Code Quality (Optional):**
  - [ ] Use ESLint to analyze and improve your code.
  - [ ] Install ESLint: `npm install -g eslint`
  - [ ] Run ESLint: `eslint main.ts` or `eslint ./src/` if your source code is in a folder.

- [ ] **Add Funding URL (Optional):**
  - [ ] Include a `fundingUrl` in `manifest.json` to allow users to support your plugin financially.

- [ ] **Read All Guidelines:**
  - [ ] Ensure you have read and understood all the [plugin guidelines](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines).
