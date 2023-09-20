import { useState } from "react";
import Projeto from "../Projeto/Projeto"


const ListaProjeto = () => {
    const [tela, setTela] = useState(window.innerWidth);
    window.addEventListener('resize', ()=> {setTela(window.innerWidth)})
    console.log(tela)

    const projetos = [
        {
            "titulo" : "Bar count",
            "imagem" : "https://i.imgur.com/CvCW7Da.png",
            "imagemMobile" : "https://i.imgur.com/0RBCTNO.png",
            "tecnologias" : "Html, Css e JavaScript",
            "urlProjeto" : "https://bar-count-js.vercel.app/",
            "urlRepositorio" : "https://github.com/RudsonAbraao/BarCountJS"
        },
        {
            "titulo" : "All dev",
            "imagem" : "https://i.imgur.com/Zp1LwN4.png",
            "imagemMobile" : "https://i.imgur.com/dd7uGlc.png",
            "tecnologias" : "Html, Css e JavaScript",
            "urlProjeto" : "https://all-dev-alura.vercel.app/",
            "urlRepositorio" : "https://github.com/XrudsonX/All-Dev-Alura"
        },
        {
            "titulo" : "Alura Newsletter",
            "imagem" : "https://i.imgur.com/ivJ1DzH.png",
            "imagemMobile" : "https://i.imgur.com/ejRhHLp.png",
            "tecnologias" : "React Js e Tailwind Css",
            "urlProjeto" : "https://alura-newsletter-seven-azure.vercel.app/",
            "urlRepositorio" : "https://github.com/XrudsonX/Alura_Newsletter.git"
        },
        {
            "titulo" : "Número Secreto",
            "imagem" : "https://i.imgur.com/QkA5SZt.png",
            "imagemMobile" : "https://i.imgur.com/yQGpXAZ.png",
            "tecnologias" : "Html, Css e JavaScript",
            "urlProjeto" : "https://numero-secreto-kg4eqiwfa-xrudsonx.vercel.app/",
            "urlRepositorio" : "https://github.com/XrudsonX/numero_secreto"
        },
        {
            "titulo" : "Organograma",
            "imagem" : "https://i.imgur.com/BXMGNEC.png",
            "imagemMobile" : "https://i.imgur.com/467h3aO.png",
            "tecnologias" : "React Js e Css",
            "urlProjeto" : "https://organograma-blush.vercel.app/",
            "urlRepositorio" : "https://github.com/XrudsonX/Organograma"
        },
        {
            "titulo" : "Validação com Js",
            "imagem" : "https://i.imgur.com/TdAfdqG.png",
            "imagemMobile" : "https://i.imgur.com/6q4Z8vc.png",
            "tecnologias" : "Html, Css e JavaScript",
            "urlProjeto" : "https://validacao-js.vercel.app/pages/abrir-conta-form.html",
            "urlRepositorio" : "https://github.com/XrudsonX/Validacao_JS"
        }
    ]
    return(
        <div className="flex flex-col items-center gap-6 sm:gap-12 sm:flex-row flex-wrap sm:justify-center">
            {projetos.map((projeto, index )=> <Projeto key={index} titulo={projeto.titulo} imagem={tela < 768 ? projeto.imagemMobile : projeto.imagem} tecnologias={projeto.tecnologias} urlProjeto={projeto.urlProjeto} urlRepositorio={projeto.urlRepositorio}/>)}

        </div>
    )
}

export default ListaProjeto;