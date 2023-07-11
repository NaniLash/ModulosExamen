export function Selects(props) {
  const { datos } = props;
  return (
    <>
      <select className="form-select" aria-label="Default select example">
        <option className="text-secondary">
          Seleccionar
        </option>
        {datos.map((dato) => (
          <option key={dato.id} value={dato.valor}>
            {dato.nombre}
          </option>
        ))}
      </select>
    </>
  );
}
