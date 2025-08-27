export const Popper = {
  styleOverrides: {
    root: {
      zIndex: 1300, // default for Popper
      '& .MuiBox-root': {
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--text-color)',
        padding: '12px',
        borderRadius: '12px',
        backgroundColor: 'var(--card-bg-color)',
        border:'1px solid var(--border-color)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
      },
    },
    sizeSmall: {
      fontSize: '12px',
      padding: '4px 8px',
      borderRadius: '8px',
    },
    sizeMedium: {
      fontSize: '14px',
      padding: '6px 12px',
      borderRadius: '12px',
    },
    sizeLarge: {
      fontSize: '16px',
      padding: '10px 20px',
      borderRadius: '16px',
    },
  },
};
