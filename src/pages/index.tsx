import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/Titulo";

export default function Home() {
  return (
    <Pagina>
      <Titulo 
        principal="Home"
        secundario="Curso de React com TailwindCSS"
        gradiente
      />
    </Pagina>
  )
}
