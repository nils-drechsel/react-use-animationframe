# react-use-animationframe custom hook
React hook for a callback that is called within an animation frame window. The callback is called either with every animation frame request (about 60 times per second), or approximately with a certain frequency adjustable via parameter. The frequency works in multitudes of animation frame intervals and cannot be faster than the animation frame limit.

## Install

```bash
npm install react-use-animationframe
```

## Usage

```js
import React from 'react';
import { useAnimationFrame } from "react-use-animationframe";

export const Component: FunctionComponent = () => {

    useAnimationFrame((time) => {
        console.log("I'm called approximately every 16ms, but it actually was", time, "ms");
    });

    useAnimationFrame((time) => {
        console.log("I'm called approximately every second, but it actually was", time, "ms");
    }, 1000);
}
```


## License

MIT

