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
        <h2>Projetos</h2>
        <ListaProjeto/>
        <h2>Minhas skills</h2>
        <ListaSkills/>
      </div>
    </div>
  )
}

export default App;