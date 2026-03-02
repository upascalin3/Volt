"use client";

interface Column {
    key: string;
    label: string;
    render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode;
}

interface DataTableProps {
    columns: Column[];
    data: Record<string, unknown>[];
    onRowAction?: (action: string, row: Record<string, unknown>) => void;
    actions?: { label: string; key: string; variant?: string }[];
}

export default function DataTable({ columns, data, onRowAction, actions }: DataTableProps) {
    return (
        <div style={{ overflowX: "auto" }}>
            <table className="dash-table">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key}>{col.label}</th>
                        ))}
                        {actions && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            {columns.map((col) => (
                                <td key={col.key}>
                                    {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? "")}
                                </td>
                            ))}
                            {actions && (
                                <td>
                                    <div style={{ display: "flex", gap: "0.35rem" }}>
                                        {actions.map((a) => (
                                            <button
                                                key={a.key}
                                                className={`dash-btn dash-btn-sm ${a.variant === "danger" ? "dash-btn-danger" : "dash-btn-outline"}`}
                                                onClick={() => onRowAction?.(a.key, row)}
                                            >
                                                {a.label}
                                            </button>
                                        ))}
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
