// Pagination.js
export const Pagination = {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    ul: {
      margin: 0,
      padding: 0,
    },
  },
};

export const PaginationItem = {
  styleOverrides: {
    root: {
      fontWeight: 500,
      transition: "all 0.2s ease",
      color: "var(--text-color)",      
      "&:hover": {
        backgroundColor: "var(--menu-hover-color)",
      },
      "&.Mui-selected": {
        backgroundColor: "var(--primary-color)",
        color: "var(--white-color)",
        borderRadius:'100px',
        "&:hover": {
          backgroundColor: "var(--primary-color)",
        },
      },
    },
    sizeSmall: {
      fontSize: "12px",
      minWidth: 28,
      height: 28,
      display: "flex",
      alignItems: "center",
      justifyContent:'center'
    },
    sizeMedium: {
      fontSize: "14px",
      minWidth: 36,
      height: 36,
      display: "flex",
      alignItems: "center",
      justifyContent:'center'
    },
    sizeLarge: {
      fontSize: "16px",
      minWidth: 44,
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent:'center'
    },
  },
  variants: [
    {
      props: { variant: "outlined" },
      style: {
        // border: "1px solid var(--primary-color)",
        borderColor: "var(--primary-color)",
        color: "var(--primary-color)",
        borderRadius:'100px',
        "&.Mui-selected": {
          backgroundColor: "var(--primary-color)",
          color: "var(--white-color)",
          border: "1px solid var(--primary-color)",
        },
      },
    },
    {
      props: { shape: "rounded" },
      style: {
        borderRadius: "10px",
        "&.Mui-selected": {
            backgroundColor: "var(--primary-color)",
            color: "var(--white-color)",
            borderRadius: "10px",
        },
      },
    },
  ],
};
