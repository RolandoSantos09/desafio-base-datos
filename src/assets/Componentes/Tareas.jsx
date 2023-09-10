import { useState } from "react";
import { tareasIniciales } from "../ListaTareas";

const Tareas = () => {
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTareas, setListaTarea] = useState(tareasIniciales);
  // aquí enviamos el formulario cuando clickeamos el submit
  const enviarFormulario = (evento) => {
    evento.preventDefault();
    //agregamos spread operator para crear una nueva tarea, sumandola al resto
    setListaTarea([...listaTareas, { nombre: nombreTarea, completada: false }]);
    // aca logramos que se limpie el input para que quede en blanco despues de hacer submit
    setNombreTarea("");
  };
  //aqui capturamos la info del input
  const capturaInput = (evento) => {
    setNombreTarea(evento.target.value);
  };
  const completarTarea = (tarea) => {
    const nuevasTareas = [...listaTareas];
  };

  return (
    <>
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          className="nombreTarea"
          onChange={capturaInput}
          value={nombreTarea}
        />
        <button type="submit">Agregar Tarea</button>
      </form>
      <ul>
        {listaTareas.map((tarea) => (
          <li
            key={tarea.nombre}
            style={
              tarea.completada === true
                ? { textDecoration: "line-through" }
                : {}
            }
          >
            {tarea.nombre}{" "}
            {tarea.completada === false ? (
              <button onClick={() => completarTarea(tarea)}>Completar</button>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tareas;
