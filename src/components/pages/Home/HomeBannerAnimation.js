import { TypeAnimation } from 'react-type-animation';

const HomeBannerAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Tours.',
                1000,
                'Treks.',
                1000,
                'Adventures.',
                1000
            ]}
            wrapper="span"
            speed={50}
            className="text-header"
            repeat={Infinity}
        />
    );
};

export default HomeBannerAnimation;