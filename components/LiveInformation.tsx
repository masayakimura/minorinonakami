import { Live } from '@/types/types'
import Link from 'next/link'
import { FC } from 'react'

import ConvertDate from 'components/convertdate'
import { getToday } from '@/pages'

export const LiveInformation: FC<Omit<Live, 'created_at'>> = ({
  id,
  name,
  ticket_url,
  place,
  place_url,
  date,
  live_start_time,
  live_finish_time,
  event_start_time,
  event_finish_time,
  price_add,
  price_door,
  tweet_url,
}) => {
  let today = getToday()

  return (
    <>
      <div className="mx-4 pb-4" key={id}>
        {today === date ? (
          ''
        ) : (
          <div className="mx-auto mb-2 w-36 rounded-full bg-blue-500 py-1 text-center text-lg text-white">
            <ConvertDate convertDate={date}></ConvertDate>
          </div>
        )}

        <div className="mb-2 flex items-center justify-center text-center text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-1 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
            />
          </svg>

          {tweet_url ? (
            <Link href={tweet_url} target="_blank">
              {name}
            </Link>
          ) : (
            name
          )}
        </div>
        <div className="mb-3 flex items-center justify-center text-center text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-1 h-6 w-6"
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
          {place_url ? (
            <Link href={place_url} target="_blank">
              {place}
            </Link>
          ) : place ? (
            place
          ) : (
            <p>未定</p>
          )}
        </div>
        <div className="mb-3 flex items-center justify-center">
          <div className="mr-2 rounded-md bg-blue-500 px-1 text-lg text-white">
            ライブ
          </div>
          <div className="text-xl">
            {live_start_time
              ? `${live_start_time.slice(0, 5)}〜${live_finish_time?.slice(
                  0,
                  5
                )}`
              : '未定'}
          </div>
        </div>
        <div className="mb-3 flex items-center justify-center">
          <div className="mr-2 rounded-md bg-pink-600 px-1 text-lg text-white">
            特典会
          </div>
          <div className="text-xl">
            {event_start_time
              ? `${event_start_time.slice(0, 5)}〜${event_finish_time?.slice(
                  0,
                  5
                )}`
              : '未定'}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="mr-2 rounded-md bg-purple-800 px-3 text-lg text-white">
            料金
          </div>
          <div className="text-xl">
            {ticket_url ? (
              <Link href={ticket_url} target="_blank">
                <span className="mr-4">ADD:{price_add}K</span>
                <span>
                  DOOR:
                  {price_door}K
                </span>
              </Link>
            ) : (
              <>
                <span className="mr-4">ADD:{price_add}K</span>
                <span>
                  DOOR:
                  {price_door}K
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <hr className="mb-4 mt-1" />
    </>
  )
}
