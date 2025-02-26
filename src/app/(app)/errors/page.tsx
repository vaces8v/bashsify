'use client'

import { useTranslation } from "react-i18next";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Page() {
    const { t } = useTranslation();

    return (
        <div className="flex text-white flex-col gap-[10px] md:max-w-[824px] md:min-w-[824px] min-w-full w-full h-full bg-black p-6">
            <h1 className="mt-[30px] scroll-m-20 text-2xl font-bold tracking-tight lg:text-4xl">
                {t('error_handling_title')}
            </h1>
            <p className="mt-4 text-lg text-gray-300">
                {t('error_handling_introduction')}
            </p>

            <h2 className="mt-8 text-2xl font-semibold">
                {t('set_command_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('set_command_description')}
            </p>

            <h2 className="mt-8 text-2xl font-semibold">
                {t('e_flag_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('e_flag_description')}
            </p>
            <pre className="mt-4 p-1 bg-gray-800 rounded-lg text-sm text-gray-200">
                <SyntaxHighlighter language="bash" style={atomOneDark} showLineNumbers customStyle={{
                    backgroundColor: 'transparent',
                }}>
                    {'#!/bin/bash\nset -e\n\n# Скрипт остановится здесь при ошибке\ncd /несуществующая/директория\n\n# Этот код не выполнится\necho "Эта строка не будет выведена"'}
                </SyntaxHighlighter>
            </pre>

            <h2 className="mt-8 text-2xl font-semibold">
                {t('u_flag_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('u_flag_description')}
            </p>
            <pre className="mt-4 p-1 bg-gray-800 rounded-lg text-sm text-gray-200">
                <SyntaxHighlighter language="bash" style={atomOneDark} showLineNumbers customStyle={{
                    backgroundColor: 'transparent',
                }}>
                    {'#!/bin/bash\nset -u\n\n# Это вызовет ошибку, так как $UNDEFINED не определена\necho $UNDEFINED\n\n# Правильный способ:\necho "${UNDEFINED:-значение_по_умолчанию}"'}
                </SyntaxHighlighter>
            </pre>

            <h2 className="mt-8 text-2xl font-semibold">
                {t('o_pipefail_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('o_pipefail_description')}
            </p>
            <pre className="mt-4 p-1 bg-gray-800 rounded-lg text-sm text-gray-200">
                <SyntaxHighlighter language="bash" style={atomOneDark} showLineNumbers customStyle={{
                    backgroundColor: 'transparent',
                }}>
                    {'#!/bin/bash\nset -o pipefail\n\n# Без pipefail это вернет 0 (успех)\n# С pipefail это вернет код ошибки от grep\ncat /несуществующий/файл | grep "текст"'}
                </SyntaxHighlighter>
            </pre>

            <h2 className="mt-8 text-2xl font-semibold">
                {t('E_flag_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('E_flag_description')}
            </p>
            <pre className="mt-4 p-1 bg-gray-800 rounded-lg text-sm text-gray-200">
                <SyntaxHighlighter language="bash" style={atomOneDark} showLineNumbers customStyle={{
                    backgroundColor: 'transparent',
                }}>
                    {'#!/bin/bash\nset -E\n\ntrap "echo Очистка..." ERR\n\n# Эта функция вызовет trap при ошибке\nfunction test_error {\n    cat /несуществующий/файл\n}\n\ntest_error  # Вызовет trap'}
                </SyntaxHighlighter>
            </pre>

            <h2 className="mt-8 text-2xl font-semibold">
                {t('errors_best_practices_title')}
            </h2>
            <ul className="mt-2 list-disc list-inside text-gray-300">
                <li className="mt-2">{t('errors_best_practice_1')}</li>
                <li className="mt-2">{t('errors_best_practice_2')}</li>
                <li className="mt-2">{t('errors_best_practice_3')}</li>
                <li className="mt-2">{t('errors_best_practice_4')}</li>
            </ul>

            <h2 className="mt-8 text-2xl font-semibold">
                {t('common_patterns_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('common_patterns_description')}
            </p>
            <pre className="mt-4 p-1 bg-gray-800 rounded-lg text-sm text-gray-200">
                <SyntaxHighlighter language="bash" style={atomOneDark} showLineNumbers customStyle={{
                    backgroundColor: 'transparent',
                }}>
                    {'#!/bin/bash\nset -Eeuo pipefail\n\n# Функция очистки\ncleanup() {\n    echo "Выполняем очистку..."\n}\n\n# Установка trap для разных сигналов\ntrap cleanup SIGINT SIGTERM ERR EXIT\n\n# Основной код\necho "Начинаем работу..."\n# ... ваш код здесь ...\necho "Работа завершена"'}
                </SyntaxHighlighter>
            </pre>

            <h2 className="mt-8 text-2xl font-semibold">
                {t('real_world_example_title')}
            </h2>
            <p className="mt-2 mb-[150px] text-gray-300">
                {t('real_world_example_description')}
            </p>
        </div>
    )
}