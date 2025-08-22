const Icon = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z'
        stroke='var(--text-color)'
        strokeWidth='1.5'
      />
    </svg>
  )
}

const IndeterminateIcon = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7Z' fill='currentColor' />
      <path
        d='M8.5 12h7'
        stroke='var(--white-color)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const CheckedIcon = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7Z' fill='currentColor' />
      <path
        d='m8.5 12 2.5 2.5 5-5'
        stroke='var(--white-color)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const Checkbox = {
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const sizeStyles =
        ownerState.size === 'small'
          ? {
            padding: theme.spacing(0.75),
            '& svg': { fontSize: '1.25rem' },
          }
          : {
            padding: theme.spacing(1),
            '& svg': { fontSize: '1.5rem' },
          };

      return {
        ...sizeStyles,
        // Default (unchecked state)
        '&:not(.Mui-checked):not(.Mui-disabled):not(.MuiCheckbox-indeterminate) svg, &:not(.Mui-checked):not(.Mui-disabled):not(.MuiCheckbox-indeterminate) i': {
          color: 'var(--text-color)',
        },
        // Disabled state
        '&.Mui-disabled': {
          opacity: 0.45,
          '&:not(.Mui-checked):not(.MuiCheckbox-indeterminate)': {
            color: 'var(--text-color)',
          },
        },
        // Common checked & indeterminate styles (use a CSS variable)
        '&.Mui-checked, &.MuiCheckbox-indeterminate': {
          color: `var(--checkbox-color, var(--primary-color))`,
        },
        '&.Mui-disabled.Mui-checked, &.Mui-disabled.MuiCheckbox-indeterminate': {
          color: `var(--checkbox-color, var(--primary-color))`,
        },
      };
    },
  },
  defaultProps: {
    icon: <Icon />,
    indeterminateIcon: <IndeterminateIcon />,
    checkedIcon: <CheckedIcon />,
  },
  variants: [
    { props: { color: 'primary' }, style: { '--checkbox-color': 'var(--primary-color)' } },
    { props: { color: 'secondary' }, style: { '--checkbox-color': 'var(--secondary-color)' } },
    { props: { color: 'error' }, style: { '--checkbox-color': 'var(--red-color)' } },
    { props: { color: 'warning' }, style: { '--checkbox-color': 'var(--yellow-color)' } },
    { props: { color: 'info' }, style: { '--checkbox-color': 'var(--blue-color)' } },
    { props: { color: 'success' }, style: { '--checkbox-color': 'var(--green-color)' } },
  ],
};
