const ResultadosResponsable = (props) => {
  const { datos } = props;
  return (
    <>
      {datos.map((dato) => (
        <div className="card mt-3">
          <div className="card-header fs-5">Responsable</div>
          <div className="card-body">
            <div className="container overflow-hidden text-muted">
              <div className="row gy-1">
                <div key={dato.id} className="col-12">
                  <div className="p-2">
                    celular: {dato.celular}
                    <br />
                    Nombre: {dato.nombre}
                    <br />
                    Responsabilidad: {dato.responsabilidad}
                    <br />
                    Municipio: {dato.municipio}
                    <br />
                    Sección: {dato.seccion}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResultadosResponsable;
