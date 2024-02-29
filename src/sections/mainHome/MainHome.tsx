import Image from "next/image";
import {TypeAnimation} from "react-type-animation";
import useWindowWith from "@/components/useWindowWith";
import Link from "next/link";
import ButtonAnimation from "@/components/Animations/ButtonAnimation";

export default function MainHome() {

    const isBigScreen = useWindowWith(768);

    return (
        <div id={'main_home'} className={'main min-h-[40rem]'}>
            <div className={"relative flex justify-center items-center h-full flex-col text-white md:pt-56 pt-32"}>
                <header className={"text-center md:text-8xl text-5xl tracking-wider"}>
                    <div className={'lg:h-[15rem] h-[9rem] font-semibold'}>
                        <h1>
                            <TypeAnimation className={'font-Roboto'} cursor={false} style={{whiteSpace: 'pre-line'}}
                                           sequence={[
                                               // Same substring at the start will only be typed once, initially
                                               `Złota Rączka\nWarszawa\nHome Hero`,
                                           ]}
                                           speed={1}
                            />
                        </h1>
                    </div>

                    {/*<h2 className={"font-Roboto font-bold"}>Złota Rączka</h2>*/}
                </header>
                <section className={"md:w-[50%] w-[90%] md:mt-16 lg:pb-24 pb-40 flex flex-col justify-center gap-12"}>
                    <p className={"text-2xl text-center leading-8"}>Witaj w świecie doskonałości remontowej z Home Hero
                        Złota Rączka! Nasza firma to nie tylko zespół ekspertów, to także gwarancja, że Twoje projekty
                        remontowe zostaną zrealizowane z najwyższą precyzją i pasją.
                        Złota Rączka to więcej niż tylko nazwa - to synonim wyjątkowej jakości usług. </p>

                    <div className={"lg:absolute h-[13rem] aspect-square top-[8rem] left-20 -rotate-12"}>
                        <img className={"w-full h-full object-contain"} src={'/topWykonawca.png'}
                             alt={'Top Wykonawca'}></img>
                    </div>

                    <div className={"flex justify-around text-3xl font-semibold"}>
                        <ButtonAnimation>
                            <Link className={"shadow-2xl bg-white w-[10rem] px-7 py-2 rounded-md text-main"}
                                  href={'#services'}>Usługi</Link>
                        </ButtonAnimation>
                        <ButtonAnimation>
                            <Link className={"shadow-2xl border-white w-[10rem] border-2 px-7 py-2 rounded-md"}
                                  href={'#contact_us'}>Kontakt</Link>
                        </ButtonAnimation>

                    </div>
                </section>
            </div>
        </div>
    );
}