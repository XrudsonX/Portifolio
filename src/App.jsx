import Apresentacao from "./Componentes/Apresentacao/Apresentacao";
import Header from "./Componentes/Header/Header";
import InfoList from "./Componentes/InfoList/InfoList";
import ListaProjeto from "./Componentes/ListaProjetos/ListaProjetos";
import ListaSkills from "./Componentes/ListaSkills/ListaSkills";


const App =  ()=> {
  return (
    <div className="min-h-screen bg-fundo font-principal relative overflow-hidden">
      <div className="p-6 mb-10 md:px-10 max-w-screen-xl m-auto">
        <Header/>
        <Apresentacao/>
        <InfoList/>
        <a name="projetos" className="link">Projetos</a>
        <ListaProjeto/>
        <a name="skills" className="link">Minhas skills</a>
        <ListaSkills/>
      </div>
    </div>
  )
}

export default App;