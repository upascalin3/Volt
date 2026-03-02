"use client";

import StatCard from "@/app/components/dashboard/StatCard";
import ChartCard from "@/app/components/dashboard/ChartCard";
import { energyStats, hourlyEnergy, rooms, alerts } from "@/app/lib/mockData";

export default function UserDashboard() {
    const maxEnergy = Math.max(...hourlyEnergy);

    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">Welcome back, Jean 👋</h2>
                <p className="dash-page-subtitle">Here&apos;s your smart energy overview for today.</p>
            </div>

            {/* Stat Cards */}
            <div className="dash-stats-grid">
                <StatCard
                    icon={<span>⚡</span>}
                    label="Energy Now"
                    value={`${energyStats.currentUsage}W`}
                    trend={{ value: 8, direction: "down" }}
                    color="orange"
                />
                <StatCard
                    icon={<span>💡</span>}
                    label="Active Lights"
                    value={`${energyStats.activeLights} Rooms`}
                    color="green"
                />
                <StatCard
                    icon={<span>💰</span>}
                    label="Today's Cost"
                    value={`${energyStats.todayCost} RWF`}
                    trend={{ value: 12, direction: "up" }}
                    color="blue"
                />
                <StatCard
                    icon={<span>📡</span>}
                    label="System Status"
                    value={energyStats.systemStatus}
                    color="cyan"
                />
            </div>

            <div className="dash-grid-2-1">
                {/* Energy Chart */}
                <ChartCard title="Energy Usage (24h)" action="View Details">
                    <div className="dash-chart-area">
                        {hourlyEnergy.map((val, i) => (
                            <div
                                key={i}
                                className="dash-chart-bar"
                                style={{ height: `${(val / maxEnergy) * 100}%` }}
                            >
                                <span className="bar-tooltip">{val}W</span>
                            </div>
                        ))}
                    </div>
                    <div className="dash-chart-labels">
                        {["12a", "", "", "3a", "", "", "6a", "", "", "9a", "", "", "12p", "", "", "3p", "", "", "6p", "", "", "9p", "", ""].map((l, i) => (
                            <span key={i}>{l}</span>
                        ))}
                    </div>
                </ChartCard>

                {/* Quick Actions */}
                <ChartCard title="Quick Actions">
                    <div className="dash-quick-actions">
                        <button className="dash-quick-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" /></svg>
                            Turn Off All Lights
                        </button>
                        <button className="dash-quick-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                            Energy Saver Mode
                        </button>
                        <button className="dash-quick-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" /></svg>
                            Auto Lighting
                        </button>
                        <button className="dash-quick-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
                            Download Report
                        </button>
                    </div>
                </ChartCard>
            </div>

            <div className="dash-grid-2">
                {/* Room Activity */}
                <ChartCard title="Room Activity" action="View All">
                    {rooms.map((room) => (
                        <div key={room.id} className="dash-feed-item">
                            <span className={`dash-feed-dot ${room.motionDetected ? "active" : "inactive"}`} />
                            <span className="dash-feed-text">
                                <strong>{room.name}</strong> — {room.motionDetected ? "Motion detected" : "No activity"}
                            </span>
                            <span className="dash-feed-time">{room.lastMotion}</span>
                        </div>
                    ))}
                </ChartCard>

                {/* Recent Alerts */}
                <ChartCard title="Recent Alerts" action="View All">
                    {alerts.slice(0, 3).map((alert) => (
                        <div key={alert.id} className="dash-alert-item" style={{ marginBottom: "0.5rem" }}>
                            <div className={`dash-alert-severity ${alert.severity}`} />
                            <div className="dash-alert-content">
                                <p className="dash-alert-title">{alert.title}</p>
                                <p className="dash-alert-desc">{alert.desc}</p>
                                <p className="dash-alert-time">{alert.time}</p>
                            </div>
                        </div>
                    ))}
                </ChartCard>
            </div>
        </>
    );
}
