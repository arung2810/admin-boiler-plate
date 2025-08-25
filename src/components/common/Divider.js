export const Divider = {
  styleOverrides: {
    root: {
      borderColor: 'var(--border-color)',
      borderBottomWidth: '1.5px',
      opacity: 1,
      margin: '12px 0',
      '&::before, &::after': {
        borderBottom: '1px solid var(--border-color)',
      },
    },
    fullWidth: {
      margin: '16px 0',
    },
    inset: {
      marginLeft: '72px',
    },
    middle: {
      marginLeft: '16px',
      marginRight: '16px',
    },
    vertical: {
      height: '100%',
      margin: '0 16px',
    },
  },
};
