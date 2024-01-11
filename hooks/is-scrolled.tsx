import { useState, useEffect } from "react";

export const useIsScrolled = () => {
    const [isTop, setIsTop] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
        const isTop = window.scrollY > 10;
        setIsTop(isTop);
        };
    
        document.addEventListener("scroll", handleScroll);
        return () => {
        document.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return { isTop };
    }
