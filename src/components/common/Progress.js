// Progress.js
export const LinearProgress = {
  styleOverrides: {
    root: {
      borderRadius: 8,
      overflow: "hidden",
      "& .MuiLinearProgress-bar": {
          backgroundColor: "var(--primary-color)",
        },
    },
    bar: {
      borderRadius: 8,
      "& .MuiLinearProgress-bar": {
          backgroundColor: "var(--primary-color)",
        },
    },
  },
  variants: [
    // ==== Sizes ====
    {
      props: { size: "small" },
      style: { height: 4 },
    },
    {
      props: { size: "medium" },
      style: { height: 6 },
    },
    {
      props: { size: "large" },
      style: { height: 10 },
    },

    // ==== Colors ====
    
    {
      props: { color: "success" },
      style: {
        "& .MuiLinearProgress-bar": {
          backgroundColor: "var(--green-color)",
        },
      },
    },
    {
      props: { color: "error" },
      style: {
        "& .MuiLinearProgress-bar": {
          backgroundColor: "var(--red-color)",
        },
      },
    },
    {
      props: { color: "warning" },
      style: {
        "& .MuiLinearProgress-bar": {
          backgroundColor: "var(--yellow-color)",
        },
      },
    },
    {
      props: { color: "info" },
      style: {
        "& .MuiLinearProgress-bar": {
          backgroundColor: "var(--blue-color)",
        },
      },
    },
  ],
};

export const CircularProgress = {
  styleOverrides: {
  
    root: {
      circle: {
        strokeLinecap: "round",
      },
      "& .MuiCircularProgress-circle": {
        color: "var(--primary-color)",
      },
    },
  },
  variants: [
    // ==== Sizes ====
    {
      props: { size: "small" },
      style: { width: 20, height: 20 },
    },
    {
      props: { size: "medium" },
      style: { width: 32, height: 32 },
    },
    {
      props: { size: "large" },
      style: { width: 48, height: 48 },
    },

    {
      props: { color: "success" },
      style: {
        "& .MuiCircularProgress-circle": {
          color: "var(--green-color)",
        },
      },
    },
    {
      props: { color: "error" },
      style: {
        "& .MuiCircularProgress-circle": {
          color: "var(--red-color)",
        },
      },
    },
    {
      props: { color: "warning" },
      style: {
        "& .MuiCircularProgress-circle": {
          color: "var(--yellow-color)",
        },
      },
    },
    {
      props: { color: "info" },
      style: {
        "& .MuiCircularProgress-circle": {
          color: "var(--blue-color)",
        },
      },
    },
  ],
};
