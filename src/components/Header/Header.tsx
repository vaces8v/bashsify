'use client'

import { AnimatePresence, motion } from "framer-motion"
import { Languages, Menu, Rocket, Search } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "@heroui/button";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@heroui/dropdown";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import clsx from "clsx";
import { Chip } from "@heroui/chip";
import { sections } from "../Menu/Menu";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import SearchResults, { searchIndex, SearchResult } from "../Search/SearchResults";


export const Header = () => {
    const [title, setTitle] = useState<string>('')
    const [focusInput, setFocusInput] = useState<boolean>(false)
    const [searchResults, setSearchResults] = useState<SearchResult[]>([])
    const refSearch = useRef<HTMLInputElement>(null)
    const pathname = usePathname();
    const { i18n } = useTranslation();

    const handleSearch = (query: string) => {
        setTitle(query);
        if (query.trim() === '') {
            setSearchResults([]);
            return;
        }

        const results = searchIndex.filter(item => {
            const searchQuery = query.toLowerCase();
            return item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery)) ||
                item.title.toLowerCase().includes(searchQuery) ||
                item.description.toLowerCase().includes(searchQuery);
        });

        setSearchResults(results);
    };

    const clearSearch = () => {
        setTitle('');
        setSearchResults([]);
        setFocusInput(false);
    };

    return (
        <header className="fixed flex justify-center z-10 h-[60px] w-full border-white/20 border-b-1.5 border-dashed backdrop-blur-3xl">
            <nav className="flex items-center justify-between max-w-[1380px] w-full h-[60px] px-[20px] border-white/20 border-x-1.5 border-dashed">
                <div className="flex flex-1 gap-3 w-full text-white/80 mt-1 items-center text-[14px] h-full">
                    <h1 className="text-white text-2xl mb-1">Bashify</h1>
                    <Link href="/start" className="md:block hidden ml-1 cursor-pointer font-poppins font-medium">Документация</Link>
                    <h1 className="md:block hidden cursor-pointer text-white/40 font-poppins font-medium">Блоги</h1>
                    <h1 className="md:block hidden cursor-pointer text-white/40 font-poppins font-medium">Рекомендации</h1>
                    <h1 className="md:block hidden cursor-pointer text-white/40 font-poppins font-medium">Тесты</h1>
                </div>
                <div className={clsx(`flex gap-3 ml-auto transition-all duration-300`, {
                    ["translate-x-8"]: focusInput || title
                })}>
                    <div className="relative w-full max-w-[200px]">
                        <motion.div
                            initial={{
                                width: 150,
                                borderRadius: 100
                            }}
                            animate={{
                                width: focusInput || title.length ? 250 : 150,
                                borderRadius: focusInput || title.length ? 10 : 100
                            }}
                            transition={{
                                duration: .4,
                            }}
                            className="flex justify-center md:max-w-full max-w-[200px] items-center relative z-50 overflow-hidden w-full h-[35px]">
                            <motion.input
                                initial={{
                                    paddingLeft: '50px',
                                    width: "100%",
                                    borderRadius: 40
                                }}
                                animate={{
                                    paddingLeft: focusInput || title.length ? '15px' : '50px',
                                    width: "100%",
                                    borderRadius: focusInput || title.length ? 10 : 40
                                }}
                                value={title}
                                ref={refSearch}
                                onFocus={() => setFocusInput(true)}
                                onBlur={() => {
                                    setTimeout(() => setFocusInput(false), 200);
                                }}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="text-[16px] pl-[0px] pb-[0px] pr-[35px] text-[#ccc] placeholder:text-[#ccc] placeholder:font-medium focus:outline-none bg-primary backdrop-blur h-[35px] shadow-md"
                                type="text" placeholder={focusInput ? "Пишите, что ищите" : "Поиск..."} />
                            <motion.span
                                initial={{
                                    opacity: 0,
                                    translateX: '10px',
                                }}
                                animate={{
                                    opacity: focusInput || title.length ? 1 : 0,
                                    translateX: focusInput || title.length ? '0px' : '10px'
                                }}
                                onClick={clearSearch}
                                className="absolute right-[10px] top-[8px] cursor-pointer">
                                <Search color="#ccc" size={20} />
                            </motion.span>
                            <motion.span
                                onClick={() => refSearch.current?.focus()}
                                initial={{
                                    opacity: 1,
                                    translateX: '0px'
                                }}
                                animate={{
                                    opacity: focusInput || title.length ? 0 : 1,
                                    translateX: focusInput || title.length ? '-40px' : '0px'
                                }}
                                className="absolute left-[10px] top-[8px] cursor-pointer">
                                <Search color="#ccc" size={20} />
                            </motion.span>
                        </motion.div>
                        <AnimatePresence>
                        {(title.length > 0) && (
                            <SearchResults results={searchResults} onClose={clearSearch} />
                        )}
                        </AnimatePresence>
                    </div>
                    <Drawer direction="right">
                        <DrawerTrigger asChild>
                            <Button className="md:hidden flex" size="sm" variant="light" isIconOnly>
                                <Menu size={20} color="white" />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent className="w-[70%] ml-[30%] h-full bg-transparent backdrop-blur-3xl">
                            <aside className="sticky top-[60px] px-2 pb-[10px] pt-[20px] bg-transparent border-white/20 border-r-1.5 border-dashed w-full h-[calc(100vh-60px)]">
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
                                    <div className="space-y-4 p-2 mb-10">
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
                        </DrawerContent>
                    </Drawer>
                    <Dropdown
                        style={{
                            borderRadius: '0.5rem',
                            width: '140px',
                            maxHeight: '200px',
                        }}>
                        <DropdownTrigger>
                            <Button variant="light" size="sm" className={`bg-primary`} isIconOnly>
                                <Languages size={20} color="white" />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu className="bg-primary rounded-lg w-[140px] overflow-hidden" aria-label="Language">
                            <DropdownItem onPress={() => i18n.changeLanguage("ru")} key="ru" className="flex text-white ">
                                <Icon icon="cif:ru" color="white" className="inline" />
                                <p className="inline ml-3">{i18n.language === 'ru' ? 'Русский' : 'Russian'}</p>
                            </DropdownItem>
                            <DropdownItem onPress={() => i18n.changeLanguage("en")} key="en" className="flex text-white">
                                <Icon icon="cif:us" color="white" className="inline" />
                                <p className="inline ml-3">{i18n.language === 'ru' ? 'Английский' : 'English'}</p>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </nav>
        </header>
    )
}