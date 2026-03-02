"use client";

import { useState } from "react";

export default function SettingsPage() {
    const [notifEmail, setNotifEmail] = useState(true);
    const [notifSMS, setNotifSMS] = useState(false);
    const [notifPush, setNotifPush] = useState(true);
    const [tariff, setTariff] = useState("89");

    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">Settings</h2>
                <p className="dash-page-subtitle">Manage your account and preferences.</p>
            </div>

            {/* Profile Section */}
            <div className="dash-card" style={{ marginBottom: "1.5rem" }}>
                <div className="dash-settings-title">Profile</div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">Full Name</div>
                        <div className="dash-settings-desc">Your display name</div>
                    </div>
                    <input className="dash-input" defaultValue="Jean Mugabo" />
                </div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">Email</div>
                        <div className="dash-settings-desc">Your account email</div>
                    </div>
                    <input className="dash-input" defaultValue="jean@volt.rw" />
                </div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">Phone</div>
                    </div>
                    <input className="dash-input" defaultValue="+250 78 123 4567" />
                </div>
            </div>

            {/* Notifications */}
            <div className="dash-card" style={{ marginBottom: "1.5rem" }}>
                <div className="dash-settings-title">Notifications</div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">Email Alerts</div>
                        <div className="dash-settings-desc">Receive alerts via email</div>
                    </div>
                    <label className="dash-toggle">
                        <input type="checkbox" checked={notifEmail} onChange={(e) => setNotifEmail(e.target.checked)} />
                        <span className="dash-toggle-slider" />
                    </label>
                </div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">SMS Alerts</div>
                        <div className="dash-settings-desc">Get important alerts via SMS</div>
                    </div>
                    <label className="dash-toggle">
                        <input type="checkbox" checked={notifSMS} onChange={(e) => setNotifSMS(e.target.checked)} />
                        <span className="dash-toggle-slider" />
                    </label>
                </div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">Push Notifications</div>
                        <div className="dash-settings-desc">Browser push notifications</div>
                    </div>
                    <label className="dash-toggle">
                        <input type="checkbox" checked={notifPush} onChange={(e) => setNotifPush(e.target.checked)} />
                        <span className="dash-toggle-slider" />
                    </label>
                </div>
            </div>

            {/* Energy Tariff */}
            <div className="dash-card" style={{ marginBottom: "1.5rem" }}>
                <div className="dash-settings-title">Energy Tariff</div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">Cost per kWh (RWF)</div>
                        <div className="dash-settings-desc">Current electricity tariff rate</div>
                    </div>
                    <input className="dash-input" value={tariff} onChange={(e) => setTariff(e.target.value)} style={{ width: "120px" }} />
                </div>
            </div>

            {/* Security */}
            <div className="dash-card">
                <div className="dash-settings-title">Security</div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">Change Password</div>
                        <div className="dash-settings-desc">Update your account password</div>
                    </div>
                    <button className="dash-btn dash-btn-outline">Change</button>
                </div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">Two-Factor Authentication</div>
                        <div className="dash-settings-desc">Add an extra layer of security</div>
                    </div>
                    <button className="dash-btn dash-btn-outline">Enable</button>
                </div>
            </div>
        </>
    );
}
