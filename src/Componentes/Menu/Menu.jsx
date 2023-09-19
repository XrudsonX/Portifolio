import { useState } from "react";

const Menu = () => {
    const [open, setOpen] = useState(false)
    const aoClicado = () => {
        setOpen(!open)
    }
    return (
        <>
            <img src="/imagens/menu.svg" alt="Botão do menu" onClick={aoClicado} className="md:hidden" />
            <div className={`absolute md:static top-[60px] bg-verde p-2 rounded-lg origin-right transition-all duration-300 ease-in  ${open ? 'right-6' : 'right-[-200px]'} md:right-6 md:top-6 md:p-0 md:px-2 md:bg-fundo md:h-[32px]`}>
                <ul className="flex flex-col md:flex-row gap-3 md:gap-6 md:items-center md:h-full">
                    <li><a href="#sobremim" className="md:text-verde md:text-xl">Sobre mim</a></li>
                    <li><a href="#projetos" className="md:text-verde md:text-xl">Projetos</a></li>
                    <li><a href="#skills" className="md:text-verde md:text-xl">Skills</a></li>
                </ul>
            </div>
        </>

    )
}

export default Menu;