import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import styles from "../../styles/Home.module.css";
import { ethers } from "ethers";
import Link from "next/link";
import { abi } from '../../constants/abi'
import { useState } from "react";

export default function Create() {

    const { isConnected } = useAccount();

    const creatRide = async (origin: String, destination: String, departuretime: Number, fare: Number, seats: Number) => {
        const provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
        const signer = await provider.getSigner();
        const contract = new ethers.Contract("0x618965ac64eb2CFF28cd821A66B5A111f3ea3234", abi, signer);

        const createRide = await contract.createride(origin, destination, departuretime, fare, seats);
        console.log(createRide)

    }


    return (
        <div>
            <ConnectButton/>
            {/* <button className={styles.button} onClick={searchRides}>Search</button>
            <button className={styles.button} onClick={bookRide}>Book</button> */}

        </div>
    )

}