export const Popover = {
  styleOverrides: {
    root: {
      // shadow & border styling
      // borderRadius: "12px",
    },
    paper: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
        padding: "12px 16px",
        borderRadius: "12px",
        backgroundColor: "var(--card-bg-color)", 
    },
  },
  defaultProps: {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  },
};
