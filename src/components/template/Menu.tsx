interface MenuProps {
    className: string
}

export default function Menu(props: MenuProps) {
    return(
        <div className={`${props.className ?? ''}`}>
            Menu
        </div>
    )
}