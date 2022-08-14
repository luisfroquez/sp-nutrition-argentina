import { Button, Center, Heading, Text } from "@chakra-ui/react";
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
        <Center
          flexDir="column"
          height="100vh"
          w="100vw"
          bg="#370202"
          objectPosition="center"
          color="white"
          padding={8}
          gap={4}
          textAlign="center"
        >
          <Heading textAlign="center" lineHeight={1} fontSize="1.5rem">
            Welcome to <Link href="/">SP Nutrition Argentina</Link>
          </Heading>
          <Text lineHeight={1}>
            Estamos trabajando en un nuevo sitio. Mientras tanto, visitá nuestra
            tienda online 👇
          </Text>
          <a href="https://www.tienda.spnutrition.com.ar" target="blank">
            <Button>Ir a la tienda</Button>
          </a>
        </Center>
      </main>
    </>
  );
};

export default Home;
