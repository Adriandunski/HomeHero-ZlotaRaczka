'use client'

import ServiceSectionTemplate from "@/components/servicesTamplete/ServiceSectionTemplate";
import ContactUs from "@/sections/contactUs/ContactUs";

export default function Assembly() {
    const paragrafs = ['Złota Rączka to więcej niż zwykły wykonawca - to partner, który zadba o każdy etap montażu mebli, zapewniając nie tylko solidność, ale także estetykę. Nasz doświadczony zespół specjalistów posiada nie tylko umiejętności techniczne, ale również wrażliwość na detale, co przekłada się na perfekcyjne wykonanie każdego zlecenia.',
        'Nasze usługi montażu mebli obejmują szeroki zakres produktów, od prostych regałów po skomplikowane systemy szaf i kuchnie. Bez względu na to, czy potrzebujesz montażu mebli do sypialni, salonu czy biura, jesteśmy tu, aby Ci pomóc.\n'];

    return (
        <>
            <ServiceSectionTemplate paragrafs={paragrafs} urlImage={'/services/meble.png'}>Montaż
                mebli</ServiceSectionTemplate>
            <ContactUs></ContactUs>
        </>
    );
}