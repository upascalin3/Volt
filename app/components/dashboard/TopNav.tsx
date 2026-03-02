"use client";

interface TopNavProps {
    title: string;
    onMenuClick: () => void;
}

export default function TopNav({ title, onMenuClick }: TopNavProps) {
    return (
        <header className="dash-topnav">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <button className="dash-mobile-menu-btn" onClick={onMenuClick}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                </button>
                <h1 className="dash-topnav-title">{title}</h1>
            </div>

            <div className="dash-topnav-right">
                <button className="dash-topnav-btn" title="Search">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                    </svg>
                </button>

                <button className="dash-topnav-btn" title="Notifications">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    <span className="dash-notif-badge" />
                </button>

                <div className="dash-avatar" title="Profile">
                    JM
                </div>
            </div>
        </header>
    );
}
