export const Link = {
  styleOverrides: {
    root: {
      fontWeight: 500,
      textDecoration: 'none',
      color: 'var(--text-color)',
      cursor: 'pointer',
      transition: 'all 0.2s ease',

      '&:hover': {
        textDecoration: 'underline',
        color: 'var(--primary-color)',
      },
      '&:active': {
        opacity: 0.8,
      },
      '&:visited': {
        color: 'var(--primary-color)',
      },
    },
    underlineNone: {
      textDecoration: 'none',
      '&:hover': {
            textDecoration: 'none',
        },
    },
    underlineHover: {
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    underlineAlways: {
      textDecoration: 'underline',
    },
  },
};
