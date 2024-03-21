import React, { useEffect, useRef } from 'react'

export const Tweet: React.FC<{ id: string }> = ({ id }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.twttr?.widgets.load(ref.current)
  }, [id])

  return (
    <div
      dangerouslySetInnerHTML={{ __html: generateEmbedHtml(id) }}
      ref={ref}
    />
  )
}

const generateEmbedHtml = (id: string): string => {
  return `<blockquote class="twitter-tweet"><a href="https://twitter.com/minori_akatsuki"></a></blockquote>`
}
