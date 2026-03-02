"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

const pageTitles: Record<string, string> = {
    "/dashboard/user": "Dashboard",
    "/dashboard/user/energy": "Energy Monitoring",
    "/dashboard/user/lighting": "Lighting Control",
    "/dashboard/user/motion": "Motion Activity",
    "/dashboard/user/devices": "Devices",
    "/dashboard/user/alerts": "Alerts",
    "/dashboard/user/reports": "Reports",
    "/dashboard/user/settings": "Settings",
    "/dashboard/admin": "Admin Overview",
    "/dashboard/admin/users": "Users Management",
    "/dashboard/admin/homes": "Installations",
    "/dashboard/admin/devices": "Device Monitoring",
    "/dashboard/admin/analytics": "Energy Analytics",
    "/dashboard/admin/alerts": "Alerts Management",
    "/dashboard/admin/logs": "System Logs",
    "/dashboard/admin/settings": "Admin Settings",
};

interface DashboardLayoutProps {
    role: "user" | "admin";
    children: React.ReactNode;
}

export default function DashboardLayout({ role, children }: DashboardLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    const title = pageTitles[pathname] || "Dashboard";

    return (
        <div className="dash-layout">
            <Sidebar role={role} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <main className="dash-main">
                <TopNav title={title} onMenuClick={() => setSidebarOpen(true)} />
                <div className="dash-content dash-fade-in">
                    {children}
                </div>
            </main>
        </div>
    );
}
