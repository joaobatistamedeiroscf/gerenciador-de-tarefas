import React  from "react"
import { useState } from "react"
import "../components/styles/styleTask.css"
import { MdDeleteForever } from "react-icons/md";

function Task(){

    const [tarefa,setTarefa]  = useState("")
    const [itens, setItens] = useState([])
    
    function Enviar(evento){
        evento.preventDefault()
       

        if(tarefa.trim !== ""){
            
            const newItens = {
                id: Date.now() , 
                text: tarefa
            }
            setItens((prevItens) => [...prevItens, newItens])
            setTarefa("")
          
        }
    } 

    function Excluir(id ){
      const novaLista =  itens.filter((item) => item.id !== id);
      setItens(novaLista)
    }

    return (
        <div className="conteiner">
            <h1>Lista de Tarefas</h1>
            <form >
                <div className="input-box">
                    <input type="text"
                    placeholder="Digite sua tarefa"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)}
                    />
                    <button type="submit" onClick={Enviar}>Adicionar tarefa</button>
                </div>

                <div>
                    {
                        itens.length === 0 && <p>Não há tarefas adicionadas</p>
                    }
                </div>
                <div>
                    {
                        itens.map((item) => (
                            <li key={item.id}>
                                {item.text} 
                                <button type="button" className="btn-delete" onClick={() => Excluir(item.id)}>Excluir
                                    <MdDeleteForever className="icon-deleete" /> 
                                </button>
                            </li>
                        ))
                    }
                   
                  
                </div>
            </form>
          
        </div>
    )
}

export default Task ; 