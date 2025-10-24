// components/navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
                <div className="pointer-events-auto fixed top-4 right-4 flex items-center gap-3">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-full border border-white/20 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md px-5 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 transition-all shadow-sm hover:bg-white/90 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white hover:ring-2 hover:ring-blue-400/60 hover:border-blue-400/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                    >
                        About Me
                    </Link>
                    <Link
                        href="/projects"
                        className="inline-flex items-center rounded-full border border-white/20 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md px-5 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 transition-all shadow-sm hover:bg-white/90 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white hover:ring-2 hover:ring-violet-400/60 hover:border-violet-400/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                    >
                        Projects
                    </Link>
                </div>
            </nav>
            <style jsx global>{`
                html { scrollbar-gutter: stable; }
            `}</style>
        </>
    );
}
