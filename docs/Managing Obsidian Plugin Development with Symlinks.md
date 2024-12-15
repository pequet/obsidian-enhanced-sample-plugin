# Managing Obsidian Plugin Development with Symlinks

**Goal:** Plugins in Obsidian live in the vault, as a subfolder of the `.obsidian` hidden folder, which is not ideal for development. We want to develop them in a separate directory.

## Structure

```
Obsidian/ (iCloud Drive)
├── First Vault/
│   └── .obsidian/
│       └── plugins/
│           ├── customjs/
│           ├── dataview/
│           └── custom-plugin → my_plugins/prod/custom-plugin
├── Second Vault/
│   └── .obsidian/
│       └── plugins/
│           ├── customjs/
│           ├── dataview/
│           └── custom-plugin → my_plugins/prod/custom-plugin
├── Development Vault/
│   └── .obsidian/
│       └── plugins/
│           ├── customjs/
│           ├── dataview/
│           ├── hot-reload-master/
│           └── my-new-plugin → my_plugins/prod/my-new-plugin
└── my_plugins/
    ├── prod/
    │   └── custom-plugin/
    ├── staging/
    │   └── ...
    └── dev/
        └── my-new-plugin/
```

## Commands

1. Create the new plugin in your development location:

```bash
mkdir -p ./my_plugins/dev/my-new-plugin
```

2. Create a symlink back to the plugins folder in your vault:

```bash
ln -s ../../../my_plugins/dev/my-new-plugin ./Development\ Vault/.obsidian/plugins/my-new-plugin
```

3. You can run `npm run dev` from either location.

## Considerations

- **Relative Paths:** Ensure that the symlink uses the correct relative path based on your folder structure.
- **iCloud:** If you are using iCloud, make sure that you keep the relevant Vault and `my_plugins` folders downloaded to your device.
- **Testing:** Always test symlinks in a backup vault before applying them to your main vault.
- **Backup:** Keep backups of your plugins and settings to avoid data loss during development.
- **Symlink Verification:** You can verify the symlink with: `ls -la ./Development\ Vault/.obsidian/plugins/my-new-plugin`
- **Restoration:** If something goes wrong, you remove the symlink and restore the plugin from your development folder.

