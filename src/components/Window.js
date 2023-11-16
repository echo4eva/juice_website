import styles from '../styles/window.module.css';
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';

export default function Window(props) {

    const [active, isActive] = useState(true);
    const [index, setIndex] = useState(props.defaultZ);
    const clickableRef = useRef(null);

    useEffect(() => {
        if (!clickableRef.current || !active) return;

        const clickable = clickableRef.current;

        const onMouseDown = (e) => {
            setIndex(100);
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

    function window() {

        return (
            <Draggable
                handle="#header"
                defaultPosition={{x: props.defaultX, y: props.defaultY}}
                bounds="parent"
            >
                {/* container */}
                <ResizableBox 
                    height={200} 
                    width={300} 
                    resizeHandles={['se']}
                    minConstraints={[300, 195]}
                    maxConstraints={[Infinity, Infinity]}
                    style={{ zIndex: index}}

                >
                    <div className={`${styles.body} absolute flex flex-col fixed h-[100%] w-[100%] border rounded p-1.5 backdrop-blur-xl rounded-md`} 
                        ref={clickableRef}
                    >
                        {/* container header */}
                        <div id="header" className="flex flex-row justify-between">
                            <p className={styles.text}> untitled - notepad</p>
                            {/* control grouping */}
                            <div className={`${styles.controls} flex border border-t-0 -mt-1.5 rounded-b-[5px] mb-3`}>
                                <button className={`${styles.button} border-r p-1`}>
                                    <Image src="/minimize.png" width="10" height="10" />
                                </button>
                                <button className={`${styles.button} border-r p-1`}>
                                    <Image src="/maximize.png" width="11" height="10" />
                                </button>
                                <button className="p-1 hover:bg-red-400" onClick={() => {isActive(false)}}>
                                    <Image src="/close.png" width="10" height="10" />
                                </button>
                            </div>
                        </div>
                        {/* contents of container */}
                        <div className="flex flex-col bg-white w-[100%] h-[100%] p-1 overflow-auto">
                            {props.content?.map((line) =>
                                <p key={line}>{line}</p>
                            )}
                        </div>
                    </div>
                </ResizableBox>
            </Draggable>
        )
    }

    if (active) {
        return (window())
    } else {
        return null;
    }
}