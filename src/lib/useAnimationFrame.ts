import { useEffect, useRef } from 'react';

export const useAnimationFrame = (callback: FrameRequestCallback, interval?: number | null) => {
    const loopRef = useRef(null as any);
    const timerRef = useRef(null as DOMHighResTimeStamp | null);

    const loop = (time: number) => {
        if (!timerRef.current) {
            timerRef.current = time;
        }

        const delta = time - timerRef.current!;
        if (!interval || delta >= interval) {
            timerRef.current = time;
            callback(delta)
        }

        loopRef.current = requestAnimationFrame(loop) as any;
    }

    useEffect(() => {
        loopRef.current = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(loopRef.current!);
        }
        // eslint-disable-next-line
    }, []);
}


export default useAnimationFrame;