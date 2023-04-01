import { Layout } from '@/components/Layout'
import { LifeCenteredOnGumichan } from '@/components/LifeCenteredOnGumichan'
import { GetServerSideProps, NextPage } from 'next'
import { supabase } from '@/utils/supabase'
import { Live } from '@/types/types'

import CardsCarousel from '@/components/carousel'
import { Pety } from '@/components/pety'
import { Footer } from '@/components/Footer'
import { LiveInformation } from '@/components/LiveInformation'
import { NotMeetGumi } from '@/components/NotMeetGumi'
import { Heading } from '@/components/Heading'

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

export const getToday = () => {
  let date = new Date()
  let year = date.getFullYear()
  let month = ('0' + (date.getMonth() + 1)).slice(-2)
  let day = ('0' + date.getDate()).slice(-2)
  let today = `${year}-${month}-${day}`
  return today
}

const Home: NextPage<LivesProps> = ({ lives }) => {
  let today = getToday()
  console.log(today)

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

      <Heading text="今日のぐみちゃん" />

      {selectDate.length === 0 ? (
        <NotMeetGumi />
      ) : (
        <p className="my-3 text-center text-xl text-blue-600">
          今日はここで会えるよ！
        </p>
      )}
      {lives.map((live) => (
        <>
          {today === live.date ? (
            <LiveInformation
              id={live.id}
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
        </>
      ))}

      <Heading text="ぐみちゃんといっしょ" />
      <p className="my-3 text-center text-xl text-blue-600">
        これからぐみちゃんに会える日
      </p>
      <div>
        {lives.map((live) => (
          <>
            {!(today === live.date) && today < live.date ? (
              <LiveInformation
                id={live.id}
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
              ''
            )}
          </>
        ))}
      </div>
      <LifeCenteredOnGumichan />
      <Pety />
      <Footer />
    </Layout>
  )
}

export default Home
