'use client'

import ServiceSectionTemplate from "@/components/servicesTamplete/ServiceSectionTemplate";
import ContactUs from "@/sections/contactUs/ContactUs";

export default function Electriction() {
    const paragrafs = ['Złota Rączka to synonim solidności i profesjonalizmu w branży. Nasz wyspecjalizowany zespół elektryków posiada nie tylko niezbędne umiejętności techniczne, ale także wrażliwość na bezpieczeństwo i jakość wykonania. Dzięki naszemu doświadczeniu i zaangażowaniu, możesz mieć pewność, że prace elektryczne zostaną wykonane z najwyższą starannością i zgodnie z obowiązującymi normami.',
        'Nasze usługi prace elektryczne obejmują szeroki zakres działań, od instalacji nowych punktów elektrycznych po naprawę istniejących instalacji, diagnostykę i modernizację systemów oraz wiele więcej. Bez względu na skomplikowanie zadania, jesteśmy gotowi podjąć się wyzwania i zapewnić Ci kompletną satysfakcję.\n' +
        'Skorzystaj z usług Home Hero Złota Rączka, aby zagwarantować sobie spokój ducha i bezpieczeństwo w swoim domu lub miejscu pracy.'];

    return (
        <>
            <ServiceSectionTemplate paragrafs={paragrafs} urlImage={'/services/elektryk.png'}>Usługi
                elektryczne</ServiceSectionTemplate>
            <ContactUs></ContactUs>
        </>
    );
}