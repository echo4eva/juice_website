"use client";
import Window from "@/components/Window";
import Welcome from "@/components/Welcome";
import Intro from "@/components/Intro";
import { useState, useRef, useEffect } from "react";


export default function Home() {

  const [intro, setIntro] = useState(false);
  const [welcome, setWelcome] = useState(false);



  const props = [{
    id: 1,
    defaultX: 300,
    defaultY: 75,
    defaultZ: 0,
    addZ: 0,
    defaultWidth: 900,
    defaultHeight: 700,
    children: <Welcome onClickIntro={() => {
      setIntro(true);
    }}/>,
  }, {
    id: 1,
    defaultX: 250,
    defaultY: 50,
    defaultZ: 1,
    addZ: 100,
    defaultWidth: 300,
    defaultHeight: 300,
    children: <Intro />,
  }]

  return (
    <main className="min-h-screen bg-juiceBg">

        {/* welcome center */}
        <Window {...props[0]}/>

        {intro ? (
          <Window {...props[1]}/>
        ) : (
          null
        )}



    </main>
  )
}
