import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '@/components/Layout'
import { GumichansSecret } from '@/components/GumichansSecret'
import { GetServerSideProps, NextPage } from 'next'
import { supabase } from '@/utils/supabase'
import { Live } from '@/types/types'

import ConvertDate from 'components/convertdate'

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: lives } = await supabase
    .from('lives')
    .select('*')
    .order('date', { ascending: true })

  return { props: { lives } }
}

type LivesProps = {
  lives: Live[]
}

const Home: NextPage<LivesProps> = ({ lives }) => {
  let date = new Date()
  let year = date.getFullYear()
  let month = ('0' + (date.getMonth() + 1)).slice(-2)
  let day = date.getDate()
  let today = `${year}-${month}-${day}`
  console.log(`today:${today}`)
  console.log(`ライブ：${lives}`)

  return (
    <Layout title="ぐみちゃんおいしい">
      <p className="mx-4">
        Petyの青色担当小河ぐみちゃんの色んなことが知れちゃうサイトです！かわいいぐみちゃんのことたくさん知ってもっと好きになってね！
      </p>

      <Image
        src="/topImage.jpg"
        alt="ぐみちゃん"
        width="360"
        height="100"
        className="mx-auto mb-4"
      />

      <h2 className="block bg-blue-600 py-2 text-center text-xl text-white">
        今日のぐみちゃん
      </h2>

      {lives.map((live) => (
        <div key={live.id}>
          {today === live.date ? (
            <>
              <div className="py-4">
                <div className="mb-1 text-center text-xl text-blue-600">
                  <ConvertDate convertDate={live.date}></ConvertDate>
                </div>
                <div className="mb-1 text-center text-xl">
                  <Link href={live.ticket_url}>{live.name}</Link>
                </div>
                <div className="mb-2 text-center text-xl">
                  <Link href={live.place_url}>{live.place}</Link>
                </div>
                <div className="mb-3 flex items-center justify-center">
                  <div className="mr-2 rounded-md bg-blue-500 px-1 text-lg text-white">
                    ライブ
                  </div>
                  <div className="text-xl">
                    {live.live_start_time
                      ? `${live.live_start_time.slice(
                          0,
                          5
                        )}〜${live.live_finish_time?.slice(0, 5)}`
                      : '未定'}
                  </div>
                </div>
                <div className="mb-3 flex items-center justify-center">
                  <div className="mr-2 rounded-md bg-pink-600 px-1 text-lg text-white">
                    特典会
                  </div>
                  <div className="text-xl">
                    {live.event_start_time
                      ? `${live.event_start_time.slice(
                          0,
                          5
                        )}〜${live.event_finish_time?.slice(0, 5)}`
                      : '未定'}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="mr-2 rounded-md bg-purple-800 px-3 text-lg text-white">
                    料金
                  </div>
                  <div className="text-xl">
                    ADD：{live.price_add}K　DOOR：
                    {live.price_door}K
                  </div>
                </div>
              </div>
              <hr />
            </>
          ) : (
            <p></p>
          )}
        </div>
      ))}

      <div>
        <h2 className="mt-6 block bg-blue-600 py-2 text-center text-xl text-white">
          ぐみちゃんといっしょ
        </h2>
        <div>
          {lives.map((live) => (
            <div key={live.id}>
              {!(today === live.date) && today < live.date ? (
                <>
                  <div className="py-4">
                    <div className="mb-1 text-center text-xl text-blue-600">
                      <ConvertDate convertDate={live.date}></ConvertDate>
                    </div>
                    <div className="mb-1 text-center text-xl">
                      <Link href={live.ticket_url}>{live.name}</Link>
                    </div>
                    <div className="mb-2 text-center text-xl">
                      <Link href={live.place_url}>{live.place}</Link>
                    </div>
                    <div className="mb-3 flex items-center justify-center">
                      <div className="mr-2 rounded-md bg-blue-500 px-1 text-lg text-white">
                        ライブ
                      </div>
                      <div className="text-xl">
                        {live.live_start_time
                          ? `${live.live_start_time.slice(
                              0,
                              5
                            )}〜${live.live_finish_time?.slice(0, 5)}`
                          : '未定'}{' '}
                      </div>
                    </div>
                    <div className="mb-3 flex items-center justify-center">
                      <div className="mr-2 rounded-md bg-pink-600 px-1 text-lg text-white">
                        特典会
                      </div>
                      <div className="text-xl">
                        {live.event_start_time
                          ? `${live.event_start_time.slice(
                              0,
                              5
                            )}〜${live.event_finish_time?.slice(0, 5)}`
                          : '未定'}{' '}
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="mr-2 rounded-md bg-purple-800 px-3 text-lg text-white">
                        料金
                      </div>
                      <div className="text-xl">
                        ADD：{live.price_add}K　DOOR：
                        {live.price_door}K
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ) : (
                <p></p>
              )}
            </div>
          ))}
        </div>
      </div>

      <GumichansSecret />
    </Layout>
  )
}

export default Home
