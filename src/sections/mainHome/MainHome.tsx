import Image from "next/image";
import {TypeAnimation} from "react-type-animation";
import useWindowWith from "@/components/useWindowWith";

export default function MainHome() {

    const isBigScreen = useWindowWith(768);

    return (
        <div id={'main_home'} className={'main min-h-[40rem]'}>
            <div className={"relative flex justify-center items-center h-full flex-col text-white md:pt-56 pt-32"}>
                <header className={"text-center md:text-8xl text-5xl tracking-wider"}>
                    <div className={'lg:h-[12rem] h-[7rem] font-semibold'}>
                    <TypeAnimation className={'font-Roboto'} cursor={false} style={{ whiteSpace: 'pre-line'}}
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            `HOME HERO\nZłota Rączka`,
                        ]}
                        speed={1}
                    />
                    </div>

                    {/*<h2 className={"font-Roboto font-bold"}>Złota Rączka</h2>*/}
                </header>
                <section className={"md:w-[50%] w-[90%] md:mt-16 lg:pb-24 pb-40 flex flex-col justify-center gap-12"}>
                    <p className={"text-xl text-center leading-8"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac turpis quis arcu tempus consequat
                        id vitae purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

                    <div className={"lg:absolute h-[13rem] aspect-square top-[8rem] left-20 -rotate-12"}>
                        <Image className={"w-full h-full object-contain"} src={'/topWykonawca.png'}
                               alt={'Top Wykonawca'} width={150} height={150}></Image>
                    </div>

                    <div className={"flex justify-around text-3xl font-semibold"}>
                        <button className={"shadow-2xl bg-white w-[10rem] px-7 py-2 rounded-md text-main"}>
                            Usługi
                        </button>
                        <button className={"shadow-2xl border-white w-[10rem] border-2 px-7 py-2 rounded-md"}>
                            Kontakt
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}