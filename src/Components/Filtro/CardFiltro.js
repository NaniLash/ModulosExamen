import SelectFiltro from "./SelectFiltro";

const CardFiltro = () => {
  return (
    <>
      <div className="card mb-3 shadow-sm bg-body-tertiary rounded">
        <div className="card-header fs-4">Filtro</div>
        <div className="card-body">
          <div className="row justify-content-center align-items-center g-2">
            <div className="col/12">
              <SelectFiltro />
            </div>
          </div>
        </div>
      </div>
      {/* Mostrar vistas */}
      {/*!opcionSeleccionada.includes("opcion0") && <div>{/* <Chart /> */}
    </>
  );
};

export default CardFiltro;
