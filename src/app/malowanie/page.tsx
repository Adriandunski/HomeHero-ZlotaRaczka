'use client'

import ServiceSectionTemplate from "@/components/servicesTamplete/ServiceSectionTemplate";
import ContactUs from "@/sections/contactUs/ContactUs";

export default function Painting() {
    const paragrafs = ['Jesteśmy zespołem doświadczonych specjalistów, gotowych uczynić Twoje wnętrza wyjątkowymi. Dzięki naszej wiedzy i pasji do pracy, malowanie ścian staje się nie tylko koniecznością, ale również sztuką. Złota Rączka to nie tylko nazwa - to gwarancja najwyższej jakości usług. Nasz zespół nieustannie dąży do doskonałości, wykorzystując najnowsze techniki i trendy w dziedzinie malowania.',
        'Bez względu na to, czy marzysz o świeżym kolorze w salonie, czy też potrzebujesz kreatywnego podejścia do dziecięcego pokoju, jesteśmy tu, by Ci pomóc. Nasze usługi malowania ścian obejmują nie tylko samą aplikację farby, ale również przygotowanie powierzchni, naprawę niedoskonałości oraz doradztwo w wyborze kolorów i technik. Dzięki naszemu podejściu opartemu na indywidualnych potrzebach klienta, możesz być pewien, że efekt końcowy będzie spełniał Twoje oczekiwania.'];

    return (
        <>
            <ServiceSectionTemplate paragrafs={paragrafs} urlImage={'/services/malowanie.png'}>Usługi
                malowania</ServiceSectionTemplate>
            <ContactUs></ContactUs>
        </>
    );
}