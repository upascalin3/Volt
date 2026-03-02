"use client";

import DataTable from "@/app/components/dashboard/DataTable";
import { devices } from "@/app/lib/mockData";

const columns = [
    { key: "name", label: "Device", render: (v: unknown) => <span style={{ color: "#fff", fontWeight: 500 }}>{String(v)}</span> },
    { key: "type", label: "Type" },
    {
        key: "status",
        label: "Health",
        render: (v: unknown) => {
            const s = String(v).toLowerCase();
            const cls = s === "offline" ? "offline" : s === "running" ? "running" : "online";
            return <span className={`status-badge ${cls}`}><span className={`status-dot ${s === "offline" ? "red" : s === "running" ? "blue" : "green"}`} />{String(v)}</span>;
        },
    },
    { key: "lastSeen", label: "Last Seen" },
    { key: "firmware", label: "Firmware" },
    { key: "ip", label: "IP Address" },
];

export default function AdminDevicesPage() {
    const offlineCount = devices.filter(d => d.status === "Offline").length;

    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">Device Monitoring</h2>
                <p className="dash-page-subtitle">Monitor all devices across the VOLT network.</p>
            </div>

            <div className="dash-stats-grid">
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Total Devices</span>
                    <span className="dash-stat-value">{devices.length}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Online</span>
                    <span className="dash-stat-value" style={{ color: "#22c55e" }}>{devices.length - offlineCount}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Offline Alerts</span>
                    <span className="dash-stat-value" style={{ color: "#ef4444" }}>{offlineCount}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Firmware Updates</span>
                    <span className="dash-stat-value" style={{ color: "#f59e0b" }}>2</span>
                </div>
            </div>

            <div className="dash-card">
                <div className="dash-card-header">
                    <h3 className="dash-card-title">All System Devices</h3>
                </div>
                <DataTable
                    columns={columns}
                    data={devices as unknown as Record<string, unknown>[]}
                    actions={[
                        { label: "Update FW", key: "firmware" },
                        { label: "Restart", key: "restart" },
                        { label: "Logs", key: "logs" },
                    ]}
                    onRowAction={(action, row) => console.log(action, row)}
                />
            </div>
        </>
    );
}
