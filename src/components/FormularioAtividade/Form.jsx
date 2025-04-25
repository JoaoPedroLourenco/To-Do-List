import { useState, useEffect } from "react";
import ListaDeAtividades from "../ListaAtividades/ListaDeAtividades";

const Form = () => {
  const [nomeAtv, setNomeAtv] = useState("");
  const [descAtv, setDescAtv] = useState("");
  const [atividades, setAtividades] = useState([]);
  const [id, setId] = useState(0);

  const novaAtividade = {
    id,
    nomeAtv,
    descAtv,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setId(id + 1);

    setAtividades((prevAtividades) => [novaAtividade, ...prevAtividades]);

    setNomeAtv("");
    setDescAtv("");
  };

  useEffect(() => {
    console.log(atividades);
    localStorage.setItem("atividades", JSON.stringify(atividades));
  }, [atividades]);

  useEffect(() => {
    const atividadeParse = JSON.parse(localStorage.getItem("atividades"));
    setAtividades(atividadeParse);
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-auto h-auto flex flex-col gap-2 max-w-7xl p-2 rounded-[6px]"
      >
        <label className="flex flex-col gap-1">
          Nome da atividade
          <input
            type="text"
            value={nomeAtv}
            onChange={(e) => setNomeAtv(e.target.value)}
          />
        </label>
        <label>
          Descrição da atividade
          <textarea
            type="text"
            value={descAtv}
            onChange={(e) => setDescAtv(e.target.value)}
          />
        </label>
        <button className="w-full h-[35px] bg-blue-600 rounded-md text-white flex items-center justify-center hover:bg-blue-500 duration-200 cursor-pointer">
          Adicionar tarefa
        </button>
      </form>

      <ListaDeAtividades
        atividades={atividades}
        setAtividades={setAtividades}
        novaAtividade={novaAtividade}
      />
    </>
  );
};

export default Form;
