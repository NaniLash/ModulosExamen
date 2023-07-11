import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import TableCsv from "../../dataTable/dataTable.csv";

function parseCSVData(csv) {
  const parsedData = Papa.parse(csv, {
    header: true,
  });

  return parsedData.data;
}

function filterRows(data, startIndex, endIndex) {
  return data.slice(startIndex, endIndex);
}

const BodyCardRegistros = () => {
  const [csvData, setCsvData] = useState([]);
  const [numRows, setNumRows] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(TableCsv);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);

      const parsedData = parseCSVData(csv);
      setCsvData(parsedData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setStartIndex(0);
    setEndIndex(numRows);
  }, [numRows]);

  const handleNumRowsChange = (e) => {
    const selectedNumRows = parseInt(e.target.value, 10);
    setNumRows(selectedNumRows);
  };

  const handleNextClick = () => {
    const newDataLength = csvData.length;
    const newStartIndex = endIndex;
    const newEndIndex = endIndex + numRows;

    if (newEndIndex <= newDataLength) {
      setStartIndex(newStartIndex);
      setEndIndex(newEndIndex);
    }
  };

  const handlePrevClick = () => {
    const newStartIndex = Math.max(startIndex - numRows, 0);
    const newEndIndex = startIndex;

    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  };

  const filteredData = filterRows(csvData, startIndex, endIndex);
  {
    /*console.log(csvData)*/
  }

  return (
    <>
      <div className="card-body">
        <div className="table-responsive text-center">
          <table className="table table-sm table-responsive table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">DISTRITO LOCAL</th>
                <th scope="col">DISTRITO FEDERAL</th>
                <th scope="col">REGIÓN</th>
                <th scope="col">MUNICIPIO</th>
                <th scope="col">POLIGONO</th>
                <th scope="col">SECCION</th>
                <th scope="col">LNOM</th>
                <th scope="col">META</th>
                <th scope="col">COMPROMISOS</th>
                <th scope="col">AVANCE</th>
                <th scope="col">DETECTADOS</th>
                <th scope="col">OTROS</th>
                <th scope="col">PORCENTAJE</th>
                <th scope="col">EFECTIVIDAD</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  <td>{row["DISTRITO LOCAL"]}</td>
                  <td>{row["DISTRITO FEDERAL"]}</td>
                  <td>{row["REGION"]}</td>
                  <td>{row["MUNICIPIO"].toLowerCase()}</td>
                  <td>{row["POLIGONO"]}</td>
                  <td>{row["SECCION"]}</td>
                  <td>{row["LNOM"]}</td>
                  <td>{row["META"]}</td>
                  <td>{row["COMPROMISOS"]}</td>
                  <td>{row["AVANCE"]}</td>
                  <td>{parseFloat(row["DETECTADOS"]).toFixed(0)}</td>
                  <td>{row["OTROS"]}</td>
                  <td>{parseFloat(row["PORCENTAJE"]).toFixed(2)}</td>
                  <td>{parseFloat(row["EFECTIVIDAD"]).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-footer text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 d-grid gap-2">
            <button
              onClick={handlePrevClick}
              disabled={startIndex === 0}
              className="btn btn-primary"
            >
              Anterior
            </button>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 mt-2 mb-2">
            <select
              className="form-select form-select-sm"
              aria-label="Default select example"
              value={numRows}
              onChange={handleNumRowsChange}
            >
              <option value="5">5 Rows</option>
              <option value="10">10 Rows</option>
              <option value="20">20 Rows</option>
              <option value="50">50 Rows</option>
              <option value="100">100 Rows</option>
            </select>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 d-grid gap-2">
            <button
              onClick={handleNextClick}
              disabled={endIndex >= csvData.length}
              className="btn btn-primary"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyCardRegistros;
