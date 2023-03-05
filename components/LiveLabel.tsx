import { FC } from 'react'

export const LiveLabel: FC = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-center">
        <div className="mr-2 rounded-md bg-blue-500 px-1 text-lg text-white">
          ライブ
        </div>
        <div className="text-xl">16:25〜16:40</div>
      </div>
    </>
  )
}
