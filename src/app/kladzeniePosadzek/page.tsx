'use client'

import ServiceSectionTemplate from "@/components/servicesTamplete/ServiceSectionTemplate";
import ContactUs from "@/sections/contactUs/ContactUs";

export default function Tiles() {
    const paragrafs = ['Złota Rączka to nie tylko nazwa - to gwarancja wysokiej jakości usług. Nasz zespół specjalistów posiada nie tylko wiedzę techniczną, ale również kreatywność i wrażliwość na estetykę, co przekłada się na efektowny wygląd Twojej nowej posadzki. Nasze usługi kładzenia posadzek obejmują szeroki zakres materiałów i technik, od tradycyjnych podłóg drewnianych po nowoczesne płytki ceramiczne czy panele laminowane.',
        'Jesteśmy tu, aby doradzić Ci w wyborze najlepszego rozwiązania dla Twoich potrzeb i zapewnić perfekcyjne wykonanie. Skorzystaj z usług Home Hero Złota Rączka, aby cieszyć się piękną i solidną posadzką w Twoim domu lub miejscu pracy.'];

    return (
        <>
            <ServiceSectionTemplate paragrafs={paragrafs} urlImage={'/services/malowanie.png'}>Kładzenie
                posadzek</ServiceSectionTemplate>
            <ContactUs></ContactUs>
        </>
    );
}