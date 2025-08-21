export const Accordion = {
  styleOverrides: {
    root: {
      backgroundColor: 'var(--card-bg-color)',
      boxShadow: '0px 1px 6px rgba(var(--text-rgb-color),0.2)',
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

export const AccordionDetails = {
  styleOverrides: {
    root: {
      padding: '0 16px 16px',
      color: 'var(--text-color)',
      '& .MuiTypography-root': {
        fontSize: '0.875rem',
      },
    },
  },
}

export const AccordionSummary = {
  styleOverrides: {
    root: {
      backgroundColor: 'var(--card-bg-color)',
      minHeight: '48px',
      borderRadius: '6px',
      '&.Mui-expanded': {
        minHeight: '48px',
      },
      '& .MuiTypography-root': {
        fontSize: '16px',
        fontWeight: 500,
      }
    },
    content: {
      // margin: '12px 0',
      margin: 0,
      color: 'var(--text-color)',
      '&.Mui-expanded': {
        margin: '0',
      },
    },
    expandIconWrapper: {
      fontSize: "1.5rem",
      color: 'var(--text-color)',
    },
  },
}