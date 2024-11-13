export interface TableRow {
  id: number;
  name: string;
  status: string;
  lastUpdated: Date;
}

export interface ColumnConfig {
  field: keyof TableRow;
  headerName: string;
  width?: number;
  flex?: number;
  type?: string;
  renderCell?: (params: { value: any }) => JSX.Element;
}
