import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import styles from "../../styles/Home.module.css";
import { ethers } from "ethers";
import Link from "next/link";
import { abi } from '../../constants/abi'
import { useState } from "react";

export default function Search() {



    const { isConnected } = useAccount();

    const searchRides = async (origin: String, destination: String) => {
        const provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");

        const contract = new ethers.Contract("0x542eF2fE377b93D668176e364284b0346F103e27", abi, provider);

        const rideCount = await contract.ridecount();
        console.log(rideCount)

        let validRides = [];

        for (let i = 0; i < rideCount; i++) {
            const ride = await contract.rides(i);
            console.log('1:'+ride.origin)
            if (ride.origin === origin && ride.destination === destination) {
                validRides.push(ride);
            }
            console.log('2:' + validRides)

        }
    }

    const bookRide = async (rideId:Number) => {
        const provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
        const signer = await provider.getSigner();
        const contract = new ethers.Contract("0x542eF2fE377b93D668176e364284b0346F103e27", abi, signer);

        const bookRide = await contract.bookRide(rideId);
        console.log(bookRide)

    }


    return (
        <div>
            <ConnectButton/>
            <button className={styles.button} onClick={searchRides}>Search</button>
            <button className={styles.button} onClick={bookRide}>Book</button>

        </div>
    )

}