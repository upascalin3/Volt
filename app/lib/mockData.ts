// ===================== VOLT MOCK DATA =====================

export const energyStats = {
    currentUsage: 132,
    unit: "W",
    activeLights: 4,
    roomsWithMotion: 2,
    todayCost: 720,
    currency: "RWF",
    systemStatus: "Online",
    monthlyEstimate: 21600,
    energySaved: 340,
};

export const hourlyEnergy = [
    45, 38, 30, 28, 25, 22, 32, 65, 98, 110, 125, 132,
    128, 115, 105, 95, 88, 102, 118, 135, 120, 95, 72, 55,
];

export const weeklyEnergy = [
    { day: "Mon", kwh: 3.2 },
    { day: "Tue", kwh: 4.1 },
    { day: "Wed", kwh: 3.8 },
    { day: "Thu", kwh: 2.9 },
    { day: "Fri", kwh: 5.2 },
    { day: "Sat", kwh: 4.5 },
    { day: "Sun", kwh: 3.6 },
];

export const rooms = [
    { id: 1, name: "Living Room", lightOn: true, brightness: 75, mode: "Auto", motionDetected: true, lastMotion: "2 min ago" },
    { id: 2, name: "Kitchen", lightOn: false, brightness: 0, mode: "Manual", motionDetected: false, lastMotion: "1 hour ago" },
    { id: 3, name: "Hall", lightOn: true, brightness: 50, mode: "Auto", motionDetected: true, lastMotion: "30 sec ago" },
    { id: 4, name: "Bedroom", lightOn: true, brightness: 30, mode: "Manual", motionDetected: false, lastMotion: "3 hours ago" },
    { id: 5, name: "Office", lightOn: true, brightness: 90, mode: "Auto", motionDetected: false, lastMotion: "45 min ago" },
    { id: 6, name: "Bathroom", lightOn: false, brightness: 0, mode: "Auto", motionDetected: false, lastMotion: "2 hours ago" },
];

export const devices = [
    { id: 1, name: "ESP32 Hub", type: "Controller", status: "Online", lastSeen: "2 sec ago", firmware: "v2.1.3", ip: "192.168.1.10" },
    { id: 2, name: "Hall Sensor", type: "Motion Sensor", status: "Active", lastSeen: "5 sec ago", firmware: "v1.4.0", ip: "192.168.1.11" },
    { id: 3, name: "Energy Meter", type: "Power Monitor", status: "Running", lastSeen: "Live", firmware: "v3.0.1", ip: "192.168.1.12" },
    { id: 4, name: "Kitchen Relay", type: "Switch", status: "Online", lastSeen: "10 sec ago", firmware: "v2.1.3", ip: "192.168.1.13" },
    { id: 5, name: "Bedroom Sensor", type: "Motion Sensor", status: "Offline", lastSeen: "2 hours ago", firmware: "v1.3.8", ip: "192.168.1.14" },
];

export const alerts = [
    { id: 1, severity: "critical", title: "High Energy Usage", desc: "Hall lights stayed on for 3 hours without motion", time: "10 min ago", resolved: false },
    { id: 2, severity: "warning", title: "Device Offline", desc: "Bedroom sensor lost connection", time: "1 hour ago", resolved: false },
    { id: 3, severity: "info", title: "Firmware Update", desc: "New firmware v2.2.0 available for ESP32 Hub", time: "3 hours ago", resolved: false },
    { id: 4, severity: "critical", title: "Unusual Power Spike", desc: "Power usage exceeded 500W at 3:00 AM", time: "Yesterday", resolved: true },
    { id: 5, severity: "warning", title: "Low Battery", desc: "Hall sensor battery at 15%", time: "2 days ago", resolved: true },
];

