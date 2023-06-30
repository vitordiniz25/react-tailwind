import Logo from "./Logo"
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
            <aside className="flex flex-col bg-zinc-900 w-80">
                <Logo className="pt-7 px-7"/>
                <Menu className="pt-3.5 p-7 overflow-auto pb-28"/>
                <div className="fixed bottom-0 bg-zinc-900 w-80">
                    <hr className="mx-7 border-zinc-700"/>
                    <UsuarioInfo {...usuario} className="p-7"/>
                </div>
            </aside>
            <div className="p-7">
                {props.children}
            </div>
        </div>
    )
}