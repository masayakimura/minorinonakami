import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '@/components/Layout'
import { GumichansSecret } from '@/components/GumichansSecret'
import { GetServerSideProps, NextPage } from 'next'
import { supabase } from '@/utils/supabase'
import { Live } from '@/types/types'

import ConvertDate from 'components/convertdate'
import CardsCarousel from '@/components/carousel'
import { Pety } from '@/components/pety'

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

  return (
    <Layout title="ぐみちゃんおいしい">
      <p className="mx-4 my-2 text-xl">
        Petyの青色担当小河ぐみちゃんの色んなことが知れちゃうサイトです！かわいいぐみちゃんのことたくさん知ってもっと好きになってね！
      </p>

      <CardsCarousel />

      <h2 className="mt-6 block bg-blue-600 py-2 text-center text-xl text-white">
        今日のぐみちゃん
      </h2>

      <p className="my-3 text-center text-xl text-blue-600">
        今日はここで会えるよ！
      </p>

      {lives.map((live) => (
        <div key={live.id}>
          {today === live.date ? (
            <>
              <div className="pb-4">
                <div className="mb-2 flex items-center justify-center text-center text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                    />
                  </svg>

                  {live.ticket_url ? (
                    <Link href={live.ticket_url}>{live.name}</Link>
                  ) : (
                    live.name
                  )}
                </div>
                <div className="mb-3 flex items-center justify-center text-center text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  {live.place_url ? (
                    <Link href={live.place_url}>{live.place}</Link>
                  ) : (
                    live.place
                  )}
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
                    {live.ticket_url ? (
                      <Link href={live.ticket_url}>
                        <span className="mr-4">ADD:{live.price_add}K</span>
                        <span>
                          DOOR:
                          {live.price_door}K
                        </span>
                      </Link>
                    ) : (
                      <>
                        <span className="mr-4">ADD:{live.price_add}K</span>
                        <span>
                          DOOR:
                          {live.price_door}K
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <hr className="mb-4 mt-1" />
            </>
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
                <>
                  <div className="pb-4">
                    <div className="mx-auto mb-2 w-36 rounded-full bg-blue-500 py-1 text-center text-lg text-white">
                      <ConvertDate convertDate={live.date}></ConvertDate>
                    </div>
                    <div className="mb-2 flex items-center justify-center text-center text-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                        />
                      </svg>

                      {live.ticket_url ? (
                        <Link href={live.ticket_url}>{live.name}</Link>
                      ) : (
                        live.name
                      )}
                    </div>
                    <div className="mb-3 flex items-center justify-center text-center text-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      {live.place_url ? (
                        <Link href={live.place_url}>{live.place}</Link>
                      ) : (
                        live.place
                      )}
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
                        {live.ticket_url ? (
                          <Link href={live.ticket_url}>
                            <span className="mr-4">ADD:{live.price_add}K</span>
                            <span>
                              DOOR:
                              {live.price_door}K
                            </span>
                          </Link>
                        ) : (
                          <>
                            <span className="mr-4">ADD:{live.price_add}K</span>
                            <span>
                              DOOR:
                              {live.price_door}K
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <hr className="mb-5 mt-1" />
                </>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>

      <GumichansSecret />
      <Pety />
    </Layout>
  )
}

export default Home
