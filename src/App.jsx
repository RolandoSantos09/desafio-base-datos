import "./App.css";
import Listado from "./assets/Componentes/Listado";
import { BaseColaboradores } from "./assets/BAseColaboradores";
import { useState } from "react";
import Buscador from "./assets/Componentes/Buscador";
import Formulario from "./assets/Componentes/Formulario";
import Header from "./assets/Componentes/Header";

function App() {
  const [datos, setDatos] = useState(BaseColaboradores);
  const [dataFiltro, setDataFiltro] = useState(datos);

  const [alert, setAlert] = useState({
    error: false,
    msg: "",
    color: "",
  });

  return (
    <>
      <Header titulo="" />

      <Formulario
        datos={datos}
        setDatosB={setDatos}
        dataFiltro={dataFiltro}
        setDataFiltro={setDataFiltro}
        alert={alert}
        setAlert={setAlert}
      />
      <Buscador datos={datos} dataFiltro={setDataFiltro} />
      <Listado
        datos={datos}
        setDatos={setDatos}
        dataFiltro={dataFiltro}
        setDataFiltro={setDataFiltro}
      />
    </>
  );
}
export default App;
