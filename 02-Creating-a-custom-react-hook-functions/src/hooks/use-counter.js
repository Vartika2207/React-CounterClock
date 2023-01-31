import { useState, useEffect } from 'react';

// 'use' in the staring tells its a custome hook, custome hooks are function
const useCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    // can be used in other components to print, we can return array/obj/num/string etc
    return counter;
};


export default useCounter;