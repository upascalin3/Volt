interface ChartCardProps {
    title: string;
    action?: string;
    onAction?: () => void;
    children: React.ReactNode;
}

export default function ChartCard({ title, action, onAction, children }: ChartCardProps) {
    return (
        <div className="dash-card">
            <div className="dash-card-header">
                <h3 className="dash-card-title">{title}</h3>
                {action && (
                    <button className="dash-card-action" onClick={onAction}>
                        {action}
                    </button>
                )}
            </div>
            {children}
        </div>
    );
}
