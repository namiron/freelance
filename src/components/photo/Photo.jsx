import React from 'react';
import photoStyles from './styles/photo.module.scss';
import myFace from '../image/myface.jpg';
import { motion } from 'framer-motion';
import { HELLO_WORLD, LOCATION, MY_NAME } from '../common/constants';

const Photo = () => {

    //-----------------------------
    const [hasAnimated, setHasAnimated] = React.useState(false);
    const photoAnimation = {
        hidden: { opacity: 0 },
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
    //-----------------------------

    return (
        <motion.div
            initial='hidden'
            animate={hasAnimated ? 'visible' : undefined}
            whileInView={!hasAnimated ? 'visible' : undefined}
            onAnimationComplete={handleAnimationComplete}
            custom={1}
            delay={3}
            className={photoStyles.photo}
        >
            <div className={photoStyles.heading}>
                <h3 className={photoStyles.helloWorld}>{HELLO_WORLD}</h3>
            </div>

            <div className={photoStyles.content}>
                <motion.article
                    custom={3}
                    variants={photoAnimation}
                    className={photoStyles.image}>
                    <img src={myFace} alt="my_face" />
                </motion.article>
                <motion.h2
                    custom={3}
                    delay={3}
                    variants={photoAnimation}
                    className={photoStyles.name}
                >
                    {MY_NAME}
                </motion.h2>
            </div>
        </motion.div>
    );
};

export default Photo;
