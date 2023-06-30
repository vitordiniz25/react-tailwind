import Link from "next/link"
import React from "react"

interface MenuItemProps {
    icone: any
    texto: string
    url: string
}

export default function MenuItem(props: MenuItemProps){
    return (
        <Link href={props.url}>
            <div className="
                flex items-center gap-2 py-2 px-2.5 dark:text-zinc-300 hover:bg-zinc-200
                dark:hover:bg-black rounded-md text-zinc-700
            ">
                <span>{React.cloneElement(props.icone, {
                    stroke: 1
                })}</span>
                <span className="text-sm">{props.texto}</span>
            </div>
        </Link>
    )
}