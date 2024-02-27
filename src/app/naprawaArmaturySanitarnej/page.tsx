'use client'

import ServiceSectionTemplate from "@/components/servicesTamplete/ServiceSectionTemplate";
import ContactUs from "@/sections/contactUs/ContactUs";

export default function Sanitary() {
    const paragrafs = ['Home Hero Złota Rączka to gwarancja solidności i profesjonalizmu. Nasz doświadczony zespół specjalistów jest gotowy podjąć się naprawy każdej usterki, niezależnie od jej skali czy typu armatury. Dzięki naszemu zaangażowaniu i precyzji, możesz mieć pewność, że Twój system sanitarny będzie działał sprawnie i bezawaryjnie.',
        'Nasze usługi naprawy armatury sanitarnej obejmują wszystkie elementy instalacji, od kranów i zaworów po węże i uszczelki. Bez względu na to, czy masz problem z przeciekającym kranem czy zatkaniem się rury, jesteśmy tu, aby Ci pomóc.'];

    return (
        <>
            <ServiceSectionTemplate paragrafs={paragrafs} urlImage={'/services/sanitary.png'}>Naprawa armatury sanitarnej</ServiceSectionTemplate>
            <ContactUs></ContactUs>
        </>
    );
}