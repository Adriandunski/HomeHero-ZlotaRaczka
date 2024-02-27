import Link from "next/link";

export default function LinkSubMenu({url, children} : {url:string, children: string}) {
    return(
        <Link className={'text-white py-1 px-5 border-b-amber-400 border-b-2 hover:bg-mainDark transition rounded-t-xl'} href={url}>{children}</Link>
    );
}