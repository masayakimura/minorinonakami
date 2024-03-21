import { FC } from 'react'

type Heading = {
  text: string
}

export const Heading: FC<Heading> = ({ text }) => {
  return (
    <h2 className="mt-6 block bg-red-600 py-2 text-center font-yusei text-xl text-white">
      {text}
    </h2>
  )
}
