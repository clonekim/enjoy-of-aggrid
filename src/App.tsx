import React, { useEffect } from "react";
import useGrid from "./components/useGrid";
import { Grid } from "./components/Grid";

import './App.css';

function App() {
  const gridOptions = {
    editable: true,
  };

  const columns = [
    { headerName: "ID", field: "id"  },
    { headerName: "Color", field: "color", editable: false },
  ];

  const datas: any = [
    { id: 1, color: "red" },
    { id: 2, color: "blue" },
  ];

  const { api, rowData, setRowData } = useGrid(gridOptions);

  const clean = () => {
    setRowData([]);
  }

  useEffect(() => {
    setRowData(datas);
  }, []);

  return (
    <div className="App">
      <button onClick={clean}>empty!</button>
      <Grid height={400} width={600} columns={columns} rowData={rowData} gridOptions={gridOptions} />
    </div>
  );
}

export default App;
