interface StatCardProps {
    icon: React.ReactNode;
    label: string;
    value: string | number;
    trend?: { value: number; direction: "up" | "down" };
    color?: "orange" | "green" | "blue" | "purple" | "red" | "cyan";
}

export default function StatCard({ icon, label, value, trend, color = "orange" }: StatCardProps) {
    return (
        <div className="dash-stat-card">
            <div className={`dash-stat-icon ${color}`}>{icon}</div>
            <span className="dash-stat-label">{label}</span>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                <span className="dash-stat-value">{value}</span>
                {trend && (
                    <span className={`dash-stat-trend ${trend.direction}`}>
                        {trend.direction === "up" ? "↑" : "↓"} {Math.abs(trend.value)}%
                    </span>
                )}
            </div>
        </div>
    );
}
