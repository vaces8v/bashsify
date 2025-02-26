'use client'

import { useTranslation } from "react-i18next";

export default function Page() {
    const { t } = useTranslation();

    return (
        <div className="flex text-white flex-col gap-[10px] md:max-w-[824px] md:min-w-[824px] min-w-full w-full h-full bg-black p-6">
            <h1 className="mt-[30px] scroll-m-20 text-2xl font-bold tracking-tight lg:text-4xl">
                {t('modes_title')}
            </h1>
            <p className="mt-4 text-lg text-gray-300">
                {t('modes_introduction')}
            </p>

            <h2 className="mt-8 text-2xl font-semibold">
                {t('interactive_mode_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('interactive_mode_description')}
            </p>
            <h3 className="mt-4 text-xl font-semibold">
                {t('interactive_features_title')}
            </h3>
            <ul className="mt-2 list-disc list-inside text-gray-300">
                <li className="mt-2">{t('interactive_feature_1')}</li>
                <li className="mt-2">{t('interactive_feature_2')}</li>
                <li className="mt-2">{t('interactive_feature_3')}</li>
                <li className="mt-2">{t('interactive_feature_4')}</li>
            </ul>

            <h2 className="mt-8 text-2xl font-semibold">
                {t('non_interactive_mode_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('non_interactive_mode_description')}
            </p>
            <h3 className="mt-4 text-xl font-semibold">
                {t('non_interactive_features_title')}
            </h3>
            <ul className="mt-2 list-disc list-inside text-gray-300">
                <li className="mt-2">{t('non_interactive_feature_1')}</li>
                <li className="mt-2">{t('non_interactive_feature_2')}</li>
                <li className="mt-2">{t('non_interactive_feature_3')}</li>
                <li className="mt-2">{t('non_interactive_feature_4')}</li>
            </ul>

            <h2 className="mt-8 text-2xl font-semibold">
                {t('config_files_title')}
            </h2>
            <div className="mt-2 text-gray-300">
                <h3 className="mt-4 text-xl font-semibold">
                    {t('interactive_config_title')}
                </h3>
                <ul className="mt-2 list-disc list-inside">
                    <li className="mt-2">{t('interactive_config_1')}</li>
                    <li className="mt-2">{t('interactive_config_2')}</li>
                    <li className="mt-2">{t('interactive_config_3')}</li>
                </ul>

                <h3 className="mt-4 text-xl font-semibold">
                    {t('non_interactive_config_title')}
                </h3>
                <ul className="mt-2 list-disc list-inside">
                    <li className="mt-2">{t('non_interactive_config_1')}</li>
                    <li className="mt-2">{t('non_interactive_config_2')}</li>
                </ul>
            </div>

            <h2 className="mt-8 text-2xl font-semibold">
                {t('mode_best_practices_title')}
            </h2>
            <ul className="mt-2 list-disc list-inside text-gray-300">
                <li className="mt-2">{t('mode_best_practice_1')}</li>
                <li className="mt-2">{t('mode_best_practice_2')}</li>
                <li className="mt-2">{t('mode_best_practice_3')}</li>
                <li className="mt-2">{t('mode_best_practice_4')}</li>
            </ul>

            <h2 className="mt-8 text-2xl font-semibold">
                {t('common_uses_title')}
            </h2>
            <div className="mt-2 mb-[150px] text-gray-300">
                <h3 className="mt-4 text-xl font-semibold">{t('interactive_uses_title')}</h3>
                <ul className="mt-2 list-disc list-inside">
                    <li className="mt-2">{t('interactive_use_1')}</li>
                    <li className="mt-2">{t('interactive_use_2')}</li>
                    <li className="mt-2">{t('interactive_use_3')}</li>
                </ul>

                <h3 className="mt-4 text-xl font-semibold">{t('non_interactive_uses_title')}</h3>
                <ul className="mt-2 list-disc list-inside">
                    <li className="mt-2">{t('non_interactive_use_1')}</li>
                    <li className="mt-2">{t('non_interactive_use_2')}</li>
                    <li className="mt-2">{t('non_interactive_use_3')}</li>
                </ul>
            </div>
        </div>
    )
}