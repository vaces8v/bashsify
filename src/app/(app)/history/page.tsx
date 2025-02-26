'use client'

import { Button } from "@heroui/button"
import { IterationCcw } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTranslation } from "react-i18next";

export default function Page() {
    const { t } = useTranslation();

    return (
        <div className="flex text-white flex-col gap-[10px] md:max-w-[824px] md:min-w-[824px] min-w-full w-full h-full bg-black p-6">
            {/* Header */}
            <h1 className="mt-[30px] scroll-m-20 text-2xl font-bold tracking-tight lg:text-4xl">
                {t('history_title')}
            </h1>

            {/* Introduction */}
            <p className="mt-4 text-lg text-gray-300">
                {t('history_introduction')}
            </p>

            {/* Early Unix Shell */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('early_unix_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('early_unix_description')}
            </p>

            {/* Birth of Bash */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('birth_of_bash_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('birth_of_bash_description')}
            </p>

            {/* Key Features and Innovations */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('key_features_title')}
            </h2>
            <ul className="mt-2 list-disc list-inside text-gray-300">
                <li className="mt-2">{t('key_feature_1')}</li>
                <li className="mt-2">{t('key_feature_2')}</li>
                <li className="mt-2">{t('key_feature_3')}</li>
                <li className="mt-2">{t('key_feature_4')}</li>
            </ul>

            {/* Evolution Timeline */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('evolution_title')}
            </h2>
            <div className="mt-4 space-y-4 text-gray-300">
                <div>
                    <strong>1971:</strong> {t('evolution_1971')}
                </div>
                <div>
                    <strong>1977:</strong> {t('evolution_1977')}
                </div>
                <div>
                    <strong>1989:</strong> {t('evolution_1989')}
                </div>
                <div>
                    <strong>1996:</strong> {t('evolution_1996')}
                </div>
                <div>
                    <strong>2004:</strong> {t('evolution_2004')}
                </div>
                <div>
                    <strong>2019:</strong> {t('evolution_2019')}
                </div>
            </div>

            {/* Impact on Modern Computing */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('impact_title')}
            </h2>
            <p className="mt-2 text-gray-300">
                {t('impact_description')}
            </p>

            {/* Legacy and Future */}
            <h2 className="mt-8 text-2xl font-semibold">
                {t('legacy_title')}
            </h2>
            <p className="mt-2 mb-[150px] text-gray-300">
                {t('legacy_description')}
            </p>
        </div>
    )
}