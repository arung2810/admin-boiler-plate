export const List = {
  styleOverrides: {
    root: {
      padding: 0,
      margin: 0,
      listStyle: "none",
      borderRadius: "12px",
      backgroundColor: "var(--card-bg-color)",
    },
  },
};

export const ListItem = {
  styleOverrides: {
    root: {
      padding: "0px 0",
      borderRadius: "8px",
      transition: "background-color 0.2s ease",
      color: "var(--text-color)",
      "&:hover": {
        backgroundColor: "rgba(var(--primary-rgb-color), 0.2)",
        // color: "var(--white-color)",
      },
      "&.Mui-selected": {
        backgroundColor: "var(--primary-color)",
        color: "#fff",
        "&:hover": {
          backgroundColor: "rgba(var(--primary-rgb-color), 0.4)",
        },
      },
    },
  },
};

export const ListItemText = {
  styleOverrides: {
    primary: {
      fontSize: "14px",
      fontWeight: 500,
    },
    secondary: {
      fontSize: "12px",
      color: "var(--secondary-text-color)",
    },
  },
};

export const ListItemIcon = {
  styleOverrides: {
    root: {
      minWidth: "36px",
      color: "inherit",
    },
  },
};
