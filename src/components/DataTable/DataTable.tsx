import {
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { TableRow } from "../../types/data-table";
import mockData from "../../data/mockTableData.json";
import CustomDataGrid from "./CustomDataGrid";

export default function DataTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      flex: isMobile ? undefined : 0.5,
      minWidth: isMobile ? 50 : 70,
      hideable: false,
    },
    {
      field: "name",
      headerName: "Name",
      flex: isMobile ? undefined : 1,
      minWidth: isMobile ? 120 : undefined,
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
      flex: isMobile ? undefined : 1,
      minWidth: isMobile ? 100 : undefined,
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
      flex: isMobile ? undefined : 1.2,
      minWidth: isMobile ? 110 : undefined,
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

  const rows: TableRow[] = mockData.rows.map((row) => ({
    ...row,
    lastUpdated: new Date(row.lastUpdated),
  }));

  return (
    <Card sx={{ width: "100%", overflow: "hidden" }}>
      <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
        <Typography variant="h6" gutterBottom sx={{ px: { xs: 1, sm: 0 } }}>
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
