export const Badge = {
  styleOverrides: {
    root: {
      '& .MuiBadge-badge': {
        fontSize: '0.65rem',
        backgroundColor: 'var(--badge-color)',
        color: '#fff', // optional: ensures text is readable
      },
    },
    badge: {
      // you can still add specific overrides here if needed
    },
    dot: {
      backgroundColor: 'var(--badge-color)',
    },
  },
  variants: [
    { props: { color: 'primary' }, style: { '--badge-color': 'var(--primary-color)' } },
    { props: { color: 'secondary' }, style: { '--badge-color': 'var(--secondary-color)' } },
    { props: { color: 'error' }, style: { '--badge-color': 'var(--red-color)' } },
    { props: { color: 'warning' }, style: { '--badge-color': 'var(--yellow-color)' } },
    { props: { color: 'info' }, style: { '--badge-color': 'var(--blue-color)' } },
    { props: { color: 'success' }, style: { '--badge-color': 'var(--green-color)' } },
  ],
};
