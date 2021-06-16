import { ColumnApi, GridApi, GridReadyEvent } from "ag-grid-community";
import { useEffect, useState } from "react";


export default function useGrid (opt: any) {
  const [rowData, setRowData] = useState([]);
  const [api, setApi] = useState<GridApi>();
  const [columnApi, setColumnApi] = useState<ColumnApi>();

  const defaultGridOptions = {
    defaultColDef: {
      editable: false,
      resizable: true,
    },
  };

  useEffect(() => {
    Object.assign(defaultGridOptions, opt);
    console.log("grid effect!");
  }, []);

  opt.onGridReady = ({ api, columnApi }: GridReadyEvent) => {
    console.log("grid ready!");
    setApi(api);
    setColumnApi(columnApi);
  };

  opt.getRowHeight = ({ data }: any): number | any => {
    console.log('h')
    if (data.dummy) return 1.3;

    return null;
  };

  return {
    rowData,
    setRowData,
    api,
    columnApi,
  };
}
