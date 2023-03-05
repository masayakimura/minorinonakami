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
      写真
      <TodaysGumichan />
      <TogetherWithGumichan />
      <GumichansSecret />
    </Layout>
  )
}
