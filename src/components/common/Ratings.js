// Ratings.js
export const Ratings = {
  styleOverrides: {
    root: {
      color: "var(--yellow-color)",
      gap:'4px'
    },
    iconEmpty: {
      color: "var(--text-color)",
    },
  },
  variants: [
    // ==== Sizes ====
    {
      props: { size: "small" },
      style: {
        fontSize: "18px",
      },
    },
    {
      props: { size: "medium" },
      style: {
        fontSize: "24px",
      },
    },
    {
      props: { size: "large" },
      style: {
        fontSize: "32px",
      },
    },

    // ==== Colors ====
    {
      props: { color: "success" },
      style: {
        color: "var(--green-color)",
      },
    },
    {
      props: { color: "error" },
      style: {
        color: "var(--red-color)",
      },
    },
    {
      props: { color: "warning" },
      style: {
        color: "var(--yellow-color)",
      },
    },
    {
      props: { color: "info" },
      style: {
        color: "var(--blue-color)",
      },
    },
  ],
};
