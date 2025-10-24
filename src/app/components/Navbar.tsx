// components/navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
                <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4 pointer-events-auto">
                    <Link
                        href="/"
                        className="rounded-full px-3 py-1.5 text-neutral-700 dark:text-neutral-200 transition-all duration-200 ring-offset-2 ring-offset-transparent hover:ring-2 hover:ring-gray-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/60"
                    >
                        About Me
                    </Link>
                    <Link
                        href="/projects"
                        className="rounded-full px-3 py-1.5 text-neutral-700 dark:text-neutral-200 transition-all duration-200 ring-offset-2 ring-offset-transparent hover:ring-2 hover:ring-gray-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/60"
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