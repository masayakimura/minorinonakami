import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Layout } from '@/components/Layout'
import { TodaysGumichan } from '@/components/TodaysGumichan'
import { TogetherWithGumichan } from '@/components/TogetherWithGumichan'
import { GumichansSecret } from '@/components/GumichansSecret'

export default function Home() {
  return (
    <Layout title="ぐみちゃんおいしい">
      <p className="mx-4">
        Petyの青色担当小河ぐみちゃんの色んなことが知れちゃうサイトです！かわいいぐみちゃんのことたくさん知ってもっと好きになってね！
      </p>
      <Image
        src="/topImage.jpg"
        alt="ぐみちゃん"
        width="360"
        height="100"
        className="mx-auto mb-4"
      />
      <TodaysGumichan />
      <TogetherWithGumichan />
      <GumichansSecret />
    </Layout>
  )
}
