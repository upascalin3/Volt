"use client";

import ChartCard from "@/app/components/dashboard/ChartCard";
import { motionFeed, rooms } from "@/app/lib/mockData";

export default function MotionPage() {
    const sensors = rooms.map(r => ({
        name: r.name,
        status: r.motionDetected ? "Active" : "Idle",
        lastMotion: r.lastMotion,
    }));

    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">Motion Activity</h2>
                <p className="dash-page-subtitle">Real-time motion detection across your home.</p>
            </div>

            <div className="dash-stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Active Sensors</span>
                    <span className="dash-stat-value">{sensors.filter(s => s.status === "Active").length}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Total Sensors</span>
                    <span className="dash-stat-value">{sensors.length}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Today&apos;s Events</span>
                    <span className="dash-stat-value">47</span>
                </div>
            </div>

            <div className="dash-grid-2">
                {/* Live Feed */}
                <ChartCard title="Live Activity Feed" action="Refresh">
                    {motionFeed.map((item) => (
                        <div key={item.id} className="dash-feed-item">
                            <span className={`dash-feed-dot ${item.status}`} />
                            <span className="dash-feed-text">
                                {item.message} — <strong>{item.room}</strong>
                            </span>
                            <span className="dash-feed-time">{item.time}</span>
                        </div>
                    ))}
                </ChartCard>

                {/* Sensor Status */}
                <ChartCard title="Sensor Status">
                    <table className="dash-table">
                        <thead>
                            <tr>
                                <th>Room</th>
                                <th>Status</th>
                                <th>Last Activity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sensors.map((s, i) => (
                                <tr key={i}>
                                    <td style={{ color: "#fff", fontWeight: 500 }}>{s.name}</td>
                                    <td>
                                        <span className={`status-badge ${s.status === "Active" ? "active" : "inactive"}`}>
                                            <span className={`status-dot ${s.status === "Active" ? "green" : "red"}`} />
                                            {s.status}
                                        </span>
                                    </td>
                                    <td>{s.lastMotion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ChartCard>
            </div>
        </>
    );
}
