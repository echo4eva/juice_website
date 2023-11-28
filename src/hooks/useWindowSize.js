import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [winSize, setWin] = useState({
        width: 0,
        height: 0
    })

    useEffect(() => {

        const handleResize = () => {
            setWin({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize)

        handleResize();

        const cleanup = () => {
            window.removeEventListener('resize', handleResize)
        }

        return cleanup
    
    }, [])

    return winSize;
};

export default useWindowSize;
