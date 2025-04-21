import { useState, useEffect } from "react";

const Form = () => {
  const [nomeAtv, setNomeAtv] = useState("");
  const [statusAtv, setStatusAtv] = useState("A realizar");
  const [atividades, setAtividades] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaAtividade = {
      nomeAtv,
      statusAtv,
    };

    setAtividades((prevAtividades) => [...prevAtividades, novaAtividade]);
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
      <form onSubmit={handleSubmit}>
        <label>
          Nome da atividade
          <input
            type="text"
            value={nomeAtv}
            onChange={(e) => setNomeAtv(e.target.value)}
          />
        </label>
        <label>
          Status da tarefa:
          <select
            value={statusAtv}
            onChange={(e) => setStatusAtv(e.target.value)}
          >
            <option value="A realizar">A realizar</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Realizado">Realizado</option>
          </select>
        </label>
        <button>Confirmar</button>
      </form>

      <div className="w-[300px] h-[800px] bg-blue-300 flex flex-col">
        {atividades.length > 0
          ? atividades.map((atv, index) => (
              <div key={index}>
                <p>{atv.nomeAtv}</p>
                <p>{atv.statusAtv}</p>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default Form;
