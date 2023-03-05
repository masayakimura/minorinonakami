import { FC } from 'react'
import { LiveInformation } from './LiveInformation'

export const TodaysGumichan: FC = () => {
  return (
    <div>
      <h2 className="block bg-blue-600 py-2 text-center text-xl text-white">
        今日のぐみちゃん
      </h2>
      <LiveInformation
        name="ゲキモリdeヤバイバー！Vol.30"
        place="Club Asia"
        liveTime="16:25〜16:40"
        eventTime="17:00〜18:00"
        priceAdd="2k"
        priceDoor="2.5k"
      />
    </div>
  )
}
