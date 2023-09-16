const Apresentacao = () => {
    return (
        <div className="flex flex-col">
            <div className="flex md:justify-between mt-10 md:mt-20 md:items-center">
                <div className="text-corTexto pt-2 flex flex-col items-center  w-full md:w-auto text-center md:text-left">
                    <h1 className="text-[24px] font-bold">Olá, sou  Rudson Abraão</h1>
                    <h4 className="text-cinza">Desenvolvedor Front-End</h4>
                </div>
                <img src="../public/imagens/ilustration.svg" alt="ilustração de um progamador" className="hidden md:block w-[300px]" />
            </div>
            <div className=" self-center max-w-lg ">
                <h2>Sobre mim</h2>
                <p className="text-cinza text-center">Atualmente, estou no 4º semestre da minha formação de análise e desenvolvimento de sistemas, com diversos cursos e projetos concluídos. Estou ansioso para ingressar no mercado e aplicar todo o conhecimento adquirido até aqui, sempre buscando oportunidades para aprender a crescer.</p>
            </div>
        </div>
    )
}

export default Apresentacao;