import { TypeAnimation } from 'react-type-animation';

const TypewriterAnimation = () => {

    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Tours.',
                1000,
                'Treks.',
                1000,
                'Adventures.',
                1000,
                'Experiences.',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '3em', display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};

export default TypewriterAnimation;