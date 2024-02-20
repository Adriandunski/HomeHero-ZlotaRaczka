export default function KafelekKontakt({topic, children}: {topic: string, children: any[]}) {
    return (
        <div className={'basis-1/2 flex flex-col gap-y-4 items-center'}>

            {topic === 'Facebook' ? <div
                className={'animate-bounce w-24 aspect-square border-4 border-blue-600 bg-blue-600 rounded-full flex items-center justify-center'}>
                {children[0]}
            </div> : <div
                className={'animate-bounce w-24 aspect-square border-4 border-main rounded-full flex items-center justify-center'}>
                {children[0]}
            </div>}
            <p className={"text-2xl font-semibold text-neutral-800"}>{topic}</p>
            {children[1]}
        </div>
    );
}