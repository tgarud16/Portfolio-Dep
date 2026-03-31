"use client";

import { useEffect } from "react";

export const ScrollToTop = () => {
    useEffect(() => {
        // Instantly snap to top on initial load — no animation, no flash
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return null;
};
