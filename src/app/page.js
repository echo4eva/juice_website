"use client";
import Draggable from "react-draggable";
import Window from "@/components/Window";


export default function Home() {

  const props = [{
    id: 1,
    defaultX: 300,
    defaultY: 300,
    defaultZ: 0,
    content: ["something", "bruhv", "so hyped for cyberpunk red", "x", "x", "x", "x", "x"]
  }, {
    id: 2,
    defaultX: 400,
    defaultY: 250,
    defaultZ: 0,
    content: ["idk", "lol"]
  }]

  return (
    <main className="min-h-screen bg-juiceBg">
        <Window {...props[0]}/>
        <Window {...props[1]}/>

    </main>
  )
}
