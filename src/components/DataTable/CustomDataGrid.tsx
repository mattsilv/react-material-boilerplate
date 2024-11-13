import { DataGrid, DataGridProps } from "@mui/x-data-grid";

export default function CustomDataGrid(props: DataGridProps) {
  return (
    <DataGrid
      {...props}
      disableColumnMenu={true}
      disableRowSelectionOnClick
      autoHeight
      sx={{
        "& .MuiDataGrid-cell": {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        },
        "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
          {
            outline: "none",
          },
        "& .MuiDataGrid-columnHeader[aria-sort]": {
          backgroundColor: "transparent",
        },
        ...props.sx,
      }}
    />
  );
}
