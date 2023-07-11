import { useState } from "react";

const SelectFiltro = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

  const handleChange = (event) => {
    // actualizar e estado con la opción seleccinada
    setOpcionSeleccionada(event.target.value);
  };
  return (
    <>
      <select
        className="form-select"
        aria-label="Seleciona una opción"
        value={opcionSeleccionada}
        onChange={handleChange}
      >
        <option value={"opcion0"}>Selecciona una opción</option>
        <option value={"v_distritoFederal"}>Distrito Federal</option>
        <option value={"v_distritoLocal"}>Distrito Local</option>
      </select>
      
    </>
  );
};

export default SelectFiltro;
