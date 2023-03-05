import { FC } from 'react'

export const EventLabel: FC = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-center">
        <div className="mr-2 rounded-md bg-pink-600 px-1 text-lg text-white">
          特典会
        </div>
        <div className="text-xl">17:00〜18:00</div>
      </div>
    </>
  )
}
