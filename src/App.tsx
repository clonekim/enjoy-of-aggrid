import React, { useEffect } from "react";
import useGrid from "./components/useGrid";
import { Grid } from "./components/Grid";

function App() {
  const gridOptions = {
    editable: true
  };

  const columns = [
    { headerName: "ID", field: "id", valueFormatter:(params:any) => params.value+ 100 },
    { headerName: "Color", field: "color", editable: false },
  ];

  const datas: any = [
    { id: 1, color: "red" },
    { id: 1, color: "blue" },
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
