import Head from 'next/head';


export default function HeadInfo() {
    return (
        <Head>
            <title>The Last Halcyon</title>
            <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
            <meta property="og:title" content="The Last Halcyon" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://thelasthalcyon.com" />
            <meta property="og:image" content="/home_hero.png" />
        </Head>
    )
}