import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import "./styles/style.css"

function Task() {
  const [tarefa, setTarefa] = useState("");
  const [itens, setItens] = useState([]);

  function Enviar(evento) {
    evento.preventDefault();

    if (tarefa.trim() !== "") {
      const newItens = {
        id: Date.now(),
        text: tarefa,
      };
      setItens((prevItens) => [...prevItens, newItens]);
      setTarefa("");
    }
  }

  function Excluir(id) {
    const novaLista = itens.filter((item) => item.id !== id);
    setItens(novaLista);
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-md text-center font-poppins">
      <h1 className="text-2xl font-semibold text-indigo-600 mb-5">
        Lista de Tarefas
      </h1>

      <form>
        <div className="flex gap-3 justify-center mb-5">
          <input
            type="text"
            placeholder="Digite sua tarefa"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            className="flex-1 p-2 border-2 border-indigo-600 rounded-lg outline-none text-base focus:border-[#78C841]"
          />
          <button
            type="submit"
            onClick={Enviar}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          >
            Adicionar tarefa
          </button>
        </div>

        <div>
          {itens.length === 0 && (
            <p className="text-gray-600">Não há tarefas adicionadas</p>
          )}
        </div>

        <div>
          {itens.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-lg my-2 shadow-sm list-none"
            >
              {item.text}
              <button
                type="button"
                className="flex items-center gap-2 bg-red-500 text-white px-3 py-1.5 rounded-md text-sm cursor-pointer transition duration-300 hover:bg-red-600"
                onClick={() => Excluir(item.id)}
              >
                Excluir
                <MdDeleteForever className="text-lg" />
              </button>
            </li>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Task;
