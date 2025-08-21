// Dialogs.js
export const Dialogs = {
  styleOverrides: {
    paper: {
      borderRadius: 12,
      padding: "16px",
      boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
      backgroundColor: "var(--card-bg-color)",
    },
    paperFullWidth: {
      margin: "16px",
    },
    paperFullScreen: {
      borderRadius: 0,
    },
  },
};

export const DialogTitle = {
  styleOverrides: {
    root: {
      fontSize: "1.25rem",
      fontWeight: 600,
      padding: "12px 16px",
      color: "var(--primary-color)",
    },
  },
};

export const DialogContent = {
  styleOverrides: {
    root: {
      padding: "16px 16px",
      // fontSize: "0.95rem",
      // color: "var(--text-color)",
      // lineHeight: 1.6,
    },
  },
};
export const DialogContentText = {
  styleOverrides: {
    root: {
      padding: "0 0",
      fontSize: "0.95rem",
      color: "var(--text-color)",
      lineHeight: 1.6,
    },
  },
};
