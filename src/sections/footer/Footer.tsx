import Link from "next/link";

export default function Footer() {
    return (
        <footer className={"border-t-2 border-[#362C1F] text-[#362C1F]"}>
            <div className={"bg-white flex flex-row px-5 gap-y-10 py-7 justify-around flex-wrap shrink-0"}>
                <div className={"basis-[20rem] flex flex-col items-center justify-center md:border-b-0  border-b-2"}>
                    <img className={'aspect-square w-[7rem]'} src={"/logo.png"}/>
                    <div className={"flex-col flex items-center mt-4"}>
                        <h3 className={"font-extrabold text-xl inline"}>HOME HERO</h3>
                        <h3 className={"font-extrabold text-xl inline"}>Złota Rączka</h3>
                    </div>


                </div>
                <div className={"basis-[20rem]"}>
                    <h4 className={"font-extrabold text-xl text-neutral-700 underline decoration-4 underline-offset-8 decoration-main"}>Usługi</h4>
                    <div className={"flex flex-col gap-y-4 mt-7 font-bold text-neutral-600"}>
                        <Link className={"text-lg hover:text-main"} href={'/strzyzenieWlosow'}>Usługi
                            Hydrauliczne</Link>
                        <Link className={"text-lg hover:text-main"} href={'/stylizacjaWlosow'}>Usługi
                            Elektryczne</Link>
                        <Link className={"text-lg hover:text-main"} href={'/trymowanieBrody'}>Usługi
                            Budowalne</Link>
                        <Link className={"text-lg hover:text-main"} href={'/uslugiHydrauliczne'}>Usługi Ogrodnicze</Link>
                        <Link className={"text-lg hover:text-main"}
                              href={'/repigmentacjaBrody'}>Montaż Mebli</Link>
                        <Link className={"text-lg hover:text-main"}
                              href={'/repigmentacjaBrody'}>Malowanie</Link>
                    </div>
                </div>
                <div className={"basis-[20rem] font-bold"}>
                    <h4 className={"font-extrabold text-xl underline decoration-4 underline-offset-8 decoration-main text-neutral-700"}>Kontakt</h4>
                    <div className={"flex flex-col gap-y-4 mt-7"}>
                        <div className={"flex gap-x-3"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                 stroke="currentColor" className="w-9 h-9 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                            </svg>
                            <Link className={"text-lg font-bold hover:text-main hover:cursor-pointer text-neutral-600"}
                                  href="tel:+48535797790">535 797 790</Link>
                        </div>

                        <div className={"flex gap-x-3 "}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                 stroke="currentColor" className="w-9 h-9 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                            </svg>
                            <Link href="mailto:lukasz.ziemichod@wp.pl"
                                  className={"text-lg hover:text-main hover:cursor-pointer text-neutral-600"}> lukasz.ziemichod@wp.pl </Link>
                        </div>

                        <div className={"flex gap-x-3"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                 stroke="currentColor" className="w-9 h-9 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                            </svg>
                            <div className={"flex flex-col text-lg text-neutral-600 hover:text-main hover:cursor-pointer"}>
                                <Link className={"hover:text-main"}
                                      href={'https://www.google.pl/maps/place/HOME+HERO+Z%C5%82ota+R%C4%85czka+-+Malowanie+%C5%9Bcian+-+Monta%C5%BC+mebli+Warszawa/@52.2102055,20.9297174,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecb564e9c7d67:0x75bf4f16da5d035d!8m2!3d52.2102022!4d20.9322977!16s%2Fg%2F11v3xpv1b3?entry=ttu'}>
                                    <p className={"text-inherit"}>Szczęsna 26</p>
                                    <p className={"text-inherit"}>Warszawa 02-454</p>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={"flex justify-center items-center"}>
                Copyright © 2024 by Adrian Duński, Inc. All rights reserved.
            </div>
        </footer>
    );
}