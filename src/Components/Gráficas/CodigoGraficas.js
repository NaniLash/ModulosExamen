import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HCExporting from "highcharts/modules/exporting";

// Importar los módulos adicionales
HCExporting(Highcharts);

export function GraficoBarras() {
  const data1 = [
    { name: "R1", value: 10 },
    { name: "R2", value: 20 },
    { name: "R3", value: 15 },
    { name: "R4", value: 7 },
    { name: "R5", value: 4 },
  ];
  const data2 = [
    { name: "R1", value: 5 },
    { name: "R2", value: 15 },
    { name: "R3", value: 12 },
    { name: "R4", value: 8 },
    { name: "R5", value: 9 },
  ];
  const data3 = [
    { name: "R1", value: 10 },
    { name: "R2", value: 20 },
    { name: "R3", value: 2 },
    { name: "R4", value: 16 },
    { name: "R5", value: 5 },
  ];
  const data4 = [
    { name: "R1", value: 9 },
    { name: "R2", value: 32 },
    { name: "R3", value: 21 },
    { name: "R4", value: 3 },
    { name: "R5", value: 2 },
  ];
  const data5 = [
    { name: "R1", value: 1 },
    { name: "R2", value: 9 },
    { name: "R3", value: 24 },
    { name: "R4", value: 27 },
    { name: "R5", value: 10 },
  ];
  const data6 = [
    { name: "R1", value: 8 },
    { name: "R2", value: 30 },
    { name: "R3", value: 21 },
    { name: "R4", value: 18 },
    { name: "R5", value: 1 },
  ];
  useEffect(() => {
    // Configuración del gráfico
    const options = {
      chart: {
        type: "column",
      },
      title: {
        text: "Bingo",
      },
      xAxis: {
        categories: data1.map((item) => item.name),
      },
      yAxis: {
        title: {
          text: "Valores",
        },
      },
      series: [
        {
          name: "LNOM",
          data: data1.map((item) => item.value),
        },
        {
          name: "META",
          data: data2.map((item) => item.value),
        },
        {
          name: "COMPROMISOS",
          data: data3.map((item) => item.value),
        },
        {
          name: "AVANCE",
          data: data4.map((item) => item.value),
        },
        {
          name: "SIAN",
          data: data5.map((item) => item.value),
        },
        {
          name: "OTROS",
          data: data6.map((item) => item.value),
        },
      ],
    };

    // Crear el gráfico
    Highcharts.chart("bar-chart", options);
  }, []);

  return <div id="bar-chart" style={{ width: "100%", height: "400px" }} />;
}

export function GraficoLineas() {
  useEffect(() => {
    // Datos para la gráfica
    const data1 = [
        { name: "R1", value: 10 },
        { name: "R2", value: 20 },
        { name: "R3", value: 15 },
        { name: "R4", value: 7 },
        { name: "R5", value: 4 },
      ];
      const data2 = [
        { name: "R1", value: 5 },
        { name: "R2", value: 15 },
        { name: "R3", value: 12 },
        { name: "R4", value: 8 },
        { name: "R5", value: 9 },
      ];
      const data3 = [
        { name: "R1", value: 10 },
        { name: "R2", value: 20 },
        { name: "R3", value: 2 },
        { name: "R4", value: 16 },
        { name: "R5", value: 5 },
      ];
      const data4 = [
        { name: "R1", value: 9 },
        { name: "R2", value: 32 },
        { name: "R3", value: 21 },
        { name: "R4", value: 3 },
        { name: "R5", value: 2 },
      ];
      const data5 = [
        { name: "R1", value: 1 },
        { name: "R2", value: 9 },
        { name: "R3", value: 24 },
        { name: "R4", value: 27 },
        { name: "R5", value: 10 },
      ];
      const data6 = [
        { name: "R1", value: 8 },
        { name: "R2", value: 30 },
        { name: "R3", value: 21 },
        { name: "R4", value: 18 },
        { name: "R5", value: 1 },
      ];

    // Configuración de la gráfica
    const options = {
      chart: {
        type: "line",
      },
      title: {
        text: "Movilización",
      },
      xAxis: {
        categories: data1.map((item) => item.name),
      },
      yAxis: {
        title: {
          text: "Valores",
        },
      },
      plotOptions: {
        line: {
          marker: {
            enabled: true, // Habilitar los puntos en la gráfica
          },
        },
      },
      series: [
        {
          name: "LNOM",
          data: data1.map((item) => item.value),
        },
        {
          name: "META",
          data: data2.map((item) => item.value),
        },
        {
          name: "COMPROMISOS",
          data: data3.map((item) => item.value),
        },
        {
          name: "AVANCE",
          data: data4.map((item) => item.value),
        },
        {
          name: "SIAN",
          data: data5.map((item) => item.value),
        },
        {
          name: "OTROS",
          data: data6.map((item) => item.value),
        },
      ],
    };

    // Crear la gráfica
    Highcharts.chart("chart-container", options);
  }, []);

  return (
    <div id="chart-container" style={{ width: "100%", height: "400px" }} />
  );
}
