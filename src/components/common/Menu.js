// Menu.js
export const Menu = {
  styleOverrides: {
    paper: {
      borderRadius: 12,
      boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
      padding: "4px 0",
      backgroundColor: "var(--card-bg-color)",
    },
    list: {
      padding: 0,
      color:'var(--text-color)'
    },
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        "& .MuiMenuItem-root": {
          fontSize: "12px",
          padding: "4px 12px",
        },
      },
    },
    {
      props: { size: "medium" },
      style: {
        "& .MuiMenuItem-root": {
          fontSize: "14px",
          padding: "6px 16px",
        },
      },
    },
    {
      props: { size: "large" },
      style: {
        "& .MuiMenuItem-root": {
          fontSize: "16px",
          padding: "8px 20px",
        },
      },
    },
  ],
};

export const MenuItem = {
  styleOverrides: {
    root: {
      fontWeight: 500,
      borderRadius: 0,
      "&:hover": {
        backgroundColor: "var(--menu-hover-color)", 
      },
      "&.Mui-selected": {
        backgroundColor: "var(--primary-color)", 
        color: "var(--white-color)",
        "&:hover": {
          backgroundColor: "var(--primary-color)",
        },
      },
    },
  },
};
