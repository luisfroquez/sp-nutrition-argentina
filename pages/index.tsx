import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SP Nutrition Argentina</title>
        <meta
          name="Suplementos deportivos importados"
          content="Made with love by Zacata"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <Link href="/">SP Nutrition Argentina</Link>
        </h1>

        <p>Estamos trabajando en un nuevo sitio.</p>
      </main>
    </>
  );
};

export default Home;
