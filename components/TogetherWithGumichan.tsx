import Link from 'next/link'
import { livesInformation } from './LiveInformation'

export const TogetherWithGumichan = () => {
  return (
    <div>
      {' '}
      <h2 className="mt-6 block bg-blue-600 py-2 text-center text-xl text-white">
        ぐみちゃんといっしょ
      </h2>
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
    </div>
  )
}
