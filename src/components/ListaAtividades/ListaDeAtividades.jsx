import { useState } from "react";

const ListaDeAtividades = ({ atividades, setAtividades }) => {
  const [checkBox, setCheckBox] = useState(false);

  const marcarFeito = () => {
    setCheckBox(!checkBox);
  };

  // const deleteAll = () => {
  //   let deletarTudo = localStorage.clear("atividades");
  //   setAtividades(deletarTudo);
  // };

  const buscarAtividade = (atividade) => {
    let novaLista = atividades.filter((atv) => atv.id !== atividade.id);

    localStorage.setItem("atividades", JSON.stringify(novaLista));

    setAtividades(novaLista);
  };

  return (
    <div className="w-[500px] h-full flex flex-col text-white rounded-xl overflow-hidden">
      {/* <button onClick={deleteAll}>deleteAll</button> */}
      {atividades.length >= 0 ? (
        atividades.map((atv) => {
          let ultimaAtividadeAdd = atv.id === atividades.length - 1;
          let animation = ultimaAtividadeAdd ? "animate-showAtividade" : "";

          return (
            <div
              key={atv.id}
              className={`w-full max-h-[100px] overflow-hidden border-b border-black/30 flex items-center justify-between p-4 ${animation}`}
              style={{ backgroundColor: checkBox ? "#71ff712c" : "" }}
            >
              <div className="flex items-center justify-center gap-10">
                <input
                  type="checkbox"
                  value={checkBox}
                  onChange={marcarFeito}
                />
                <div>
                  <h1
                    className="text-[1.2em] font-medium"
                    style={{
                      textDecoration: checkBox ? "line-through" : "",
                      color: checkBox ? "#ffffffac" : "white",
                    }}
                  >
                    {atv.nomeAtv}
                  </h1>
                  <p
                    className="text-[.9em] font-medium text-white/60"
                    style={{
                      textDecoration: checkBox ? "line-through" : "",
                      color: checkBox ? "#ffffffac" : "white",
                    }}
                  >
                    {atv.descAtv}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => buscarAtividade(atv)}>
                  <i
                    className="fa-regular fa-trash-can"
                    style={{ fontSize: "20px" }}
                  ></i>
                </button>
                <i
                  className="fa-regular fa-edit"
                  style={{ fontSize: "20px" }}
                ></i>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="text-2xl text-center p-2 bg-blue-400 rounded-lg">
          Insira atividades!
        </h1>
      )}
    </div>
  );
};

export default ListaDeAtividades;
