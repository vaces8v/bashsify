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
                {t('variables_title')}
            </h1>

            {/* Introduction */}
            <p className="mt-4 text-lg text-gray-300">
                {t('variables_introduction')}
            </p>

            {/* Basic Variables */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('basic_variables_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('basic_variables_description')}
            </p>
            <pre className="mt-4 p-1 bg-gray-800 rounded-lg text-sm text-gray-200">
                <SyntaxHighlighter language="bash" style={atomOneDark} showLineNumbers customStyle={{
                    backgroundColor: 'transparent',
                }}>
                    {'# Создание простых переменных\n' +
                    'name="John"\n' +
                    'age=25\n' +
                    'echo "Привет, $name! Тебе $age лет."\n\n' +
                    '# Использование фигурных скобок\n' +
                    'greeting="Hello"\n' +
                    'echo "${greeting}World"   # HelloWorld'}
                </SyntaxHighlighter>
            </pre>

            {/* Variable Types */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('variable_types_title')}
            </h2>
            <ul className="mt-2 list-disc list-inside text-gray-300">
                <li className="mt-2">{t('variable_type_1')}</li>
                <li className="mt-2">{t('variable_type_2')}</li>
                <li className="mt-2">{t('variable_type_3')}</li>
                <li className="mt-2">{t('variable_type_4')}</li>
            </ul>

            {/* Environment Variables */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('environment_variables_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('environment_variables_description')}
            </p>
            <pre className="mt-4 p-1 bg-gray-800 rounded-lg text-sm text-gray-200">
                <SyntaxHighlighter language="bash" style={atomOneDark} showLineNumbers customStyle={{
                    backgroundColor: 'transparent',
                }}>
                    {'# Просмотр переменных окружения\n' +
                    'echo $PATH         # Пути поиска программ\n' +
                    'echo $HOME         # Домашняя директория\n' +
                    'echo $USER         # Имя пользователя\n\n' +
                    '# Создание новой переменной окружения\n' +
                    'export MY_VAR="значение"\n' +
                    'echo $MY_VAR'}
                </SyntaxHighlighter>
            </pre>

            {/* Special Variables */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('special_variables_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('special_variables_description')}
            </p>
            <pre className="mt-4 p-1 bg-gray-800 rounded-lg text-sm text-gray-200">
                <SyntaxHighlighter language="bash" style={atomOneDark} showLineNumbers customStyle={{
                    backgroundColor: 'transparent',
                }}>
                    {'# Специальные переменные\n' +
                    'echo $0    # Имя скрипта\n' +
                    'echo $1    # Первый аргумент\n' +
                    'echo $#    # Количество аргументов\n' +
                    'echo $?    # Код возврата\n' +
                    'echo $$    # PID процесса\n' +
                    'echo $*    # Все аргументы'}
                </SyntaxHighlighter>
            </pre>

            {/* Variable Operations */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('variable_operations_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('variable_operations_description')}
            </p>
            <pre className="mt-4 p-1 bg-gray-800 rounded-lg text-sm text-gray-200">
                <SyntaxHighlighter language="bash" style={atomOneDark} showLineNumbers customStyle={{
                    backgroundColor: 'transparent',
                }}>
                    {'# Операции с переменными\n' +
                    'string="Hello"\n' +
                    'echo ${string:0:2}     # He (подстрока)\n' +
                    'echo ${string/l/L}     # HeLlo (замена)\n' +
                    'echo ${string^^}       # HELLO (верхний регистр)\n' +
                    'echo ${string,,}       # hello (нижний регистр)\n\n' +
                    '# Значения по умолчанию\n' +
                    'echo ${undefined:-"default"}  # default\n' +
                    'unset variable\n' +
                    'echo ${variable:="new value"}'}
                </SyntaxHighlighter>
            </pre>

            {/* Best Practices */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('best_practices_title')}
            </h2>
            <ul className="mt-2 list-disc list-inside text-gray-300">
                <li className="mt-2">{t('best_practice_1')}</li>
                <li className="mt-2">{t('best_practice_2')}</li>
                <li className="mt-2">{t('best_practice_3')}</li>
                <li className="mt-2">{t('best_practice_4')}</li>
            </ul>

            {/* Common Mistakes */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('common_mistakes_title')}
            </h2>
            <ul className="mt-2 list-disc list-inside text-gray-300 mb-[150px]">
                <li className="mt-2">{t('common_mistake_1')}</li>
                <li className="mt-2">{t('common_mistake_2')}</li>
                <li className="mt-2">{t('common_mistake_3')}</li>
                <li className="mt-2">{t('common_mistake_4')}</li>
            </ul>
        </div>
    )
}