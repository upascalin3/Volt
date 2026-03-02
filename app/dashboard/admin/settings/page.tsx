"use client";

import { useState } from "react";

export default function AdminSettingsPage() {
    const [alertThreshold, setAlertThreshold] = useState("500");
    const [defaultTariff, setDefaultTariff] = useState("89");
    const [autoBackup, setAutoBackup] = useState(true);
    const [maintenanceMode, setMaintenanceMode] = useState(false);

    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">Admin Settings</h2>
                <p className="dash-page-subtitle">System-wide configuration and defaults.</p>
            </div>

            {/* Alert Thresholds */}
            <div className="dash-card" style={{ marginBottom: "1.5rem" }}>
                <div className="dash-settings-title">Alert Thresholds</div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">High Power Threshold (W)</div>
                        <div className="dash-settings-desc">Alert when power exceeds this value</div>
                    </div>
                    <input className="dash-input" value={alertThreshold} onChange={(e) => setAlertThreshold(e.target.value)} style={{ width: "120px" }} />
                </div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">Idle Light Timeout (min)</div>
                        <div className="dash-settings-desc">Alert when lights are on without motion</div>
                    </div>
                    <input className="dash-input" defaultValue="30" style={{ width: "120px" }} />
                </div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">Device Offline Timeout (min)</div>
                        <div className="dash-settings-desc">Mark device offline after this period</div>
                    </div>
                    <input className="dash-input" defaultValue="5" style={{ width: "120px" }} />
                </div>
            </div>

            {/* Tariff Defaults */}
            <div className="dash-card" style={{ marginBottom: "1.5rem" }}>
                <div className="dash-settings-title">Tariff Defaults</div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">Default Cost per kWh (RWF)</div>
                        <div className="dash-settings-desc">Applied to new installations</div>
                    </div>
                    <input className="dash-input" value={defaultTariff} onChange={(e) => setDefaultTariff(e.target.value)} style={{ width: "120px" }} />
                </div>
            </div>

            {/* System Configuration */}
            <div className="dash-card">
                <div className="dash-settings-title">System Configuration</div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">Automatic Backups</div>
                        <div className="dash-settings-desc">Daily database backups at 2:00 AM</div>
                    </div>
                    <label className="dash-toggle">
                        <input type="checkbox" checked={autoBackup} onChange={(e) => setAutoBackup(e.target.checked)} />
                        <span className="dash-toggle-slider" />
                    </label>
                </div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">Maintenance Mode</div>
                        <div className="dash-settings-desc">Disable user access during maintenance</div>
                    </div>
                    <label className="dash-toggle">
                        <input type="checkbox" checked={maintenanceMode} onChange={(e) => setMaintenanceMode(e.target.checked)} />
                        <span className="dash-toggle-slider" />
                    </label>
                </div>
                <div className="dash-settings-row">
                    <div>
                        <div className="dash-settings-label">OTA Updates</div>
                        <div className="dash-settings-desc">Allow over-the-air firmware updates</div>
                    </div>
                    <label className="dash-toggle">
                        <input type="checkbox" defaultChecked />
                        <span className="dash-toggle-slider" />
                    </label>
                </div>
            </div>
        </>
    );
}
