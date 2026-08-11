import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace("#", ""));

            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 50);
            }
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [pathname, hash]);

    return null;
}

export default ScrollToHash;