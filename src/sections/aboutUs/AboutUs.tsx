'use client'

import Image from "next/image";
import {animate, motion} from "framer-motion";
import Topic from "@/components/topic/Topic";

export default function AboutUs() {
    return (
        <section id={'about_us'} className={"pt-[7rem] px-7"}>
            <div className={"flex lg:flex-row flex-col-reverse"}>
                <div className={"basis-1/2 flex justify-center items-center"}>
                    <div className={"flex overflow-hidden"}>
                        <motion.div animate={{
                            rotate: 360,
                            transition: {duration: 20, repeat: Infinity, ease: 'linear'}
                        }}
                                    className={"h-[30rem] aspect-square flex items-center"}>
                            <Image className={"object-contain w-full h-full"} src={"/blob.png"} alt={"Blob"} width={1000} height={1000}></Image>
                        </motion.div>
                    </div>

                </div>
                <div className={"basis-1/2"}>
                    <div className={'flex justify-center'}>
                            <Topic isLeft={false}>O nas</Topic>
                    </div>

                    <div className={"mt-10 flex h-full items-center text-lg leading-8 flex-col gap-5"}>
                        <div>
                        <p className={''}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque malesuada gravida eros,
                            accumsan dapibus ex tincidunt et. Proin a est odio. Suspendisse posuere dolor ex. Etiam
                            purus orci, posuere vitae quam vel, volutpat congue quam. Donec convallis porttitor
                            fringilla. Nulla pretium sem id placerat placerat. Proin a est odio. Suspendisse posuere
                            dolor ex. Etiam
                            purus orci, posuere vitae quam vel, volutpat congue quam. Donec convallis porttitor
                            fringilla. Nulla pretium sem id placerat placerat.</p>
                        </div>

                        <p className={''}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque malesuada gravida eros,
                            accumsan dapibus ex tincidunt et. Proin a est odio. Suspendisse posuere dolor ex. Etiam
                            purus orci, posuere vitae quam vel, volutpat congue quam. Donec convallis porttitor
                            fringilla. Nulla pretium sem id placerat placerat.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}