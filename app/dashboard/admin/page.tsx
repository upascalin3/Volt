"use client";

import StatCard from "@/app/components/dashboard/StatCard";
import ChartCard from "@/app/components/dashboard/ChartCard";
import { adminStats, monthlyGrowth } from "@/app/lib/mockData";

export default function AdminOverview() {
    const maxUsers = Math.max(...monthlyGrowth.map(d => d.users));

    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">Admin Overview</h2>
                <p className="dash-page-subtitle">Global system performance and growth metrics.</p>
            </div>

            <div className="dash-stats-grid">
                <StatCard
                    icon={<span>👥</span>}
                    label="Total Users"
                    value={adminStats.totalUsers}
                    trend={{ value: adminStats.userGrowth, direction: "up" }}
                    color="blue"
                />
                <StatCard
                    icon={<span>🏠</span>}
                    label="Installed Homes"
                    value={adminStats.installedHomes}
                    trend={{ value: adminStats.homeGrowth, direction: "up" }}
                    color="green"
                />
                <StatCard
                    icon={<span>📡</span>}
                    label="Active Devices"
                    value={adminStats.activeDevices}
                    trend={{ value: adminStats.deviceGrowth, direction: "up" }}
                    color="purple"
                />
                <StatCard
                    icon={<span>⚡</span>}
                    label="Energy Saved"
                    value={adminStats.energySaved}
                    trend={{ value: adminStats.energyGrowth, direction: "up" }}
                    color="orange"
                />
            </div>

            <div className="dash-grid-2">
                {/* Growth Chart */}
                <ChartCard title="User & Installation Growth" action="Export">
                    <div className="dash-chart-area" style={{ height: "180px" }}>
                        {monthlyGrowth.map((d, i) => (
                            <div key={i} className="dash-chart-bar" style={{ height: `${(d.users / maxUsers) * 100}%` }}>
                                <span className="bar-tooltip">{d.users} users</span>
                            </div>
                        ))}
                    </div>
                    <div className="dash-chart-labels">
                        {monthlyGrowth.map((d, i) => (
                            <span key={i}>{d.month}</span>
                        ))}
                    </div>
                </ChartCard>

                {/* System Health */}
                <ChartCard title="System Health">
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {[
                            { label: "API Server", status: "Healthy", color: "green" },
                            { label: "Database", status: "Healthy", color: "green" },
                            { label: "WebSocket", status: "Active", color: "green" },
                            { label: "IoT Bridge", status: "Running", color: "blue" },
                            { label: "Backup Service", status: "Scheduled", color: "orange" },
                        ].map((item, i) => (
                            <div key={i} className="dash-feed-item">
                                <span className={`dash-feed-dot`} style={{ background: item.color === "green" ? "#22c55e" : item.color === "blue" ? "#3b82f6" : "#f59e0b" }} />
                                <span className="dash-feed-text">{item.label}</span>
                                <span className={`status-badge ${item.color === "green" ? "active" : item.color === "blue" ? "running" : "warning"}`}>
                                    {item.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </ChartCard>
            </div>
        </>
    );
}
