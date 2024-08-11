import React from 'react'
import footerStyles from './styles/footer.module.scss'
import { Element } from 'react-scroll';
import { motion } from 'framer-motion'
import { BIG_TITLE, GITHUB, GMAIL, LINKEDIN } from '../common/constants';
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
    //----------------------------------
    const [hasAnimated, setHasAnimated] = React.useState(false);

    const titleFooter = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.3,
                duration: custom * 0.3
            }
        }),

    }
    const handleAnimationComplete = () => {
        setHasAnimated(true);
    };
    //----------------------------------



    return (
        <motion.div
            initial='hidden'
            animate={hasAnimated ? 'visible' : undefined}
            whileInView={!hasAnimated ? 'visible' : undefined}
            onAnimationComplete={handleAnimationComplete}
            className={footerStyles.footer}>
            <div className={footerStyles.container}>
                <Element name="contacts" className={footerStyles.heading}>
                    <motion.h2 custom={1} duration={1} variants={titleFooter} className={footerStyles.bigText}>{BIG_TITLE}</motion.h2>
                </Element>
                <div className={footerStyles.links}>

                </div>
                <motion.div custom={1} duration={1} variants={titleFooter} className={footerStyles.mail}>
                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=alexandersam.dev@gmail.com"
                        target='blank' className={footerStyles.gmail}>{GMAIL}</a>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Footer