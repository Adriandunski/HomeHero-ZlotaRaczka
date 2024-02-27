import OfertaKafelek from "@/sections/oferta/OfertaKafelek";
import Topic from "@/components/topic/Topic";

export default function Oferta() {

    const data = [
        {id: 0, topic: 'Złota Rączka', urlImg: '/services/zlotaRaczka.png', href: '/zlotaRaczka', opis: 'Złota Rączka to nie tylko nazwa - to symbol solidności i wysokiej jakości usług. Nasz zespół składa się z wykwalifikowanych specjalistów, którzy podejmują się wszelkich wyzwań z determinacją i starannością, aby zapewnić Ci satysfakcję i spokój ducha. Nasze usługi naprawcze obejmują szeroki zakres działań, od naprawy ścian, sufitów i podłóg po drobne poprawki i naprawy mebli.'},
        {id: 1, topic: 'Malowanie', urlImg: '/services/malowanie.png', href: '/malowanie', opis: 'Jesteśmy zespołem doświadczonych specjalistów, gotowych uczynić Twoje wnętrza wyjątkowymi. Dzięki naszej wiedzy i pasji do pracy, malowanie ścian staje się nie tylko koniecznością, ale również sztuką. Złota Rączka to nie tylko nazwa - to gwarancja najwyższej jakości usług. Nasz zespół nieustannie dąży do doskonałości, wykorzystując najnowsze techniki i trendy w dziedzinie malowania.'},
        {id: 2, topic: 'Montaż Mebli', urlImg: '/services/meble.png', href: '/montazMebli', opis: 'Złota Rączka to więcej niż zwykły wykonawca - to partner, który zadba o każdy etap montażu mebli, zapewniając nie tylko solidność, ale także estetykę. Nasz doświadczony zespół specjalistów posiada nie tylko umiejętności techniczne, ale również wrażliwość na detale, co przekłada się na perfekcyjne wykonanie każdego zlecenia.'},
        {id: 3, topic: 'Elektryczne', urlImg: '/services/elektryk.png', href: '/uslugiElektryczne', opis: 'Złota Rączka to synonim solidności i profesjonalizmu w branży. Nasz wyspecjalizowany zespół elektryków posiada nie tylko niezbędne umiejętności techniczne, ale także wrażliwość na bezpieczeństwo i jakość wykonania. Dzięki naszemu doświadczeniu i zaangażowaniu, możesz mieć pewność, że prace elektryczne zostaną wykonane z najwyższą starannością i zgodnie z obowiązującymi normami.'},
        {id: 4, topic: 'Hydrualiczne', urlImg: '/services/sanitary.png', href: '/uslugiHydrauliczne', opis: 'Złota Rączka to gwarancja najwyższej jakości usług. Nasz doświadczony zespół specjalistów jest wyposażony w najnowsze narzędzia i technologie, aby zapewnić Ci szybką i skuteczną instalację hydrauliczną. Niezależnie od tego, czy potrzebujesz nowej instalacji w nowym budynku, czy też wymiany istniejących rur i armatury, możesz polegać na naszym doświadczeniu i profesjonalizmie.'},
        {id: 5, topic: 'Kładzenie posadzek', urlImg: '/services/posadzka.png', href: '/kladzeniePosadzek', opis: 'Złota Rączka to nie tylko nazwa - to gwarancja wysokiej jakości usług. Nasz zespół specjalistów posiada nie tylko wiedzę techniczną, ale również kreatywność i wrażliwość na estetykę, co przekłada się na efektowny wygląd Twojej nowej posadzki. Nasze usługi kładzenia posadzek obejmują szeroki zakres materiałów i technik, od tradycyjnych podłóg drewnianych po nowoczesne płytki ceramiczne czy panele laminowane.'},
        {id: 6, topic: 'Naprawa armatury sanitarnej', urlImg: '/services/sanitary.png', href: '/naprawaArmaturySanitarnej', opis: 'Home Hero Złota Rączka to gwarancja solidności i profesjonalizmu. Nasz doświadczony zespół specjalistów jest gotowy podjąć się naprawy każdej usterki, niezależnie od jej skali czy typu armatury. Dzięki naszemu zaangażowaniu i precyzji, możesz mieć pewność, że Twój system sanitarny będzie działał sprawnie i bezawaryjnie.'},
    ]

    return (
        <section id={'services'} className={"mt-[7rem] relative py-10"}>
            <div className={'flex'}>
                <div className={'basis-1/2 flex justify-center'}>
                    <Topic isLeft={true}>Usługi</Topic>
                </div>
            </div>
            <div className={"mt-10 flex flex-wrap justify-center gap-5 items-stretch"}>
                <OfertaKafelek obiekt={data[0]}></OfertaKafelek>
                <OfertaKafelek obiekt={data[1]}></OfertaKafelek>
                <OfertaKafelek obiekt={data[2]}></OfertaKafelek>
                <OfertaKafelek obiekt={data[3]}></OfertaKafelek>
                <OfertaKafelek obiekt={data[4]}></OfertaKafelek>
                <OfertaKafelek obiekt={data[5]}></OfertaKafelek>
                <OfertaKafelek obiekt={data[6]}></OfertaKafelek>
            </div>
        </section>
    );
}