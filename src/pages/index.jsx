import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="flex bg-slate-600 text-white text-2xl">
        Test merge branch
      </h1>
    </div>
  )
}
