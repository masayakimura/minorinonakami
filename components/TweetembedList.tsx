// components/TweetEmbed.tsx
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Tweet } from 'react-twitter-widgets'
import { Heading } from './Heading'

interface TweetEmbedListProps {
  tweetIds: string[]
}

const TweetEmbedList: React.FC<TweetEmbedListProps> = ({ tweetIds }) => {
  return (
    <div className="font-yusei">
      <Heading text="みのりの歌声" />
      <p className="mx-4 mt-3 mb-3 text-xl">
        歌声はみのりちゃんの最大の魅力のひとつ！とっても素敵なみのりちゃんの歌声を聴いてみてください！そして気になった方は是非ライブ会場に聴きに来てください！生のみのりちゃんの歌声はもう最高すぎますので！！
      </p>
      <div className="flex flex-col items-center justify-center">
        {tweetIds.map((tweetId, index) => (
          <div key={index} className="m-auto w-11/12">
            <Tweet tweetId={tweetId} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TweetEmbedList
