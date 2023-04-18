"use client"
import { FC } from "react"
import Image from "next/image"

interface AvatarProps {
  src?: string | null | undefined
}

const Avatar: FC<AvatarProps> = ({ src }) => {
  return (
    <div>
      <Image className="rounded-full" alt="Avatar" height="30" width="30" src={src || "/images/placeholder.jpg"} />
    </div>
  )
}

export default Avatar
