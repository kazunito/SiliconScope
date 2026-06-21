#!/usr/bin/env python3
#
#  File:      gen-strings.py
#  Created:   2026-06-21
#  Overview:  Compiles the String Catalogs under Localization/ into the legacy .strings files
#             SwiftPM actually ships. SwiftPM's command-line `swift build` (no full Xcode) does
#             NOT compile .xcstrings — it copies them raw and the runtime never reads them — so we
#             generate .strings ourselves (no xcstringstool dependency). The .xcstrings stay the
#             editable source of truth; re-run this whenever they change.
#  Notes:     Two targets carry their own bundle/catalog:
#               - the SiliconScope app  (Localizable.xcstrings)
#               - the SiliconScopeCore  (CoreLocalizable.xcstrings) — logic-layer display strings
#             en values default to the key itself (source language); ja from localizations.ja.
#
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LANGS = ["en", "ja", "ko"]

# (catalog path, target Resources dir) pairs.
CATALOGS = [
    ("Localization/Localizable.xcstrings", "Sources/SiliconScope/Resources"),
    ("Localization/CoreLocalizable.xcstrings", "Sources/SiliconScopeCore/Resources"),
]


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def compile_catalog(src_rel: str, res_rel: str) -> None:
    src = os.path.join(ROOT, src_rel)
    res = os.path.join(ROOT, res_rel)
    with open(src, encoding="utf-8") as f:
        strings = json.load(f)["strings"]
    for lang in LANGS:
        lines = [f'/* Generated from {src_rel} by scripts/gen-strings.py — do not edit. */', ""]
        for key in sorted(strings.keys()):
            if lang == "en":
                value = key
            else:
                unit = strings[key].get("localizations", {}).get(lang, {}).get("stringUnit", {})
                value = unit.get("value")
                if value is None:
                    continue
            lines.append(f'"{esc(key)}" = "{esc(value)}";')
        out_dir = os.path.join(res, f"{lang}.lproj")
        os.makedirs(out_dir, exist_ok=True)
        with open(os.path.join(out_dir, "Localizable.strings"), "w", encoding="utf-8") as f:
            f.write("\n".join(lines) + "\n")
        print(f"wrote {res_rel}/{lang}.lproj/Localizable.strings ({len(lines) - 2} keys)")


def main() -> int:
    for src_rel, res_rel in CATALOGS:
        if os.path.exists(os.path.join(ROOT, src_rel)):
            compile_catalog(src_rel, res_rel)
        else:
            print(f"skip (missing): {src_rel}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
