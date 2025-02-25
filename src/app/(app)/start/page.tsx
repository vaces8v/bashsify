'use client'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTranslation } from 'react-i18next';

export default function Start() {
  const { t } = useTranslation();

  return (
    <div className="flex text-white flex-col gap-[10px] md:max-w-[824px] md:min-w-[824px] min-w-full w-full h-full bg-black  p-6">
      {/* Заголовок */}
      <h1 className="mt-[30px] scroll-m-20 text-2xl font-bold tracking-tight lg:text-4xl">
        {t('start_title')}
      </h1>

      {/* Введение */}
      <p className="mt-4 text-lg text-gray-300">
        {t('start_introduction')}
      </p>

      {/* Раздел 1: Что такое Bash? */}
      <h2 className="mt-8 text-2xl font-semibold">
        {t('what_is_bash_title')}
      </h2>
      <p className="mt-2 text-gray-300">
        {t('what_is_bash_description')}
      </p>

      {/* Раздел 2: Зачем учить Bash? */}
      <h2 className="mt-8 text-2xl font-semibold">
        {t('why_learn_bash_title')}
      </h2>
      <ul className="mt-2 list-disc list-inside text-gray-300">
        <li className="mt-2">
          <strong>{t('why_learn_bash_universality')}</strong>
        </li>
        <li className="mt-2">
          <strong>{t('why_learn_bash_automation')}</strong>
        </li>
        <li className="mt-2">
          <strong>{t('why_learn_bash_power')}</strong>
        </li>
        <li className="mt-2">
          <strong>{t('why_learn_bash_ease_of_learning')}</strong>
        </li>
        <li className="mt-2">
          <strong>{t('why_learn_bash_career_perspectives')}</strong>
        </li>
      </ul>

      {/* Раздел 3: Будущее Bash */}
      <h2 className="mt-8 text-2xl font-semibold">
        {t('bash_future_title')}
      </h2>
      <ul className="mt-2 list-disc list-inside text-gray-300">
        <li className="mt-2">
          <strong>{t('bash_future_relevance')}</strong>
        </li>
        <li className="mt-2">
          <strong>{t('bash_future_devops')}</strong>
        </li>
        <li className="mt-2">
          <strong>{t('bash_future_cloud_integration')}</strong>
        </li>
        <li className="mt-2">
          <strong>{t('bash_future_alternatives')}</strong>
        </li>
      </ul>

      {/* Раздел 4: Пример */}
      <h2 className="mt-8 text-2xl font-semibold">
        {t('bash_example_title')}
      </h2>
      <p className="mt-2 text-gray-300">
        {t('bash_example_description')}
      </p>
      <pre className="mt-4 p-1 bg-gray-800 rounded-lg text-sm text-gray-200">
        <SyntaxHighlighter language="bash" style={atomOneDark} showLineNumbers customStyle={{
          backgroundColor: 'transparent',
        }}>
          {`#!/bin/bash

# Директория для резервных копий
backup_dir="/backup"

# Создаем директорию, если она не существует
mkdir -p $backup_dir

# Текущая дата для имени файла
date=$(date +%Y%m%d_%H%M%S)

# Создаем архив
tar -czf $backup_dir/backup_$date.tar.gz /path/to/files

# Удаляем старые резервные копии (старше 7 дней)
find $backup_dir -type f -name "backup_*.tar.gz" -mtime +7 -delete`}
        </SyntaxHighlighter>
      </pre>

      {/* Заключение */}
      <h2 className="mt-8 text-2xl font-semibold">
        {t('conclusion_title')}
      </h2>
      <p className="mt-2 text-gray-300">
        {t('conclusion_description')}
      </p>
      <p className="mt-4 text-lg text-gray-300 mb-[150px]">
        {t('conclusion_call_to_action')}
      </p>
    </div>
  );
}