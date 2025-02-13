import { GetServerSideProps, NextPage } from 'next'
import { supabase } from '@/utils/supabase'
import { Live } from '@/types/types'
import { Layout } from '@/components/Layout'
import { Minoritoissyo } from '@/components/Minoritoissyo'
import CardsCarousel from '@/components/carousel'
import { Blancanie } from '@/components/Blancanie'
import { Footer } from '@/components/Footer'
import { LiveInformation } from '@/components/LiveInformation'
import { NotMeetMinori } from '@/components/NotMeetMinori'
import { Heading } from '@/components/Heading'
import TweetEmbedList from '@/components/TweetembedList'

import { ShareIcons } from '@/components/ShareIcons'

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: lives } = await supabase
    .from('lives')
    .select('*')
    .order('date', { ascending: true })
    .order('live_start_time', { ascending: true })

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

  const tweetIds = [
    '1803404263726653706',
    '1801236413620584921',
    '1770794623448776832',
    '1769330041270452697',
    '1768598210824876502',
    '1767163403762860335',
    '1755215785356923284',
    '1745798712847139034',
    '1735293217615331385',
    '1730569408635154710',
    '1727291638832386069',
    '1726583584763650287',
  ]
  return (
    <Layout>
      <p className="mx-4 my-2 font-yusei text-xl">
        Blancanieのブラッドレッド担当暁月美乃莉ちゃんのいろんなことが知れちゃうサイトです！かわいい美乃莉ちゃんのことたくさん知ってもっと好きになってね！
      </p>
      <CardsCarousel />

      <Heading text="今日のみのりちゃん" />

      {selectDate.length === 0 ? (
        <NotMeetMinori />
      ) : (
        <p className="my-3 text-center font-yusei text-xl text-rose-800">
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
              price_adv={live.price_adv}
              price_door={live.price_door}
              tweet_url={live.tweet_url}
              privilege={live.privilege}
            />
          ) : (
            <></>
          )}
        </>
      ))}

      <Heading text="みのり中心の生活" />
      <p className="my-3 text-center font-yusei text-xl text-rose-800">
        これから美乃莉ちゃんに会える日
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
                price_adv={live.price_adv}
                price_door={live.price_door}
                tweet_url={live.tweet_url}
                privilege={live.privilege}
              />
            ) : (
              ''
            )}
          </>
        ))}
      </div>
      <Minoritoissyo />
      <TweetEmbedList tweetIds={tweetIds} />
      <Blancanie />
      {/* <hr className="mb-4 mt-1" /> */}
      {/* <ShareIcons /> */}
      <p className="my-6 mx-4">
        このサイトは、Blancanieと暁月美乃莉ちゃんを応援しているファンが運営している非公式サイトです。正確なライブ情報などは公式Xをご確認ください。
      </p>
      <Footer />
    </Layout>
  )
}

export default Home
