//
//  File:      RecordingFiles.swift
//  Created:   2026-06-25
//  Updated:   2026-06-25
//  Developer: Kennt Kim / Calida Lab
//  Overview:  Small shared helpers for where session recordings live and how they're named —
//             a default ~/SiliconScope folder (created on first use) and a timestamped base name.
//             Used by both RecordBar (open) and ReplayBar (export).
//
import Foundation

enum RecordingFiles {
    /// ~/SiliconScope, created on first use. The default location for opening + saving recordings.
    static func defaultDir() -> URL {
        let dir = FileManager.default.homeDirectoryForCurrentUser
            .appendingPathComponent("SiliconScope", isDirectory: true)
        try? FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        return dir
    }

    /// A sortable, identifiable base name, e.g. "SiliconScope-20260626-134522".
    static func timestampedName() -> String {
        let f = DateFormatter(); f.dateFormat = "yyyyMMdd-HHmmss"
        return "SiliconScope-\(f.string(from: Date()))"
    }
}
