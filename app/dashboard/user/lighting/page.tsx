"use client";

import { useState } from "react";
import LightControlCard from "@/app/components/dashboard/LightControlCard";
import { rooms as initialRooms } from "@/app/lib/mockData";

export default function LightingPage() {
    const [rooms, setRooms] = useState(initialRooms);

    const toggleLight = (id: number) => {
        setRooms(rooms.map(r => r.id === id ? { ...r, lightOn: !r.lightOn, brightness: r.lightOn ? 0 : 75 } : r));
    };

    const changeBrightness = (id: number, value: number) => {
        setRooms(rooms.map(r => r.id === id ? { ...r, brightness: value } : r));
    };

    const toggleMode = (id: number) => {
        setRooms(rooms.map(r => r.id === id ? { ...r, mode: r.mode === "Auto" ? "Manual" : "Auto" } : r));
    };

    const activeCount = rooms.filter(r => r.lightOn).length;

    return (
        <>
            <div className="dash-page-header">
                <h2 className="dash-page-title">Lighting Control</h2>
                <p className="dash-page-subtitle">{activeCount} of {rooms.length} rooms active</p>
            </div>

            <div className="dash-filter-row" style={{ marginBottom: "1.25rem" }}>
                <button className="dash-btn dash-btn-primary" onClick={() => setRooms(rooms.map(r => ({ ...r, lightOn: false, brightness: 0 })))}>
                    Turn Off All
                </button>
                <button className="dash-btn dash-btn-outline" onClick={() => setRooms(rooms.map(r => ({ ...r, mode: "Auto" })))}>
                    All Auto Mode
                </button>
            </div>

            <div className="dash-grid-3">
                {rooms.map((room) => (
                    <LightControlCard
                        key={room.id}
                        room={room.name}
                        lightOn={room.lightOn}
                        brightness={room.brightness}
                        mode={room.mode}
                        onToggle={() => toggleLight(room.id)}
                        onBrightnessChange={(val) => changeBrightness(room.id, val)}
                        onModeToggle={() => toggleMode(room.id)}
                    />
                ))}
            </div>
        </>
    );
}
