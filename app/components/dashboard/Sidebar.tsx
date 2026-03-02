"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Icons as simple SVG components
const icons: Record<string, React.ReactNode> = {
    dashboard: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
    energy: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
    lighting: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" /></svg>,
    motion: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM2 17l4-4 2 2 4-4" /><path d="M14 13l2 2 6-6" /></svg>,
    devices: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6M9 13h6M9 17h4" /></svg>,
    alerts: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
    reports: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>,
    settings: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
    users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    homes: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l9-9 9 9" /><path d="M5 10v10a1 1 0 0 0 1 1h3v-6h6v6h3a1 1 0 0 0 1-1V10" /></svg>,
    analytics: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>,
    logs: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M12 18v-6M9 15h6" /></svg>,
};

const userLinks = [
    { label: "Dashboard", href: "/dashboard/user", icon: "dashboard" },
    { label: "Energy", href: "/dashboard/user/energy", icon: "energy" },
    { label: "Lighting", href: "/dashboard/user/lighting", icon: "lighting" },
    { label: "Motion Activity", href: "/dashboard/user/motion", icon: "motion" },
    { label: "Devices", href: "/dashboard/user/devices", icon: "devices" },
    { label: "Alerts", href: "/dashboard/user/alerts", icon: "alerts" },
    { label: "Reports", href: "/dashboard/user/reports", icon: "reports" },
    { label: "Settings", href: "/dashboard/user/settings", icon: "settings" },
];

const adminLinks = [
    { label: "Admin Overview", href: "/dashboard/admin", icon: "dashboard" },
    { label: "Users", href: "/dashboard/admin/users", icon: "users" },
    { label: "Homes", href: "/dashboard/admin/homes", icon: "homes" },
    { label: "Devices", href: "/dashboard/admin/devices", icon: "devices" },
    { label: "Analytics", href: "/dashboard/admin/analytics", icon: "analytics" },
    { label: "Alerts", href: "/dashboard/admin/alerts", icon: "alerts" },
    { label: "System Logs", href: "/dashboard/admin/logs", icon: "logs" },
    { label: "Settings", href: "/dashboard/admin/settings", icon: "settings" },
];

interface SidebarProps {
    role: "user" | "admin";
    open: boolean;
    onClose: () => void;
}

export default function Sidebar({ role, open, onClose }: SidebarProps) {
    const pathname = usePathname();
    const links = role === "admin" ? adminLinks : userLinks;

    const isActive = (href: string) => {
        if (href === `/dashboard/${role}`) return pathname === href;
        return pathname.startsWith(href);
    };

    return (
        <>
            <div className={`dash-sidebar-overlay ${open ? "open" : ""}`} onClick={onClose} />
            <aside className={`dash-sidebar ${open ? "open" : ""}`}>
                <div className="dash-sidebar-header">
                    <Image src="/logo.png" alt="VOLT" width={32} height={32} className="dash-sidebar-logo" />
                    <span className="dash-sidebar-brand">VOLT</span>
                </div>

                <nav className="dash-sidebar-nav">
                    <span className="dash-sidebar-label">{role === "admin" ? "Administration" : "Main Menu"}</span>
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`dash-nav-link ${isActive(link.href) ? "active" : ""}`}
                            onClick={onClose}
                        >
                            {icons[link.icon]}
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="dash-sidebar-footer">
                    <Link href="/" className="dash-nav-link" style={{ color: "#666" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
                        </svg>
                        Logout
                    </Link>
                </div>
            </aside>
        </>
    );
}
