"use client";

import { useState } from "react";
import AlertItem from "@/app/components/dashboard/AlertItem";
import { alerts as initialAlerts } from "@/app/lib/mockData";

export default function AlertsPage() {
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
                <h2 className="dash-page-title">Alerts</h2>
                <p className="dash-page-subtitle">{alerts.filter(a => !a.resolved).length} unresolved alerts</p>
            </div>

            <div className="dash-filter-row">
                {["all", "unresolved", "critical", "history"].map((f) => (
                    <button
                        key={f}
                        className={`dash-filter-btn ${filter === f ? "active" : ""}`}
                        onClick={() => setFilter(f)}
                    >
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
