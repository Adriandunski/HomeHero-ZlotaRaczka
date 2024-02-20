import CardOpinion from "@/sections/opinions/CardOpinion";
import {motion, useAnimation} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import Topic from "@/components/topic/Topic";
import Star from "@/sections/opinions/Star";
import SumaryOpinions from "@/sections/opinions/SumaryOpinions";

export default function Opinions() {
    const opinionsCarsd = opinions.map(op => {
        return <CardOpinion key={op.id} urlImageFace={op.urlImageFace} name={op.name} opinion={op.opinion}/>
    });

    const refComp = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    const controls = useAnimation();
    const variants = {visible: {opacity: 1, scale: 1, y: 0}, hidden: {opacity: 0, scale: 0, y: 20}}

    useEffect(() => {
        const withOfComp = refComp.current?.scrollWidth ?? 0
        const withOfWindows = window.innerWidth;

        const newWith = 0 - (withOfComp - withOfWindows) - 20;

        setWidth(newWith)
    }, []);

    const variantsCar = {stop: {}, start: {x: width, transition: {duration: 20}}};
    // start: {x: width, transition: {duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse'}}
    return (
        <section id={'opinions'} className={"overflow-hidden relative md:py-10 py-5"}>
            <div className={'flex flex-row-reverse'}>
                <div className={'basis-1/2 flex justify-center'}>
                    <Topic isLeft={false}>Opinie</Topic>
                </div>
            </div>
            <SumaryOpinions></SumaryOpinions>
            <motion.div ref={refComp} drag="x" variants={variantsCar} animate={{
                x: width,
                transition: {duration: 50, ease: 'linear', repeat: Infinity, repeatType: 'reverse'}
            }} dragConstraints={{left: width, right: 0}}
                        className={'flex p-5 space-x-3 mt-10 cursor-grab'}>
                {opinionsCarsd}
            </motion.div>
            <div className={"w-full flex justify-center items-center mt-3"}>
                <motion.button
                    variants={variants}
                    initial={"hidden"}
                    transition={{type: "spring", delay: 0.5}}
                    animate={controls}
                    className={"border-2 border-black rounded-2xl font-bold py-3 px-5 hover:text-[#FF8960] hover:cursor-pointer hover:border-[#FF8960] hover:bg-white"}>
                    <Link target="_blank"
                          href={"https://www.google.com/search?sca_esv=e51918ddf39b0c56&sxsrf=ACQVn0_D1FnJdjKtMFrY505aQHy5SO4gfw:1707329843951&q=barbershop-kuznia+czestochowa&uds=AMwkrPtlNfmIqxlzy6LzeiHOrfP7rY6EZKxt0T9O31LAxeMJQUJ_qiP_kZpfx-N5MiB6a2egERWVcwEzEZTtEH9qcc1lkQPENp3o08EwD1Z2WY3Fhozq3ExsMs4I87Hq2wWCbgTgNsvzaPIeVIgs2GWjAiydlJHZDQ&si=AKbGX_rcuucMgom2rba1cdwsvM2SVoIkP2btyqGMV4t0GuHIs4sGV_1tpuqR0YHG4Rzd9SeGc5NQ_Pi4DJK4HXk52YlAbPFeFMgAkFJMtyXuK4o_xV7PJH8%3D&sa=X&sqi=2&ved=2ahUKEwiyqvOm65mEAxVcQvEDHQOeCj8Q3PALegQIFBAE&biw=1317&bih=945&dpr=1"}>
                        Zobacz Wszystkie
                    </Link>
                </motion.button>
            </div>

        </section>
    );
}

const opinions = [
    {
        id: 0,
        urlImageFace: "/faces/w1.png",
        name: "Natalia Kowalska",
        opinion: "Serdecznie polecam Pana Łukasza, jest to super fachowiec, profesjonalista, widać, że zna się na tym co robi. Już kilkukrotnie zdarzyło mi się skorzystać z usług Pana Łukasza, do przeróżnych prac w domu. Zawsze znajdzie czas :) polecam!"
    },
    {
        id: 1,
        urlImageFace: "/faces/m1.png",
        name: "Dariusz Budziński",
        opinion: "Szybko, sprawniej i fachowo. Prace wykonane zgodnie ze sztuką budowlaną, świetny kontakt z p. Łukaszem, terminowo, po pracach wszystko posprzątane. Panie Łukaszu bardzo dziękuję i wszystkim poszukujących solidnego wykonawcę serdecznie polecam."
    },
    {
        id: 2,
        urlImageFace: "/faces/w2.png",
        name: "Ewelina Bordzoł",
        opinion: "Wszystko szybko, sprawnie, dobry kontakt. Pan Łukasz udzielił rad i pomógł dobrać rozwiązanie, które okazało się strzałem w dziesiątkę. Polecam serdecznie 👍"
    },
    {
        id: 3,
        urlImageFace: "/faces/w3.png",
        name: "Magdalena Sochanka",
        opinion: "Serdecznie polecam Pana Łukasza, bezproblemowy kontakt, sprawna usługa, wykonana bardzo rzetelnie :)"
    },
    {
        id: 4,
        urlImageFace: "/faces/w4.png",
        name: "Joanna Wróblewska",
        opinion: "Usługi, kontakt z Panem, elastyczność - REWELACJA! Pełen profesjonalizm, dobre podejście do klienta, elastyczność, wiedza. Polecam z czystą ręką usługi tego Pana!"
    },
    {
        id: 5,
        urlImageFace: "/faces/m2.png",
        name: "Paweł Bankowski",
        opinion: "Świetna robota. Pan Łukasz poprawiał mi silikon po spartolonej robocie glazurnika."
    },
    {
        id: 6,
        urlImageFace: "/faces/w5.png",
        name: "Alicja",
        opinion: "Bardzo profesjonalnie wykonana usługa. Serdecznie polecam."
    },
    {
        id: 7,
        urlImageFace: "/faces/m3.png",
        name: "Bartłomiej Czubak",
        opinion: "Polecam. Sprawnie i rzetelnie zrobiona praca. Dobry kontakt."
    },
    {
        id: 8,
        urlImageFace: "/faces/w6.png",
        name: "Agnieszka Pasterska",
        opinion: "Usługa wykonana bardzo profesjonalnie. Gorąco polecamy."
    },
    {
        id: 9,
        urlImageFace: "/faces/m4.png",
        name: "Jerzy Kolodziejski",
        opinion: "Pełen profesjonalizm, polecam!"
    },
]