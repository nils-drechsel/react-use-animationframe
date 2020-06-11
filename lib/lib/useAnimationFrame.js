"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
exports.useAnimationFrame = (callback, interval) => {
    const loopRef = react_1.useRef(null);
    const timerRef = react_1.useRef(null);
    const loop = (time) => {
        if (!timerRef.current) {
            timerRef.current = time;
        }
        const delta = time - timerRef.current;
        if (!interval || delta >= interval) {
            timerRef.current = time;
            callback(delta);
        }
        loopRef.current = requestAnimationFrame(loop);
    };
    react_1.useEffect(() => {
        loopRef.current = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(loopRef.current);
        };
        // eslint-disable-next-line
    }, []);
};
exports.default = exports.useAnimationFrame;
