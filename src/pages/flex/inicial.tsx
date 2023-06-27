import Caixa from "@/components/Caixa";

export default function Flex() {
    return(
        <div className="flex flex-wrap
            justify-center h-screen items-center content-center
            gap-1"
        >
            <Caixa className="w-2/5">#1</Caixa>
            <Caixa className="w-2/5">#2</Caixa>
            <Caixa className="w-2/5">#3</Caixa>
            <Caixa className="w-2/5">#4</Caixa>
            <Caixa className="w-2/5">#5</Caixa>
            <Caixa className="w-2/5">#6</Caixa>
        </div>
    )
}