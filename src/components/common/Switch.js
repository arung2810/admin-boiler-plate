export const Switch = {
  defaultProps: {
    disableRipple: true
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      '&:has(.Mui-disabled)': {
        opacity: 0.45,
        '& .MuiSwitch-thumb': {
          backgroundColor: 'var(--white-color)',
        },
      },
      ...(ownerState.size !== 'small'
        ? {
          width: 50,
          height: 36,
          padding: theme.spacing(1, 0.9)
        }
        : {
          width: 42,
          height: 32,
          padding: theme.spacing(1, 0.9),
          '& .MuiSwitch-thumb': {
            width: 12,
            height: 12
          },
          '& .MuiSwitch-switchBase': {
            padding: 7,
            left: 2,
            top: 3,
            '&.Mui-checked': {
              left: -3
            }
          }
        })
    }),
    switchBase: ({ ownerState }) => ({
      top: 2,
      left: 1,
      '&.Mui-checked': {
        left: -3,
        color: 'var(--white-color)',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: 'var(--switch-color)',
        }
      },
      '&.Mui-checked:not(.Mui-disabled) + .MuiSwitch-track': {
        boxShadow: '0px 2px 6px rgb(var(--switch-rgb-color), 0.3)'
      },
      '&:not(.Mui-checked) + .MuiSwitch-track': {
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 0px 4px inset'
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 1
      },
      '&:hover:not(:has(span.MuiTouchRipple-root))': {
        backgroundColor: 'transparent'
      }
    }),
    thumb: {
      width: 14,
      height: 14,
      boxShadow: '0px 1px 6px rgb(var(--input-border-rgb-color), 0.1)'
    },
    track: {
      opacity: 1,
      borderRadius: 10,
      backgroundColor: 'rgba(var(--input-border-rgb-color),0.1)',
    }
  },
  variants: [
    {
      props: { color: 'primary' }, style: {
        '--switch-color': 'var(--primary-color)',
        '--switch-rgb-color': 'var(--primary-rgb-color)'
      }
    },
    {
      props: { color: 'secondary' }, style: {
        '--switch-color': 'var(--secondary-color)',
        '--switch-rgb-color': 'var(--secondary-rgb-color)'
      }
    },
    {
      props: { color: 'error' }, style: {
        '--switch-color': 'var(--red-color)',
        '--switch-rgb-color': 'var(--red-rgb-color)'
      }
    },
    {
      props: { color: 'warning' }, style: {
        '--switch-color': 'var(--yellow-color)',
        '--switch-rgb-color': 'var(--yellow-rgb-color)'
      }
    },
    {
      props: { color: 'info' }, style: {
        '--switch-color': 'var(--blue-color)',
        '--switch-rgb-color': 'var(--blue-rgb-color)'
      }
    },
    {
      props: { color: 'success' }, style: {
        '--switch-color': 'var(--green-color)',
        '--switch-rgb-color': 'var(--green-rgb-color)'
      }
    },
  ]
}