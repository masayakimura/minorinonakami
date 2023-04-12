import { FC, ReactNode } from 'react'
import { Header } from './Header'

type Title = {
  children: ReactNode
}
export const Layout: FC<Title> = ({ children }) => {
  return (
    <>
      <Header
        title={'ぐみのなかみ'}
        description={
          'Petyの青色担当小河ぐみちゃんの色んなことが知れちゃうサイトです！かわいいぐみちゃんのことたくさん知ってもっと好きになってね！'
        }
        url={'https://guminonakami.com'}
        type={'website'}
        imageUrl={'https://www.guminonakami.com/topImage01.jpg'}
      />
      <div className="mx-auto max-w-2xl">
        <header>
          <h1 className="block bg-blue-600 py-2 text-center text-2xl text-white">
            ぐみのなかみ
          </h1>
        </header>
        <main>{children}</main>
      </div>
    </>
  )
}
