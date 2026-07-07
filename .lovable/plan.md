## Zip Export Plan

1. **Inventory** – Recursively list all project files to determine the full set.
2. **Filter** – Exclude `node_modules/`, `.git/`, `.tanstack/`, and build artifacts. Include `src/`, config files at root, and `.lovable/` metadata.
3. **Archive** – Create a zip file at `/mnt/documents/project-export.zip` containing the filtered files with paths preserved relative to the project root.
4. **Verify** – Inspect the zip contents to confirm no large binaries or excluded directories were included.
5. **Deliver** – Present the zip artifact for download.

No code changes to the project are required.