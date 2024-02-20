import Star from "@/sections/opinions/Star";


export default function CardOpinion({urlImageFace, name, opinion}:
                                        { urlImageFace: string, name: string, opinion: string }) {

    return (
        <div id={'card_opinions'}
             className={"backdrop-blur-md bg-white/30 relative shrink-0 basis-[30rem] flex flex-col items-center p-7 rounded-2xl shadow-2xl hover:cursor-grab"}>
            <div className={"flex flex-col justify-center items-center space-y-5"}>
                <div className={'text-neutral-700 text-xl font-semibold'}>{name}</div>
                <div className={"flex"}>
                    <Star wielkosc={6} czyZolta={true}></Star>
                    <Star wielkosc={6} czyZolta={true}></Star>
                    <Star wielkosc={6} czyZolta={true}></Star>
                    <Star wielkosc={6} czyZolta={true}></Star>
                    <Star wielkosc={6} czyZolta={true}></Star>
                </div>
                <div className={"text-center flex-col flex-grow h-full items-center justify-center"}>
                    <p className={'text-neutral-600 text-lg'}>{opinion}</p>
                </div>
            </div>


            <div className={"px-16 w-full top-5 left-0 absolute flex justify-between"}>
                <div className={"w-20 h-20 rounded-full bg-main overflow-hidden"}>
                    <img src={urlImageFace} className={"w-full h-full"}/>
                </div>
            </div>
        </div>
    );
}