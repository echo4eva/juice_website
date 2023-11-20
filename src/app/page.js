"use client";
import Window from "@/components/Window";
import Welcome from "@/components/Welcome";
import Intro from "@/components/Intro";
import Games from "@/components/Games";
import Music from "@/components/Music";
import Shows from "@/components/Shows";
import Gallery from "@/components/Gallery";
import Created from "@/components/Created";
import { useState } from "react";

export default function Home() {
  
  const [welcome, setWelcome] = useState(true);
  const [intro, setIntro] = useState(false);
  const [games, setGames] = useState(false);
  const [music, setMusic] = useState(false);
  const [shows, setShows] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [created, setCreated] = useState(false);

  const props = [{
    id: 1,
    defaultX: 300,
    defaultY: 75,
    defaultZ: 0,
    addZ: 0,
    defaultWidth: 900,
    defaultHeight: 700,
    children: <Welcome 
      onClickIntro={() => {setIntro(true)}}
      onClickGames={() => {setGames(true)}}
      onClickMusic={() => {setMusic(true)}}
      onClickShows={() => {setShows(true)}}
      onClickGallery={() => {setGallery(true)}}
      onClickCreated={() => {setCreated(true)}}
    />,
    active: welcome,
    isActive: setWelcome
  }, {
    id: 1,
    defaultX: 250,
    defaultY: 50,
    defaultZ: 1,
    addZ: 100,
    defaultWidth: 300,
    defaultHeight: 300,
    children: <Intro />,
    active: intro,
    isActive: setIntro
  }, {
    id: 2,
    defaultX: 265,
    defaultY: 70,
    defaultZ: 2,
    addZ: 100,
    defaultWidth: 300,
    defaultHeight: 300,
    children: <Games />,
    active: games,
    isActive: setGames
  }, {
    id: 3,
    defaultX: 275,
    defaultY: 90,
    defaultZ: 3,
    addZ: 100,
    defaultWidth: 300,
    defaultHeight: 300,
    children: <Music />,
    active: music,
    isActive: setMusic
  }, {
    id: 4,
    defaultX: 285,
    defaultY: 110,
    defaultZ: 4,
    addZ: 100,
    defaultWidth: 300,
    defaultHeight: 300,
    children: <Shows />,
    active: shows,
    isActive: setShows
  }, {
    id: 5,
    defaultX: 295,
    defaultY: 130,
    defaultZ: 5,
    addZ: 100,
    defaultWidth: 300,
    defaultHeight: 300,
    children: <Gallery />,
    active: gallery,
    isActive: setGallery
  }, {
    id: 6,
    defaultX: 305,
    defaultY: 150,
    defaultZ: 6,
    addZ: 100,
    defaultWidth: 300,
    defaultHeight: 300,
    children: <Created />,
    active: created,
    isActive: setCreated
  }]

  return (
    <main className="min-h-screen bg-juiceBg">
        { welcome ? (
          <Window {...props[0]}/>
        ) : (
          null 
        )}
        
        {intro ? (
          <Window {...props[1]}/>
        ) : (
          null
        )}

        {games ? (
          <Window {...props[2]}/>
        ) : (
          null
        )}

        {music ? (
          <Window {...props[3]}/>
        ) : (
          null
        )}

        {shows ? (
          <Window {...props[4]}/>
        ) : (
          null
        )}

        {gallery ? (
          <Window {...props[5]}/>
        ) : (
          null
        )}

        {created ? (
          <Window {...props[6]}/>
        ) : (
          null
        )}
    </main>
  )
}
