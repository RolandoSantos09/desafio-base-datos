// import React, { useState } from "react";

// const Buscador = ({ datos, DataFiltro }) => {
//   const [buscarPalabra, setBuscarPalabra] = useState("");

//   const inputHandler = (e) => {
//     e.preventDefault();
//     const buscarPalabra = e.target.value.toLowerCase();
//     console.log(datos);
//     const resultado = datos.filter(
//       (colaborador) =>
//         colaborador.nombre.toLowerCase().includes(buscarPalabra) ||
//         colaborador.correo.toLowerCase().includes(buscarPalabra) ||
//         colaborador.edad.includes(buscarPalabra) ||
//         colaborador.cargo.toLowerCase().includes(buscarPalabra) ||
//         colaborador.telefono.includes(buscarPalabra)
//     );

//     // setDataFiltro(resultado);
//     // setBuscarPalabra("");
//     // buscarPalabra(datos);

//     setDataFiltro(resultado);
//     setBuscarPalabra(e.target.value);
//   };

//   return (
//     <div className="barraBuscador">
//       <input
//         className="form-control"
//         type="text"
//         value={buscarPalabra}
//         placeholder="Buscador"
//         onChange={inputHandler}
//       ></input>
//     </div>
//   );
// };

// export default Buscador;
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
    </div>
  );
}

export default Buscador;
