//
//  File:      SettingsView.swift
//  Created:   2026-06-08
//  Updated:   2026-06-19
//  Developer: Kennt Kim / Calida Lab
//  Overview:  Preferences window (Cmd+,). Refresh cadence, temperature unit, menu-bar
//             compact GPU mode, launch-at-login, threshold alerts, and the AI runtime API
//             — persisted in UserDefaults via @AppStorage.
//  Notes:     Keys: "refreshInterval" (s), "temperatureFahrenheit" (Bool),
//             "compactGPUMode" (Bool), "notificationsEnabled" (Bool). Launch-at-login is
//             owned by SMAppService (LoginItem), not UserDefaults. SiliconScopeMonitor
//             reads refreshInterval + notificationsEnabled each loop. All update live.
//
import SwiftUI

struct SettingsView: View {
    @AppStorage("refreshInterval") private var refreshInterval = 1.0
    @AppStorage("temperatureFahrenheit") private var fahrenheit = false
    @AppStorage("compactGPUMode") private var compactGPU = false
    @AppStorage("aiRuntimeAPIEnabled") private var aiRuntimeAPIEnabled = false
    @AppStorage("aiRuntimeOllamaPort") private var ollamaPort = 11434
    @AppStorage("aiRuntimeLMStudioPort") private var lmStudioPort = 1234
    @AppStorage("notificationsEnabled") private var notificationsEnabled = false
    @State private var autoUpdate = false
    @State private var launchAtLogin = LoginItem.isEnabled

    var body: some View {
        Form {
            Section {
                Picker(L("Refresh interval"), selection: $refreshInterval) {
                    Text("0.5 s").tag(0.5)
                    Text("1 s").tag(1.0)
                    Text("2 s").tag(2.0)
                    Text("3 s").tag(3.0)
                }
                Picker(L("Temperature unit"), selection: $fahrenheit) {
                    Text(L("Celsius (°C)")).tag(false)
                    Text(L("Fahrenheit (°F)")).tag(true)
                }
                Toggle(L("Compact GPU mode (menu bar)"), isOn: $compactGPU)
            }

            Section {
                Toggle(L("Launch at login"), isOn: $launchAtLogin)
                    .onChange(of: launchAtLogin) { _, on in LoginItem.setEnabled(on) }
                Toggle(L("Alert notifications"), isOn: $notificationsEnabled)
                    .onChange(of: notificationsEnabled) { _, on in if on { Notifier.requestAuthorization() } }
                if UpdaterController.shared.canCheck {
                    Toggle(L("Automatically check for updates"), isOn: $autoUpdate)
                        .onChange(of: autoUpdate) { _, on in UpdaterController.shared.automaticallyChecks = on }
                    Button(L("Check for Updates…")) { UpdaterController.shared.checkForUpdates() }
                }
            } header: {
                Text(L("Startup & alerts"))
            } footer: {
                Text(L("Notify on GPU thermal throttle, memory pressure, or swapping (once per event)."))
            }

            Section {
                Toggle(L("Connect to local AI runtimes"), isOn: $aiRuntimeAPIEnabled)
                if aiRuntimeAPIEnabled {
                    TextField(L("Ollama port"), value: $ollamaPort, format: .number.grouping(.never))
                    TextField(L("LM Studio port"), value: $lmStudioPort, format: .number.grouping(.never))
                }
            } header: {
                Text(L("Local AI runtime API (opt-in)"))
            } footer: {
                Text(L("Reads the loaded model, processor split, and tokens/sec from AI runtimes on 127.0.0.1. Nothing leaves your Mac."))
            }
        }
        .formStyle(.grouped)
        .frame(width: 400, height: aiRuntimeAPIEnabled ? 470 : 400)
        .onAppear { autoUpdate = UpdaterController.shared.automaticallyChecks }
    }
}
