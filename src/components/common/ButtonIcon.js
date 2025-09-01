export const IconButton = {
  styleOverrides: {
    root: {
      // borderRadius: '8px',
      padding: '8px',
      transition: 'all 0.3s ease',
      '&:disabled': {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    },

    // Size variants
    sizeSmall: {
      padding: '4px',
      // fontSize: '1rem',
    },
    sizeMedium: {
      padding: '8px',
      // fontSize: '1.25rem',
    },
    sizeLarge: {
      padding: '12px',
      // fontSize: '1.5rem',
    },

    // Color variants
    colorPrimary: {
      color: 'var(--primary-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--primary-rgb-color), 0.08)',
      },
    },
    colorSecondary: {
      color: 'var(--secondary-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--secondary-rgb-color), 0.08)',
      },
    },
    colorSuccess: {
      color: 'var(--green-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--green-rgb-color), 0.08)',
      },
    },
    colorError: {
      color: 'var(--red-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--red-rgb-color), 0.08)',
      },
    },
    colorWarning: {
      color: 'var(--yellow-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--yellow-rgb-color), 0.08)',
      },
    },
    colorInfo: {
      color: 'var(--blue-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--blue-rgb-color), 0.08)',
      },
    },
  },
};
