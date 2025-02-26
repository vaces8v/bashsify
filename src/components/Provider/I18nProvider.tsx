'use client';

import { ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


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
            "legacy_description": "While newer shells like Zsh and Fish offer modern features, Bash's legacy is secured by its ubiquity, reliability, and continued development. It remains an essential tool in the Unix/Linux ecosystem and continues to evolve with the changing needs of the computing world.",
            // Variables page translations
            "variables_title": "Bash Variables: A Complete Guide",
            "variables_introduction": "Variables in Bash are essential building blocks that help store and manage data in your scripts. From simple text to complex arrays, understanding variables is key to mastering Bash scripting.",
            "basic_variables_title": "Basic Variables",
            "basic_variables_description": "In Bash, variables store data that can be used throughout your script. They can hold strings, numbers, or arrays. No declaration is needed - variables are created when you first assign a value to them.",
            "variable_types_title": "Types of Variables",
            "variable_type_1": "String Variables: Store text and character data",
            "variable_type_2": "Integer Variables: Store numerical values",
            "variable_type_3": "Array Variables: Store multiple values in a single variable",
            "variable_type_4": "Readonly Variables: Constants that cannot be changed",
            "environment_variables_title": "Environment Variables",
            "environment_variables_description": "Environment variables are special variables that affect the behavior of the shell and programs. They are inherited by all processes started in the shell session.",
            "special_variables_title": "Special Variables",
            "special_variables_description": "Bash has several built-in special variables that provide information about the script, its arguments, and its execution status.",
            "variable_operations_title": "Variable Operations",
            "variable_operations_description": "Bash provides various operations for manipulating variables, including string operations, arithmetic operations, and parameter expansions.",
            "best_practices_title": "Best Practices",
            "best_practice_1": "Always quote variable expansions to handle spaces and special characters",
            "best_practice_2": "Use meaningful variable names that reflect their purpose",
            "best_practice_3": "Initialize variables before using them",
            "best_practice_4": "Use readonly for constants to prevent accidental changes",
            "common_mistakes_title": "Common Mistakes to Avoid",
            "common_mistake_1": "Forgetting spaces around = in assignments (wrong: var=value, correct: var = value)",
            "common_mistake_2": "Not quoting variables containing spaces or special characters",
            "common_mistake_3": "Using variables before initializing them",
            "common_mistake_4": "Confusing local and global variable scope",
            // Shebang page translations
            "shebang_title": "Shebang in Bash: The Magic First Line",
            "shebang_introduction": "The shebang (#!) is one of the most important elements in Unix/Linux scripting, serving as a directive that tells the system which interpreter to use for executing the script. Let's explore its history, purpose, and proper usage.",
            "what_is_shebang_title": "What is Shebang?",
            "what_is_shebang_description": "A shebang (also known as hashbang) is a special character sequence at the very beginning of a script file that starts with #! followed by the path to the interpreter. When a script with a shebang is run, the system uses the specified interpreter to execute the script.",
            "shebang_history_title": "The History of Shebang",
            "shebang_history_description": "The shebang was introduced in Unix Version 7 in 1979 by Dennis Ritchie. The term 'shebang' is likely derived from the combination of 'sharp' (#) and 'bang' (!), or from 'SHArp bang'. It was created to solve the problem of running scripts written in different languages without explicitly specifying the interpreter on the command line.",
            "common_forms_title": "Common Forms of Shebang",
            "why_use_shebang_title": "Why Use Shebang?",
            "why_use_1": "Automatic Interpreter Selection: The system automatically knows which program should execute the script",
            "why_use_2": "Portability: Scripts can be run directly without specifying the interpreter on the command line",
            "why_use_3": "Flexibility: Different scripts can use different interpreters even with the same file extension",
            "why_use_4": "Security: Ensures the script runs with the intended interpreter, preventing execution mistakes",
            "shebang_best_practices_title": "Best Practices",
            "shebang_best_practice_1": "Use /usr/bin/env for better portability across different Unix systems",
            "shebang_best_practice_2": "Always place the shebang on the very first line of the script",
            "shebang_best_practice_3": "Make sure there are no spaces between #! and the interpreter path",
            "common_issues_title": "Common Issues and Solutions",
            "common_issues_description": "Here are some common mistakes to avoid when using shebang:",
            "modern_usage_title": "Modern Usage and Considerations",
            "modern_usage_description": "In modern systems, while the shebang remains crucial, tools like /usr/bin/env provide better portability. Container technologies and virtual environments have also influenced how we use shebangs, but their fundamental purpose remains unchanged. For cross-platform scripts, using /usr/bin/env is highly recommended as it searches for the interpreter in the system's PATH.",
            // Modes page translations
            "modes_title": "Bash Modes: Interactive and Non-Interactive",
            "modes_introduction": "Bash operates in two primary modes: interactive and non-interactive. Understanding these modes is crucial for effective shell usage and script development.",
            
            "interactive_mode_title": "Interactive Mode",
            "interactive_mode_description": "Interactive mode is when you use Bash directly through a terminal, entering commands and receiving immediate feedback. This is the mode you're in when you open a terminal and start typing commands.",
            
            "interactive_features_title": "Interactive Mode Features",
            "interactive_feature_1": "Command history (accessible via up/down arrows or history command)",
            "interactive_feature_2": "Command line editing and tab completion",
            "interactive_feature_3": "Job control (ability to stop/resume processes)",
            "interactive_feature_4": "Command prompt (PS1) and other prompt variables",
            
            "non_interactive_mode_title": "Non-Interactive Mode",
            "non_interactive_mode_description": "Non-interactive mode is used when Bash executes scripts or commands without direct user interaction. This is the mode used for shell scripts and automated tasks.",
            
            "non_interactive_features_title": "Non-Interactive Mode Features",
            "non_interactive_feature_1": "No command prompt",
            "non_interactive_feature_2": "No command history",
            "non_interactive_feature_3": "Limited environment variables",
            "non_interactive_feature_4": "Faster execution (no user interaction overhead)",
            
            "config_files_title": "Configuration Files",
            "interactive_config_title": "Interactive Mode Files",
            "interactive_config_1": "/etc/profile - System-wide settings",
            "interactive_config_2": "~/.bash_profile - User's login settings",
            "interactive_config_3": "~/.bashrc - User's interactive shell settings",
            
            "non_interactive_config_title": "Non-Interactive Mode Files",
            "non_interactive_config_1": "$BASH_ENV - Environment setup for scripts",
            "non_interactive_config_2": "Script-specific configuration within the script itself",
            
            "mode_best_practices_title": "Best Practices",
            "mode_best_practice_1": "Always check shell mode when writing scripts that might run in either mode",
            "mode_best_practice_2": "Keep interactive configurations separate from script configurations",
            "mode_best_practice_3": "Use appropriate error handling for each mode",
            "mode_best_practice_4": "Consider using shebang line to ensure correct interpreter",
            
            "mode_detection_title": "Mode Detection",
            "mode_detection_description": "You can detect the current shell mode using various methods. The most common is checking the $- variable for the 'i' flag.",
            
            "common_uses_title": "Common Use Cases",
            "interactive_uses_title": "Interactive Mode Uses",
            "interactive_use_1": "System administration and maintenance",
            "interactive_use_2": "File management and navigation",
            "interactive_use_3": "Testing and debugging commands",
            
            "non_interactive_uses_title": "Non-Interactive Mode Uses",
            "non_interactive_use_1": "Automated backups and maintenance scripts",
            "non_interactive_use_2": "System startup scripts and services",
            "non_interactive_use_3": "Continuous Integration/Deployment pipelines",
            // Error Handling page translations
            "error_handling_title": "Reliable Bash Scripts: set -Eeuo pipefail",
            "error_handling_introduction": "Writing reliable Bash scripts requires proper error handling. The set -Eeuo pipefail command helps create safer and more predictable scripts by stopping execution at the first error and preventing many common issues.",
            
            "set_command_title": "The set Command in Bash",
            "set_command_description": "The set command is used to change the shell's behavior. The -Eeuo pipefail flags are a combination of several important settings, each making your scripts more reliable.",
            
            "e_flag_title": "The -e Flag: Immediate Exit on Error",
            "e_flag_description": "The -e flag causes the script to exit immediately if any command returns a non-zero exit code (error). This prevents the execution of subsequent commands after an error occurs, which can prevent data corruption or other undesirable consequences.",
            
            "u_flag_title": "The -u Flag: Handling Undefined Variables",
            "u_flag_description": "The -u flag causes an error when trying to use an undefined variable. This helps detect typos in variable names and prevents the use of empty values where they might be dangerous.",
            
            "o_pipefail_title": "The pipefail Option: Handling Errors in Pipelines",
            "o_pipefail_description": "pipefail changes the behavior of command pipelines (commands connected with the | symbol). By default, the exit status of a pipeline is the status of the last command. With pipefail, the pipeline returns the status of the last failed command, or zero if all commands succeed.",
            
            "E_flag_title": "The -E Flag: Inheriting trap ERR",
            "E_flag_description": "The -E flag ensures the inheritance of trap ERR in functions. This means that error handlers set up through trap will work even inside functions, which is important for proper error handling throughout the script.",
            
            "errors_best_practices_title": "Best Practices",
            "errors_best_practice_1": "Always add set -Eeuo pipefail at the beginning of your scripts",
            "errors_best_practice_2": "Use trap to clean up temporary files and other resources",
            "errors_best_practice_3": "Check variable values before using them",
            "errors_best_practice_4": "Add comments explaining why some commands can safely exit with an error",
            
            "common_patterns_title": "Common Patterns of Use",
            "common_patterns_description": "Here's an example script that uses all these settings together with error handling and cleanup:",
            
            "real_world_example_title": "Real-World Example",
            "real_world_example_description": "In real-world projects, these settings are especially important. For example, when deploying an application, updating a database, or working with critical data, set -Eeuo pipefail helps prevent partial or incorrect execution of operations."
          }
        },
        ru: {
          translation: {  
            "start_title": "Bash: Командная оболочка",
            "start_introduction": "Bash (Bourne Again Shell) — это мощная командная оболочка для Unix-подобных систем, таких как Linux и macOS. Она позволяет взаимодействовать с операционной системой через командную строку, автоматизировать задачи и писать скрипты.",
            "what_is_bash_title": "Что такое Bash?",
            "what_is_bash_description": "Bash — это улучшенная версия оригинальной оболочки Bourne Shell (sh), разработанная в рамках проекта GNU. Он предоставляет интерфейс для выполнения команд, написания скриптов и автоматизации задач.",
            "why_learn_bash_title": "Зачем учить Bash?",
            "why_learn_bash_universality": "Универсальность: Bash используется в Linux, macOS и других Unix-системах",
            "why_learn_bash_automation": "Автоматизация: С помощью Bash-скриптов можно автоматизировать рутинные задачи",
            "why_learn_bash_power": "Мощность: Bash позволяет комбинировать команды и выполнять сложные операции",
            "why_learn_bash_ease_of_learning": "Простота изучения: Синтаксис Bash понятен даже для новичков",
            "why_learn_bash_career_perspectives": "Карьерные перспективы: Знание Bash востребовано в DevOps и системном администрировании",
            "bash_future_title": "Будущее Bash",
            "bash_future_relevance": "Актуальность: Bash остаётся стандартной оболочкой для большинства Linux-систем",
            "bash_future_devops": "DevOps: Bash активно используется в автоматизации и CI/CD",
            "bash_future_cloud_integration": "Облачные технологии: Bash применяется в AWS и Google Cloud",
            "bash_future_alternatives": "Альтернативы: Несмотря на Zsh и Fish, Bash остаётся популярным",
            "bash_example_title": "Пример использования",
            "bash_example_description": "Простой скрипт резервного копирования:",
            "conclusion_title": "Заключение",
            "conclusion_description": "Bash остаётся важным инструментом в современной разработке и администрировании.",
            "conclusion_call_to_action": "Начните изучать Bash сегодня!",
            // Existing translations...
            // Переводы страницы истории
            "history_title": "История Bash: Путешествие во времени",
            "history_introduction": "История Bash (Bourne Again Shell) тесно связана с историей Unix и движением свободного программного обеспечения. Давайте рассмотрим, как появилась эта революционная оболочка.",
            "early_unix_title": "Эра ранних оболочек Unix",
            "early_unix_description": "История оболочек Unix начинается в 1971 году с Thompson shell, созданной Кеном Томпсоном. За ней последовала Bourne shell (sh) в 1977 году, написанная Стивеном Борном.",
            "birth_of_bash_title": "Рождение Bash",
            "birth_of_bash_description": "В 1989 году Брайан Фокс создал Bash как часть проекта GNU. Название 'Bash' означает 'Bourne Again Shell', что отражает его связь с оболочкой Bourne shell.",
            "key_features_title": "Ключевые особенности",
            "key_feature_1": "Редактирование командной строки с историей",
            "key_feature_2": "Управление задачами и процессами",
            "key_feature_3": "Функции оболочки и массивы",
            "key_feature_4": "Настраиваемое приглашение командной строки",
            "evolution_title": "История развития",
            "evolution_1971": "1971: Создана Thompson shell",
            "evolution_1977": "1977: Выпущена Bourne shell",
            "evolution_1989": "1989: Первая версия Bash",
            "evolution_1996": "1996: Чет Рэми становится основным разработчиком",
            "evolution_2004": "2004: Выпуск Bash 3.0",
            "evolution_2019": "2019: Bash 5.0 с новыми возможностями",
            "impact_title": "Влияние на современные системы",
            "impact_description": "Bash стал стандартом в мире Linux и играет ключевую роль в DevOps и облачных вычислениях.",
            "legacy_title": "Наследие и будущее",
            "legacy_description": "Несмотря на новые оболочки, Bash остаётся важнейшим инструментом в экосистеме Unix/Linux.",
            // Переводы страницы о shebang
            "shebang_title": "Шебанг в Bash: Магическая первая строка",
            "shebang_introduction": "Шебанг (#!) - один из важнейших элементов в скриптах Unix/Linux, служащий директивой, которая сообщает системе, какой интерпретатор использовать для выполнения скрипта. Давайте изучим его историю, назначение и правильное использование.",
            "what_is_shebang_title": "Что такое шебанг?",
            "what_is_shebang_description": "Шебанг (также известный как hashbang) - это специальная последовательность символов в самом начале файла скрипта, которая начинается с #! и за которой следует путь к интерпретатору. Когда запускается скрипт с шебангом, система использует указанный интерпретатор для его выполнения.",
            "shebang_history_title": "История Шебанга",
            "shebang_history_description": "Шебанг был представлен в Unix Version 7 в 1979 году Деннисом Ритчи. Термин 'shebang' вероятно происходит от комбинации 'sharp' (#) и 'bang' (!), или от 'SHArp bang'. Он был создан для решения проблемы запуска скриптов, написанных на разных языках, без явного указания интерпретатора в командной строке.",
            "common_forms_title": "Распространенные формы Шебанг",
            "why_use_shebang_title": "Зачем использовать Шебанг?",
            "why_use_1": "Автоматический выбор интерпретатора: Система автоматически знает, какая программа должна выполнить скрипт",
            "why_use_2": "Переносимость: Скрипты можно запускать напрямую без указания интерпретатора в командной строке",
            "why_use_3": "Гибкость: Разные скрипты могут использовать разные интерпретаторы даже с одинаковым расширением файла",
            "why_use_4": "Безопасность: Гарантирует выполнение скрипта с предназначенным интерпретатором, предотвращая ошибки выполнения",
            "shebang_best_practices_title": "Лучшие практики",
            "shebang_best_practice_1": "Используйте /usr/bin/env для лучшей переносимости между разными Unix-системами",
            "shebang_best_practice_2": "Всегда размещайте шебанг в самой первой строке скрипта",
            "shebang_best_practice_3": "Убедитесь, что между #! и путем к интерпретатору нет пробелов",
            "common_issues_title": "Распространенные проблемы и решения",
            "common_issues_description": "Вот некоторые распространенные ошибки, которых следует избегать при использовании шебанга:",
            "modern_usage_title": "Современное использование и особенности",
            "modern_usage_description": "В современных системах, хотя шебанг остается критически важным, такие инструменты как /usr/bin/env обеспечивают лучшую переносимость. Контейнерные технологии и виртуальные окружения также повлияли на то, как мы используем шебанг, но их фундаментальное назначение осталось неизменным. Для кроссплатформенных скриптов настоятельно рекомендуется использовать /usr/bin/env, так как он ищет интерпретатор в PATH системы.",
            // Переводы страницы о режимах
            "modes_title": "Режимы Bash: Интерактивный и Неинтерактивный",
            "modes_introduction": "Bash работает в двух основных режимах: интерактивном и неинтерактивном. Понимание этих режимов крайне важно для эффективного использования оболочки и разработки скриптов.",
            
            "interactive_mode_title": "Интерактивный режим",
            "interactive_mode_description": "Интерактивный режим - это когда вы используете Bash напрямую через терминал, вводя команды и получая мгновенный отклик. В этом режиме вы находитесь, когда открываете терминал и начинаете вводить команды.",
            
            "interactive_features_title": "Особенности интерактивного режима",
            "interactive_feature_1": "История команд (доступна через стрелки вверх/вниз или команду history)",
            "interactive_feature_2": "Редактирование командной строки и автодополнение",
            "interactive_feature_3": "Управление задачами (возможность останавливать/возобновлять процессы)",
            "interactive_feature_4": "Приглашение командной строки (PS1) и другие переменные приглашения",
            
            "non_interactive_mode_title": "Неинтерактивный режим",
            "non_interactive_mode_description": "Неинтерактивный режим используется, когда Bash выполняет скрипты или команды без прямого взаимодействия с пользователем. Этот режим используется для shell-скриптов и автоматизированных задач.",
            
            "non_interactive_features_title": "Особенности неинтерактивного режима",
            "non_interactive_feature_1": "Отсутствие приглашения командной строки",
            "non_interactive_feature_2": "Отсутствие истории команд",
            "non_interactive_feature_3": "Ограниченные переменные окружения",
            "non_interactive_feature_4": "Более быстрое выполнение (нет накладных расходов на взаимодействие с пользователем)",
            
            "config_files_title": "Конфигурационные файлы",
            "interactive_config_title": "Файлы интерактивного режима",
            "interactive_config_1": "/etc/profile - Общесистемные настройки",
            "interactive_config_2": "~/.bash_profile - Пользовательские настройки входа",
            "interactive_config_3": "~/.bashrc - Настройки интерактивной оболочки пользователя",
            
            "non_interactive_config_title": "Файлы неинтерактивного режима",
            "non_interactive_config_1": "$BASH_ENV - Настройка окружения для скриптов",
            "non_interactive_config_2": "Специфичные настройки внутри самого скрипта",
            
            "mode_best_practices_title": "Лучшие практики",
            "mode_best_practice_1": "Всегда проверяйте режим оболочки при написании скриптов, которые могут работать в обоих режимах",
            "mode_best_practice_2": "Держите интерактивные конфигурации отдельно от конфигураций скриптов",
            "mode_best_practice_3": "Используйте соответствующую обработку ошибок для каждого режима",
            "mode_best_practice_4": "Рассмотрите использование шебанга для обеспечения правильного интерпретатора",
            
            "mode_detection_title": "Определение режима",
            "mode_detection_description": "Вы можете определить текущий режим оболочки различными способами. Наиболее распространенный - проверка переменной $- на наличие флага 'i'.",
            
            "common_uses_title": "Типичные случаи использования",
            "interactive_uses_title": "Применение интерактивного режима",
            "interactive_use_1": "Системное администрирование и обслуживание",
            "interactive_use_2": "Управление файлами и навигация",
            "interactive_use_3": "Тестирование и отладка команд",
            
            "non_interactive_uses_title": "Применение неинтерактивного режима",
            "non_interactive_use_1": "Автоматизированные скрипты резервного копирования и обслуживания",
            "non_interactive_use_2": "Скрипты запуска системы и службы",
            "non_interactive_use_3": "Процессы непрерывной интеграции/развертывания",
            // Error Handling page translations
            "error_handling_title": "Надёжные Bash-скрипты: set -Eeuo pipefail",
            "error_handling_introduction": "Написание надёжных Bash-скриптов требует правильной обработки ошибок. Команда set -Eeuo pipefail помогает создавать более безопасные и предсказуемые скрипты, останавливая выполнение при первой же ошибке и предотвращая множество распространённых проблем.",
            
            "set_command_title": "Команда set в Bash",
            "set_command_description": "Команда set используется для изменения поведения оболочки. Флаги -Eeuo pipefail - это комбинация нескольких важных настроек, каждая из которых делает ваши скрипты более надёжными.",
            
            "e_flag_title": "Флаг -e: Немедленный выход при ошибке",
            "e_flag_description": "Флаг -e заставляет скрипт немедленно завершиться, если какая-либо команда вернёт ненулевой код выхода (ошибку). Это предотвращает выполнение следующих команд после возникновения ошибки, что может предотвратить повреждение данных или другие нежелательные последствия.",
            
            "u_flag_title": "Флаг -u: Обработка неопределённых переменных",
            "u_flag_description": "Флаг -u вызывает ошибку при попытке использования неопределённой переменной. Это помогает обнаружить опечатки в именах переменных и предотвращает использование пустых значений там, где они могут быть опасны.",
            
            "o_pipefail_title": "Опция pipefail: Обработка ошибок в конвейерах",
            "o_pipefail_description": "pipefail изменяет поведение конвейеров команд (команд, соединённых символом |). По умолчанию, статус выхода конвейера - это статус последней команды. С pipefail, конвейер возвращает статус последней неуспешной команды, или ноль, если все команды успешны.",
            
            "E_flag_title": "Флаг -E: Наследование trap ERR",
            "E_flag_description": "Флаг -E обеспечивает наследование trap ERR в функциях. Это означает, что обработчики ошибок, установленные через trap, будут работать даже внутри функций, что важно для правильной обработки ошибок во всём скрипте.",
            
            "errors_best_practices_title": "Лучшие практики",
            "errors_best_practice_1": "Всегда добавляйте set -Eeuo pipefail в начало ваших скриптов",
            "errors_best_practice_2": "Используйте trap для очистки временных файлов и других ресурсов",
            "errors_best_practice_3": "Проверяйте значения переменных перед их использованием",
            "errors_best_practice_4": "Добавляйте комментарии, объясняющие, почему некоторые команды могут безопасно завершиться с ошибкой",
            
            "common_patterns_title": "Распространённые шаблоны использования",
            "common_patterns_description": "Вот пример скрипта, использующего все эти настройки вместе с обработкой ошибок и очисткой:",
            
            "real_world_example_title": "Практический пример",
            "real_world_example_description": "В реальных проектах эти настройки особенно важны. Например, при развёртывании приложения, обновлении базы данных или работе с важными данными, set -Eeuo pipefail помогает предотвратить частичное или некорректное выполнение операций."
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
