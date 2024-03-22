import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { Heading } from './Heading'

export const GumichanOishii = () => {
  return (
    <div className="font-yusei">
      <Heading text="みのりといっしょ" />

      <p className="mx-4 mt-3 text-xl">
        SNSをフォローすれば、かわいい美乃莉ちゃんがもっと見れるよ！ぜひフォローしていいねやリプをして、美乃莉ちゃん中心の生活を送ってみてください！幸せになること間違いなしです！
      </p>
      <div className="p-4">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="minori_akatsuki"
          options={{
            height: 400,
            width: '100%',
          }}
        />
      </div>
      <p className="mb-4 text-center">↓インスタとTikTokはこちら↓</p>
      <div className="mt-5 flex items-baseline justify-center gap-12">
        {/* <div>
          <Link href="https://twitter.com/pety_gumi">
            <Image
              src="/twitter.png"
              alt="twitter"
              width={50}
              height={50}
              className="mx-auto mb-1"
            />
          </Link>
          <p className="text-center">Twitter</p>
        </div> */}
        <div>
          <Link href="https://www.instagram.com/minori_akatsuki">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={50}
              height={50}
              className="mx-auto"
            />
          </Link>
          <p className="text-center">@minori_akatsuki</p>
        </div>
        <div>
          <Link href="https://www.instagram.com/_myfaith.__/">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={50}
              height={50}
              className="mx-auto"
            />
          </Link>
          <p className="text-center">_myfaith.__</p>
        </div>
        <div>
          <Link href="https://www.tiktok.com/@c1x1uuu9/">
            <Image
              src="/tiktok.svg"
              alt="tiktok"
              width={50}
              height={50}
              className="mx-auto"
            />
          </Link>
          <p className="text-center">暁月</p>
        </div>
      </div>
    </div>
  )
}
