"use client";

import { useState } from "react";
import ChartCard from "@/app/components/dashboard/ChartCard";
import { weeklyEnergy, hourlyEnergy, insights } from "@/app/lib/mockData";

export default function EnergyPage() {
    const [timeframe, setTimeframe] = useState("weekly");
    const maxWeekly = Math.max(...weeklyEnergy.map(d => d.kwh));
    const maxHourly = Math.max(...hourlyEnergy);

    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">Energy Monitoring</h2>
                <p className="dash-page-subtitle">Track your electricity usage and find ways to save.</p>
            </div>

            {/* Stats row */}
            <div className="dash-stats-grid">
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Today&apos;s Usage</span>
                    <span className="dash-stat-value">3.2 kWh</span>
                    <span className="dash-stat-trend down">↓ 8% vs yesterday</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Peak Hour</span>
                    <span className="dash-stat-value">9 PM</span>
                    <span style={{ fontSize: "0.7rem", color: "#888" }}>135W peak</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Monthly Estimate</span>
                    <span className="dash-stat-value">21,600 RWF</span>
                    <span className="dash-stat-trend up">↑ 5% vs last month</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Average Daily</span>
                    <span className="dash-stat-value">3.9 kWh</span>
                </div>
            </div>

            {/* Timeframe filter */}
            <div className="dash-filter-row">
                {["daily", "weekly", "monthly"].map((t) => (
                    <button
                        key={t}
                        className={`dash-filter-btn ${timeframe === t ? "active" : ""}`}
                        onClick={() => setTimeframe(t)}
                    >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                ))}
            </div>

            <div className="dash-grid-2">
                {/* Main chart */}
                <ChartCard title={timeframe === "daily" ? "Hourly Usage" : "Weekly Usage"}>
                    {timeframe === "daily" ? (
                        <>
                            <div className="dash-chart-area">
                                {hourlyEnergy.map((val, i) => (
                                    <div key={i} className="dash-chart-bar" style={{ height: `${(val / maxHourly) * 100}%` }}>
                                        <span className="bar-tooltip">{val}W</span>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="dash-chart-area" style={{ height: "180px" }}>
                                {weeklyEnergy.map((d, i) => (
                                    <div key={i} className="dash-chart-bar" style={{ height: `${(d.kwh / maxWeekly) * 100}%` }}>
                                        <span className="bar-tooltip">{d.kwh} kWh</span>
                                    </div>
                                ))}
                            </div>
                            <div className="dash-chart-labels">
                                {weeklyEnergy.map((d, i) => (
                                    <span key={i}>{d.day}</span>
                                ))}
                            </div>
                        </>
                    )}
                </ChartCard>

                {/* Insights */}
                <ChartCard title="AI Insights">
                    {insights.map((insight, i) => (
                        <div key={i} className="dash-insight-card">
                            <span className="dash-insight-icon">💡</span>
                            <span className="dash-insight-text">{insight}</span>
                        </div>
                    ))}
                </ChartCard>
            </div>
        </>
    );
}
