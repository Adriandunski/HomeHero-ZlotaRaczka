import {motion, useAnimation, useInView} from "framer-motion";
import {hidden} from "next/dist/lib/picocolors";
import {useEffect, useRef} from "react";

export default function Topic({isLeft, children} : {isLeft: boolean, children: string}) {

    const parentVariants = {visible: {transition: {delayChildren: 0.5, staggerChildren: 0.4}}, hidden: {}};
    const childVariants = {visible: {opacity: 1, x: 0, transition: {type: 'tween'}}, hidden:  {opacity: 0, x: isLeft ? -200 : 200}};


    return (
        <motion.div variants={parentVariants} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} className={'relative mb-10'}>
            {!isLeft && <motion.div variants={childVariants}
                                   className={' top-0 -left-[1rem] bg-main absolute h-full w-[0.7rem] rounded-md'}></motion.div>
            }

            <motion.header variants={childVariants} className={'text-5xl text-neutral-700'}>
                <h3 className={'font-Roboto'}>{children}</h3>
            </motion.header>

            {isLeft && <motion.div variants={childVariants}
                                  className={'top-0 -left-[1rem] bg-main absolute h-full w-[0.7rem] rounded-md'}></motion.div>
            }
        </motion.div>
    );
}