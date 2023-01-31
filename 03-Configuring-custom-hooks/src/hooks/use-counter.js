import { useState, useEffect } from 'react';

// 'use' in the staring tells its a custome hook, custome hooks are function
const useCounter = (forward = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        if(forward) {
            setCounter((prevCounter) => prevCounter + 1);
        }
        else {
            setCounter((prevCounter) => prevCounter - 1);
        }
        }, 1000);

        return () => clearInterval(interval);
    }, [forward]);
    
    // can be used in other components to print, we can return array/obj/num/string etc
    return counter;
};


export default useCounter;