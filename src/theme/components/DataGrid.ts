export const DataGridTheme = {
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
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
        },
      },
    },
  },
};
