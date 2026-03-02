import DashboardLayout from "@/app/components/dashboard/DashboardLayout";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
    return <DashboardLayout role="admin">{children}</DashboardLayout>;
}
