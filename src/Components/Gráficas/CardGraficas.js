import { GraficoBarras, GraficoLineas } from "./CodigoGraficas";

const CardGraficas = () => {


  return (
    <>
      <div className="card mb-3">
        <h5 className="card-header">Gráficas</h5>
        <div className="card-body">
          <div className="row justify-content-center align-items-center p-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6 mt-3 mb-3">
              <GraficoBarras />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6 mt-3 mb-3">
              <GraficoLineas />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardGraficas;
