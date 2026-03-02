"use client";

interface LightControlCardProps {
    room: string;
    lightOn: boolean;
    brightness: number;
    mode: string;
    onToggle: () => void;
    onBrightnessChange: (value: number) => void;
    onModeToggle: () => void;
}

export default function LightControlCard({
    room, lightOn, brightness, mode, onToggle, onBrightnessChange, onModeToggle,
}: LightControlCardProps) {
    return (
        <div className="dash-light-card">
            <div className="dash-light-header">
                <span className="dash-light-room">{room}</span>
                <span className={`dash-light-status ${lightOn ? "on" : "off"}`}>
                    {lightOn ? "ON" : "OFF"}
                </span>
            </div>

            <div className="dash-light-info">
                <div className="dash-light-info-row">
                    <span className="dash-light-info-label">Mode</span>
                    <span className="dash-light-info-value">{mode}</span>
                </div>
                <div className="dash-light-info-row">
                    <span className="dash-light-info-label">Brightness</span>
                    <span className="dash-light-info-value">{brightness}%</span>
                </div>
            </div>

            {lightOn && (
                <div className="dash-slider-wrapper">
                    <div className="dash-slider-label">
                        <span>Brightness</span>
                        <span>{brightness}%</span>
                    </div>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={brightness}
                        onChange={(e) => onBrightnessChange(Number(e.target.value))}
                        className="dash-slider"
                    />
                </div>
            )}

            <div className="dash-light-actions">
                <button className={`dash-btn ${lightOn ? "dash-btn-outline" : "dash-btn-primary"}`} onClick={onToggle}>
                    {lightOn ? "Turn Off" : "Turn On"}
                </button>
                <button className="dash-btn dash-btn-outline" onClick={onModeToggle}>
                    {mode === "Auto" ? "Manual Mode" : "Auto Mode"}
                </button>
            </div>
        </div>
    );
}
