interface TituloProps {
    principal: string
    secundario: string
}

export default function Titulo(props: TituloProps) {
    return(
        <div className="flex flex-col">
            <span className="text-4xl font-black">{props.principal}</span>
            <span className="text-base font-light text-zinc-400">{props.secundario}</span>
        </div>
    )
}