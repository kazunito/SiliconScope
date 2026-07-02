//
//  File:      Localization.swift
//  Created:   2026-06-21
//  Developer: Kennt Kim / Calida Lab
//  Overview:  Localizes the user-facing strings that originate in the logic layer (bottleneck
//             verdicts, battery state, AI-workload attribution, thermal pressure, warnings)
//             against SiliconScopeCore's own resource bundle (Bundle.module). This is a separate
//             module from the SiliconScope app, so it carries its own String Catalog and helper;
//             the app's L(…) cannot reach Core's bundle. Internal by default, so it never clashes
//             with the app target's identically named helper.
//  Notes:     Keys live in Resources/Localizable.strings (generated from
//             Localization/CoreLocalizable.xcstrings by scripts/gen-strings.py).
//
import Foundation

@inline(__always)
func L(_ key: String.LocalizationValue) -> String {
    // String(localized:bundle:) resolves the target language via Bundle.preferredLocalizations,
    // which SwiftPM's generated resource bundle breaks: its Info.plist has no
    // CFBundleLocalizations, so that API always falls back to the development region (en)
    // regardless of the user's system language. Routing through LocalizedStringResource with an
    // explicit .atURL bundle takes a different, working resolution path (verified against
    // Locale.preferredLanguages / ja-JP) and keeps %@ interpolation intact.
    String(localized: LocalizedStringResource(key, bundle: .atURL(Bundle.module.bundleURL)))
}
