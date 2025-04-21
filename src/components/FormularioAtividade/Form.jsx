import { useState, useEffect } from "react";
import ListaDeAtividades from "../ListaAtividades/ListaDeAtividades";

const Form = () => {
  const [nomeAtv, setNomeAtv] = useState("");
  const [descAtv, setDescAtv] = useState("");
  const [atividades, setAtividades] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaAtividade = {
      nomeAtv,
      descAtv,
    };

    setAtividades((prevAtividades) => [...prevAtividades, novaAtividade]);

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
        className="w-[500px] h-[500px] flex flex-col max-w-7xl bg-blue-200 rounded-2xl"
      >
        <label>
          Nome da atividade
          <input
            type="text"
            value={nomeAtv}
            onChange={(e) => setNomeAtv(e.target.value)}
          />
        </label>
        <label>
          Descrição da atividade
          <input
            type="text"
            value={descAtv}
            onChange={(e) => setDescAtv(e.target.value)}
          />
        </label>
        <button>Confirmar</button>
      </form>

      <ListaDeAtividades atividades={atividades} />
    </>
  );
};

export default Form;
