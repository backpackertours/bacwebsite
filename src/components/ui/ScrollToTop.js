import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    console.log(location);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    return (
        <>
        </>
    )
}

export default ScrollToTop;