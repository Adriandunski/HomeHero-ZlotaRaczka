'use client'

import ServiceSectionTemplate from "@/components/servicesTamplete/ServiceSectionTemplate";
import ContactUs from "@/sections/contactUs/ContactUs";

export default function Gardener() {
    const paragrafs = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros lorem, vestibulum accumsan tincidunt in, commodo vitae nibh. Fusce quis ante dolor. Sed vulputate, sem ut euismod tincidunt, mi quam eleifend ligula, vitae imperdiet elit urna quis arcu. Aliquam interdum mauris quam, non cursus leo porttitor eget.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros lorem, vestibulum accumsan tincidunt in, commodo vitae nibh. Fusce quis ante dolor. Sed vulputate, sem ut euismod tincidunt, mi quam eleifend ligula, vitae imperdiet elit urna quis arcu. Aliquam interdum mauris quam, non cursus leo porttitor eget.'];

    return (
        <>
            <ServiceSectionTemplate paragrafs={paragrafs} urlImage={'/services/ogrod.png'}>Usługi
                ogrodnicze </ServiceSectionTemplate>
            <ContactUs></ContactUs>
        </>
    );
}