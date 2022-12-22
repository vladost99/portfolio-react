import { useState, useEffect } from 'react';


const useMediaQuery = (query) => {
    const [matches, setMetches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        if(media.matches !== matches) {
            setMetches(media.matches);
        }

        const listener = () => setMetches(media.matches);
        window.addEventListener('resize', listener);

        return () => window.removeEventListener('resize', listener);

    }, [matches, query]);

    return matches;
}

export default useMediaQuery;