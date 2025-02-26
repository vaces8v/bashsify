'use client';

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { motion } from "framer-motion";

export interface SearchResult {
    title: string;
    description: string;
    route: string;
    keywords: string[];
}

interface SearchResultsProps {
    results: SearchResult[];
    onClose: () => void;
}

export const searchIndex: SearchResult[] = [
    {
        title: "start_title",
        description: "start_introduction",
        route: "/start",
        keywords: ["bash", "shell", "command", "unix", "linux", "macos", "automation", "scripts"]
    },
    {
        title: "history_title",
        description: "history_introduction",
        route: "/history",
        keywords: ["history", "unix", "gnu", "thompson", "bourne", "brian fox", "shell", "evolution"]
    },
    {
        title: "variables_title",
        description: "variables_introduction",
        route: "/variables",
        keywords: ["variables", "data", "storage", "arrays", "strings", "numbers", "environment", "readonly"]
    },
    {
        title: "shebang_title",
        description: "shebang_introduction",
        route: "/shebang",
        keywords: ["shebang", "interpreter", "script", "hashbang", "#!", "env", "execution"]
    },
    {
        title: "modes_title",
        description: "modes_introduction",
        route: "/modes",
        keywords: ["modes", "interactive", "non-interactive", "shell", "script", "terminal", "automation"]
    },
    {
        title: "error_handling_title",
        description: "error_handling_introduction",
        route: "/errors",
        keywords: ["error", "handling", "set", "pipefail", "trap", "debug", "exit", "status", "bash"]
    }
];

export default function SearchResults({ results, onClose }: SearchResultsProps) {
    const { t } = useTranslation();

    if (results.length === 0) {
        return (
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="origin-top absolute top-[45px] right-0 w-[200px] bg-primary rounded-lg p-4 shadow-lg">
                <p className="text-gray-300">{t("no_results")}</p>
            </motion.div>
        );
    }

    return (
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="origin-top absolute h-[200px] overflow-y-auto max-w-[200px] top-[45px] right-0 w-[200px] bg-primary rounded-lg shadow-lg overflow-hidden">
            {results.map((result, index) => (
                <Link
                    href={result.route}
                    key={index}
                    onClick={onClose}
                    className="block p-4 hover:bg-white/5 transition-colors border-b border-white/10 last:border-0"
                >
                    <h3 className="text-white text-md font-medium">{t(result.title)}</h3>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">{t(result.description)}</p>
                </Link>
            ))}
        </motion.div>
    );
}
