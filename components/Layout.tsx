import Head from 'next/head'
import { FC, ReactNode } from 'react'

type Title = {
  title: string
  children: ReactNode
}
export const Layout: FC<Title> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mx-auto max-w-2xl pb-8">
        <header>
          <h1 className="block bg-blue-600 py-2 text-center text-xl text-white">
            ぐみちゃんおいしい
          </h1>
        </header>
        <main>{children}</main>
      </div>
    </>
  )
}
