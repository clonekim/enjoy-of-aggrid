import { ColumnApi, GridApi, GridReadyEvent } from "ag-grid-community";
import {  useState } from "react";


export default function useGrid (opt: any) {
  const [rowData, setRowData] = useState([]);
  const [api, setApi] = useState<GridApi>();
  const [columnApi, setColumnApi] = useState<ColumnApi>();


  opt.onGridReady = ({ api, columnApi }: GridReadyEvent) => {
    console.log("grid ready!");
    setApi(api);
    setColumnApi(columnApi);
  };

  return {
    rowData,
    setRowData,
    api,
    columnApi,
  };
}
