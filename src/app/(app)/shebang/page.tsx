'use client'

import { useTranslation } from "react-i18next";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Page() {
    const { t } = useTranslation();

    return (
        <div className="flex text-white flex-col gap-[10px] md:max-w-[824px] md:min-w-[824px] min-w-full w-full h-full bg-black p-6">
            {/* Header */}
            <h1 className="mt-[30px] scroll-m-20 text-2xl font-bold tracking-tight lg:text-4xl">
                {t('shebang_title')}
            </h1>

            {/* Introduction */}
            <p className="mt-4 text-lg text-gray-300">
                {t('shebang_introduction')}
            </p>

            {/* What is Shebang */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('what_is_shebang_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('what_is_shebang_description')}
            </p>
            <pre className="mt-4 p-1 bg-gray-800 rounded-lg text-sm text-gray-200">
                <SyntaxHighlighter language="bash" style={atomOneDark} showLineNumbers customStyle={{
                    backgroundColor: 'transparent',
                }}>
                    {'#!/bin/bash\n\n' +
                    '# Это простой скрипт\n' +
                    'echo "Привет, мир!"'}
                </SyntaxHighlighter>
            </pre>

            {/* History */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('shebang_history_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('shebang_history_description')}
            </p>

            {/* Common Forms */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('common_forms_title')}
            </h2>
            <div className="mt-4 space-y-4 text-gray-300">
                <pre className="mt-4 p-1 bg-gray-800 rounded-lg text-sm text-gray-200">
                    <SyntaxHighlighter language="bash" style={atomOneDark} showLineNumbers customStyle={{
                        backgroundColor: 'transparent',
                    }}>
                        {'#!/bin/bash          # Стандартный Bash\n' +
                        '#!/usr/bin/env bash  # Кроссплатформенный вариант\n' +
                        '#!/bin/sh            # POSIX-совместимая оболочка\n' +
                        '#!/bin/zsh           # Z shell\n' +
                        '#!/usr/bin/python3   # Python 3\n' +
                        '#!/usr/bin/perl      # Perl'}
                    </SyntaxHighlighter>
                </pre>
            </div>

            {/* Why Use Shebang */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('why_use_shebang_title')}
            </h2>
            <ul className="mt-2 list-disc list-inside text-gray-300">
                <li className="mt-2">{t('why_use_1')}</li>
                <li className="mt-2">{t('why_use_2')}</li>
                <li className="mt-2">{t('why_use_3')}</li>
                <li className="mt-2">{t('why_use_4')}</li>
            </ul>

            {/* Best Practices */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('shebang_best_practices_title')}
            </h2>
            <ul className="mt-2 list-disc list-inside text-gray-300">
                <li className="mt-2">{t('shebang_best_practice_1')}</li>
                <li className="mt-2">{t('shebang_best_practice_2')}</li>
                <li className="mt-2">{t('shebang_best_practice_3')}</li>
            </ul>

            {/* Common Issues */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('common_issues_title')}
            </h2>
            <div className="mt-2 text-gray-300">
                <p className="mt-2">{t('common_issues_description')}</p>
                <pre className="mt-4 p-1 bg-gray-800 rounded-lg text-sm text-gray-200">
                    <SyntaxHighlighter language="bash" style={atomOneDark} showLineNumbers customStyle={{
                        backgroundColor: 'transparent',
                    }}>
                        {'# Неправильно - пробел после #!\n' +
                        '#! /bin/bash\n\n' +
                        '# Неправильно - Windows перенос строк\n' +
                        '#!/bin/bash\\r\\n\n\n' +
                        '# Правильно\n' +
                        '#!/bin/bash'}
                    </SyntaxHighlighter>
                </pre>
            </div>

            {/* Modern Usage */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('modern_usage_title')}
            </h2>
            <p className="mt-2 mb-[150px] text-gray-300">
                {t('modern_usage_description')}
            </p>
        </div>
    )
}