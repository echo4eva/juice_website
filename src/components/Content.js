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
import { isMobile } from "react-device-detect";
import Mobile from "@/components/Mobile";

export default function Content () {
    const [welcome, setWelcome] = useState(true);
    const [intro, setIntro] = useState(false);
    const [games, setGames] = useState(false);
    const [music, setMusic] = useState(false);
    const [shows, setShows] = useState(false);
    const [gallery, setGallery] = useState(false);
    const [created, setCreated] = useState(false);
    const [mobile, setMobile] = useState(true);
  
    const props = [{
      id: 1,
      name: "Welcome Center",
      defaultX: 0,
      defaultY: 0,
      defaultZ: 0,
      addZ: 0,
      defaultWidth: 900,
      defaultHeight: 700,
      defaultConstraint: [900, 700],
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
      name: "About Me - Notepad",
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
      name: "Games - Notepad",
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
      name: "Music - Notepad",
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
      name: "Shows - Notepad",
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
      name: "Creator - Notepad",
      defaultX: 305,
      defaultY: 150,
      defaultZ: 6,
      addZ: 100,
      defaultWidth: 300,
      defaultHeight: 300,
      children: <Created />,
      active: created,
      isActive: setCreated
    }, {
      id: 7,
      name: "Error - Notepad",
      defaultX: 0,
      defaultY: 0,
      defaultZ: 7,
      addZ: 100,
      defaultWidth: 300,
      defaultHeight: 300,
      children: <Mobile />,
      active: mobile,
      isActive: setMobile
    }]
  
    const actual = () => {
      if (!isMobile) {
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
  
      return (
        <main className="min-h-screen bg-juiceBg">
          {mobile ? (
            <Window {...props[7]}/>
          ) : (
            null
          )}
        </main>
      )
    }
  
    return actual();
  
}