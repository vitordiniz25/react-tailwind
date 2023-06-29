import { IconDashboard } from "@tabler/icons-react"
import MenuGrupo from "./MenuGrupo"
import MenuItem from "./MenuItem"

interface MenuProps {
    className: string
}

export default function Menu(props: MenuProps) {
    return(
        <div className={`p-7 ${props.className ?? ''}`}>
            <MenuGrupo texto="Conceitos"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
            <MenuGrupo texto="Box Model"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
            <MenuGrupo texto="Flex"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
            <MenuGrupo texto="Grid"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
            <MenuGrupo texto="Extras"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
            <MenuItem icone={<IconDashboard />} texto="Classes" url="/"/>
        </div>
    )
}