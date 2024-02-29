import FormContsctUs from "@/sections/contactUs/FormContsctUs";
import KafelekKontakt from "@/sections/contactUs/KafelekKontakt";
import Link from "next/link";
import Topic from "@/components/topic/Topic";
import Image from "next/image";

export default function ContactUs() {
    return (
        <section id={'contact_us'} className={'md:p-10 p-4 bg-[url(/blobScene.svg)] bg-no-repeat bg-cover'}>
            <div className={'flex'}>
                <div className={'basis-1/2 flex justify-center'}>
                    <Topic isLeft={true}>Kontakt</Topic>
                </div>
            </div>
            <div className={''}>
                <div className={'flex md:flex-row flex-col shadow-2xl rounded-r-3xl overflow-hidden'}>
                    {/*LewaCzesc*/}
                    <div className={'basis-1/2 flex flex-col gap-10 p-10 bg-white'}>
                        <div className={'flex'}>
                            <KafelekKontakt topic={'Zadzwon'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5"
                                     stroke="currentColor" className="w-14 h-14 text-neutral-700">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                                </svg>
                                <Link href="tel:+48726270500" className={"text-lg text-neutral-600"}> 535 797 790</Link>
                            </KafelekKontakt>
                            <KafelekKontakt topic={'Napisz'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5"
                                     stroke="currentColor" className="w-14 h-14 text-neutral-700">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                                </svg>
                                <Link href="mailto:lukasz.ziemichod@wp.pl"
                                   className={"text-lg text-neutral-600"}> lukasz.ziemichod@wp.pl </Link>
                            </KafelekKontakt>
                        </div>
                        <div className={'flex'}>
                            <KafelekKontakt topic={'Odwiedź'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5"
                                     stroke="currentColor" className="w-14 h-14 text-neutral-700">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                                </svg>

                                <div className={"flex flex-col items-center justify-center text-center"}>
                                    <Link
                                        href={'https://www.google.pl/maps/place/HOME+HERO+Z%C5%82ota+R%C4%85czka+-+Malowanie+%C5%9Bcian+-+Monta%C5%BC+mebli+Warszawa/@52.2102055,20.9297174,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecb564e9c7d67:0x75bf4f16da5d035d!8m2!3d52.2102022!4d20.9322977!16s%2Fg%2F11v3xpv1b3?entry=ttu'}
                                        className={"text-md hover:cursor-pointer text-neutral-600"}>
                                        <p>HOME HERO Złota Rączka</p>
                                        <p>- Malowanie ścian - Montaż mebli Warszawa</p>
                                    </Link>
                                    <div className={"flex flex-col items-center text-lg mt-5"}>
                                        <Link
                                            href={'https://www.google.pl/maps/place/HOME+HERO+Z%C5%82ota+R%C4%85czka+-+Malowanie+%C5%9Bcian+-+Monta%C5%BC+mebli+Warszawa/@52.2102055,20.9297174,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecb564e9c7d67:0x75bf4f16da5d035d!8m2!3d52.2102022!4d20.9322977!16s%2Fg%2F11v3xpv1b3?entry=ttu'}
                                            className={"hover:cursor-pointer transition text-center"}>
                                            <p className={"text-neutral-600"}>Szczęsna 26</p>
                                            <p className={"text-neutral-600"}>Warszawa 02-454</p>
                                        </Link>
                                    </div>
                                </div>
                            </KafelekKontakt>
                            <KafelekKontakt topic={'Facebook'}>
                                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"
                                     width="14.906" height="32" className={'w-14 h-14 fill-white'}
                                     viewBox="0 0 14.906 32">
                                    <path
                                        d="M14.874,11.167 L14.262,14.207 C14.062,15.208 13.100,15.992 12.072,15.992 L10.000,15.992 L10.000,30.000 C10.000,31.104 9.159,32.000 8.049,32.000 L5.030,32.000 C3.920,32.000 3.017,31.102 3.017,29.999 L3.017,15.992 L2.011,15.992 C0.901,15.992 -0.002,15.095 -0.002,13.991 L-0.002,10.990 C-0.002,9.887 0.901,8.989 2.011,8.989 L3.017,8.989 L3.017,6.003 C3.017,2.716 5.693,0.041 8.994,0.013 C9.015,0.012 9.033,0.001 9.055,0.001 L13.081,0.001 C13.636,0.001 14.000,0.448 14.000,1.000 L14.000,6.000 C14.000,6.553 13.636,7.004 13.081,7.004 L10.061,7.004 L10.060,8.989 L13.079,8.989 C13.645,8.989 14.167,9.228 14.509,9.644 C14.852,10.059 14.985,10.615 14.874,11.167 ZM9.092,10.990 C9.078,10.991 9.067,10.998 9.053,10.998 L9.053,10.998 C8.497,10.997 8.046,10.549 8.047,9.997 L8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 L8.049,6.003 C8.049,5.450 8.499,5.003 9.055,5.003 L12.074,5.003 L12.074,2.002 L9.094,2.002 C9.077,2.002 9.063,2.011 9.045,2.011 C6.831,2.011 5.030,3.802 5.030,6.003 L5.030,10.005 C5.030,10.558 4.579,11.006 4.023,11.006 C3.996,11.006 3.973,10.992 3.946,10.990 L2.011,10.990 L2.011,13.991 L4.023,13.991 C4.579,13.991 5.030,14.439 5.030,14.992 C5.030,15.044 5.008,15.088 5.000,15.138 L5.000,30.000 L8.049,29.999 L8.049,15.002 C8.049,14.998 8.047,14.995 8.047,14.992 C8.047,14.439 8.497,13.991 9.053,13.991 L12.072,13.991 C12.145,13.991 12.275,13.886 12.288,13.816 L12.857,10.990 L9.092,10.990 Z"/>
                                </svg>
                                <Link href="https://www.facebook.com/homeheroLZ"
                                   className={"text-lg text-neutral-600"}> HOME HERO </Link>
                            </KafelekKontakt>
                        </div>
                    </div>

                    {/*PrawaCzesc*/}
                    <div className={'basis-1/2'}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.8263988286735!2d20.9322977!3d52.2102022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb564e9c7d67%3A0x75bf4f16da5d035d!2sHOME%20HERO%20Z%C5%82ota%20R%C4%85czka%20-%20Malowanie%20%C5%9Bcian%20-%20Monta%C5%BC%20mebli%20Warszawa!5e0!3m2!1spl!2spl!4v1708102958138!5m2!1spl!2spl"
                            className={"w-full h-full"} loading="eager"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                </div>
            </div>
            {/*<div className={'flex justify-center'}>*/}
            {/*    <div className={'basis-1/2 flex flex-col items-center border-2 px-10 py-10 bg-white'}>*/}
            {/*        <FormContsctUs></FormContsctUs>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    );
}