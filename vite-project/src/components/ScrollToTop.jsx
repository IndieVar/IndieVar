'use client'
import {FaArrowUp} from "react-icons/fa";
import {useAnimationControls, useScroll, motion} from "framer-motion";
import {useEffect} from "react";


const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

export default function ScrollToTop() {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();
    const isBrowser = () => typeof window !== 'undefined';

    const scrollToTop = () => {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.5) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
        <>
            <motion.button
                className={"fixed bottom-5 right-5 p-2.5 border border-gray-500 hover:border-gray-900 rounded-full " +
                    "cursor-pointer text-gray-500 hover:text-black hover:bg-gray-100"}
                variants={ScrollToTopContainerVariants}
                initial="hide"
                animate={controls}
                onClick={scrollToTop}
                title="Scroll to top"
            >
                <FaArrowUp className={"w-4 h-4"}/>
            </motion.button>
        </>
    )
}