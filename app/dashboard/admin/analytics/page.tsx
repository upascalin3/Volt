"use client";

import ChartCard from "@/app/components/dashboard/ChartCard";
import { monthlyGrowth } from "@/app/lib/mockData";

export default function AnalyticsPage() {
    const maxHomes = Math.max(...monthlyGrowth.map(d => d.homes));

    const topUsers = [
        { name: "David Habimana", usage: "45.2 kWh", trend: "+12%" },
        { name: "Alice Uwase", usage: "38.7 kWh", trend: "-5%" },
        { name: "Jean Mugabo", usage: "32.1 kWh", trend: "-8%" },
        { name: "Grace Mukiza", usage: "28.4 kWh", trend: "+3%" },
    ];

    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">Energy Analytics</h2>
                <p className="dash-page-subtitle">Global energy data across all installations.</p>
            </div>

            <div className="dash-stats-grid">
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Total Energy Saved</span>
                    <span className="dash-stat-value" style={{ color: "#22c55e" }}>2.4 MWh</span>
                    <span className="dash-stat-trend up">↑ 22%</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Avg. Consumption</span>
                    <span className="dash-stat-value">3.9 kWh/home</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Peak Load</span>
                    <span className="dash-stat-value">12.8 kW</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Cost Savings</span>
                    <span className="dash-stat-value" style={{ color: "#22c55e" }}>₣ 340K</span>
                </div>
            </div>

            <div className="dash-grid-2">
                {/* Energy Savings Trend */}
                <ChartCard title="Installations Growth" action="Export">
                    <div className="dash-chart-area" style={{ height: "180px" }}>
                        {monthlyGrowth.map((d, i) => (
                            <div key={i} className="dash-chart-bar" style={{ height: `${(d.homes / maxHomes) * 100}%` }}>
                                <span className="bar-tooltip">{d.homes} homes</span>
                            </div>
                        ))}
                    </div>
                    <div className="dash-chart-labels">
                        {monthlyGrowth.map((d, i) => <span key={i}>{d.month}</span>)}
                    </div>
                </ChartCard>

                {/* Top Energy Users */}
                <ChartCard title="Top Energy Users">
                    {topUsers.map((user, i) => (
                        <div key={i} className="dash-feed-item">
                            <div className="dash-avatar" style={{ width: 28, height: 28, fontSize: "0.6rem" }}>
                                {user.name.split(" ").map(n => n[0]).join("")}
                            </div>
                            <span className="dash-feed-text">
                                <strong>{user.name}</strong>
                            </span>
                            <span style={{ fontSize: "0.8rem", color: "#fff", fontWeight: 500, marginRight: "0.5rem" }}>{user.usage}</span>
                            <span className={`dash-stat-trend ${user.trend.startsWith("+") ? "up" : "down"}`}>{user.trend}</span>
                        </div>
                    ))}
                </ChartCard>
            </div>
        </>
    );
}
