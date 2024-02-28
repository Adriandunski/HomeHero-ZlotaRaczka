'use client'

import Image from "next/image";
import {animate, motion} from "framer-motion";
import Topic from "@/components/topic/Topic";

export default function AboutUs() {
    return (
        <section id={'about_us'} className={"pt-[7rem] px-7"}>
            <div className={"flex lg:flex-row flex-col-reverse"}>
                <div className={"basis-1/2 flex justify-center items-center md:mt-0 mt-10"}>

                        <div className={'bg-main w-[60%] aspect-square animate-blob'}>

                        </div>



                </div>
                <div className={"basis-1/2"}>
                <div className={'flex justify-center overflow-hidden'}>
                        <Topic isLeft={false}>O nas</Topic>
                    </div>

                    <div className={"mt-10 flex h-full items-center text-lg leading-8 flex-col gap-5"}>
                        <div>
                            <p className={''}>Nasz zespół doświadczonych rzemieślników to mistrzowie w każdym detalu. Od
                                malowania ścian po montaż mebli, oferujemy kompleksowe podejście do każdego zadania,
                                zapewniając, że Twój dom będzie wyglądał tak, jak zawsze marzyłeś.
                                Jeśli Twoje ściany krzyczą o odświeżenie, jesteśmy tutaj, by im przywrócić nowe życie.
                                Nasze usługi malowania ścian to nie tylko pokrywanie farbą, to prawdziwa sztuka
                                przemiany przestrzeni. Dzięki naszej wiedzy o kolorach i technikach, każde pomieszczenie
                                stanie się oazą spokoju i harmonii.</p>
                        </div>

                        <p className={''}>Potrzebujesz pomocy przy montażu mebli? Złota Rączka to Twoja odpowiedź.
                            Niezależnie od tego, czy są to proste regały czy skomplikowane systemy szaf, nasz zespół
                            zadba o to, aby każdy element został umiejscowiony idealnie, dodając elegancji i
                            funkcjonalności Twojemu wnętrzu.
                            Złota Rączka to więcej niż firma remontowa - to partner, na którego możesz liczyć. Z nami
                            możesz być pewien, że Twoje marzenia o idealnym domu staną się rzeczywistością.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}