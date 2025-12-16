'use client'

import { useState } from 'react'
import Image from 'next/image'

interface MediaProps {
  url: string
  title: string
}

export default function Media({ url, title }: MediaProps) {
  const [mediaVisible, setMediaVisible] = useState(true)

  const isVideo = (url: string) =>
    /\.(mp4|webm|ogg|mov|m3u8)(\?|$)/i.test(url)

  if (!mediaVisible) return null

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg dark:shadow-gray-800 mb-6 transition-transform hover:scale-105">
      {isVideo(url) ? (
        <video
          src={url}
          className="object-cover w-full h-full rounded-xl"
          muted
          playsInline
          controls
          preload="metadata"
          onError={() => setMediaVisible(false)}
        />
      ) : (
        <Image
          src={url}
          alt={title}
          fill
          className="object-cover rounded-xl"
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          onError={() => setMediaVisible(false)}
        />
      )}
    </div>
  )
}
