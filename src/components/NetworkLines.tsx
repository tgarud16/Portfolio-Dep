"use client";

import React from "react";

/**
 * Subtle animated network lines background.
 * Pure CSS transforms — no JS animation loops.
 * Renders behind all content (z-[1]).
 *
 * DEBUG: Set DEBUG_VISIBLE to true below to temporarily boost
 * line visibility for testing. Set back to false for production.
 */

const DEBUG_VISIBLE = false; // ← flip to true to test visibility

export const NetworkLines = () => {
    const lines = [
        {
            top: "12%",
            width: "45%",
            opacity: 0.12,
            animation: "network-flow-1 22s linear 0s infinite",
            gradient: "linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.5) 30%, rgba(34, 211, 238, 0.8) 50%, rgba(34, 211, 238, 0.5) 70%, transparent)",
        },
        {
            top: "28%",
            width: "55%",
            opacity: 0.10,
            animation: "network-flow-2 28s linear -8s infinite",
            gradient: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4) 25%, rgba(59, 130, 246, 0.7) 50%, rgba(59, 130, 246, 0.4) 75%, transparent)",
        },
        {
            top: "45%",
            width: "35%",
            opacity: 0.14,
            animation: "network-flow-3 20s linear -5s infinite",
            gradient: "linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.45) 20%, rgba(34, 211, 238, 0.75) 50%, rgba(34, 211, 238, 0.45) 80%, transparent)",
        },
        {
            top: "62%",
            width: "50%",
            opacity: 0.11,
            animation: "network-flow-1 30s linear -14s infinite",
            gradient: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.35) 30%, rgba(59, 130, 246, 0.65) 50%, rgba(59, 130, 246, 0.35) 70%, transparent)",
        },
        {
            top: "78%",
            width: "40%",
            opacity: 0.12,
            animation: "network-flow-2 24s linear -3s infinite",
            gradient: "linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.4) 35%, rgba(34, 211, 238, 0.7) 50%, rgba(34, 211, 238, 0.4) 65%, transparent)",
        },
        {
            top: "90%",
            width: "30%",
            opacity: 0.09,
            animation: "network-flow-3 26s linear -10s infinite",
            gradient: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3) 25%, rgba(59, 130, 246, 0.6) 50%, rgba(59, 130, 246, 0.3) 75%, transparent)",
        },
    ];

    return (
        <div
            className={`fixed inset-0 z-[1] pointer-events-none overflow-hidden hidden dark:block ${DEBUG_VISIBLE ? "network-debug" : ""
                }`}
        >
            {lines.map((line, i) => (
                <div
                    key={i}
                    className="network-line"
                    style={{
                        top: line.top,
                        width: line.width,
                        opacity: line.opacity,
                        background: line.gradient,
                        animation: line.animation,
                    }}
                />
            ))}
        </div>
    );
};
