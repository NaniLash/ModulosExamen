import FloatingForm from "../Complementos/FloatingForm";
import { ButtonsDanger, Buttonsinfo } from "../Complementos/Buttons";
import ResultadosResponsable from "./ResultadosResponsable";

const ModalResponsable = () => {
  const datosMun = [{ id: 1, type: "Municipio", valor: 1, nombre: "Durango" }];

  const datosSec = [
    { id: 1, type: "Seccion", valor: 1, nombre: "Durango" },
    { id: 2, type: "Seccion", valor: 2, nombre: "Lerdo" },
  ];

  const datosResp = [
    {id: 1, celular: 1, nombre: "Giovis", responsabilidad: "Sin responsabilidad", municipio: "ABASOLO", seccion: 12345},
    {id: 2, celular: 552513608, nombre: "Jose", responsabilidad: "Sin responsabilidad", municipio: "ABASOLO", seccion: 61825},
  ]
  return (
    <>
      <div
        className="modal fade"
        id="responsableModal"
        tabindex="-1"
        aria-labelledby="responsableModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h1 className="modal-title fs-4" id="responsableModalLabel">
                Busqueda de Responsable
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row text-center text-muted">
                <div className="col-12 mb-3">
                  <h3>Busqueda de Responsable</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Responsable"
                    />
                    <label for="floatingInput">Responsable</label>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <FloatingForm datos={datosMun} type="Municipio" />
                </div>
                <div className="col-12 col-md-4">
                  <FloatingForm datos={datosSec} type="Sección "/>
                </div>
              </div>
              <div className="text-center mt-2">
                <Buttonsinfo name="BUSCAR"/>
                <ButtonsDanger name="LIMPIAR"/>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <ResultadosResponsable datos={datosResp}/>
                </div>
                <div className="col-12 col-md-6">
                  <ResultadosResponsable datos={datosResp}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalResponsable;
