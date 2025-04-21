import React from "react";

const ListaDeAtividades = ({ atividades }) => {
  return (
    <div className="w-[500px] h-[500px] bg-gray-200 flex flex-col rounded-2xl">
      {atividades.length > 0
        ? atividades.map((atv, index) => (
            <div
              key={index}
              className="w-full max-h-[100px] overflow-hidden border-b border-black/30 flex items-center justify-between p-4"
            >
              <div className="flex items-center justify-center gap-10">
                <input type="checkbox" />
                <div>
                  <h1 className="text-[1.2em] font-medium">{atv.nomeAtv}</h1>
                  <p className="text-[.9em] font-medium text-black/60">
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
