import Projeto from "../Projeto/Projeto"


const ListaProjeto = () => {
    const projetos = [
        {
            "titulo" : "Bar count",
            "imagem" : "https://i.imgur.com/8iti0nU.png",
            "tecnologias" : "Html, Css e JavaScript",
            "urlProjeto" : "https://bar-count-js.vercel.app/",
            "urlRepositorio" : "https://github.com/RudsonAbraao/BarCountJS"
        },
        {
            "titulo" : "All dev",
            "imagem" : "https://i.imgur.com/Zp1LwN4.png",
            "tecnologias" : "Html, Css e JavaScript",
            "urlProjeto" : "https://all-dev-alura.vercel.app/editor.html",
            "urlRepositorio" : "https://github.com/XrudsonX/All-Dev-Alura"
        },
        {
            "titulo" : "Alura Newsletter",
            "imagem" : "https://i.imgur.com/ivJ1DzH.png",
            "tecnologias" : "React Js e Tailwind Css",
            "urlProjeto" : "https://alura-newsletter-seven-azure.vercel.app/",
            "urlRepositorio" : "https://github.com/XrudsonX/Alura_Newsletter.git"
        },
        {
            "titulo" : "Número Secreto",
            "imagem" : "https://i.imgur.com/QkA5SZt.png",
            "tecnologias" : "Html, Css e JavaScript",
            "urlProjeto" : "https://numero-secreto-kg4eqiwfa-xrudsonx.vercel.app/",
            "urlRepositorio" : "https://github.com/XrudsonX/numero_secreto"
        },
        {
            "titulo" : "Organograma",
            "imagem" : "https://i.imgur.com/BXMGNEC.png",
            "tecnologias" : "React Js e Css",
            "urlProjeto" : "https://organograma-blush.vercel.app/",
            "urlRepositorio" : "https://github.com/XrudsonX/Organograma"
        },
        {
            "titulo" : "Validação com Js",
            "imagem" : "https://i.imgur.com/TdAfdqG.png",
            "tecnologias" : "Html, Css e JavaScript",
            "urlProjeto" : "https://validacao-js.vercel.app/pages/abrir-conta-form.html",
            "urlRepositorio" : "https://github.com/XrudsonX/Validacao_JS"
        }
    ]
    return(
        <div className="flex flex-col items-center gap-6 sm:gap-12 sm:flex-row flex-wrap sm:justify-center">
            {projetos.map((projeto, index )=> <Projeto key={index} titulo={projeto.titulo} imagem={projeto.imagem} tecnologias={projeto.tecnologias} urlProjeto={projeto.urlProjeto} urlRepositorio={projeto.urlRepositorio}/>)}

        </div>
    )
}

export default ListaProjeto;