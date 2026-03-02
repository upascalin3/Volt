"use client";

import { useState } from "react";
import { systemLogs } from "@/app/lib/mockData";

export default function LogsPage() {
    const [levelFilter, setLevelFilter] = useState("all");

    const filtered = systemLogs.filter(log => {
        if (levelFilter === "all") return true;
        return log.level === levelFilter;
    });

    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">System Logs</h2>
                <p className="dash-page-subtitle">All system events, errors, and device activity.</p>
            </div>

            <div className="dash-filter-row">
                {["all", "info", "warning", "error", "success"].map((f) => (
                    <button key={f} className={`dash-filter-btn ${levelFilter === f ? "active" : ""}`} onClick={() => setLevelFilter(f)}>
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}
            </div>

            <div className="dash-card">
                <table className="dash-table">
                    <thead>
                        <tr>
                            <th>Timestamp</th>
                            <th>Level</th>
                            <th>Event</th>
                            <th>Device</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((log) => (
                            <tr key={log.id}>
                                <td style={{ fontFamily: "monospace", fontSize: "0.75rem" }}>{log.timestamp}</td>
                                <td><span className={`dash-log-level ${log.level}`}>{log.level}</span></td>
                                <td style={{ color: "#fff" }}>{log.event}</td>
                                <td>{log.device}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
