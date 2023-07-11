import HeaderCardRegistros from "./HeaderCardRegistro";
import BodyCardRegistros from "./BodyCardRegistros";

const CardRegistros = () => {
  return (
    <>
      <div className="card shadow-sm bg-body-tertiary rounded">
        <HeaderCardRegistros />
        <BodyCardRegistros />
      </div>
    </>
  );
};

export default CardRegistros;
