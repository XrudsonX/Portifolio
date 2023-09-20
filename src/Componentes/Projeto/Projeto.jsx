
const Projeto = ({ imagem, titulo, tecnologias, urlProjeto, urlRepositorio }) => {
    

    return (
        <div className="p-5 bg-cinzaClaro flex flex-col gap-2 border-borda border-[1px] max-w-[310px] min-w-[310px] rounded-md">
            <div className="flex justify-center items-center">
                <img src={imagem} className="border-[1px] border-borda w-[120px] h-[220px] md:w-[300px] md:h-[150px]" />
            </div>
            <h3 className="text-corTexto font-medium">{titulo}</h3>
            <p className="text-cinza">Tecnologias: {tecnologias}</p>
            <div className="flex gap-2 justify-end mr-2">
            <a href={urlProjeto} className="btn-link">Projeto</a>
            <a href={urlRepositorio} className="btn-link">Repositório</a>
            </div>
        </div>
    )
}

export default Projeto;