import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="MedOnCall" />
        <link rel="icon" href="/favicon.svg" />
        <Header />
      </Head>
    </div>
  );
}
