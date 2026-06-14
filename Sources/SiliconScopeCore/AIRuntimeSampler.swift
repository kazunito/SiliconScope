//
//  File:      AIRuntimeSampler.swift
//  Created:   2026-06-14
//  Updated:   2026-06-14
//  Developer: Kennt Kim / Calida Lab
//  Overview:  Turns the already-built process table into an AIRuntimeSample. Stateless;
//             a pure O(n) filter+map over [ProcessRow] — zero extra pid enumeration.
//  Notes:     Relies on ProcessSampler having resolved path (all pids) and args (AI
//             candidates only). 100% sudoless, no network.
//
import Foundation

public struct AIRuntimeSampler {
    public init() {}

    public func sample(from rows: [ProcessRow]) -> AIRuntimeSample {
        var sample = AIRuntimeSample()
        for row in rows {
            guard let kind = AIRuntimeKind.match(path: row.path, name: row.name, args: row.args) else { continue }
            sample.processes.append(AIRuntimeProcess(
                pid: row.pid,
                kind: kind,
                displayName: kind.displayName,
                cpuPercent: row.cpuPercent,
                memoryBytes: row.memoryBytes,
                embeddedPort: AIRuntimeKind.embeddedPort(args: row.args)
            ))
        }
        return sample
    }
}
