"use client";

export default function ReportsPage() {
    const reports = [
        { name: "Daily Report", desc: "Today's energy summary", size: "1.2 MB", icon: "📊" },
        { name: "Weekly Report", desc: "This week's usage breakdown", size: "3.5 MB", icon: "📈" },
        { name: "Monthly Report", desc: "March 2025 full report", size: "8.1 MB", icon: "📋" },
        { name: "Savings Report", desc: "Automation savings analysis", size: "2.4 MB", icon: "💰" },
    ];

    const summary = {
        consumed: "96.4 kWh",
        bill: "21,600 RWF",
        savings: "4,200 RWF",
        automationSavings: "18%",
    };

    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">Reports</h2>
                <p className="dash-page-subtitle">Download and review your energy reports.</p>
            </div>

            {/* Report Preview */}
            <div className="dash-stats-grid" style={{ marginBottom: "1.5rem" }}>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Energy Consumed</span>
                    <span className="dash-stat-value">{summary.consumed}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Estimated Bill</span>
                    <span className="dash-stat-value">{summary.bill}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Savings</span>
                    <span className="dash-stat-value" style={{ color: "#22c55e" }}>{summary.savings}</span>
                </div>
                <div className="dash-stat-card">
                    <span className="dash-stat-label">Automation Savings</span>
                    <span className="dash-stat-value" style={{ color: "#22c55e" }}>{summary.automationSavings}</span>
                </div>
            </div>

            {/* Download Cards */}
            {reports.map((report, i) => (
                <div key={i} className="dash-report-card">
                    <div className="dash-report-info">
                        <div className="dash-report-icon">{report.icon}</div>
                        <div>
                            <div className="dash-report-name">{report.name}</div>
                            <div className="dash-report-size">{report.desc} • {report.size}</div>
                        </div>
                    </div>
                    <button className="dash-btn dash-btn-outline dash-btn-sm">
                        <span style={{ marginRight: "0.35rem" }}>↓</span> Download
                    </button>
                </div>
            ))}
        </>
    );
}
