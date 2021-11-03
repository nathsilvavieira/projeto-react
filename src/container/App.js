
import '../styles/App.css';
import ClassComponent from '../componentes/ClassComponent';
import FunctionComponent from '../componentes/FunctionComponent';



function App() {
  const listaConvidados = [
   {
    nome : 'Nicolas',
    estaNaLista : true,
    tarefa : 'batata-frita'
  },
  {
    nome : 'Pedro',
    estaNaLista : false,
    tarefa : 'pizza'
  },
  {
    nome : 'Carolina',
    estaNaLista : true,
    tarefa : 'bebidas'
  }  
  ]
 
  
  return (
    <div className="App">
    <h3>Convidado:</h3>
    {listaConvidados.map((convidados,index)=> {
      return(
        <>
       <ClassComponent key = {index} nome={convidados.nome} estaNaLista={convidados.estaNaLista} /> 
       </>
    )})}

    <h3>Tarefas: </h3>
    {listaConvidados.map((convidados,index)=>{
      return(
        <>
        <FunctionComponent key = {index} nome={convidados.nome} tarefa={convidados.tarefa} />
        </>
      )})}
    </div>
  );
}

export default App;
