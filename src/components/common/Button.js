export const Button = {
  styleOverrides: {
    root: {
      textTransform: 'capitalize',
      fontWeight: 600,
      borderRadius: '12px',
      padding: '8px 16px',
      fontSize: '14px',
      lineHeight: 1.5,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'none',
      gap: '8px',
      transition: 'all 0.3s ease',
      '& .MuiButton-startIcon, & .MuiButton-endIcon': {
        fontSize: '1.25rem',
      },
      '&:hover': {
        boxShadow: 'none',
      },
      '&:disabled': {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    },

    // Size variants
    sizeSmall: {
      fontSize: '12px',
      padding: '6px 12px',
      borderRadius: '8px',
    },
    sizeMedium: {
      fontSize: '14px',
      padding: '8px 16px',
      borderRadius: '10px',
    },
    sizeLarge: {
      fontSize: '16px',
      padding: '10px 24px',
      borderRadius: '10px',
    },

    // Variant: contained
    containedPrimary: {
      backgroundColor: 'var(--primary-color)',
      color: '#fff',
      '&:hover': {
        backgroundColor: 'rgba(var(--primary-rgb-color), 0.85)',
      },
    },
    containedSecondary: {
      backgroundColor: 'var(--secondary-color)',
      color: '#fff',
      '&:hover': {
        backgroundColor: 'rgba(var(--secondary-rgb-color), 0.85)',
      },
    },
    containedSuccess: {
      backgroundColor: 'var(--green-color)',
      color: '#fff',
      '&:hover': {
        backgroundColor: 'rgba(var(--green-rgb-color), 0.85)',
      },
    },
    containedError: {
      backgroundColor: 'var(--red-color)',
      color: '#fff',
      '&:hover': {
        backgroundColor: 'rgba(var(--red-rgb-color), 0.85)',
      },
    },
    containedWarning: {
      backgroundColor: 'var(--yellow-color)',
      color: '#fff',
      '&:hover': {
        backgroundColor: 'rgba(var(--yellow-rgb-color), 0.85)',
      },
    },
    containedInfo: {
      backgroundColor: 'var(--blue-color)',
      color: '#fff',
      '&:hover': {
        backgroundColor: 'rgba(var(--blue-rgb-color), 0.85)',
      },
    },

    // Variant: outlined
    outlinedPrimary: {
      borderColor: 'var(--primary-color)',
      color: 'var(--primary-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--primary-rgb-color), 0.08)',
      },
    },
    outlinedSecondary: {
      borderColor: 'var(--secondary-color)',
      color: 'var(--secondary-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--secondary-rgb-color), 0.08)',
      },
    },
    outlinedSuccess: {
      borderColor: 'var(--green-color)',
      color: 'var(--green-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--green-rgb-color), 0.08)',
      },
    },
    outlinedError: {
      borderColor: 'var(--red-color)',
      color: 'var(--red-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--red-rgb-color), 0.08)',
      },
    },
    outlinedWarning: {
      borderColor: 'var(--yellow-color)',
      color: 'var(--yellow-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--yellow-rgb-color), 0.08)',
      },
    },
    outlinedInfo: {
      borderColor: 'var(--blue-color)',
      color: 'var(--blue-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--blue-rgb-color), 0.08)',
      },
    },

    // Variant: text
    textPrimary: {
      color: 'var(--primary-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--primary-rgb-color), 0.08)',
      },
    },
    textSecondary: {
      color: 'var(--secondary-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--secondary-rgb-color), 0.08)',
      },
    },
    textSuccess: {
      color: 'var(--green-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--green-rgb-color), 0.08)',
      },
    },
    textError: {
      color: 'var(--red-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--red-rgb-color), 0.08)',
      },
    },
    textWarning: {
      color: 'var(--yellow-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--yellow-rgb-color), 0.08)',
      },
    },
    textInfo: {
      color: 'var(--blue-color)',
      '&:hover': {
        backgroundColor: 'rgba(var(--blue-rgb-color), 0.08)',
      },
    },
  },
};
