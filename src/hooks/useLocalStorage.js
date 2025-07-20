import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // This code runs only in the browser
        const item = window.localStorage.getItem(key);
        setValue(item ? JSON.parse(item) : initialValue);
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value, isInitialized]);

    return [value, setValue];
};

export default useLocalStorage;
