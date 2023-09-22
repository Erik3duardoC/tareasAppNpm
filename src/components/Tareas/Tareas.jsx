export const Tareas = ({tarea, index,handelCambiar, handelEliminar}) => {

  return (
    <>

<div className={`card ${tarea.realizada ? "bg-success" : "bg-light"}`} style={{ width: "18rem" }}>
    <div className="card-body">
     <h5 className="card-title"> Tarea {index}</h5>
        <p className="card-text">{tarea.descripcion}</p>
        <hr />
        <div className="d-grip gap2">
        <button onClick={() => handelEliminar(tarea.id)} href="#" className="btn btn-secondary">Borrar</button>
        <button onClick={() => handelCambiar(tarea.id)} href="#" className={`btn ${tarea.realizada ? "btn-success" : "btn-info"}`}>
            {tarea.realizada ? "Realizada" : "Marcar como Realizada"}
          </button>
    </div>
    </div>
  </div>
    </>
  )
}