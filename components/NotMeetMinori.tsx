import Image from 'next/image'
import Link from 'next/link'

type MinoriType = {
  name: string
  imgUrl: string
  xUrl: string
  instagramUrl: string
  instagramUrl2: string
  tiktokUrl: string
}

const minori: MinoriType = {
  name: '暁月 美乃莉',
  imgUrl: '/minori.jpg',
  xUrl: 'https://twitter.com/minori_akatsuki',
  instagramUrl: 'https://www.instagram.com/minori_akatsuki/',
  instagramUrl2: 'https://www.instagram.com/_myfaith.__/',
  tiktokUrl: 'https://www.tiktok.com/@c1x1uuu9/',
}

export const NotMeetMinori = () => {
  return (
    <>
      <p className="mx-2 mt-3 mb-5 text-center font-yusei text-xl text-rose-800">
        今日は会えないけど我慢してね！
        <br />
        SNSでかわいい美乃莉ちゃんをいっぱい補給して〜
      </p>
      <div className="mb-8 flex items-baseline justify-center gap-8">
        <div>
          <Link href={minori.xUrl} target="_blank">
            <Image
              src="/x.png"
              alt="X"
              width={44}
              height={44}
              className="mx-auto mb-1"
            />
          </Link>
          {/* <p className="text-center">X</p> */}
        </div>

        <div>
          <Link href={minori.instagramUrl} target="_blank">
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

        <div>
          <Link href={minori.instagramUrl2} target="_blank">
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

        <div>
          <Link href={minori.tiktokUrl} target="_blank">
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
      </div>
    </>
  )
}
