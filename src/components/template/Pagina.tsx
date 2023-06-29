import Menu from "./Menu"
import UsuarioInfo from "./UsuarioInfo"

interface PaginaProps {
    children: any
}

export default function Pagina(props: PaginaProps) {
    const usuario = {
        nome: 'Frankie Sullivan',
        email: 'frankie@untitledui.com',
        imagemUrl: 'https://img.freepik.com/vetores-premium/design-de-avatar-de-pessoa_24877-38131.jpg'
    }
    return (
        <div className="flex h-screen">
            <aside className="flex flex-col bg-zinc-900 w-72">
                <Menu className="p-7"/>
                <hr className="mx-7 border-zinc-700"/>
                <UsuarioInfo {...usuario} className="p-7"/>
            </aside>
            <div className="p-7">
                {props.children}
            </div>
        </div>
    )
}