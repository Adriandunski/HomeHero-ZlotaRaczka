import OfertaKafelek from "@/sections/oferta/OfertaKafelek";
import Topic from "@/components/topic/Topic";

export default function Oferta() {
    return (
        <section id={'services'} className={"mt-[7rem] relative py-10"}>
            <div className={'flex'}>
                <div className={'basis-1/2 flex justify-center'}>
                    <Topic isLeft={true}>Usługi</Topic>
                </div>
            </div>
            <div className={"mt-10 flex flex-wrap justify-center gap-5 items-center"}>
                <OfertaKafelek topic={'Hydrualiczne'} urlImg={'/services/plumber.png'}></OfertaKafelek>
                <OfertaKafelek topic={'Elektryczne'} urlImg={'/services/elektryk.png'}></OfertaKafelek>
                <OfertaKafelek topic={'Budowlane'} urlImg={'/services/budowa.png'}></OfertaKafelek>
                <OfertaKafelek topic={'Ogrodnicze'} urlImg={'/services/ogrod.png'}></OfertaKafelek>
                <OfertaKafelek topic={'Montaż Mebli'} urlImg={'/services/meble.png'}></OfertaKafelek>
                <OfertaKafelek topic={'Malowanie'} urlImg={'/services/malowanie.png'}></OfertaKafelek>
            </div>
        </section>
    );
}