import { FC, ReactNode } from 'react'
import { Header } from './Header'

type Title = {
  children: ReactNode
}
export const Layout: FC<Title> = ({ children }) => {
  return (
    <>
      <Header
        title={'みのりのなかみ'}
        description={
          'Blancanieのブラッドレッド担当暁月美乃莉ちゃんのいろんなことが知れちゃうサイトです'
        }
        url={'https://minorinonakami.net/'}
        type={'website'}
        imageUrl={'https://minorinonakami.net/topImage01.jpg'}
      />
      <div className="mx-auto max-w-2xl">
        <header>
          <h1 className="block bg-rose-800 py-2 text-center font-yusei text-2xl text-white">
            みのりのなかみ
          </h1>
        </header>
        <main>{children}</main>
      </div>
    </>
  )
}
