import Projeto from "../Projeto/Projeto"

const ListaProjeto = () => {
    return(
        <div className="flex flex-col items-center gap-6 sm:gap-12 sm:flex-row flex-wrap sm:justify-center">
            <Projeto imagem={"/imagens/numeroSecreto.png"} titulo={"Número Secreto"} tecnologias={"Html, Css e JavaScript"} urlRepositorio={"https://github.com/XrudsonX/numero_secreto"} urlProjeto={"https://numero-secreto-one-ruddy.vercel.app/"}/>
            <Projeto imagem={"/imagens/numeroSecreto.png"} titulo={"Número Secreto"} tecnologias={"Html, Css e JavaScript"}/>
            <Projeto imagem={"/imagens/numeroSecreto.png"} titulo={"Número Secreto"} tecnologias={"Html, Css e JavaScript"}/>
            <Projeto imagem={"/imagens/numeroSecreto.png"} titulo={"Número Secreto"} tecnologias={"Html, Css e JavaScript"}/>
            <Projeto imagem={"/imagens/numeroSecreto.png"} titulo={"Número Secreto"} tecnologias={"Html, Css e JavaScript"}/>
            <Projeto imagem={"/imagens/numeroSecreto.png"} titulo={"Número Secreto"} tecnologias={"Html, Css e JavaScript"}/>

        </div>
    )
}

export default ListaProjeto;