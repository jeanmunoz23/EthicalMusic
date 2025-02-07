"use client";

import Hero from "./sections/hero";
import HowWorks from "./sections/howWorks";
import PlayList from "./sections/playList";
import WhyChoose from "./sections/whyChoose";
import type { NextPage } from "next";
import Marquee from "~~/components/marquee";

//import { useAccount } from "wagmi";
//import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  //const { address: connectedAddress } = useAccount();

  return (
    <>
      <Hero />
      <Marquee />
      <HowWorks />
      <WhyChoose />
      <PlayList />
      {/* 
          <p>
            Address:
            <Address address={connectedAddress} />
          </p>
          */}
    </>
  );
};

export default Home;
