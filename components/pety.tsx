import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

export type Member = {
  name: string
  imgUrl: string
  twitterUrl: string
  instagramUrl: string
  tiktokUrl?: string
}

const MEMBERS: Member[] = [
  {
    name: '汐音 ほのか',
    imgUrl: '/honoka.png',
    twitterUrl: 'https://twitter.com/pety_honoka',
    instagramUrl: 'https://www.instagram.com/pety_honoka_official_/',
    tiktokUrl: '',
  },
  {
    name: '羽乃 つゆ',
    imgUrl: '/tsuyu.png',
    twitterUrl: 'https://twitter.com/pety_tsuyu',
    instagramUrl: 'https://www.instagram.com/pety_tsuyu_official/',
    tiktokUrl: 'https://www.tiktok.com/@ebiumainaa',
  },
  {
    name: '観月 りり',
    imgUrl: '/riri.png',
    twitterUrl: 'https://twitter.com/pety_riri',
    instagramUrl: 'https://www.instagram.com/pety_riri_official/',
    tiktokUrl: 'https://www.tiktok.com/@pety_riri/',
  },
  {
    name: '琥珀 かりん',
    imgUrl: '/karin.png',
    twitterUrl: 'https://twitter.com/pety_karin',
    instagramUrl: 'https://www.instagram.com/pety_karin_official/',
    tiktokUrl: 'https://www.tiktok.com/@karichanniconico/',
  },
  {
    name: '小河 ぐみ',
    imgUrl: '/gumi.png',
    twitterUrl: 'https://twitter.com/pety_gumi',
    instagramUrl: 'https://www.instagram.com/pety_gumi_official/',
    tiktokUrl: 'https://www.tiktok.com/@pety_gumi/',
  },
]

export const Pety: FC = () => {
  console.log(MEMBERS)

  return (
    <div className="mb-4">
      <h2 className="mt-8 block bg-blue-600 py-2 text-center text-xl text-white">
        ぐみちゃんの居場所
      </h2>
      <h3 className="mt-4 text-center text-xl text-blue-500">about Pety</h3>
      <Image
        src="/logo.jpg"
        width="360"
        height="360"
        alt="Pety"
        className="mx-auto my-2"
      />
      <p className="mx-4 my-2 text-xl">
        2021年9月デビュー。「生きるのムズい」世界を変える！ささいな毎日にささいなハッピーとラブを！をコンセプトに活動中！
      </p>

      <div className="flex items-center justify-center gap-8">
        <div>
          <Link href="https://twitter.com/pety_official/" target="_blank">
            <Image
              src="/twitter.png"
              alt="twitter"
              width={50}
              height={50}
              className="mx-auto"
            />
          </Link>
          <p className="text-center">Twitter</p>
        </div>
        <div>
          <Link
            href="https://www.youtube.com/channel/UCDmDWae5JoEXogKtOM1sDYw"
            target="_blank"
          >
            <Image
              src="/youtube.png"
              alt="youtube"
              width={160}
              height={50}
              className="mx-auto"
            />
          </Link>
          <p className="text-center">Youtube</p>
        </div>
        <div>
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
        </div>
      </div>

      <hr className="my-6" />

      <h3 className="mt-4 text-center text-xl text-blue-500">Member</h3>

      <ul>
        {MEMBERS.map((member) => (
          <li key={member.name} className="mt-4">
            <Link href={member.twitterUrl} target="_blank">
              <Image
                src={member.imgUrl}
                width="360"
                height="400"
                alt={member.name}
                className="mx-auto"
              />
            </Link>
            <p className="my-2 text-center text-xl">{member.name}</p>
            <div className="mb-8 flex items-center justify-center gap-8">
              <div>
                <Link href={member.twitterUrl} target="_blank">
                  <Image
                    src="/twitter.png"
                    alt="twitter"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                </Link>
                <p className="text-center">Twitter</p>
              </div>
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
                <p className="text-center">Instagram</p>
              </div>

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
                  <p className="text-center">TikTok</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </li>
        ))}
      </ul>

      <hr className="my-6" />

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
    </div>
  )
}
