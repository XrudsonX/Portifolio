const Apresentacao = () => {
    return (
        <div className="flex flex-col">
            <div className="flex md:justify-center gap-60 mt-10 md:mt-20 md:items-center">
                <div className="text-corTexto pt-2 flex flex-col items-center  w-full md:w-auto text-center md:text-left gap-2">
                    <h1 className="text-[24px] font-bold">Olá, sou  Rudson Abraão</h1>
                    <h4 className="text-cinza">Desenvolvedor Front-End</h4>
                    <a href="https://drive.google.com/file/d/1hrO-QqXBZGGyb385YczgsaIZtSBrlJLv/view" target="_blank" className="bg-verde py-1 px-2 rounded-sm text-fundo md:py-2 md:px-4 font-medium text-md md:text-xl hover:animate-pulse" >Download CV</a>
                </div>
                <img src="/imagens/ilustracao.svg" alt="ilustração de um progamador" className="hidden lg:block w-[300px]" />
            </div>
            <div className=" self-center max-w-lg ">
                <a name="sobremim" className="link">Sobre mim</a>
                <p className="text-cinza text-center">Atualmente, estou no 4º semestre da minha formação de análise e desenvolvimento de sistemas, com diversos cursos e projetos concluídos. Estou ansioso para ingressar no mercado e aplicar todo o conhecimento adquirido até aqui, sempre buscando oportunidades para aprender e crescer.</p>
            </div>
        </div>
    )
}

export default Apresentacao;