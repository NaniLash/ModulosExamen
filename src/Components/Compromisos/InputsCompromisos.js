import FloatingForm from "../Complementos/FloatingForm";

const datosSexo = [
  { id: 1, valor: 1, nombre: "Masculino" },
  { id: 2, valor: 2, nombre: "Femenino" },
  { id: 3, valor: 3, nombre: "Prefiero no decirlo" },
];

const datosEstado = [
  { id: 1, valor: 1, nombre: "Durango" },
  { id: 2, valor: 2, nombre: "Chiapas" },
  { id: 3, valor: 3, nombre: "Queretaro" },
  { id: 4, valor: 4, nombre: "Morelos" },
  { id: 5, valor: 5, nombre: "Puebla" },
];

const datosMunicipio = [
  { id: 1, valor: 1, nombre: "Victoria de Durango" },
  { id: 2, valor: 2, nombre: "Lerdo" },
  { id: 3, valor: 3, nombre: "Torreon" },
  { id: 4, valor: 4, nombre: "Zapopan" },
  { id: 5, valor: 5, nombre: "Guadalajara" },
];

const datosLocalidad = [
  { id: 1, valor: 1, nombre: "Palmas" },
  { id: 2, valor: 2, nombre: "Forestal" },
  { id: 3, valor: 3, nombre: "Fidel Castro" },
  { id: 4, valor: 4, nombre: "Cypress" },
  { id: 5, valor: 5, nombre: "Ambar" },
];

const InputCompromisos = ({ datos }) => {
  return (
    <>
      <div className="row g-2">
        {datos.map((dato) => (
          <div
            key={dato.id}
            className={`col-${dato.col} col-sm-${dato.colSm} col-md-${dato.colMd} col-lg-${dato.colLg}`}
          >
            {dato.campo === "input" ? (
              <div className="form-floating mb-2">
                <input
                  type={dato.tipe}
                  className="form-control"
                  id="floatingInput"
                  placeholder={`${dato.name}`}
                />
                <label for="floatingInput" className="text-muted">
                  <i
                    className="fa-solid fa-asterisk fa-2xs"
                    style={{ color: "#ff0000" }}
                  ></i>{" "}
                  {dato.name}
                </label>
              </div>
            ) : dato.campo === "select" ? (
              <>
                {dato.tipe === "sexo" ? (
                  <FloatingForm datos={datosSexo} type="Sexo" />
                ) : dato.tipe === "estado" ? (
                  <FloatingForm datos={datosEstado} type="Estado" />
                ) : dato.tipe === "municipio" ? (
                  <FloatingForm datos={datosMunicipio} type="Municipio" />
                ) : dato.tipe === "localidad" ? (
                  <FloatingForm datos={datosLocalidad} type="Localidad" />
                ) : null}
              </>
            ) : dato.campo === "checkbox" ? (
              <div className="d-flex justify-content-center align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Desea ser voluntario
                  </label>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default InputCompromisos;
