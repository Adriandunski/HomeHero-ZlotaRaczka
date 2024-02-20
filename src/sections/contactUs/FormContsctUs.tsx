export default function FormContsctUs() {
    return(
        <>
            <div className={''}>
                <h2 className={'text-main text-4xl font-extrabold tracking-wide'}>Skontaktuj się</h2>
            </div>
            <form className={'w-full mt-7 flex flex-col'}>
                <div className={'flex flex-col text-mainDark gap-5'}>
                    <div className={'flex gap-7'}>
                        <div className={'basis-1/2 flex flex-col'}>
                            <label className={'text-lg font-semibold'}>
                                <p className={'ml-5'}>Email adres:</p>
                                <input
                                    className={'outline-none focus:ring-0 border-0 focus:border-2 focus:border-main placeholder-white w-full bg-mainL3 py-1 px-4 rounded-full h-12 border-main'}
                                    type="email" name="email" id="email"/>
                            </label>
                        </div>
                        <div className={'basis-1/2 flex flex-col'}>
                            <label className={'text-main text-lg font-semibold'}>
                                <p className={'ml-5'}>Numer telefonu:</p>
                                <input
                                    className={'outline-none focus:ring-0 border-0 focus:border-2 focus:border-main placeholder-white w-full bg-mainL3 py-1 px-4 rounded-full h-12 border-main'}
                                    type="tel" name="phone" id="phone"/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className={'flex flex-col'}>
                            <label className={'text-main text-lg font-semibold'}>
                                <p className={'ml-5'}>Imie i nazwisko:</p>
                                <input
                                    className={'outline-none focus:ring-0 border-0 focus:border-2 focus:border-main placeholder-white w-full bg-mainL3 py-1 px-4 rounded-full h-12 border-main'}
                                    type="text" name="name" id="name"/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className={'flex flex-col'}>
                            <label className={'text-main text-lg font-semibold'}>
                                <p className={'ml-5'}>Wiadomość:</p>
                                <textarea rows={10}
                                          className={'outline-none focus:ring-0 border-0 focus:border-2 focus:border-main placeholder-white w-full bg-mainL3 py-1 px-4 rounded-md border-main'}
                                          name="name" id="name"/>
                            </label>
                        </div>
                    </div>
                </div>

                <button className={'mt-10 bg-main px-7 self-end py-2 w-[10rem] rounded-md'}>Wyślij</button>
            </form>
        </>
    );
}