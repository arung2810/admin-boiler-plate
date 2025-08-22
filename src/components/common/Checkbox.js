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
    root: ({ theme, ownerState }) => ({
      ...(ownerState.size === 'small'
        ? {
          padding: theme.spacing(0.75),
          '& svg': {
            fontSize: '1.25rem'
          }
        }
        : {
          padding: theme.spacing(1),
          '& svg': {
            fontSize: '1.5rem'
          }
        }),
      '&:not(.Mui-checked):not(.Mui-disabled):not(.MuiCheckbox-indeterminate) svg, &:not(.Mui-checked):not(.Mui-disabled):not(.MuiCheckbox-indeterminate) i': {
        color: 'var(--text-color)',
      },
      '&.Mui-checked:not(.Mui-disabled) svg, &.MuiCheckbox-indeterminate:not(.Mui-disabled) svg': {

      },
      '&.Mui-checked, &.MuiCheckbox-indeterminate': {
        '&.MuiCheckbox-colorPrimary': {
          color: 'var(--primary-color)',
        },
        '&.MuiCheckbox-colorSecondary': {
          color: 'var(--secondary-color)',
        },
        '&.MuiCheckbox-colorError': {
          color: 'var(--red-color)',
        },
        '&.MuiCheckbox-colorWarning': {
          color: 'var(--yellow-color)',
        },
        '&.MuiCheckbox-colorInfo': {
          color: 'var(--blue-color)',
        },
        '&.MuiCheckbox-colorSuccess': {
          color: 'var(--green-color)',
        },
      },
      '&.Mui-disabled': {
        opacity: 0.45,
        '&:not(.Mui-checked)': {
          color: 'var(--text-color)',
        },
        '&.Mui-checked': {
          '&.MuiCheckbox-colorPrimary': {
            color: 'var(--primary-color)',
          },
          '&.MuiCheckbox-colorSecondary': {
            color: 'var(--secondary-color)',
          },
          '&.MuiCheckbox-colorError': {
            color: 'var(--red-color)',
          },
          '&.MuiCheckbox-colorWarning': {
            color: 'var(--yellow-color)',
          },
          '&.MuiCheckbox-colorInfo': {
            color: 'var(--blue-color)',
          },
          '&.MuiCheckbox-colorSuccess': {
            color: 'var(--green-color)',
          },
        },
      },
    })
  },
  defaultProps: {
    icon: <Icon />,
    indeterminateIcon: <IndeterminateIcon />,
    checkedIcon: <CheckedIcon />
  },
}