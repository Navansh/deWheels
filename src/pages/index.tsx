import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  const { isConnected } = useAccount();


  const renderButton = () => {
    if (isConnected) {
      return (
        <div className='place-items-center'>
          <Link className={styles.button} href='/rides/create'>Create a Ride</Link>
          <Link className={styles.button} href='/rides/search'> Book a Ride  </Link>
        </div>
      )
    }
  }



  return (
    <div>
      <Head>
        <title>dePool</title>
        <meta name="description" content="depool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <div>
          <div className={styles.header}>
            <ConnectButton />
          </div>
          <h1 className={styles.title}>Welcome to dePool</h1>
          <br></br>
          {renderButton()}
        </div>


      </div>
    </div>
  );

}