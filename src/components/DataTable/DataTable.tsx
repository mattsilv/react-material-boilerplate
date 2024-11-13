import { Card, CardContent, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { TableRow } from "../../types/data-table";
import mockData from "../../data/mockTableData.json";
import CustomDataGrid from "./CustomDataGrid";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    flex: 0.5,
    hideable: false,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    hideable: false,
    renderCell: (params) => (
      <div
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    hideable: false,
    renderCell: (params) => (
      <div
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {
    field: "lastUpdated",
    headerName: "Last Updated",
    type: "dateTime",
    flex: 1.2,
    hideable: false,
    renderCell: (params) => (
      <div
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {new Date(params.value).toLocaleDateString()}
      </div>
    ),
  },
];

// Transform the dates from strings to Date objects
const rows: TableRow[] = mockData.rows.map((row) => ({
  ...row,
  lastUpdated: new Date(row.lastUpdated),
}));

export default function DataTable() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Data Overview
        </Typography>
        <div style={{ height: 400, width: "100%" }}>
          <CustomDataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
              sorting: {
                sortModel: [{ field: "lastUpdated", sort: "desc" }],
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection={false}
          />
        </div>
      </CardContent>
    </Card>
  );
}
