import React, { useState } from "react";
import {
  Buttonsinfo,
  ButtonsPrimary,
  ButtonsDanger,
} from "../Complementos/Buttons";
import InputsCompromisos from "./InputsCompromisos";

const CardBody = () => {
  const [mostrarInputs, setMostrarInputs] = useState(false);

  const handleRespuestaChange = (event) => {
    const respuesta = event.target.value;
    if (respuesta === 'Si') {
      setMostrarInputs(false);
    } else {
      setMostrarInputs(true);
    }
  };

  const datosFormulario1 = [
    {
      id: 1,
      name: "Clave Elector",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 6,
      colMd: 6,
      colLg: 3,
    },
    {
      id: 2,
      name: "Nombre(s)",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 6,
      colMd: 6,
      colLg: 3,
    },
    {
      id: 3,
      name: "Apellido Paterno",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 6,
      colMd: 6,
      colLg: 3,
    },
    {
      id: 4,
      name: "Apellido Materno",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 6,
      colMd: 6,
      colLg: 3,
    },
    {
      id: 5,
      name: "Fecha de nacimiento",
      campo: "input",
      tipe: "date",
      col: 12,
      colSm: 12,
      colMd: 4,
      colLg: 4,
    },
    {
      id: 6,
      name: "Sexo",
      campo: "select",
      tipe: "sexo",
      col: 12,
      colSm: 12,
      colMd: 4,
      colLg: 4,
    },
    {
      id: 7,
      name: "Estado de nacimiento",
      campo: "select",
      tipe: "estado",
      col: 12,
      colSm: 12,
      colMd: 4,
      colLg: 4,
    },
  ];
  const datosFormulario2 = [
    {
      id: 1,
      name: "Calle",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 12,
      colMd: 6,
      colLg: 5,
    },
    {
      id: 2,
      name: "Número Ext.",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 6,
      colMd: 6,
      colLg: 2,
    },
    {
      id: 3,
      name: "Número Int.",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 6,
      colMd: 6,
      colLg: 2,
    },
    {
      id: 4,
      name: "Municipio vive",
      campo: "select",
      tipe: "municipio",
      col: 12,
      colSm: 12,
      colMd: 6,
      colLg: 3,
    },
    {
      id: 5,
      name: "Localidad",
      campo: "select",
      tipe: "localidad",
      col: 12,
      colSm: 12,
      colMd: 6,
      colLg: 5,
    },
    {
      id: 6,
      name: "Colonia",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 6,
      colMd: 6,
      colLg: 3,
    },
    {
      id: 7,
      name: "CP",
      campo: "input",
      tipe: "number",
      col: 12,
      colSm: 6,
      colMd: 6,
      colLg: 2,
    },
    {
      id: 8,
      name: "Seccion vota",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 12,
      colMd: 6,
      colLg: 2,
    },
    {
      id: 9,
      name: "Teléfono Celular",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 6,
      colMd: 4,
      colLg: 3,
    },
    {
      id: 10,
      name: "Teléfono Fijo",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 6,
      colMd: 4,
      colLg: 3,
    },
    {
      id: 11,
      name: "Teléfono Mensaje",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 7,
      colMd: 8,
      colLg: 3,
    },
    {
      id: 12,
      campo: "checkbox",
      col: 12,
      colSm: 5,
      colMd: 4,
      colLg: 3,
    },
  ];
  const datosFormulario3 = [
    {
      id: 1,
      name: "Calle",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 12,
      colMd: 6,
      colLg: 5,
    },
    {
      id: 2,
      name: "Número Ext.",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 6,
      colMd: 6,
      colLg: 2,
    },
    {
      id: 3,
      name: "Número Int.",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 6,
      colMd: 6,
      colLg: 2,
    },
    {
      id: 4,
      name: "Municipio vive",
      campo: "select",
      tipe: "municipio",
      col: 12,
      colSm: 12,
      colMd: 6,
      colLg: 3,
    },
    {
      id: 5,
      name: "Localidad",
      campo: "select",
      tipe: "localidad",
      col: 12,
      colSm: 12,
      colMd: 4,
      colLg: 5,
    },
    {
      id: 6,
      name: "Colonia",
      campo: "input",
      tipe: "",
      col: 12,
      colSm: 6,
      colMd: 4,
      colLg: 4,
    },
    {
      id: 7,
      name: "CP",
      campo: "input",
      tipe: "number",
      col: 12,
      colSm: 6,
      colMd: 4,
      colLg: 3,
    },
  ];
  return (
    <>
      <div className="card-body">
        <div className="row g-3">
          <div className="col-12">
            <div className="row">
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Responsable"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  ></input>
                  <button
                    className="btn btn-outline-warning"
                    type="button"
                    id="button-addon2"
                    data-bs-toggle="modal"
                    data-bs-target="#responsableModal"
                  >
                    <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <InputsCompromisos datos={datosFormulario1} />
        <div className="row g-3 mb-3">
          <div className="col-12 text-center text-primary">
            <h4>Domicilio donde vive</h4>
          </div>
        </div>
        <InputsCompromisos datos={datosFormulario2} />
        <div className="row g-3 mt-1 mb-3">
          <div className="col-12 text-center text-primary">
            <h4>Segmento</h4>
          </div>
        </div>
        <div className="row g-3 mb-2">
          <div className="col-12 text-center text-primary">
            <Buttonsinfo name="MAPACHE" />
          </div>
        </div>
        <div className="row g-3 mt-3 mb-3">
          <div className="col-12 text-center text-primary">
            <h4>
              ¿La dirección de la credencial de Elector y donde vive son la
              misma?
            </h4>
          </div>
        </div>
        <div className="row g-3 mb-2">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Si"
                onChange={handleRespuestaChange}
              ></input>
              <label class="form-check-label" for="inlineRadio1">
                Si
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="No"
                onChange={handleRespuestaChange}
              ></input>
              <label class="form-check-label" for="inlineRadio2">
                No
              </label>
            </div>
          </div>
        </div>
        {mostrarInputs && (
          <>
            <div className="row g-3 mt-3 mb-3">
              <div className="col-12 text-center text-primary">
                <h4>Capture información de la credencial de Elector</h4>
              </div>
            </div>
            <InputsCompromisos datos={datosFormulario3} />
          </>
        )}
        <div className="row g-3 mb-2">
          <div className="col-6 text-end">
            <ButtonsDanger name="LIMPIAR" />
          </div>
          <div className="col-6 text-start">
            <ButtonsPrimary name="GUARDAR" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBody;
