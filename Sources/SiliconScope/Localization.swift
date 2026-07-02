//
//  File:      Localization.swift
//  Created:   2026-06-21
//  Developer: Kennt Kim / Calida Lab
//  Overview:  Single entry point for localizing user-facing strings against the package's
//             resource bundle (Bundle.module). SwiftUI's implicit LocalizedStringKey lookups
//             (Text("…"), Toggle("…"), Picker("…"), …) resolve against Bundle.main, which in a
//             SwiftPM app does NOT contain the compiled String Catalog — that lives in the
//             nested Bundle.module. L(…) resolves there and returns a plain String, so it flows
//             through the non-localizing StringProtocol initializers verbatim and follows the
//             user's system language (AppleLanguages) automatically.
//  Notes:     Keys live in Resources/Localizable.xcstrings. Interpolation is supported:
//             L("Peak ↓ \(rate)") matches the catalog key "Peak ↓ %@".
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
