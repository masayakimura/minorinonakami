import { log } from 'console'
import Link from 'next/link'
import { FC } from 'react'

export const livesInformation = [
  {
    name: 'ゲキモリdeヤバイバー！Vol.30',
    ticketUrl: 'https://t.livepocket.jp/e/glssn',
    place: 'Club Asia',
    placeUrl: 'https://clubasia.jp/#access',
    liveTime: '16:25〜16:40',
    eventTime: '17:00〜18:00',
    priceAdd: '2k',
    priceDoor: '2.5k',
  },

  {
    name: 'FES',
    ticketUrl: 'https://t.livepocket.jp/e/glssn',
    place: 'deseo',
    placeUrl: 'http://www.deseo.co.jp/map.html',
    liveTime: '16:25〜16:40',
    eventTime: '17:00〜18:00',
    priceAdd: '2k',
    priceDoor: '3k',
  },
  {
    name: 'FES2',
    ticketUrl: 'https://t.livepocket.jp/e/glssn',
    place: 'deseo',
    placeUrl: 'http://www.deseo.co.jp/map.html',
    liveTime: '16:25〜16:40',
    eventTime: '17:00〜18:00',
    priceAdd: '2k',
    priceDoor: '3k',
  },
]

type LiveInformation = {
  name: string
  place: string
  liveTime: string
  eventTime: string
  priceAdd: string
  priceDoor: string
}

export const LiveInformation: FC<LiveInformation> = () => {
  return (
    <div>
      {livesInformation.map((liveInfo) => (
        <div key={liveInfo.name}>
          <div className="py-4">
            <div className="mb-1 text-center text-xl">
              <Link href={liveInfo.ticketUrl}>{liveInfo.name}</Link>
            </div>
            <div className="mb-2 text-center text-xl">
              <Link href={liveInfo.placeUrl}>{liveInfo.place}</Link>
            </div>
            <div className="mb-3 flex items-center justify-center">
              <div className="mr-2 rounded-md bg-blue-500 px-1 text-lg text-white">
                ライブ
              </div>
              <div className="text-xl">{liveInfo.liveTime}</div>
            </div>
            <div className="mb-3 flex items-center justify-center">
              <div className="mr-2 rounded-md bg-pink-600 px-1 text-lg text-white">
                特典会
              </div>
              <div className="text-xl">{liveInfo.eventTime}</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="mr-2 rounded-md bg-purple-800 px-3 text-lg text-white">
                料金
              </div>
              <div className="text-xl">
                ADD：{liveInfo.priceAdd}　DOOR：
                {liveInfo.priceDoor}
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}
