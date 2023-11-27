import styles from '../styles/window.module.css';
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import { Inika } from 'next/font/google';

export default function Window(props) {

    const isBrowser = (typeof window !== "undefined");
    
    const [windowW, setWW] = useState(isBrowser ? window.innerWidth : 0);
    const [windowH, setWH] = useState(isBrowser ? window.innerHeight : 0);

    const [index, setIndex] = useState(props.defaultZ + props.addZ);
    const clickableRef = useRef(null);

    const [x, setX] = useState(props.defaultX)
    const [y, setY] = useState(props.defaultY)
    const [curW, setW] = useState(props.defaultWidth)
    const [curH, setH] = useState(props.defaultHeight)
    const [maxW, setMW] = useState(0);
    const [maxH, setMH] = useState(0);

    function calcMaxW () {
        const total_w = x + curW;
        const remain_w = Math.abs(windowW - total_w);
        return remain_w + curW - 1;
    }

    function calcMaxH () {
        const total_h = y + curH;
        const remain_h = Math.abs(windowH - total_h);
        return remain_h + curH - 1;
    }

    const updatePositionState = (event, data) => {
        setX(data.x);
        setY(data.y);
    }

    const updateSizeState = (event, data) => {
        setW(data.size.width)
        setH(data.size.height)
    }

    useEffect(() => {
        {/* 
            total space occupied = (x + width)
            remain = (total space occupied) - viewport
            max range without going out = (width + remain)
        */}

        const update = () => {
            setMW(calcMaxW())
            setMH(calcMaxH())
        }

        update()

    }, [x, y, curW, curH])

    useEffect(() => {
        if (!clickableRef.current || !props.active) return;

        const clickable = clickableRef.current;

        const onMouseDown = (e) => {
            setIndex(100 + props.defaultZ);
        }

        const onOutsideDown = (e) => {
            if (clickable && !clickable.contains(e.target) && index != 0) {
                console.log("outside of ", props.id);
                setIndex(props.defaultZ);
            }
        }

        clickable.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mousedown', onOutsideDown);

        const cleanup = () => {
            clickable.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mousedown', onOutsideDown);
        }
        
        return cleanup;

    }, [index])

    function lewindow() {
        return (
            <Draggable
                handle="#header"
                defaultPosition={{x, y}}
                bounds="parent"
                onStop={updatePositionState}
            >
                {/* container */}
                <ResizableBox 
                    height={props.defaultHeight} 
                    width={props.defaultWidth} 
                    resizeHandles={['se']}
                    minConstraints={props.defaultConstraint ? props.defaultConstraint : [300, 195]}
                    maxConstraints={props.defaultConstraint ? props.defaultConstraint : [maxW, maxH]}
                    style={{zIndex: index}} 
                    onResizeStop={updateSizeState}
                >
                    <div className={`${styles.body} absolute flex flex-col fixed h-[100%] w-[100%] border rounded p-1.5 backdrop-blur-xl rounded-md`} 
                        ref={clickableRef}
                    >
                        {/* container header */}
                        <div id="header" className="flex flex-row justify-between">
                            {props.name ? (<p className={styles.text}>{props.name}</p>) : <p className={styles.text}>Untitled - Notepad</p>}
                            {/* control grouping */}
                            <div className={`${styles.controls} flex border border-t-0 -mt-1.5 rounded-b-[5px] mb-3`}>
                                <button className={`${styles.button} border-r p-1`}>
                                    <Image src="/minimize.png" width="10" height="10" />
                                </button>
                                <button className={`${styles.button} border-r p-1`}>
                                    <Image src="/maximize.png" width="11" height="10" />
                                </button>
                                <button className="px-2.5 hover:bg-red-400" onClick={() => {props.isActive(false)}}>
                                    <Image src="/close.png" width="10" height="10" />
                                </button>
                            </div>
                        </div>
                        {/* contents of container */}
                        {props.children}
                    </div>
                </ResizableBox>
            </Draggable>
        )
    }

    return (
        lewindow()
    )
}