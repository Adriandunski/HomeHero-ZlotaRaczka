'use client'

import Image from "next/image";
import MainHome from "@/sections/mainHome/MainHome";
import AboutUs from "@/sections/aboutUs/AboutUs";
import Oferta from "@/sections/oferta/Oferta";
import Opinions from "@/sections/opinions/Opinions";
import ContactUs from "@/sections/contactUs/ContactUs";

export default function Home() {
    return (
        <main className="">
            <MainHome></MainHome>
            <AboutUs></AboutUs>
            <Oferta></Oferta>
            <Opinions></Opinions>
            <ContactUs></ContactUs>
        </main>
    );
}
