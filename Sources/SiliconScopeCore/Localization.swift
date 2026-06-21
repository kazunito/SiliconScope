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
    String(localized: key, bundle: .module)
}
