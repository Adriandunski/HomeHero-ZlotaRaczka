'use client'

import ServiceSectionTemplate from "@/components/servicesTamplete/ServiceSectionTemplate";
import ContactUs from "@/sections/contactUs/ContactUs";

export default function Plumber() {
    const paragrafs = ['Złota Rączka to gwarancja najwyższej jakości usług. Nasz doświadczony zespół specjalistów jest wyposażony w najnowsze narzędzia i technologie, aby zapewnić Ci szybką i skuteczną instalację hydrauliczną. Niezależnie od tego, czy potrzebujesz nowej instalacji w nowym budynku, czy też wymiany istniejących rur i armatury, możesz polegać na naszym doświadczeniu i profesjonalizmie.',
        'Nasze usługi instalacji hydraulicznej obejmują projektowanie, montaż i konserwację systemów wodno-kanalizacyjnych, ogrzewania podłogowego, kotłowni, oraz wiele więcej. Jesteśmy tu, aby zapewnić Ci pełną satysfakcję i spokój ducha, wiedząc, że Twoje instalacje hydrauliczne są w najlepszych rękach.\n'];

    return (
        <>
            <ServiceSectionTemplate paragrafs={paragrafs} urlImage={'/services/sanitary.png'}>Usługi
                hydrauliczne</ServiceSectionTemplate>
            <ContactUs></ContactUs>
        </>
    );
}