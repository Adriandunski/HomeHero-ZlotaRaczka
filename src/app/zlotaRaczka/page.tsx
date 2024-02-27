'use client'

import ServiceSectionTemplate from "@/components/servicesTamplete/ServiceSectionTemplate";
import ContactUs from "@/sections/contactUs/ContactUs";

export default function GoldenHand() {
    const paragrafs = ['Złota Rączka to nie tylko nazwa - to symbol solidności i wysokiej jakości usług. Nasz zespół składa się z wykwalifikowanych specjalistów, którzy podejmują się wszelkich wyzwań z determinacją i starannością, aby zapewnić Ci satysfakcję i spokój ducha. Nasze usługi naprawcze obejmują szeroki zakres działań, od naprawy ścian, sufitów i podłóg po drobne poprawki i naprawy mebli. ',
        'Dzięki naszej wszechstronnej wiedzy i umiejętnościom, możemy dostosować się do Twoich indywidualnych potrzeb i zapewnić kompleksowe rozwiązania.\n' +
        'Skorzystaj z usług Home Hero Złota Rączka, aby odzyskać pewność siebie i spokój w swoim domu. Niezależnie od tego, czy potrzebujesz szybkiej naprawy czy bardziej zaawansowanego projektu renowacyjnego, jesteśmy tu, aby Ci pomóc.'];

    return (
        <>
            <ServiceSectionTemplate paragrafs={paragrafs} urlImage={'/services/zlotaRaczka.png'}>Złota Rączka</ServiceSectionTemplate>
            <ContactUs></ContactUs>
        </>
    );
}