import { IconBrandTailwind } from "@tabler/icons-react";

interface LogoProps {
    className: string
}

export default function Logo(props: LogoProps) {
    return (
        <div className={`flex items-center gap-2 ${props.className ?? ''}`}>
            <IconBrandTailwind size={40} stroke={1}/>
            <span className="dark:text-zinc-500 text-zinc-700">Tailwind com React</span>
        </div>
    )
}