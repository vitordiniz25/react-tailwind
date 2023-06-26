import Caixa from "@/components/Caixa";

export default function Tamanho() {
    return(
        <div className="flex gap-5 flex-col">
            <Caixa className="w-16 h-16">#1</Caixa>
            <Caixa className="w-4/5">#2</Caixa>
            <Caixa className="w-1/2">#3</Caixa>
            <Caixa className="w-[75%]">#4</Caixa>
            <Caixa className="min-w-[200px]">#5</Caixa>
            <Caixa className="w-full">#6</Caixa>
        </div>
    )
}