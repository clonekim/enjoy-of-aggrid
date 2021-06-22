import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { omit } from 'lodash';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export interface GridProps {
  width: number | string;
  height: number | string;
  gridOptions?: any | undefined;
  columns: any[];
  rowData: any[];
}

const staticGridOptions = {
  editable: false,
  resizable: true
};

const noRowOverlay =() => {
  return(
    <div>No Data</div>
  );
}

export const Grid: React.FC<GridProps> = ({
  height,
  width,
  rowData,
  columns,
  gridOptions = staticGridOptions,
}: GridProps) => {

  const defaultGridOpitons = {
    defaultColDef: {
      editable: (!!gridOptions.editable && gridOptions.editable) || false,
      resizable: (!!gridOptions.editable && gridOptions.resizable) || true
    }
  };

  const makeColumnDefs = (cols: any[]) => {
    return cols.map((col) =>
      Object.assign(col, {
        suppressMovable: true,
      })
    );
  };

  const makeGridOptions = () => {
    return Object.assign({},
      defaultGridOpitons,
      {
        frameworkComponents: {
          noRowsOverlay: noRowOverlay
        }
      },
      omit(gridOptions, ['editable', 'resizable']));
  };

  return (
    <div className="ag-theme-material" style={{ height: height, width: width }}>
      <AgGridReact
        columnDefs={makeColumnDefs(columns)}
        rowData={rowData}
        noRowsOverlayComponent={'noRowsOverlay'}
        gridOptions={makeGridOptions()}></AgGridReact>
    </div>
  );
};

const PATTERNS = {
  NUMBER: /(^[+-]?\d+)(\d{3})/,
};

export const numberFormatter = (value: any): string => {
  if (!value) return '0';

  value += '';
  while (PATTERNS.NUMBER.test(value)) {
    value = value.replace(PATTERNS.NUMBER, '$1' + ',' + '$2');
  }

  return value;
};
