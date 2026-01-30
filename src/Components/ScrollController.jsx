import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Wait for DOM to paint (important for sections)
        requestAnimationFrame(() => {
            if (hash) {
                const el = document.querySelector(hash);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }
        });
    }, [pathname, hash]);

    return null;
}

export default ScrollToHash;
