'use client';

import { ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Инициализируем i18next только один раз
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: {  
            "start_title": "Bash: Command shell",
            "start_introduction": "Bash (Bourne Again Shell) is a powerful command shell for Unix-like systems such as Linux and macOS. It allows you to interact with the operating system through the command line, automate tasks, and write scripts. In this article, we'll explain why you should learn Bash and what future it holds.",
            "what_is_bash_title": "What is Bash?",
            "what_is_bash_description": "Bash is an improved version of the original Bourne Shell (sh), developed as part of the GNU project. It provides an interface for executing commands, writing scripts, and automating tasks. Bash is built into virtually all Unix-like systems, making it a universal tool.",
            "why_learn_bash_title": "Why Learn Bash?",
            "why_learn_bash_universality": "Universality: Bash is used in Linux, macOS, and other Unix systems",
            "why_learn_bash_automation": "Automation: Bash scripts can automate routine tasks",
            "why_learn_bash_power": "Power: Bash allows you to combine commands, use pipelines, and perform complex operations",
            "why_learn_bash_ease_of_learning": "Easy to Learn: Bash syntax is simple and understandable even for beginners (though it can be complex)",
            "why_learn_bash_career_perspectives": "Career Prospects: Bash knowledge is in demand in DevOps, system administration, and backend development",
            "bash_future_title": "What's the Future of Bash?",
            "bash_future_relevance": "Relevance in Linux and Unix Systems: Bash remains the standard shell for most distributions",
            "bash_future_devops": "Growing DevOps Popularity: Bash is used for CI/CD automation and infrastructure management",
            "bash_future_cloud_integration": "Cloud Integration: Bash is actively used in cloud platforms like AWS and Google Cloud",
            "bash_future_alternatives": "Alternative Development: Despite the emergence of Zsh and Fish, Bash continues to be widely used",
            "bash_example_title": "Bash Usage Example",
            "bash_example_description": "Here's an example of a simple Bash backup script:",
            "conclusion_title": "Conclusion",
            "conclusion_description": "Bash is a powerful and universal tool that has remained relevant for decades. Learning it not only simplifies working with Unix systems but also opens up new opportunities for automation and career growth. Even with the emergence of new technologies, Bash continues to be an important element of IT infrastructure.",
            "conclusion_call_to_action": "If you want to become an IT professional, learning Bash is a great first step! :)",
            // History page translations
            "history_title": "The History of Bash: A Journey Through Time",
            "history_introduction": "The story of Bash (Bourne Again Shell) is deeply intertwined with the history of Unix and the free software movement. Let's explore how this revolutionary shell came to be and how it shaped modern computing.",
            "early_unix_title": "The Early Unix Shell Era",
            "early_unix_description": "The Unix shell story begins in 1971 with Thompson shell, created by Ken Thompson. This was followed by the Bourne shell (sh) in 1977, written by Stephen Bourne at Bell Labs, which introduced many of the basic shell concepts we still use today.",
            "birth_of_bash_title": "The Birth of Bash",
            "birth_of_bash_description": "In 1989, Brian Fox created Bash as part of the GNU Project, aiming to provide a free software replacement for the Bourne shell. The name 'Bash' is a play on words, meaning 'Bourne Again Shell', referencing both its predecessor and its rebirth as free software.",
            "key_features_title": "Key Features and Innovations",
            "key_feature_1": "Command line editing with history and tab completion",
            "key_feature_2": "Job control and background process management",
            "key_feature_3": "Shell functions and arrays",
            "key_feature_4": "Customizable prompt and extensive scripting capabilities",
            "evolution_title": "Evolution Timeline",
            "evolution_1971": "Thompson shell (sh) created for Unix",
            "evolution_1977": "Bourne shell released, introducing modern shell scripting",
            "evolution_1989": "First version of Bash released by Brian Fox",
            "evolution_1996": "Chet Ramey becomes primary maintainer",
            "evolution_2004": "Bash 3.0 released with major improvements",
            "evolution_2019": "Bash 5.0 introduces new features for modern computing",
            "impact_title": "Impact on Modern Computing",
            "impact_description": "Bash has become the de facto standard shell in the Linux world and plays a crucial role in modern DevOps practices, cloud computing, and system administration. Its influence can be seen in everything from simple scripts to complex deployment pipelines.",
            "legacy_title": "Legacy and Future",
            "legacy_description": "While newer shells like Zsh and Fish offer modern features, Bash's legacy is secured by its ubiquity, reliability, and continued development. It remains an essential tool in the Unix/Linux ecosystem and continues to evolve with the changing needs of the computing world."
          }
        },
        ru: {
          translation: {  
            "start_title": "Bash: Командная оболочка",
            "start_introduction": "Bash (Bourne Again Shell) — это мощная командная оболочка для Unix-подобных систем, таких как Linux и macOS. Она позволяет взаимодействовать с операционной системой через командную строку, автоматизировать задачи и писать скрипты. В этой статье мы расскажем, почему Bash стоит изучать и какое будущее его ждёт.",
            "what_is_bash_title": "Что такое Bash?",
            "what_is_bash_description": "Bash — это улучшенная версия оригинальной оболочки Bourne Shell (sh), разработанная в рамках проекта GNU. Он предоставляет интерфейс для выполнения команд, написания скриптов и автоматизации задач. Bash встроен практически во все Unix-подобные системы, что делает его универсальным инструментом.",
            "why_learn_bash_title": "Зачем учить Bash?",
            "why_learn_bash_universality": "Универсальность: Bash используется в Linux, macOS и других Unix-системах",
            "why_learn_bash_automation": "Автоматизация: С помощью Bash-скриптов можно автоматизировать рутинные задачи",
            "why_learn_bash_power": "Мощность: Bash позволяет комбинировать команды, использовать конвейеры и выполнять сложные операции",
            "why_learn_bash_ease_of_learning": "Простота изучения: Синтаксис Bash прост и понятен даже для новичков (но бывает и сложен)",
            "why_learn_bash_career_perspectives": "Карьерные перспективы: Знание Bash востребовано в DevOps, системном администрировании и backend-разработке",
            "bash_future_title": "Какое будущее у Bash?",
            "bash_future_relevance": "Актуальность в Linux и Unix-системах: Bash остаётся стандартной оболочкой для большинства дистрибутивов",
            "bash_future_devops": "Рост популярности DevOps: Bash используется для автоматизации CI/CD и управления инфраструктурой",
            "bash_future_cloud_integration": "Интеграция с облачными технологиями: Bash активно используется в облачных платформах, таких как AWS и Google Cloud",
            "bash_future_alternatives": "Развитие альтернатив: Несмотря на появление Zsh и Fish, Bash продолжает широко использоваться",
            "bash_example_title": "Пример использования Bash",
            "bash_example_description": "Вот пример простого Bash-скрипта для резервного копирования:",
            "conclusion_title": "Заключение",
            "conclusion_description": "Bash — это мощный и универсальный инструмент, который остаётся актуальным уже несколько десятилетий. Его изучение не только упрощает работу с Unix-системами, но и открывает новые возможности для автоматизации и карьерного роста. Даже с появлением новых технологий Bash продолжает оставаться важным элементом IT-инфраструктуры.",
            "conclusion_call_to_action": "Если вы хотите стать профессионалом в IT, изучение Bash — это отличный первый шаг! :)",
            // История Bash
            "history_title": "История Bash: Путешествие во времени",
            "history_introduction": "История Bash (Bourne Again Shell) тесно переплетена с историей Unix и движением свободного программного обеспечения. Давайте рассмотрим, как появилась эта революционная оболочка и как она повлияла на современные вычисления.",
            "early_unix_title": "Эра ранних оболочек Unix",
            "early_unix_description": "История оболочек Unix начинается в 1971 году с Thompson shell, созданной Кеном Томпсоном. За ней последовала оболочка Bourne shell (sh) в 1977 году, написанная Стивеном Борном в Bell Labs, которая ввела многие базовые концепции оболочки, используемые до сих пор.",
            "birth_of_bash_title": "Рождение Bash",
            "birth_of_bash_description": "В 1989 году Брайан Фокс создал Bash как часть проекта GNU, стремясь предоставить свободную замену оболочке Bourne shell. Название 'Bash' — это игра слов, означающая 'Bourne Again Shell', отсылающая как к предшественнику, так и к возрождению в качестве свободного программного обеспечения.",
            "key_features_title": "Ключевые особенности и инновации",
            "key_feature_1": "Редактирование командной строки с историей и автодополнением",
            "key_feature_2": "Управление задачами и фоновыми процессами",
            "key_feature_3": "Функции оболочки и массивы",
            "key_feature_4": "Настраиваемое приглашение и расширенные возможности скриптинга",
            "evolution_title": "Временная шкала развития",
            "evolution_1971": "Создана Thompson shell (sh) для Unix",
            "evolution_1977": "Выпущена Bourne shell, представившая современный скриптинг оболочки",
            "evolution_1989": "Выпущена первая версия Bash Брайаном Фоксом",
            "evolution_1996": "Чет Рэми становится основным разработчиком",
            "evolution_2004": "Выпущен Bash 3.0 с major улучшениями",
            "evolution_2019": "Bash 5.0 вводит новые функции для современных вычислений",
            "impact_title": "Влияние на современные вычисления",
            "impact_description": "Bash стал стандартной оболочкой в мире Linux и играет ключевую роль в современных практиках DevOps, облачных вычислениях и системном администрировании. Его влияние можно увидеть во всем: от простых скриптов до сложных процессов развертывания.",
            "legacy_title": "Наследие и будущее",
            "legacy_description": "Хотя более новые оболочки, такие как Zsh и Fish, предлагают современные функции, наследие Bash закреплено его повсеместным использованием, надежностью и постоянным развитием. Он остается важнейшим инструментом в экосистеме Unix/Linux и продолжает развиваться вместе с меняющимися потребностями мира вычислений."
          }
        }
      },
      lng: 'ru', // Default language
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false
      }
    });
}

export default function TranslationsProvider({
  children
}: {
  children: ReactNode;
}) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
