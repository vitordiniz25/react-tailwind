import { IconArrowAutofitContent, IconAspectRatio, IconBoxMargin, IconBoxModel2, IconBoxPadding, IconClick, IconComponents, IconContainer, IconDashboard, IconDeviceMobile, IconDimensions, IconGridDots, IconLayoutDashboard, IconLayoutGrid, IconResize, IconTextPlus, IconTexture, IconTypography } from "@tabler/icons-react"
import MenuGrupo from "./MenuGrupo"
import MenuItem from "./MenuItem"

interface MenuProps {
    className: string
}

export default function Menu(props: MenuProps) {
    return(
        <div className={`${props.className ?? ''}`}>
            <MenuGrupo texto="Conceitos"/>
            <MenuItem icone={<IconTextPlus />} texto="Tudo é Classes" url="/conceitos/classes"/>
            <MenuItem icone={<IconClick />} texto="Pseudo Classes" url="/conceitos/pseudo"/>
            <MenuItem icone={<IconDeviceMobile />} texto="Mobile-First" url="/conceitos/mobiles"/>
            <MenuItem icone={<IconComponents />} texto="Componentes" url="/conceitos/componentes"/>

            <MenuGrupo texto="Box Model"/>
            <MenuItem icone={<IconBoxPadding />} texto="Padding" url="/caixa/padding"/>
            <MenuItem icone={<IconBoxMargin />} texto="Margin" url="/caixa/margin"/>
            <MenuItem icone={<IconArrowAutofitContent />} texto="Espaços" url="/caixa/espacos"/>
            <MenuItem icone={<IconResize />} texto="Tamanho" url="/caixa/tamanho"/>
            <MenuItem icone={<IconBoxModel2 />} texto="Box Sizing" url="/caixa/box-sizing"/>

            <MenuGrupo texto="Flex"/>
            <MenuItem icone={<IconAspectRatio />} texto="Resumão Flex" url="/flex/inicial"/>
            <MenuItem icone={<IconDimensions />} texto="Classes" url="/flex/redimensionamento"/>

            <MenuGrupo texto="Grid"/>
            <MenuItem icone={<IconGridDots />} texto="Resumão Grid" url="/grid/inicial"/>
            <MenuItem icone={<IconLayoutDashboard />} texto="Posicionamento" url="/grid/posicao"/>
            <MenuItem icone={<IconLayoutGrid />} texto="Componente Grid" url="/grid/layout"/>

            <MenuGrupo texto="Extras"/>
            <MenuItem icone={<IconContainer />} texto="Container" url="/extras/container"/>
            <MenuItem icone={<IconTypography />} texto="Tipografia" url="/extras/titulo"/>
            <MenuItem icone={<IconTexture />} texto="Background Gradiente" url="/extras/background"/>
        </div>
    )
}