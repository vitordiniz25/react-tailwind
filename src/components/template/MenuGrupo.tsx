interface MenuGrupoProps {
    texto: string
}

export default function MenuGrupo(props: MenuGrupoProps) {
    return (
        <div className="uppercase text-xs dark:text-zinc-400 font-bold pt-3.5
            text-zinc-700
        ">
            {props.texto}
        </div>
    )
}