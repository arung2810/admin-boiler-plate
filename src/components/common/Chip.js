export const Chip = {
  styleOverrides: {
    root: {
      borderRadius: '8px',
      '&:hover': {},
    },
    label: {
      fontWeight: '600',
    },
    icon: {
      fontSize: '18px',
    },
    deleteIcon: {
      fontSize: '18px',
      '&:hover': {},
    },
  },
  variants: [
    // Default filled
    {
      props: { variant: 'filled' },
      style: {
        color: 'var(--text-color)',
      },
    },
    // Default outlined
    {
      props: { variant: 'outlined' },
      style: {
        borderColor: 'var(--border-color)',
        color: 'var(--text-color)',
      },
    },

    // ---- FILLED COLOR VARIANTS ----
    {
      props: { color: 'primary' },
      style: {
        '--chip-color': 'var(--primary-color)',
        backgroundColor: 'var(--chip-color)',
        color: 'var(--white-color)',
        '& .MuiChip-icon, & .MuiChip-deleteIcon': { color: 'var(--white-color)' },
      }
    },
    {
      props: { color: 'secondary' },
      style: {
        '--chip-color': 'var(--secondary-color)',
        backgroundColor: 'var(--chip-color)',
        color: 'var(--white-color)',
        '& .MuiChip-icon, & .MuiChip-deleteIcon': { color: 'var(--white-color)' },
      }
    },
    {
      props: { color: 'error' },
      style: {
        '--chip-color': 'var(--red-color)',
        backgroundColor: 'var(--chip-color)',
        color: 'var(--white-color)',
        '& .MuiChip-icon, & .MuiChip-deleteIcon': { color: 'var(--white-color)' },
      }
    },
    {
      props: { color: 'warning' },
      style: {
        '--chip-color': 'var(--yellow-color)',
        backgroundColor: 'var(--chip-color)',
        color: 'var(--white-color)',
        '& .MuiChip-icon, & .MuiChip-deleteIcon': { color: 'var(--white-color)' },
      }
    },
    {
      props: { color: 'info' },
      style: {
        '--chip-color': 'var(--blue-color)',
        backgroundColor: 'var(--chip-color)',
        color: 'var(--white-color)',
        '& .MuiChip-icon, & .MuiChip-deleteIcon': { color: 'var(--white-color)' },
      }
    },
    {
      props: { color: 'success' },
      style: {
        '--chip-color': 'var(--green-color)',
        backgroundColor: 'var(--chip-color)',
        color: 'var(--white-color)',
        '& .MuiChip-icon, & .MuiChip-deleteIcon': { color: 'var(--white-color)' },
      }
    },

    // ---- OUTLINED COLOR VARIANTS ----
    {
      props: { variant: 'outlined', color: 'primary' },
      style: {
        '--chip-color': 'var(--primary-color)',
        border: '1px solid var(--chip-color)',
        backgroundColor: 'transparent',
        color: 'var(--chip-color)',
        '& .MuiChip-icon, & .MuiChip-deleteIcon': { color: 'var(--primary-color)' },
      }
    },
    {
      props: { variant: 'outlined', color: 'secondary' },
      style: {
        '--chip-color': 'var(--secondary-color)',
        border: '1px solid var(--chip-color)',
        backgroundColor: 'transparent',
        color: 'var(--chip-color)',
        '& .MuiChip-icon, & .MuiChip-deleteIcon': { color: 'var(--secondary-color)' },
      }
    },
    {
      props: { variant: 'outlined', color: 'error' },
      style: {
        '--chip-color': 'var(--red-color)',
        border: '1px solid var(--chip-color)',
        backgroundColor: 'transparent',
        color: 'var(--chip-color)',
        '& .MuiChip-icon, & .MuiChip-deleteIcon': { color: 'var(--red-color)' },
      }
    },
    {
      props: { variant: 'outlined', color: 'warning' },
      style: {
        '--chip-color': 'var(--yellow-color)',
        border: '1px solid var(--chip-color)',
        backgroundColor: 'transparent',
        color: 'var(--chip-color)',
        '& .MuiChip-icon, & .MuiChip-deleteIcon': { color: 'var(--yellow-color)' },
      }
    },
    {
      props: { variant: 'outlined', color: 'info' },
      style: {
        '--chip-color': 'var(--blue-color)',
        border: '1px solid var(--chip-color)',
        backgroundColor: 'transparent',
        color: 'var(--chip-color)',
        '& .MuiChip-icon, & .MuiChip-deleteIcon': { color: 'var(--blue-color)' },
      }
    },
    {
      props: { variant: 'outlined', color: 'success' },
      style: {
        '--chip-color': 'var(--green-color)',
        border: '1px solid var(--chip-color)',
        backgroundColor: 'transparent',
        color: 'var(--chip-color)',
        '& .MuiChip-icon, & .MuiChip-deleteIcon': { color: 'var(--green-color)' },
      }
    },
  ],
};
