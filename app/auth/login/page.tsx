"use client";

import { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/app/components/auth/AuthLayout";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic
        console.log("Login:", { email, password });
    };

    return (
        <AuthLayout>
            {/* Top-right link */}
            <div className="auth-top-link">
                Don&apos;t have an acount?{" "}
                <Link href="/auth/signup">Sign up</Link>
            </div>

            <div className="auth-form-wrapper">
                <h2 className="auth-heading">Sign in</h2>

                {/* Social Buttons */}
                <div className="auth-socials" style={{ marginTop: "1.75rem" }}>
                    <button type="button" className="auth-social-btn">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        Continue with Google
                    </button>

                    <button type="button" className="auth-social-btn">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                        Continue with Apple
                    </button>
                </div>

                {/* Divider */}
                <div className="auth-divider">OR</div>

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                    <div className="auth-form-group">
                        <label className="auth-label" htmlFor="login-email">
                            User name or email address
                        </label>
                        <input
                            id="login-email"
                            type="text"
                            className="auth-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                        />
                    </div>

                    <div className="auth-form-group">
                        <div className="auth-label-row">
                            <label className="auth-label" htmlFor="login-password" style={{ marginBottom: 0 }}>
                                Your password
                            </label>
                            <button
                                type="button"
                                className="auth-password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ position: "static", transform: "none" }}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    {showPassword ? (
                                        <>
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                                            <line x1="1" y1="1" x2="23" y2="23" />
                                        </>
                                    ) : (
                                        <>
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </>
                                    )}
                                </svg>
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        <div className="auth-input-wrapper">
                            <input
                                id="login-password"
                                type={showPassword ? "text" : "password"}
                                className="auth-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                        </div>
                    </div>

                    <Link href="/auth/forgot-password" className="auth-forgot-link">
                        Forget your password
                    </Link>

                    <button type="submit" className="auth-submit-btn">
                        Sign in
                    </button>
                </form>

                <p className="auth-bottom-link">
                    Don&apos;t have an acount?{" "}
                    <Link href="/auth/signup">Sign up</Link>
                </p>
            </div>
        </AuthLayout>
    );
}
