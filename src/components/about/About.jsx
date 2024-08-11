import React from 'react'
import aboutStyles from './styles/about.module.scss'
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import inarmy from '../image/Freelance.webp'
import in_freelance from '../image/code2.webp'

const About = ({ theme }) => {
    //------------------------------------

    const [hasAnimated, setHasAnimated] = React.useState(false);

    const about = {
        hidden: {
            opacity: 0,
        },
        visible: custom => ({
            opacity: 1,
            transition: {
                delay: custom * 0.3,
                duration: custom * 0.3,
            },
        }),
    };

    const handleAnimationComplete = () => {
        setHasAnimated(true);
    };

    const aboutStyle = theme === 'light' ? {
        background: 'rgb(48, 46, 46)',
        color: '#d9d9d9'

    } : {
        background: '#d9d9d9',
        color: 'rgb(48, 46, 46)'
    };


    //------------------------------------

    return (
        <motion.div
            initial='hidden'
            animate={hasAnimated ? 'visible' : 'hidden'}
            whileInView={!hasAnimated ? 'visible' : undefined}
            onAnimationComplete={handleAnimationComplete}
            custom={1}
            variants={about}
            className={aboutStyles.aboutWrapper}
        >
            <Element name='about' className={aboutStyles.about} style={aboutStyle}>
                <div className={aboutStyles.blockFirst}>
                    <p className={aboutStyles.textFirst}>
                        Hi! I am a Full Stack Developer specializing in building
                        web applications and websites using React.js.
                        I started learning web development in 2021 and quickly discovered my passion for it.

                    </p>
                    <div className={aboutStyles.imgFirst}>
                        <img src={inarmy} alt="inarmy" />
                    </div>
                </div>

                <div className={aboutStyles.blockSecond}>
                    <div className={aboutStyles.imgSecond}>
                        <img src={in_freelance} alt="in_freelance" />
                    </div>
                    <p className={aboutStyles.secondText}>
                        I've three years of freelance experience.
                        I've collaborated with friends and freelancers globally, working on projects using Figma and GitHub.
                        What drives me is a constant pursuit of self-improvement and growth.
                    </p>
                </div>

            </Element>
        </motion.div>
    );
};

export default About;