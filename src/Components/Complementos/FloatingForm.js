const FloatingForm = (props) => {
  const { datos } = props;

  return (
    <>
      <div className="form-floating mb-3">
        <select
          className="form-select"
          id="floatingSelect"
          aria-label="Floating label"
        >
          <option className="text-secondary">Seleccionar</option>
          {datos.map((dato) => (
            <option key={dato.id} value={dato.valor}>
              {dato.nombre}
            </option>
          ))}
        </select>
        <label for="floatingSelect">
          <i
            className="fa-solid fa-asterisk fa-2xs"
            style={{ color: "#ff0000" }}
          ></i>{" "}
          {props.type}
        </label>
      </div>
    </>
  );
};

export default FloatingForm;
