'use client'

import Link from "next/link";
import Image from "next/image";
import SubMenu from "@/components/header/SubMenu";
import {useEffect, useState} from "react";
import useWindowWith from "@/components/useWindowWith";
import {AnimatePresence, motion, useAnimation} from "framer-motion";

export default function HeaderNav() {
    const [open, setOpen] = useState(false);
    const bigScreen = useWindowWith(768);
    const controlAnimate = useAnimation();
    const parentVariants = {visible: {}, hidden: {}};
    const childVariants = {
        visible: {translateY: 0, opacity: 1, transition: {duration: 0.5}},
        hidden: {opacity: 0, translateY: '-100%', transition: {duration: 0.5}}
    };
    const buttonVarians = {visible: {opacity: 1, scale: 1}, hidden: {opacity: 0, scale: 0}}

    function handleClick() {
        setOpen(!open);
    }

    useEffect(() => {
        if (bigScreen) {
            setOpen(true);
        } else {
            setOpen(false);
        }

    }, [bigScreen]);

    return (
        <header className={"fixed top-0 z-10"}>
            <div className={'relative w-screen z-20'}>
                {!bigScreen && <div className={'w-14 h-14 absolute right-4 top-4 cursor-pointer'} onClick={handleClick}>
                    <AnimatePresence>
                        {open ?

                            <motion.svg variants={buttonVarians} initial={'hidden'} whileInView={'visible'}
                                        exit={'hidden'}
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor" className="w-14 h-14 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                            </motion.svg>
                            :

                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-14 h-14 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>

                        }
                    </AnimatePresence>
                </div>}

            </div>
            <AnimatePresence>
                {open &&
                    <motion.div variants={parentVariants} initial={'hidden'} whileInView={'visible'} exit={'hidden'}>
                        <motion.nav variants={childVariants}
                                    className={"md:absolute bg-main w-screen h-screen md:h-[5rem] flex md:flex-row flex-col items-center md:justify-between justify-center px-7 py-3"}>
                            <div className={"md:flex md:static absolute left-5 top-5 items-center md:h-full h-auto"}>
                                <div className={"w-[5rem] h-full flex"}>
                                    <Image src={'/logoBez.png'} alt={'Logo HomeHero'}
                                           className={"h-full w-full object-contain"}
                                           width={200} height={200}></Image>
                                </div>
                            </div>
                            <div
                                className={"flex md:flex-row flex-col text-xl font-semibold gap-7 text-white items-center"}>
                                <Link className={''} href={'/'}>Strona Główna</Link>
                                <Link className={''} href={'/#about_us'}>O nas</Link>

                                <SubMenu></SubMenu>

                                <Link className={''} href={'/#opinions'}>Opinie</Link>
                                <Link className={'px-3 py-2 bg-main text-white rounded-md'} href={'#contact_us'}>Kontakt</Link>
                            </div>
                        </motion.nav>
                    </motion.div>
                }

            </AnimatePresence>


        </header>
    );
}