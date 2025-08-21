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