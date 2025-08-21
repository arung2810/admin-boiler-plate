export const Accordion = {
  styleOverrides: {
    root: {
      backgroundColor: 'var(--card-bg-color)',
      boxShadow: '0px 1px 6px rgba(var(--text-color-rgb),0.2)',
      padding: 0,
      borderRadius: '6px',
      '&.Mui-expanded': {
        margin: '0',
      },
      '&.MuiAccordion-root': {
        '&:not(:last-child)': {
          // marginBottom: "12px",
        },
        '&:first-of-type, &:last-of-type': {
          borderRadius: '6px',
        },
      },
      '&::before': {
        content: "none",
      }
    },
  },
}