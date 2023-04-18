"use client"
import { FC } from "react"
import Image from "next/image"
//Observar que aqui é do next navigation
import { useRouter } from "next/navigation"

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  const router = useRouter()
  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/logo.png"
    />
  )
}

export default Logo
