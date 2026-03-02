"use client";

import DataTable from "@/app/components/dashboard/DataTable";
import { adminHomes } from "@/app/lib/mockData";

const columns = [
    { key: "name", label: "Home", render: (v: unknown) => <span style={{ color: "#fff", fontWeight: 500 }}>{String(v)}</span> },
    { key: "owner", label: "Owner" },
    { key: "devices", label: "Devices" },
    {
        key: "status",
        label: "Status",
        render: (v: unknown) => {
            const s = String(v).toLowerCase();
            const cls = s === "active" ? "active" : s === "warning" ? "warning" : "offline";
            return <span className={`status-badge ${cls}`}><span className={`status-dot ${s === "active" ? "green" : s === "warning" ? "orange" : "red"}`} />{String(v)}</span>;
        },
    },
    { key: "location", label: "Location" },
];

export default function HomesPage() {
    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">Installations / Homes</h2>
                <p className="dash-page-subtitle">All homes using the VOLT system.</p>
            </div>

            <div className="dash-stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Total Installations</span>
                    <span className="dash-stat-value">{adminHomes.length}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Active</span>
                    <span className="dash-stat-value" style={{ color: "#22c55e" }}>{adminHomes.filter(h => h.status === "Active").length}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Issues</span>
                    <span className="dash-stat-value" style={{ color: "#f59e0b" }}>{adminHomes.filter(h => h.status !== "Active").length}</span>
                </div>
            </div>

            <div className="dash-card">
                <div className="dash-card-header">
                    <h3 className="dash-card-title">All Installations</h3>
                </div>
                <DataTable
                    columns={columns}
                    data={adminHomes as unknown as Record<string, unknown>[]}
                    actions={[
                        { label: "Details", key: "details" },
                        { label: "Diagnostics", key: "diagnostics" },
                    ]}
                    onRowAction={(action, row) => console.log(action, row)}
                />
            </div>
        </>
    );
}
