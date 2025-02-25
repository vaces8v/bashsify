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
            "conclusion_call_to_action": "If you want to become an IT professional, learning Bash is a great first step! :)"
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
            "conclusion_call_to_action": "Если вы хотите стать профессионалом в IT, изучение Bash — это отличный первый шаг! :)"
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
