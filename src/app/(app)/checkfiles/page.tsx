'use client'

import { Button } from "@heroui/button"
import { IterationCcw } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()

    return (
        <div className="flex flex-col items-center justify-center w-full h-full text-white">
            <p className="text-3xl">Статья еще не готова,</p>
            <p className="text-2xl">но она скоро будет доступна</p>
            <Button onPress={() => router.back()} className="mt-3 text-[18px]" startContent={<IterationCcw size={18}  className="mt-1"/>}>Вернуться обратно</Button>
        </div>
    )
}