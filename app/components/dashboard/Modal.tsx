"use client";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
    if (!open) return null;

    return (
        <div className="dash-modal-overlay" onClick={onClose}>
            <div className="dash-modal" onClick={(e) => e.stopPropagation()}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <h2 className="dash-modal-title" style={{ margin: 0 }}>{title}</h2>
                    <button
                        onClick={onClose}
                        style={{ background: "none", border: "none", color: "#888", fontSize: "1.25rem", cursor: "pointer" }}
                    >
                        ✕
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
