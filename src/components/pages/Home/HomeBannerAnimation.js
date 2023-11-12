import { TypeAnimation } from 'react-type-animation';

const HomeBannerAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Tours.',
                1000,
<<<<<<< HEAD:src/components/pages/Home/HomeBannerAnimation.js
                'Road Trips.',
=======
                'Treks',
>>>>>>> bcb7f93874c9a9cf2d6eab61f3e0a88033fd11ec:src/components/layout/Banner/TypewriterAnimation.js
                1000,
                'Adventures',
                1000,
<<<<<<< HEAD:src/components/pages/Home/HomeBannerAnimation.js
                'Offbeat.',
                1000,
                'Experience.',
=======
                'Experiences',
>>>>>>> bcb7f93874c9a9cf2d6eab61f3e0a88033fd11ec:src/components/layout/Banner/TypewriterAnimation.js
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