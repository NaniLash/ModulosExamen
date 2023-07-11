const HeaderCardRegistros = () => {
  return (
    <>
      <div className="card-header p-3 text-start">
        <div className="row text-start justify-content-center align-items-center">
          <div type="button" className="col-6">
            <button className="btn btn-primary">
              <i className="fa-solid fa-file-excel"></i> EXPORTAR
            </button>
          </div>
          <div className="col-6 text-end">
            <div className="col text-muted">Página 1 de 317</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCardRegistros;
