import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '@/components/Layout'
import { LifeCenteredOnGumichan } from '@/components/LifeCenteredOnGumichan'
import { GetServerSideProps, NextPage } from 'next'
import { supabase } from '@/utils/supabase'
import { Live } from '@/types/types'

import CardsCarousel from '@/components/carousel'
import { Member, Pety } from '@/components/pety'
import { Footer } from '@/components/Footer'
import { LiveInformation } from '@/components/LiveInformation'

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: lives } = await supabase
    .from('lives')
    .select('*')
    .order('date', { ascending: true })

  return { props: { lives } }
}

const gumi: Member = {
  name: '小河 ぐみ',
  imgUrl: '/gumi.png',
  twitterUrl: 'https://twitter.com/pety_gumi',
  instagramUrl: 'https://www.instagram.com/pety_gumi_official/',
  tiktokUrl: 'https://www.tiktok.com/@pety_gumi/',
}

type LivesProps = {
  lives: Live[]
}

export const getToday = () => {
  let date = new Date()
  let year = date.getFullYear()
  let month = ('0' + (date.getMonth() + 1)).slice(-2)
  let day = date.getDate()
  let today = `${year}-${month}-${day}`
  return today
}

const Home: NextPage<LivesProps> = ({ lives }) => {
  let today = getToday()
  const todayCheck = lives.map((live) => {
    if (today === live.date) {
      return true
    } else {
      return false
    }
  })

  const selectDate = todayCheck.filter(function (n) {
    return n === true
  })

  return (
    <Layout title="ぐみちゃんおいしい">
      <p className="mx-4 my-2 text-xl">
        Petyの青色担当小河ぐみちゃんの色んなことが知れちゃうサイトです！かわいいぐみちゃんのことたくさん知ってもっと好きになってね！
      </p>
      <CardsCarousel />
      <h2 className="mt-6 block bg-blue-600 py-2 text-center text-xl text-white">
        今日のぐみちゃん
      </h2>

      {selectDate.length === 0 ? (
        <>
          <p className="my-3 mx-2 text-center text-xl text-blue-600">
            今日は会えないけど我慢してね！
            <br />
            SNSでかわいいぐみちゃんをいっぱい補給して〜
          </p>
          <div className="mb-8 flex items-center justify-center gap-8">
            <div>
              <Link href={gumi.twitterUrl} target="_blank">
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
      ) : (
        <p className="my-3 text-center text-xl text-blue-600">
          今日はここで会えるよ！
        </p>
      )}

      {lives.map((live) => (
        <div key={live.id}>
          {today === live.date ? (
            <LiveInformation
              name={live.name}
              ticket_url={live.ticket_url}
              place={live.place}
              place_url={live.place_url}
              date={live.date}
              live_start_time={live.live_start_time}
              live_finish_time={live.live_finish_time}
              event_start_time={live.event_start_time}
              event_finish_time={live.event_finish_time}
              price_add={live.price_add}
              price_door={live.price_door}
              tweet_url={live.tweet_url}
            />
          ) : (
            <></>
          )}
        </div>
      ))}
      <div>
        <h2 className="mt-6 block bg-blue-600 py-2 text-center text-xl text-white">
          ぐみちゃんといっしょ
        </h2>

        <p className="my-3 text-center text-xl text-blue-600">
          これからぐみちゃんに会える日
        </p>
        <div>
          {lives.map((live) => (
            <div key={live.id}>
              {!(today === live.date) && today < live.date ? (
                <LiveInformation
                  name={live.name}
                  ticket_url={live.ticket_url}
                  place={live.place}
                  place_url={live.place_url}
                  date={live.date}
                  live_start_time={live.live_start_time}
                  live_finish_time={live.live_finish_time}
                  event_start_time={live.event_start_time}
                  event_finish_time={live.event_finish_time}
                  price_add={live.price_add}
                  price_door={live.price_door}
                  tweet_url={live.tweet_url}
                />
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
      <LifeCenteredOnGumichan />
      <Pety />
      <Footer />
    </Layout>
  )
}

export default Home
