"use client";

import DataTable from "@/app/components/dashboard/DataTable";
import { adminUsers } from "@/app/lib/mockData";

const columns = [
    { key: "name", label: "Name", render: (v: unknown) => <span style={{ color: "#fff", fontWeight: 500 }}>{String(v)}</span> },
    { key: "email", label: "Email" },
    { key: "homes", label: "Homes" },
    {
        key: "status",
        label: "Status",
        render: (v: unknown) => {
            const active = String(v) === "Active";
            return <span className={`status-badge ${active ? "active" : "inactive"}`}><span className={`status-dot ${active ? "green" : "red"}`} />{String(v)}</span>;
        },
    },
    { key: "joined", label: "Joined" },
];

export default function UsersPage() {
    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">Users Management</h2>
                <p className="dash-page-subtitle">Manage all registered VOLT users.</p>
            </div>

            <div className="dash-stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Total Users</span>
                    <span className="dash-stat-value">{adminUsers.length}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Active</span>
                    <span className="dash-stat-value" style={{ color: "#22c55e" }}>{adminUsers.filter(u => u.status === "Active").length}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Inactive</span>
                    <span className="dash-stat-value" style={{ color: "#ef4444" }}>{adminUsers.filter(u => u.status === "Inactive").length}</span>
                </div>
            </div>

            <div className="dash-card">
                <div className="dash-card-header">
                    <h3 className="dash-card-title">All Users</h3>
                </div>
                <DataTable
                    columns={columns}
                    data={adminUsers as unknown as Record<string, unknown>[]}
                    actions={[
                        { label: "View", key: "view" },
                        { label: "Disable", key: "disable", variant: "danger" },
                    ]}
                    onRowAction={(action, row) => console.log(action, row)}
                />
            </div>
        </>
    );
}
