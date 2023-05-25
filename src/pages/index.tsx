import Head from "next/head";

import HomeModule from '@/common/modules/home/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pagina inicial</title>
      </Head>
      <main>
        <HomeModule />
      </main>
    </>
  );
}
