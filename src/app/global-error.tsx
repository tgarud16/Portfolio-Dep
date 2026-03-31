"use client";

// Simple production-safe global error boundary
// Replaces the Orchids-IDE version which posted to parent iframes

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en">
            <body
                style={{
                    minHeight: "100vh",
                    background: "#0a0a0a",
                    color: "#fafafa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem",
                    fontFamily: "monospace",
                }}
            >
                <div style={{ maxWidth: "480px", textAlign: "center" }}>
                    <h1 style={{ color: "#ef4444", marginBottom: "1rem" }}>
                        Something went wrong
                    </h1>
                    <p style={{ color: "#888", marginBottom: "1.5rem" }}>
                        An unexpected error occurred. Please try refreshing the page.
                    </p>
                    {process.env.NODE_ENV === "development" && (
                        <pre
                            style={{
                                textAlign: "left",
                                fontSize: "12px",
                                background: "#111",
                                padding: "1rem",
                                overflow: "auto",
                                color: "#ccc",
                            }}
                        >
                            {error.message}
                            {error.digest && `\nDigest: ${error.digest}`}
                        </pre>
                    )}
                    <button
                        onClick={reset}
                        style={{
                            marginTop: "1rem",
                            padding: "0.5rem 1.5rem",
                            background: "#2563eb",
                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}
