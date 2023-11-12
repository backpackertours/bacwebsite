import { TypeAnimation } from 'react-type-animation';

const HomeBannerAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Tours.',
                1000,
                'Road Trips.',
                1000,
                'Adventures.',
                1000,
                'Offbeat.',
                1000,
                'Experience.',
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