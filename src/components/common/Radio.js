const IconChecked = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5.5 12a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z'
        fill='var(--white-color)'
        stroke='currentColor'
        strokeWidth='5'
      />
    </svg>
  )
}

const UncheckedIcon = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z' stroke='var(--text-color)' strokeWidth='2' />
    </svg>
  )
}

export const Radio = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      ...(ownerState.size === 'small'
        ? {
          padding: theme.spacing(0.75),
          '& svg': { fontSize: '1.25rem' },
        }
        : {
          padding: theme.spacing(1),
          '& svg': { fontSize: '1.5rem' },
        }),

      // unchecked + not disabled
      '&:not(.Mui-checked):not(.Mui-disabled) svg, &:not(.Mui-checked):not(.Mui-disabled) i': {
        color: 'var(--text-color)',
      },

      // checked states use the variable
      '&.Mui-checked': { color: 'var(--radio-color)' },

      // disabled state
      '&.Mui-disabled': {
        opacity: 0.45,
        '&:not(.Mui-checked)': { color: 'var(--text-color)' },
        '&.Mui-checked': { color: 'var(--radio-color)' },
      },
    }),
  },
  defaultProps: {
    icon: <UncheckedIcon />,
    checkedIcon: <IconChecked />,
  },
  variants: [
    { props: { color: 'primary' }, style: { '--radio-color': 'var(--primary-color)' } },
    { props: { color: 'secondary' }, style: { '--radio-color': 'var(--secondary-color)' } },
    { props: { color: 'error' }, style: { '--radio-color': 'var(--red-color)' } },
    { props: { color: 'warning' }, style: { '--radio-color': 'var(--yellow-color)' } },
    { props: { color: 'info' }, style: { '--radio-color': 'var(--blue-color)' } },
    { props: { color: 'success' }, style: { '--radio-color': 'var(--green-color)' } },
  ],
};
