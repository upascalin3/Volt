interface AlertItemProps {
    severity: "critical" | "warning" | "info";
    title: string;
    desc: string;
    time: string;
    resolved?: boolean;
    onResolve?: () => void;
}

export default function AlertItem({ severity, title, desc, time, resolved, onResolve }: AlertItemProps) {
    return (
        <div className="dash-alert-item" style={{ opacity: resolved ? 0.5 : 1 }}>
            <div className={`dash-alert-severity ${severity}`} />
            <div className="dash-alert-content">
                <p className="dash-alert-title">{title}</p>
                <p className="dash-alert-desc">{desc}</p>
                <p className="dash-alert-time">{time}</p>
            </div>
            {!resolved && onResolve && (
                <button className="dash-alert-resolve" onClick={onResolve}>Resolve</button>
            )}
            {resolved && (
                <span style={{ fontSize: "0.7rem", color: "#22c55e", fontWeight: 600, alignSelf: "center" }}>Resolved</span>
            )}
        </div>
    );
}
