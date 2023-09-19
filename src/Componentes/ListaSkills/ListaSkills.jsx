import Skills from "../Skills/Skills";

const ListaSkills = () => {
    return(
        <div className="flex gap-4 flex-wrap justify-center">
            <Skills imagem={"/imagens/icoHtml.svg"}/>
            <Skills imagem={"/imagens/icoCss.svg"}/>
            <Skills imagem={"/imagens/icoJavascript.svg"}/>
            <Skills imagem={"/imagens/icoReact.svg"}/>
            <Skills imagem={"/imagens/icoTailwind.svg"}/>
            <Skills imagem={"/imagens/ilustracao.svg"}/>
        </div>
    )
}  

export default ListaSkills;