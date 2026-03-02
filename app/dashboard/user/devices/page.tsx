"use client";

import DataTable from "@/app/components/dashboard/DataTable";
import { devices } from "@/app/lib/mockData";

const columns = [
    { key: "name", label: "Device", render: (v: unknown) => <span style={{ color: "#fff", fontWeight: 500 }}>{String(v)}</span> },
    { key: "type", label: "Type" },
    {
        key: "status",
        label: "Status",
        render: (v: unknown) => {
            const s = String(v).toLowerCase();
            const cls = s === "offline" ? "offline" : s === "running" ? "running" : "online";
            return <span className={`status-badge ${cls}`}><span className={`status-dot ${s === "offline" ? "red" : s === "running" ? "blue" : "green"}`} />{String(v)}</span>;
        },
    },
    { key: "lastSeen", label: "Last Seen" },
    { key: "firmware", label: "Firmware" },
];

export default function DevicesPage() {
    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">Devices</h2>
                <p className="dash-page-subtitle">Manage your connected devices and sensors.</p>
            </div>

            <div className="dash-stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Total Devices</span>
                    <span className="dash-stat-value">{devices.length}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Online</span>
                    <span className="dash-stat-value" style={{ color: "#22c55e" }}>{devices.filter(d => d.status !== "Offline").length}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Offline</span>
                    <span className="dash-stat-value" style={{ color: "#ef4444" }}>{devices.filter(d => d.status === "Offline").length}</span>
                </div>
            </div>

            <div className="dash-card">
                <div className="dash-card-header">
                    <h3 className="dash-card-title">All Devices</h3>
                </div>
                <DataTable
                    columns={columns}
                    data={devices as unknown as Record<string, unknown>[]}
                    actions={[
                        { label: "Restart", key: "restart" },
                        { label: "Remove", key: "remove", variant: "danger" },
                    ]}
                    onRowAction={(action, row) => console.log(action, row)}
                />
            </div>
        </>
    );
}
