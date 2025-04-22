import { useRef, useState } from "react";

const ListaDeAtividades = ({ atividades }) => {
  const [checkBox, setCheckBox] = useState(false);

  const marcarFeito = () => {
    setCheckBox(!checkBox);
  };

  return (
    <div className="w-[500px] h-full flex flex-col text-white">
      {atividades.length > 0
        ? atividades.map((atv, index) => (
            <div
              key={index}
              className="w-full max-h-[100px] overflow-hidden border-b border-black/30 flex items-center justify-between p-4"
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
                <i
                  className="fa-regular fa-trash-can"
                  style={{ fontSize: "20px" }}
                ></i>
                <i
                  className="fa-regular fa-edit"
                  style={{ fontSize: "20px" }}
                ></i>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default ListaDeAtividades;
