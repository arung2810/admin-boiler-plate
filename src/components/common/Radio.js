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
      '&:not(.Mui-checked):not(.Mui-disabled) svg, &:not(.Mui-checked):not(.Mui-disabled) i': {
        color: 'var(--text-color)'
      },
      '&.Mui-checked:not(.Mui-disabled) svg': {
      },
      '&.Mui-checked': {
        '&.MuiRadio-colorPrimary': {
          color: 'var(--primary-color)',
        },
        '&.MuiRadio-colorSecondary': {
          color: 'var(--secondary-color)',
        },
        '&.MuiRadio-colorError': {
          color: 'var(--red-color)',
        },
        '&.MuiRadio-colorWarning': {
          color: 'var(--yellow-color)',
        },
        '&.MuiRadio-colorInfo': {
          color: 'var(--blue-color)',
        },
        '&.MuiRadio-colorSuccess': {
          color: 'var(--green-color)',
        },
      },
      '&.Mui-disabled': {
        opacity: 0.45,
        '&:not(.Mui-checked)': {
          color: 'var(--text-color)',
        },
        '&.Mui-checked': {
          '&.MuiRadio-colorPrimary': {
            color: 'var(--primary-color)',
          },
          '&.MuiRadio-colorSecondary': {
            color: 'var(--secondary-color)',
          },
          '&.MuiRadio-colorError': {
            color: 'var(--red-color)',
          },
          '&.MuiRadio-colorWarning': {
            color: 'var(--yellow-color)',
          },
          '&.MuiRadio-colorInfo': {
            color: 'var(--blue-color)',
          },
          '&.MuiRadio-colorSuccess': {
            color: 'var(--green-color)',
          },
        },
      }
    })
  },
  defaultProps: {
    icon: <UncheckedIcon />,
    checkedIcon: <IconChecked />
  },
}