"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import AuthLayout from "@/app/components/auth/AuthLayout";

function OTPForm() {
    const searchParams = useSearchParams();
    const rawEmail = searchParams.get("email") || "your email";

    // Mask the email for display
    const maskedEmail = (() => {
        if (!rawEmail.includes("@")) return rawEmail;
        const [user, domain] = rawEmail.split("@");
        if (user.length <= 2) return `${user}@${domain}`;
        return `${user[0]}${"*".repeat(user.length - 2)}${user[user.length - 1]}@${domain}`;
    })();

    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);

    // Timer countdown
    useEffect(() => {
        if (timer <= 0) {
            setCanResend(true);
            return;
        }
        const interval = setInterval(() => setTimer((t) => t - 1), 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return; // digits only

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1); // only keep last digit
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        if (!pastedData) return;

        const newOtp = [...otp];
        for (let i = 0; i < pastedData.length; i++) {
            newOtp[i] = pastedData[i];
        }
        setOtp(newOtp);

        const focusIndex = Math.min(pastedData.length, 5);
        inputRefs.current[focusIndex]?.focus();
    };

    const handleResend = useCallback(() => {
        setTimer(60);
        setCanResend(false);
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
        console.log("Resend OTP to:", rawEmail);
    }, [rawEmail]);

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        const code = otp.join("");
        if (code.length !== 6) return;
        console.log("Verify OTP:", code);
    };

    const formatTime = (s: number) => {
        const mins = Math.floor(s / 60);
        const secs = s % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <AuthLayout>
            <div className="auth-form-wrapper" style={{ textAlign: "center" }}>
                {/* Email icon */}
                <div style={{ marginBottom: "1.5rem" }}>
                    <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        style={{ margin: "0 auto" }}
                    >
                        <rect
                            width="56"
                            height="56"
                            rx="16"
                            fill="rgba(255, 107, 0, 0.1)"
                        />
                        <path
                            d="M18 20h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H18c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2z"
                            stroke="#FF6B00"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                        <polyline
                            points="40,22 28,30 16,22"
                            stroke="#FF6B00"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                    </svg>
                </div>

                <h2 className="auth-heading">Check your email</h2>
                <p className="auth-subheading" style={{ textAlign: "center" }}>
                    We sent a verification code to{" "}
                    <strong style={{ color: "#fff" }}>{maskedEmail}</strong>. Enter the
                    6-digit code below.
                </p>

                <form onSubmit={handleVerify}>
                    {/* OTP Input Group */}
                    <div className="auth-otp-group" onPaste={handlePaste}>
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => {
                                    inputRefs.current[index] = el;
                                }}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                className={`auth-otp-input ${digit ? "filled" : ""}`}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                autoFocus={index === 0}
                            />
                        ))}
                    </div>

                    {/* Timer / Resend */}
                    <div className="auth-timer">
                        {canResend ? (
                            <span>
                                Didn&apos;t receive the code?{" "}
                                <button
                                    type="button"
                                    className="auth-resend-btn"
                                    onClick={handleResend}
                                >
                                    Resend code
                                </button>
                            </span>
                        ) : (
                            <span>Resend code in {formatTime(timer)}</span>
                        )}
                    </div>

                    <button type="submit" className="auth-submit-btn">
                        Verify
                    </button>
                </form>

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

export default function VerifyOTPPage() {
    return (
        <Suspense
            fallback={
                <AuthLayout>
                    <div className="auth-form-wrapper" style={{ textAlign: "center" }}>
                        <h2 className="auth-heading">Loading...</h2>
                    </div>
                </AuthLayout>
            }
        >
            <OTPForm />
        </Suspense>
    );
}