export const motionFeed = [
    { id: 1, room: "Living Room", time: "21:02", status: "active", message: "Motion detected" },
    { id: 2, room: "Hall", time: "20:58", status: "active", message: "Motion detected" },
    { id: 3, room: "Office", time: "20:30", status: "inactive", message: "No activity" },
    { id: 4, room: "Kitchen", time: "20:15", status: "inactive", message: "No activity" },
    { id: 5, room: "Living Room", time: "19:45", status: "active", message: "Motion detected" },
    { id: 6, room: "Bedroom", time: "19:20", status: "inactive", message: "No activity" },
    { id: 7, room: "Hall", time: "18:50", status: "active", message: "Motion detected" },
];

export const insights = [
    "Lights were on 2 hours without motion yesterday in the Hall.",
    "Kitchen energy usage dropped 15% this week — great job!",
    "Consider scheduling office lights to turn off after 6 PM.",
    "Energy saver mode could save you ~200 RWF/day.",
];

// ─── Admin Data ───

export const adminUsers = [
    { id: 1, name: "Jean Mugabo", email: "jean@volt.rw", homes: 1, status: "Active", joined: "Jan 2025" },
    { id: 2, name: "Alice Uwase", email: "alice@volt.rw", homes: 2, status: "Active", joined: "Feb 2025" },
    { id: 3, name: "Patrick Nkusi", email: "patrick@volt.rw", homes: 1, status: "Inactive", joined: "Mar 2025" },
    { id: 4, name: "Grace Mukiza", email: "grace@volt.rw", homes: 1, status: "Active", joined: "Jan 2025" },
    { id: 5, name: "David Habimana", email: "david@volt.rw", homes: 3, status: "Active", joined: "Dec 2024" },
];

export const adminHomes = [
    { id: 1, name: "Mugabo Residence", owner: "Jean Mugabo", devices: 5, status: "Active", location: "Kigali" },
    { id: 2, name: "Uwase Home 1", owner: "Alice Uwase", devices: 3, status: "Active", location: "Butare" },
    { id: 3, name: "Uwase Home 2", owner: "Alice Uwase", devices: 4, status: "Warning", location: "Kigali" },
    { id: 4, name: "Nkusi Home", owner: "Patrick Nkusi", devices: 2, status: "Offline", location: "Gisenyi" },
    { id: 5, name: "Habimana Estate", owner: "David Habimana", devices: 12, status: "Active", location: "Kigali" },
];

export const adminStats = {
    totalUsers: 156,
    installedHomes: 89,
    activeDevices: 412,
    energySaved: "2.4 MWh",
    userGrowth: 12,
    homeGrowth: 8,
    deviceGrowth: 15,
    energyGrowth: 22,
};

export const systemLogs = [
    { id: 1, timestamp: "2025-03-02 21:02:15", event: "Motion detected", device: "Hall Sensor", level: "info" },
    { id: 2, timestamp: "2025-03-02 20:58:33", event: "Light turned ON", device: "Living Room Relay", level: "info" },
    { id: 3, timestamp: "2025-03-02 20:45:00", event: "High power spike", device: "Energy Meter", level: "warning" },
    { id: 4, timestamp: "2025-03-02 20:30:12", event: "Device disconnected", device: "Bedroom Sensor", level: "error" },
    { id: 5, timestamp: "2025-03-02 19:15:44", event: "OTA update started", device: "ESP32 Hub", level: "info" },
    { id: 6, timestamp: "2025-03-02 18:30:00", event: "User login", device: "API Server", level: "info" },
    { id: 7, timestamp: "2025-03-02 17:45:22", event: "Alert resolved", device: "System", level: "success" },
    { id: 8, timestamp: "2025-03-02 16:00:00", event: "Backup completed", device: "Database", level: "success" },
];

export const monthlyGrowth = [
    { month: "Sep", users: 45, homes: 22 },
    { month: "Oct", users: 62, homes: 35 },
    { month: "Nov", users: 78, homes: 48 },
    { month: "Dec", users: 98, homes: 56 },
    { month: "Jan", users: 125, homes: 68 },
    { month: "Feb", users: 145, homes: 82 },
    { month: "Mar", users: 156, homes: 89 },
];
