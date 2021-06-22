import React, { useEffect } from "react";
import useGrid from "./components/useGrid";
import { Grid } from "./components/Grid";

import format  from 'date-fns/format';


import './App.css';

const dateFormatter = (param: any) => {
  if(param.value ) {
    return format(param.value, 'yyyy-MM-dd ');
  }
}

const timeFormatter = (param: any) => {
  if(param.data.date ) {
    return format(param.data.date, 'HH:mm:ss');
  }
}

function App() {
  const gridOptions = {
    editable: true,
  };

  const columns = [
    { headerName: "ID", field: "id", width: 100  },
    { headerName: "Color", field: "color", editable: false, width: 100 },
    { headerName: "Date", field: "date", valueFormatter: dateFormatter },
    { headerName: "Second",  valueFormatter: timeFormatter },
  ];

  const datas: any = [
    { id: 1, color: "red", date: new Date() },
    { id: 2, color: "blue", date: null},
  ];

  const { api, rowData, setRowData } = useGrid(gridOptions);

  const clean = () => {
    setRowData([]);
  }

  const createDummy= () => {
    setRowData(datas);
  }

  useEffect(() => {
    setRowData(datas);
  }, []);

  return (
    <div className="App">
      <button onClick={createDummy}>dummy!</button>&nbsp;
      <button onClick={clean}>empty!</button>
      <Grid height={400} width={600} columns={columns} rowData={rowData} gridOptions={gridOptions} />
    </div>
  );
}

export default App;
