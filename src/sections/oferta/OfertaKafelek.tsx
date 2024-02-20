import {AnimatePresence, LayoutGroup, motion, useAnimation} from "framer-motion";
import {useState} from "react";
import {hidden} from "next/dist/lib/picocolors";
import Image from "next/image";

export default function OfertaKafelek({topic, urlImg}: { topic: string, urlImg: string }) {

    const parentVariants = {visible: {transition: {delayChildren: 0.15, staggerChildren: 0.4}}, hidden: {}};
    const itemVariants = {
        visible: {opacity: 1, scale: 1, transition: {duration: 0.4, delay: 0.4, type: 'spring'}},
        hidden: {opacity: 0, scale: 0}
    };

    return (
        <motion.div variants={parentVariants} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} className={'border-main border-b-4 flex flex-col basis-[25rem] items-center gap-6 p-5 shadow-2xl'}>
            <Image className={'w-full aspect-square'} src={urlImg} alt={'Uslugi elektryk'} width={500}
                   height={500}/>
            <motion.h3 variants={itemVariants} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} className={'text-4xl text-main underline underline-offset-8 decoration-4 decoration-main'}>{topic}</motion.h3>
            <motion.p variants={itemVariants} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} className={'text-neutral-700 text-lg text-center'}>Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Maecenas tortor nunc, congue quis arcu at,
                malesuada elementum erat. Integer lacinia nisl vel libero bibendum luctus. Aliquam eget venenatis purus.
                Pellentesque ac orci at leo convallis feugiat. Phasellus condimentum auctor orci. Vestibulum in purus
                egestas, tempor leo et, rhoncus nunc.
            </motion.p>
            <motion.button variants={itemVariants} initial={'hidden'} whileInView={'visible'} viewport={{once: true}}
                           className={'border-2 border-main py-2 px-10 text-xl text-main rounded-full font-bold'}>Więcej
            </motion.button>
        </motion.div>
    );
}

// <motion.div layout
//             variants={containerVariants}
//             initial='hidden'
//             animate={control}
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//             className={"basis-[20rem] flex flex-col h-[30rem] text-text shadow-2xl bg-[#FFE5DD]"}>
//     <motion.div layout className={"bg-gray-600 h-[80%]"}>
//         z
//     </motion.div>
//     <motion.div layout className={"p-4 flex flex-col gap-5"}>
//         <h2 className={"font-ProtestRevolution text-3xl text-center"}>Składanie mebli</h2>
//         <p className={"font-semibold text-base"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Pellentesque malesuada gravida eros.</p>
//
//         <AnimatePresence>
//             {inView && <motion.button variants={buttonVariants} exit={'hidden'} whileInView={'visible'}
//                                       initial={'hidden'}
//                                       className={"self-end bg-main py-3 px-8 text-white text-xl font-semibold rounded-md"}>Więcej
//             </motion.button>}
//         </AnimatePresence>
//     </motion.div>
//
// </motion.div>