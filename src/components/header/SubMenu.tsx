'use client'

import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import autoprefixer from "autoprefixer";
import LinkSubMenu from "@/components/header/LinkSubMenu";

export default function SubMenu({action} : {action: any}) {
    const [open, setOpen] = useState(false);

    function mouseEnter() {
        setOpen(true);
    }

    function mouseLeave() {
        setOpen(false);
    }

    const parentVariants = {visible: {opacity: 1, height: 'auto', transition: {staggerChildren: 0.15}}, hidden: {opacity: 0, height: '0px' , transition: {duration: 0.2, when: 'afterChildren', staggerChildren: 0.05, staggerDirection: -1}}};
    const childVariants = {visible: {opacity: 1, x: 0}, hidden: {opacity: 0, x: -200}};

    return (
        <div className={'flex flex-col relative py-2'} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <div className={'flex justify-center'}>
                <Link className={''} href={""}>Usługi</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth="2.5"
                     stroke="currentColor" className="h-5 w-5 self-center">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                </svg>
            </div>
            <AnimatePresence>
                {open &&
                    <motion.div
                        initial={'hidden'}
                        whileInView={'visible'}
                        variants={parentVariants}
                        exit={'hidden'}
                        className={'bg-main overflow-hidden md:text-left text-center md:absolute gap-4 top-[2.5rem] px-5 py-3 -left-3 rounded-md flex flex-col w-[15rem]'}>
                        <motion.div onClick={action} variants={childVariants}><LinkSubMenu url={'/zlotaRaczka'}>Złota
                            Rączka</LinkSubMenu></motion.div>
                        <motion.div onClick={action} variants={childVariants}><LinkSubMenu
                            url={'/malowanie'}>Malowanie</LinkSubMenu></motion.div>
                        <motion.div onClick={action} variants={childVariants}><LinkSubMenu url={'/montazMebli'}>Montaż
                            Mebli</LinkSubMenu></motion.div>
                        <motion.div onClick={action} variants={childVariants}><LinkSubMenu url={'/uslugiElektryczne'}>Usługi
                            Elektryczne</LinkSubMenu></motion.div>

                        <motion.div onClick={action} variants={childVariants}><LinkSubMenu url={'/uslugiHydrauliczne'}>Usługi
                            Hydrauliczne</LinkSubMenu></motion.div>

                        <motion.div onClick={action} variants={childVariants}><LinkSubMenu url={'/kladzeniePosadzek'}>Kładzenie posadzek</LinkSubMenu></motion.div>

                        <motion.div onClick={action} variants={childVariants}><LinkSubMenu url={'/naprawaArmaturySanitarnej'}>Armatura sanitarna</LinkSubMenu></motion.div>


                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}