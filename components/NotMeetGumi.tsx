import Image from 'next/image'
import Link from 'next/link'

import { Member } from './pety'

const gumi: Member = {
  name: '小河 ぐみ',
  imgUrl: '/gumi.png',
  twitterUrl: 'https://twitter.com/pety_gumi',
  instagramUrl: 'https://www.instagram.com/pety_gumi_official/',
  tiktokUrl: 'https://www.tiktok.com/@pety_gumi/',
}

export const NotMeetGumi = () => {
  return (
    <>
      <p className="my-3 mx-2 text-center text-xl text-blue-600">
        今日は会えないけど我慢してね！
        <br />
        SNSでかわいいぐみちゃんをいっぱい補給して〜
      </p>
      <div className="mb-8 flex items-baseline justify-center gap-8">
        <div>
          <Link href={gumi.twitterUrl} target="_blank">
            <Image
              src="/twitter.png"
              alt="twitter"
              width={50}
              height={50}
              className="mx-auto mb-1"
            />
          </Link>
          <p className="text-center">Twitter</p>
        </div>
        <div>
          <Link href={gumi.instagramUrl} target="_blank">
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

        {gumi.tiktokUrl ? (
          <div>
            <Link href={gumi.tiktokUrl} target="_blank">
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
    </>
  )
}
