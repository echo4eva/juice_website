import Image from "next/image";
import styles from "../styles/welcome.module.css"

export default function Welcome(props) {

    return (
        <div className="flex flex-col w-[100%] h-[100%] overflow-hidden">
            <div className="relative flex w-[100%] h-[35%] border-2 overflow-hidden">
                <Image src="/wata.jpg" width="1000" height="563" className="absolute"/>
                {/* vv above img vv */}
                <Image src="/computa.png" width="175" height="175" className="absolute left-5" />
                <p className="absolute bottom-0 right-0 text-7xl text-white text-opacity-25">welcome</p>
                {/* le text */}
                <div className={`${styles.specs} flex flex-col absolute top-[20%] left-[25%] text-white text-sm`}>
                    <p>Windows Vista Ultimate</p>
                    <p>Intel® Core™2 Quad Processor Q6600 @2.40 GHz</p>
                    <p>8192 MB RAM</p>
                    <p>NVIDIA GeForce GTX 280</p>
                    <p>Computer Name: JU1C3-PC</p>
                </div>
            </div>
            {/* the beefge */}
            <div className="w-[100%] h-[65%] flex flex-col overflow-y-auto bg-white border-2 p-2">
                <div className="flex flex-row space-between py-3">
                    <p className="text-sky-800 whitespace-nowrap">1. - Get started with Windows!</p>
                    <div className="border w-[100%] m-[12px] border-sky-200"></div>
                </div>
                <div className="grid grid-rows-2 grid-cols-3 gap-2">
                    <div className="flex flex row items-center hover:border" onClick={() => {props.onClickIntro()}}>
                        <Image src="/whoami.png" width="85" height="85" className="cursor-pointer"/>
                        <p className="cursor-pointer">Who is Juice</p>
                    </div>
                    <div className="flex flex row items-center hover:border" onClick={() => {props.onClickGames()}}>
                        <Image src="/games.png" width="85" height="85" className="cursor-pointer"/>
                        <p className="cursor-pointer">View game library</p>
                    </div>
                    <div className="flex flex row items-center hover:border" onClick={() => {props.onClickMusic()}}>
                        <Image src="/music.png" width="75" height="75" className="cursor-pointer"/>
                        <p className="pl-2 cursor-pointer">View music library</p>
                    </div>
                    <div className="flex flex row items-center hover:border" onClick={() => {props.onClickShows()}}>
                        <Image src="/shows.png" width="85" height="85" className="cursor-pointer"/>
                        <p className="cursor-pointer">View show library</p>
                    </div>
                    <div className="flex flex row items-center hover:border" onClick={() => {props.onClickGallery()}}>
                        <Image src="/photos.png" width="75" height="75" className="cursor-pointer"/>
                        <p className="pl-2 cursor-pointer">View gallery</p>
                    </div>
                </div>
                <div className="flex flex-row space-between py-3">
                    <p className="text-sky-800 whitespace-nowrap">2. - Extra</p>
                    <div className="w-[100%] m-[12px] border border-sky-200"></div>
                </div>
                <div className="grid grid-rows-2 grid-cols-3 gap-2">
                    <div className="flex flex row items-center hover:border" onClick={() => {props.onClickCreated()}}>
                        <Image src="/creator.png" width="85" height="85" className="cursor-pointer"/>
                        <p className="cursor-pointer">Who created this</p>
                    </div>
                </div>
            </div>
        </div>
    )
}