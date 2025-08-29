export const SpeedDial = {
  styleOverrides: {
    root: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 1500,
    },
    fab: {
      backgroundColor: 'var(--primary-color)',
      color: 'var(--white-color)',
      '&:hover': {
        backgroundColor: 'var(--primary-color)',
      },
    },
  },
  defaultProps: {
    direction: 'up', // 'up' | 'down' | 'left' | 'right'
    ariaLabel: 'SpeedDial',
  },
};
