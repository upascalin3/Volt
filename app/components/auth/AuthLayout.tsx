import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="auth-container">
      {/* Left Panel — Image & Branding */}
      <div className="auth-left">
        <Image
          src="/auth.png"
          alt="VOLT Smart Energy"
          fill
          className="auth-left-image"
          priority
        />
        <div className="auth-left-overlay" />
        <div className="auth-left-content">
          <Image
            src="/logo.png"
            alt="VOLT Logo"
            width={48}
            height={48}
            className="auth-logo-icon"
          />
          <h1 className="auth-left-title">Welcome to VOLT</h1>
          <p className="auth-left-desc">
            Access your smart energy dashboard and take control of your lighting
            system. Monitor electricity usage in real time, manage your connected
            devices, and receive alerts that help you reduce energy waste and
            lower your electricity costs. Sign in to continue or create an
            account to get started with VOLT.
          </p>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="auth-right">{children}</div>
    </div>
  );
}
