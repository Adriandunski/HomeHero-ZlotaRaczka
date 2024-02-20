import Link from "next/link";

export default function LinkSubMenu({url, children} : {url:string, children: string}) {
    return(
        <Link className={'underline decoration-4 underline-offset-4 decoration-amber-400 text-white py-1 px-5 rounded-md'} href={url}>{children}</Link>
    );
}