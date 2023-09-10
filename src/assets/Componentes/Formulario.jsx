import { useState } from "react";
import Alert from "./Alert";
import Swal from "sweetalert2";

const Formulario = ({
  datos,
  setDatosB,
  dataFiltro,
  setDataFiltro,
  alert,
  setAlert,
}) => {
  const [formularioData, setFormularioData] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const validarFormulario = (e) => {
    e.preventDefault();

    const { nombre, correo, edad, cargo, telefono } = formularioData;
    const validarInput = !nombre || !correo || !edad || !cargo || !telefono;
    const formatoEmail =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const validarEmail = !formatoEmail.test(correo);

    if (validarInput) {
      setAlert({
        error: true,
        msg: Swal.fire("Por favor, complete todos los campos"),
        color: "danger",
      });

      return;
    } else {
      setAlert({
        error: true,
        msg: Swal.fire("Colaborador Agregado"),
        color: "Succes",
      });
    }

    if (validarEmail) {
      setAlert({
        error: true,
        msg: Swal.fire("Revisa el Correo"),
        color: "danger",
      });

      return;
    }

    setDatosB([...datos, { ...formularioData, id: 4 }]);
    setDataFiltro([...dataFiltro, { ...formularioData, id: 4 }]);

    setFormularioData({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };

  const handlerChange = (e) => {
    setFormularioData({
      ...formularioData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div id="contenedor">
        <div id="central">
          <div id="login">
            <div className="titulo">
              <h2>Agrega nuevo Colaborador</h2>
            </div>
            <div className="boxForm">
              <form id="loginform" onSubmit={validarFormulario}>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  onChange={handlerChange}
                  value={formularioData.nombre}
                />
                <input
                  type="email"
                  name="correo"
                  placeholder="Email"
                  onChange={handlerChange}
                  value={formularioData.correo}
                />
                <input
                  type="text"
                  name="edad"
                  placeholder="Edad"
                  onChange={handlerChange}
                  value={formularioData.edad}
                />
                <input
                  type="text"
                  name="cargo"
                  placeholder="Cargo"
                  onChange={handlerChange}
                  value={formularioData.cargo}
                />
                <input
                  type="text"
                  name="telefono"
                  placeholder="Telefono"
                  onChange={handlerChange}
                  value={formularioData.telefono}
                />
                <button type="submit" name="Ingresar">
                  Agregar
                </button>
              </form>
            </div>
            {alert.msg && (
              <Alert color={alert.color} messagge={alert.msg}></Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulario;
