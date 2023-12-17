"use client"

import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={44} className="text-color-accent"></FileSearch>
        <h3 className="text-color-accent text-2xl font-bold">NOT FOUND</h3>
        <button onClick={() => router.back()} className="text-color-primary hover:text-color-accent transition-all underline">Kembali</button>
      </div>
    </div>
  )
}

export default Page