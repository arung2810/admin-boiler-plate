export const Breadcrumbs = {
  styleOverrides: {
    root: {
      fontSize: '14px',
      fontWeight: 500,
    },
    ol: {
      display: 'flex',
      alignItems: 'center',
    },
    li: {
      fontSize: '14px',
      color: 'var(--text-color)',
      
      '& .MuiLink-root': {
        fontSize: '14px',
        fontWeight: 500,
        textDecoration: 'none',
        color: 'var(--text-color)',
        transition: 'color 0.2s ease',
        opacity:'0.8',
        '&:hover': {
            color: 'var(--primary-color)',
            textDecoration: 'underline',
            opacity:'1',
        },
      },

      '& .MuiTypography-root': {
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--text-color)',
      },
      
    },

    separator: {
      margin: '0 8px',
      color: 'var(--text-color)',
      fontSize: '12px',
    },
  },
};

