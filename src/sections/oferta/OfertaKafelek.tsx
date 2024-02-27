import {AnimatePresence, LayoutGroup, motion, useAnimation} from "framer-motion";
import {useState} from "react";
import {hidden} from "next/dist/lib/picocolors";
import Image from "next/image";
import Link from "next/link";
import ButtonAnimation from "@/components/Animations/ButtonAnimation";

export default function OfertaKafelek({obiekt}: { obiekt: any }) {

    const parentVariants = {visible: {transition: {delayChildren: 0.15, staggerChildren: 0.4}}, hidden: {}};
    const itemVariants = {
        visible: {opacity: 1, scale: 1, transition: {duration: 0.4, delay: 0.4, type: 'spring'}},
        hidden: {opacity: 0, scale: 0}
    };

    return (
        <motion.div variants={parentVariants} initial={'hidden'} whileInView={'visible'} viewport={{once: true}}
                    className={'border-main border-b-4 flex flex-col basis-[25rem] items-center gap-6 p-5 shadow-2xl'}>
            {/*<Image className={'w-full aspect-square'} src={obiekt.urlImg} alt={'Uslugi elektryk'} width={500}*/}
            {/*       height={500}/>*/}

            <img className={'w-full aspect-square'} src={obiekt.urlImg} alt={obiekt.topic}/>
            <motion.h3 variants={itemVariants} initial={'hidden'} whileInView={'visible'} viewport={{once: true}}
                       className={'text-4xl text-main underline underline-offset-8 decoration-4 decoration-main text-center'}>{obiekt.topic}</motion.h3>
            <motion.p variants={itemVariants} initial={'hidden'} whileInView={'visible'} viewport={{once: true}}
                      className={'text-neutral-700 text-lg text-center'}>
                {obiekt.opis}
            </motion.p>
            <ButtonAnimation>

                <motion.button variants={itemVariants} initial={'hidden'} whileInView={'visible'}
                               viewport={{once: true}}
                               className={'border-2 border-main py-2 px-10 text-xl text-main rounded-full font-bold '}>
                    <Link className={'w-full h-full'} href={obiekt.href}>Więcej</Link>
                </motion.button>
            </ButtonAnimation>

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