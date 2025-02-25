'use client'

import { ScrollArea } from "@/components/ui/scroll-area";
import {Chip} from "@heroui/chip";
import clsx from "clsx";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const sections = [
    {
      title: "Начало",
      topics: [
        { name: "Вступление", route: "/start" },
        { name: "Установка программ", route: "/install" },
        { name: "Как пользоваться", route: "/usage" },
      ],
    },
    {
      title: "Основы Bash",
      topics: [
        { name: "История", route: "/history" },
        { name: "Шебанг", route: "/shebang" },
        { name: "Режимы", route: "/modes" },
        { name: "Обработка ошибок", route: "/errors" },
        { name: "Переменные", route: "/variables" },
        { name: "Исполнение команд", route: "/executes" },
        { name: "Условные операторы", route: "/conditionals" },
        { name: "Циклы и их виды", route: "/cycle" },
        { name: "Функции", route: "/functions" },
        { name: "Математические операции", route: "/math" },
        { name: "Проверка файлов", route: "/checkfiles" },
        { name: "Параметры и shift", route: "/argsandshift" },
        { name: "Дескрипторы", route: "/descriptors" },
        { name: "Потоки данных", route: "/datastreams" },
        { name: "Сигналы", route: "/signals" },
      ],
    },
    {
      title: "Продвинутые темы",
      topics: [
        { name: "Скриптинг", route: "/scripting" },
        { name: "Автоматизация", route: "/automation" },
        { name: "Регулярные выражения", route: "/regex" },
      ],
    },
  ];

  export const Menu = () => {
    const pathname = usePathname();

    return (
      <aside className="sticky md:block hidden top-[60px] px-2 pb-[10px] pt-[20px] bg-transparent border-white/20 border-r-1.5 border-dashed min-w-[210px] max-w-[250px] w-full h-[calc(100vh-60px)]">
        <ScrollArea className="w-full h-full flex flex-col">
          {/* Chip с версией */}
          <Chip
            size="sm"
            variant="flat"
            endContent={<Rocket className="ml-1" size={16} />}
            color="primary"
            className="px-2.5 py-1.5 bg-primary/60"
          >
            Версия v0.3
          </Chip>
  
          {/* Секции и темы */}
          <div className="space-y-4 p-2">
            {sections.map((section, index) => (
              <div key={index} className="space-y-2">
                {/* Заголовок секции */}
                <h3 className="text-md font-semibold text-white">
                  {section.title}
                </h3>
  
                {/* Список тем */}
                <ul className="space-y-1 pl-4">
                  {section.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>
                      {/* Ссылка на тему */}
                      <Link
                        href={topic.route}
                        className={clsx("text-sm text-gray-300 hover:text-white transition-colors", {
                            ["underline underline-offset-4"]: pathname === topic.route 
                        })}
                      >
                        {topic.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollArea>
      </aside>
    );
  };