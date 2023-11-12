import React, { useState } from "react";

function Buscador({ datos, dataFiltro }) {
  const [textoBusqueda, setTextoBusqueda] = useState("");

  const handleChange = (e) => {
    setTextoBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const resultados = datos.filter((colaborador) => {
      return colaborador.nombre
        .toLowerCase()
        .includes(textoBusqueda.toLowerCase());
    });

    dataFiltro(resultados);
  };

  return (
    <div className="barraBuscador">
      <input
        type="text"
        placeholder="Buscar..."
        value={textoBusqueda}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Buscar
      </button>
      <div className="boton">
        <button onClick={resetPage}>Resetea Aquí</button>
      </div>
    </div>
  );
}

export default Buscador;
