import ContainerFilter from "./ModuloUno";
import Graficas from "./Graficas";
import Tablas from "./TablaExcel";
import BusquedaResponsable from "./BusquedaResponsable";
import CardCompromisos from "../Components/Compromisos/CardCompromisos";

const Layout = () => {
  return (
    <>
      <ContainerFilter />
      <Graficas />
      <Tablas />
      <BusquedaResponsable />
      <CardCompromisos />
    </>
  );
};

export default Layout;
