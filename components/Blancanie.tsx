import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { Heading } from './Heading'

export type Member = {
  name: string
  imgUrl: string
  xUrl: string
  instagramUrl?: string
  tiktokUrl?: string
}

const MEMBERS: Member[] = [
  {
    name: '暁月 美乃莉',
    imgUrl: '/minori.jpg',
    xUrl: 'https://twitter.com/minori_akatsuki',
    instagramUrl: 'https://www.instagram.com/minori_akatsuki/',
    tiktokUrl: 'https://www.tiktok.com/@c1x1uuu9/',
  },
  {
    name: '朝比奈 優奈',
    imgUrl: '/yuuna.jpg',
    xUrl: 'https://twitter.com/yuuna_asahina',
    instagramUrl: 'https://www.instagram.com/yunachi_dayo',
    tiktokUrl: 'https://www.tiktok.com/@yunachi_0815',
  },
  {
    name: '天城 りおな',
    imgUrl: '/riona.jpg',
    xUrl: 'https://twitter.com/riona_amaki',
    instagramUrl: 'https://www.instagram.com/_amaki_riona/',
    tiktokUrl: 'https://www.tiktok.com/@_amaki_riona',
  },
]

export const Blancanie: FC = () => {
  return (
    <div className="mb-4 font-yusei">
      <Heading text="みのりの居場所" />

      <h3 className="mt-4 text-center text-xl text-rose-800">
        about Blancanie
      </h3>
      <Image
        src="/logo.jpg"
        width="360"
        height="360"
        alt="Blancanie"
        className="mx-auto my-2"
      />
      <p className="mx-4 my-6 text-xl">
        グリム童話の白雪姫のストーリーをベースに「儚くも美しい少女の冒険」をコンセプトに結成された「Blancanie」
      </p>

      <div className="flex items-baseline justify-center gap-8">
        <div>
          <Link href="https://twitter.com/blancanie2023/" target="_blank">
            <Image
              src="/x.png"
              alt="X"
              width={42}
              height={42}
              className="mx-auto mb-1"
            />
          </Link>
          {/* <p className="text-center">X</p> */}
        </div>
        <div>
          <Link href="https://www.youtube.com/@blancanie2023" target="_blank">
            <Image
              src="/youtube.png"
              alt="youtube"
              width={160}
              height={50}
              className="mx-auto mb-1"
            />
          </Link>
          {/* <p className="text-center">Youtube</p> */}
        </div>
        {/* <div>
          <Link href="https://www.tiktok.com/@pety_official" target="_blank">
            <Image
              src="/tiktok.svg"
              alt="tiktok"
              width={50}
              height={50}
              className="mx-auto"
            />
          </Link>
          <p className="text-center">TikTok</p>
        </div> */}
      </div>

      <hr className="my-6" />

      <h3 className="mt-4 text-center text-xl text-rose-800">Member</h3>

      <ul>
        {MEMBERS.map((member) => (
          <li key={member.name} className="mt-4">
            <Image
              src={member.imgUrl}
              width="360"
              height="400"
              alt={member.name}
              className="mx-auto"
            />
            <p className="my-4 text-center text-xl">{member.name}</p>
            <div className="mb-12 flex items-baseline justify-center gap-8">
              <div>
                <Link href={member.xUrl} target="_blank">
                  <Image
                    src="/x.png"
                    alt="X"
                    width={42}
                    height={42}
                    className="mx-auto mb-1"
                  />
                </Link>
                {/* <p className="text-center">X</p> */}
              </div>
              {member.instagramUrl ? (
                <div>
                  <Link href={member.instagramUrl} target="_blank">
                    <Image
                      src="/instagram.png"
                      alt="instagram"
                      width={50}
                      height={50}
                      className="mx-auto"
                    />
                  </Link>
                  {/* <p className="text-center">Instagram</p> */}
                </div>
              ) : (
                <></>
              )}

              {member.tiktokUrl ? (
                <div>
                  <Link href={member.tiktokUrl} target="_blank">
                    <Image
                      src="/tiktok.svg"
                      alt="tiktok"
                      width={50}
                      height={50}
                      className="mx-auto"
                    />
                  </Link>
                  {/* <p className="text-center">TikTok</p> */}
                </div>
              ) : (
                <></>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* <hr className="my-6" />

      <h3 className="mt-4 text-center text-xl text-blue-500">Music</h3>

      <p className="mx-4 my-2 text-xl">
        Petyの楽曲はサブスクで聴けちゃいます！かわいい曲から盛り上がる曲、バラードまで素敵な曲ばかり！ライブで聴くとさらに楽しいですよ！
      </p>
      <Link href="https://linkco.re/uvERUgzU" target="_blank">
        <Image
          src="/subscription-image.jpg"
          width="300"
          height="300"
          alt="Pety"
          className="mx-auto"
        />
      </Link>
      <Link href="https://linkco.re/uvERUgzU" target="_blank">
        <p className="mx-4 my-2 text-center text-xl">キュンLOVE</p>
      </Link>
      <Link href="https://soundcloud.com/petypety0912" target="_blank">
        <div className="mt-6 flex items-center justify-center gap-4">
          <Image
            src="/soundcloud_logo.png"
            width="60"
            height="60"
            alt="sound croud"
          />
          <p className="text-xl">SOUND CLOUD</p>
        </div>
      </Link> */}
    </div>
  )
}
