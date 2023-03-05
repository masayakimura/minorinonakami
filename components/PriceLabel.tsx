import { FC } from 'react'

export const PriceLabel: FC = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mr-2 rounded-md bg-purple-800 px-3 text-lg text-white">
          料金
        </div>
        <div className="text-xl">ADD：2k　DOOR：2.5k</div>
      </div>
    </>
  )
}
