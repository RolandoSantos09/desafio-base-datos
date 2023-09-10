const Header = ({ titulo }) => {
  const misEstilos = {
    color: "white",
    fontSize: "3rem",
    textAlign: "center",
  };
  return (
    <div className="header">
      {" "}
      <h1 style={misEstilos}>{titulo}Listado Colaboradores</h1>
    </div>
  );
};
export default Header;
