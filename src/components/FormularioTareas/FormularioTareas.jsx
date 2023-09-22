import { useState } from "react";
//cuand se mueven cosas exportarlas
export const FormularioTareas = ({ descripcion, handleSubmit, handlerInputChange }) => {
  return (
    <>
      <h3>Agregar tareas</h3>
      <hr />

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="tareaInput" className="form-label">
            Descripcion
          </label>
          <input
            onChange={(e) => handlerInputChange(e)}
            type="text"
            className="form-control"
            id="exampleInputText1"
            aria-describedby="textHelp"
            value={descripcion}
          />
          <div id="descriptText" className="form-text">
            Agrega una nueva tarea
          </div>
          <div className="className d-grip gap-2">
            <button type="submit" className="btn btn-success">
              Agregar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
