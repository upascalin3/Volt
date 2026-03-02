"use client";

import { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/app/components/auth/AuthLayout";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle forgot password logic
        console.log("Reset password for:", email);
        setSubmitted(true);
    };

    return (
        <AuthLayout>
            <div className="auth-form-wrapper">
                <h2 className="auth-heading">Forgot password</h2>
                <p className="auth-subheading">
                    {submitted
                        ? "We've sent a verification code to your email. Please check your inbox."
                        : "No worries! Enter your email address and we'll send you a code to reset your password."}
                </p>

                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <div className="auth-form-group">
                            <label className="auth-label" htmlFor="reset-email">
                                Email address
                            </label>
                            <input
                                id="reset-email"
                                type="email"
                                className="auth-input"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="auth-submit-btn"
                            style={{ marginTop: "1rem" }}
                        >
                            Send reset code
                        </button>
                    </form>
                ) : (
                    <div>
                        <button
                            type="button"
                            className="auth-submit-btn"
                            onClick={() => {
                                window.location.href = `/auth/verify-otp?email=${encodeURIComponent(email)}`;
                            }}
                        >
                            Enter verification code
                        </button>
                    </div>
                )}

                <Link href="/auth/login" className="auth-back-link">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>
                    Back to Sign in
                </Link>
            </div>
        </AuthLayout>
    );
}
