"use client";

import { useState } from "react";
import AlertItem from "@/app/components/dashboard/AlertItem";
import { alerts as initialAlerts } from "@/app/lib/mockData";

export default function AdminAlertsPage() {
    const [alerts, setAlerts] = useState(initialAlerts);
    const [filter, setFilter] = useState("all");

    const resolveAlert = (id: number) => {
        setAlerts(alerts.map(a => a.id === id ? { ...a, resolved: true } : a));
    };

    const filtered = alerts.filter(a => {
        if (filter === "unresolved") return !a.resolved;
        if (filter === "critical") return a.severity === "critical";
        if (filter === "history") return a.resolved;
        return true;
    });

    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">Alerts Management</h2>
                <p className="dash-page-subtitle">System-wide alerts across all installations.</p>
            </div>

            <div className="dash-stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Total Alerts</span>
                    <span className="dash-stat-value">{alerts.length}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Unresolved</span>
                    <span className="dash-stat-value" style={{ color: "#ef4444" }}>{alerts.filter(a => !a.resolved).length}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Critical</span>
                    <span className="dash-stat-value" style={{ color: "#ef4444" }}>{alerts.filter(a => a.severity === "critical").length}</span>
                </div>
            </div>

            <div className="dash-filter-row">
                {["all", "unresolved", "critical", "history"].map((f) => (
                    <button key={f} className={`dash-filter-btn ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}
            </div>

            {filtered.length === 0 ? (
                <div className="dash-empty">No alerts found.</div>
            ) : (
                filtered.map((alert) => (
                    <AlertItem
                        key={alert.id}
                        severity={alert.severity as "critical" | "warning" | "info"}
                        title={alert.title}
                        desc={alert.desc}
                        time={alert.time}
                        resolved={alert.resolved}
                        onResolve={() => resolveAlert(alert.id)}
                    />
                ))
            )}
        </>
    );
}
