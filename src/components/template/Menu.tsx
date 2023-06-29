import MenuGrupo from "./MenuGrupo"

interface MenuProps {
    className: string
}

export default function Menu(props: MenuProps) {
    return(
        <div className={`p-7 ${props.className ?? ''}`}>
            <MenuGrupo texto="Conceitos"/>
            <MenuGrupo texto="Box Model"/>
            <MenuGrupo texto="Flex"/>
            <MenuGrupo texto="Grid"/>
            <MenuGrupo texto="Extras"/>
        </div>
    )
}