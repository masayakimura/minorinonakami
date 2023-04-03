import { FC, ReactNode } from 'react'
import { Header } from './Header'

type Title = {
  children: ReactNode
}
export const Layout: FC<Title> = ({ children }) => {
  return (
    <>
      <Header
        pageTitle={'ぐみのなかみ'}
        pageDescription={
          'Petyの青色担当小河ぐみちゃんの色んなことが知れちゃうサイトです！かわいいぐみちゃんのことたくさん知ってもっと好きになってね！'
        }
        pagePath={'https://guminonakami.com'}
        pageImg={'https://guminonakami.com'}
        pageImgWidth={1280}
        pageImgHeight={960}
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
