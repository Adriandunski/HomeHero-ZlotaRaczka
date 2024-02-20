import Topic from "@/components/topic/Topic";
import Image from "next/image";
import {motion} from "framer-motion";
import FromBottomView from "@/components/Animations/FromBottomView";
import FromSideView from "@/components/Animations/FromSideView";

export default function ServiceSectionTemplate({urlImage, paragrafs, children}: {
    urlImage: string,
    paragrafs: string[],
    children: string
}) {


    return (
        <section className={'w-full'}>
            <div className={"pt-28 h-full"}>
                <div className={"flex relative flex-col h-full"}>
                    <div
                        className={"flex lg:flex-row flex-col h-full pb-5 justify-center items-center gap-x-5 px-7 gap-y-5"}>
                        <div className={"basis-1/2 flex lg:h-auto h-[18rem] justify-center items-center"}>
                            <div
                                className={"w-[80%] aspect-square rounded-full border-2 border-[#7E7263] overflow-hidden"}>
                                <Image className={"h-full w-full object-cover"} src={urlImage} alt={children}
                                       width={500} height={500}/>
                            </div>

                        </div>
                        <div className={"basis-1/2 flex flex-col justify-center items-center"}>
                            <Topic isLeft={false}>{children}</Topic>

                                <div className={"border-2 border-[#7E7263] p-4 rounded-2xl"}>
                                    <FromBottomView>
                                        <p className={"text-center leading-6 font-bold lg:text-lg md:text-base"}>
                                            {paragrafs[0]}
                                        </p>

                                        <p className={"text-center leading-6 font-bold lg:text-lg mt-10 md:text-base"}>
                                            {paragrafs[1]}
                                        </p>
                                    </FromBottomView>
                                </div>
                                    <div></div>


                        </div>
                    </div>
                </div>
            </div>

            <div className={"lg:h-[10rem] h-[3rem]"}>

            </div>
        </section>);
}