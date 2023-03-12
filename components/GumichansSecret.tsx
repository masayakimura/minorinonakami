import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed'

export const GumichansSecret = () => {
  return (
    <div>
      <h2 className="mt-6 block bg-blue-600 py-2 text-center text-2xl text-white">
        ぐみちゃんの中心の生活
      </h2>
      <p className="mx-4 mt-4 text-xl">
        SNSをフォローすれば、かわいいぐみちゃんがもっと見れるよ！ぜひフォローしていいねやリプをして、ぐみちゃん中心の生活を送ってみてください！幸せになること間違いなしです！
      </p>
      <div className="p-4">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="pety_gumi"
          options={{
            height: 400,
            width: '100%',
          }}
        />
      </div>
      <p className="mb-4 text-center">↓インスタとTikTokはこちら↓</p>
      <div className="flex justify-center gap-12">
        <div>
          <Link href="https://www.instagram.com/pety_gumi_official/">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={50}
              height={50}
              className="mx-auto"
            />
          </Link>
          <p className="text-center">Instagram</p>
        </div>
        <div>
          <Link href="https://www.tiktok.com/@pety_gumi/">
            <Image
              src="/tiktok.svg"
              alt="tiktok"
              width={50}
              height={50}
              className="mx-auto"
            />
          </Link>
          <p className="text-center">tiktok</p>
        </div>
      </div>
    </div>
  )
}
