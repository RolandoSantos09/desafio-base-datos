import { Table } from "react-bootstrap";

const Listado = ({ datos, setDatos, dataFiltro, setDataFiltro }) => {
  const borrarColaborador = (idColaborador) => {
    const colaboradores = datos.filter(
      (colaborador) => colaborador.id !== idColaborador
    );
    setDatos(colaboradores);

    const colaboradoresFiltrados = dataFiltro.filter(
      (colaborador) => colaborador.id !== idColaborador
    );
    setDataFiltro(colaboradoresFiltrados);
  };

  const contenidoTabla = dataFiltro.map((colaborador) => (
    <tr key={colaborador.id}>
      <th scope="row">{colaborador.id}</th>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
      <td>
        <button
          className="btn btn-primary"
          type="button"
          onClick={(e) => borrarColaborador(colaborador.id)}
        >
          Borrar
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="boxtable">
      <Table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">nombre</th>
            <th scope="col">correo</th>
            <th scope="col">Edad</th>
            <th scope="col">cargo</th>
            <th scope="col">telefóno</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{contenidoTabla}</tbody>
      </Table>
    </div>
  );
};

export default Listado;
