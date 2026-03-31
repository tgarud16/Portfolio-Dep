"use client";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image";

interface Diagram {
    title: string;
    imagePath: string;
}

interface DiagramViewerProps {
    diagrams: Diagram[];
    projectTitle: string;
}

export const DiagramViewer: React.FC<DiagramViewerProps> = ({ diagrams, projectTitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Navigate to next/previous diagram
    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % diagrams.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + diagrams.length) % diagrams.length);
    };

    // Keyboard navigation
    useEffect(() => {
        if (!isFullscreen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsFullscreen(false);
            } else if (e.key === "ArrowLeft") {
                goToPrevious();
            } else if (e.key === "ArrowRight") {
                goToNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isFullscreen, diagrams.length]);

    if (diagrams.length === 0) {
        return null;
    }

    const currentDiagram = diagrams[currentIndex];

    return (
        <>
            {/* Main Diagram Box */}
            <div className="relative bg-background/40 border border-cyan-500/30 rounded p-4 overflow-hidden group">
                {/* Diagram Image */}
                <div className="relative aspect-video bg-background/20 rounded overflow-hidden">
                    <Image
                        src={currentDiagram.imagePath}
                        alt={currentDiagram.title}
                        fill
                        className="object-contain"
                        unoptimized
                    />
                </div>

                {/* Controls Overlay - ALWAYS VISIBLE */}
                <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                    {/* Previous Button */}
                    {diagrams.length > 1 && (
                        <button
                            onClick={goToPrevious}
                            className="pointer-events-auto w-10 h-10 rounded-full bg-background/90 border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/20 transition-colors shadow-lg"
                        >
                            <ChevronLeft className="w-5 h-5 text-cyan-400" />
                        </button>
                    )}

                    <div className="flex-1" />

                    {/* Next Button */}
                    {diagrams.length > 1 && (
                        <button
                            onClick={goToNext}
                            className="pointer-events-auto w-10 h-10 rounded-full bg-background/90 border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/20 transition-colors shadow-lg"
                        >
                            <ChevronRight className="w-5 h-5 text-cyan-400" />
                        </button>
                    )}
                </div>

                {/* Expand Button - ALWAYS VISIBLE */}
                <button
                    onClick={() => setIsFullscreen(true)}
                    className="absolute top-6 right-6 w-8 h-8 rounded bg-background/90 border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/20 transition-colors shadow-lg"
                >
                    <Maximize2 className="w-4 h-4 text-cyan-400" />
                </button>

                {/* Bottom Info Bar */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-cyan-500/20">
                    <p className="text-[10px] font-mono text-cyan-400/90 uppercase truncate">
                        {currentDiagram.title}
                    </p>
                    {diagrams.length > 1 && (
                        <span className="text-[9px] font-mono text-muted-foreground">
                            {currentIndex + 1} / {diagrams.length}
                        </span>
                    )}
                </div>
            </div>

            {/* Fullscreen Modal - using Portal to escape transform stacking context */}
            {isFullscreen && typeof document !== 'undefined' && ReactDOM.createPortal(
                <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsFullscreen(false)}
                        style={{ position: 'fixed', top: 16, right: 16, zIndex: 10001 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 border border-red-400/50 transition-colors shadow-2xl cursor-pointer"
                    >
                        <X className="w-5 h-5 text-white" />
                        <span className="text-white text-xs font-mono font-bold uppercase">Close</span>
                    </button>

                    {/* Previous Button */}
                    {diagrams.length > 1 && (
                        <button
                            onClick={goToPrevious}
                            style={{ position: 'fixed', left: 24, top: '50%', transform: 'translateY(-50%)', zIndex: 10001 }}
                            className="w-12 h-12 rounded-full bg-black/80 border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6 text-cyan-400" />
                        </button>
                    )}

                    {/* Next Button */}
                    {diagrams.length > 1 && (
                        <button
                            onClick={goToNext}
                            style={{ position: 'fixed', right: 24, top: '50%', transform: 'translateY(-50%)', zIndex: 10001 }}
                            className="w-12 h-12 rounded-full bg-black/80 border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                        >
                            <ChevronRight className="w-6 h-6 text-cyan-400" />
                        </button>
                    )}

                    {/* Bottom Info */}
                    <div
                        style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 10001 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <p className="text-sm font-mono text-cyan-400 uppercase bg-black/80 px-4 py-1 rounded">
                            {currentDiagram.title}
                        </p>
                        {diagrams.length > 1 && (
                            <span className="text-xs font-mono text-gray-400">
                                {currentIndex + 1} / {diagrams.length}
                            </span>
                        )}
                    </div>

                    {/* Image */}
                    <div className="absolute inset-0 flex items-center justify-center p-20 pt-16 pb-20">
                        <div className="relative w-full h-full">
                            <Image
                                src={currentDiagram.imagePath}
                                alt={currentDiagram.title}
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Click backdrop to close */}
                    <div
                        className="absolute inset-0 -z-10"
                        onClick={() => setIsFullscreen(false)}
                    />
                </div>,
                document.body
            )}
        </>
    );
};
