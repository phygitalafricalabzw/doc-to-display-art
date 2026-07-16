## Goal
Verify that `stellar-foods-static-v2.zip` (in `/mnt/documents/`) is fully self-contained: every `href`, `src`, `<link>`, `<script>`, and CSS `url(...)` in every HTML and CSS file resolves to a real file inside the archive. Produce a human-readable report listing anything missing.

## Steps

1. **Unpack** the latest zip to a temp working directory (`/tmp/integrity/site/`).

2. **Enumerate files**: walk the extracted tree and build a set of every real file path (normalized, case-sensitive).

3. **Parse every HTML file** (`index.html`, `404.html`, `products/*/index.html`) with BeautifulSoup and collect references from:
   - `<a href>` (skip `mailto:`, `tel:`, external `http(s)://`, pure `#anchor`)
   - `<link href>` (stylesheets, icons, manifest, modulepreload)
   - `<script src>`
   - `<img src>` and `<img srcset>`
   - `<source src>` / `<source srcset>`
   - `<video>`, `<audio>`, `<iframe>` `src`
   - inline `style="... url(...) ..."`
   - `<meta property="og:image">` / `twitter:image` (flag absolute CDN URLs as "external, not bundled")

4. **Parse every CSS file** in `assets/` and extract `url(...)` references (fonts, background images), resolving relative to the CSS file's folder.

5. **Resolve each reference** relative to its source file, strip query/hash, and check membership in the file set. Bucket results as:
   - ✅ resolved
   - ❌ missing (target file absent)
   - ⚠️ external (http/https/data:) — reported separately, not treated as broken
   - 🔗 in-page anchor only — ignored

6. **Cross-check hash links**: for any `href="../index.html#story"`-style link, confirm the target file exists AND the fragment id exists in that HTML.

7. **Write the report** to `/mnt/documents/stellar-foods-static-integrity-report.md` with:
   - Summary: files scanned, references checked, counts per bucket
   - Table of every ❌ missing reference: source file → broken URL → resolved path
   - Table of ⚠️ external references (so you can decide if any should be bundled)
   - Notes on any orphan files in `images/` or `assets/` never referenced

8. **Emit the artifact tag** for the report and print the top-level counts in the reply.

## Deliverable
`stellar-foods-static-integrity-report.md` in `/mnt/documents/`, plus a one-line summary of pass/fail in chat. No changes to the zip itself — this is a read-only audit. If any ❌ items are found, next step (separate turn) would be to rebuild the export fixing them.
