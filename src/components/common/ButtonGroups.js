export const ButtonGroups = {
  styleOverrides: {
    root: {
      borderRadius: 8,
      overflow: "hidden",
    },
  },
  variants: [
    {
      props: { variant: "outlined" },
      style: {
        boxShadow: "none",
        "& .MuiButton-root": {
          backgroundColor: "transparent",
          color: "var(--primary-color)",
          border: "1px solid rgba(var(--primary-rgb-color))",
          "&:hover": {
            backgroundColor: "rgba(var(--primary-rgb-color), 0.2)",
          },
        },
      },
    },
    {
      props: { variant: "outlined", color: "success" },
      style: {
        boxShadow: "none",
        "& .MuiButton-root": {
          backgroundColor: "transparent",
          color: "var(--green-color)",
          border: "1px solid var(--green-color)", 
          "&:hover": {
            backgroundColor: "rgba(var(--green-rgb-color), 0.2)",
          },
        },
      },
    },
    {
      props: { variant: "outlined", color: "error" },
      style: {
        boxShadow: "none",
        "& .MuiButton-root": {
          backgroundColor: "transparent",
          color: "var(--red-color)",
          border: "1px solid var(--red-color)", 
          "&:hover": {
            backgroundColor: "rgba(var(--red-rgb-color), 0.2)",
          },
        },
      },
    },
    {
      props: { variant: "outlined", color: "warning" },
      style: {
        boxShadow: "none",
        "& .MuiButton-root": {
          backgroundColor: "transparent",
          color: "var(--yellow-color)",
          border: "1px solid var(--yellow-color)", 
          "&:hover": {
            backgroundColor: "rgba(var(--yellow-rgb-color), 0.2)",
          },
        },
      },
    },
    {
      props: { variant: "outlined", color: "info" },
      style: {
        boxShadow: "none",
        "& .MuiButton-root": {
          backgroundColor: "transparent",
          color: "var(--blue-color)",
          border: "1px solid var(--blue-color)", 
          "&:hover": {
            backgroundColor: "rgba(var(--blue-rgb-color), 0.2)",
          },
        },
      },
    },
    {
      props: { variant: "contained" },
      style: {
        boxShadow: "none",
        "& .MuiButton-root": {
          backgroundColor: "var(--primary-color)",
          color: "var(--white-color)",
          border: "1px solid var(--menu-hover-color)",
          "&:hover": {
            backgroundColor: "rgba(var(--primary-rgb-color), 0.8)",
            color: "var(--white-color)",
          },
        },
      },
    },
    {
      props: { variant: "text", orientation: "horizontal" },
      style: {
        boxShadow: "none",
        "& .MuiButton-root": {
          color: "var(--primary-color)",
          "&:hover": {
            backgroundColor: "rgba(var(--primary-rgb-color), 0.2)",
          },
          "&.MuiButton-root": {
            borderRight: "1px solid rgba(var(--primary-rgb-color), 0.8)",
            "&:last-child": {
              borderRight: "none",
            },
          },
        },
      },
    },
    {
      props: { variant: "text", orientation: "vertical" },
      style: {
        boxShadow: "none",
        "& .MuiButton-root": {
          color: "var(--primary-color)",
          "&:hover": {
            backgroundColor: "rgba(var(--primary-rgb-color), 0.2)",
          },
          borderBottom: "1px solid rgba(var(--primary-rgb-color), 0.8)",
          "&:last-child": {
            borderBottom: "none",
          },
        },
      },
    },
    {
      props: { variant: "tonal" },
      style: {
        boxShadow: "none",
        "& .MuiButton-root": {
          backgroundColor: "rgba(var(--primary-rgb-color), 0.1)",
          color: "var(--primary-color)",
          border: "1px solid rgba(var(--primary-rgb-color), 0.2)",
          "&:hover": {
            backgroundColor: "rgba(var(--primary-rgb-color), 0.2)",
          },
        },
      },
    },
  ],
};
