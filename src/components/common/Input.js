export const MuiFormControl = {
  styleOverrides: {
    root: {
      '&:has(.MuiRadio-root) .MuiFormHelperText-root, &:has(.MuiCheckbox-root) .MuiFormHelperText-root, &:has(.MuiSwitch-root) .MuiFormHelperText-root':
      {
        marginInline: 0,
      },
      '& .MuiInputLabel-formControl': {
        color: 'var(--text-color)',
      }
    }
  }
}

export const MuiInputBase = {
  styleOverrides: {
    root: {
      lineHeight: 1.6,
      color: 'var(--text-color)',
      '&.MuiInput-underline': {
        '&:before': {
          borderColor: 'rgba(var(--input-border-rgb-color), 0.22)',
        },
        '&.Mui-disabled': {
          '&:before': {
            borderBottom: '1px solid rgba(var(--input-border-rgb-color), 0.2)'
          }
        },
        '&:not(.Mui-disabled, .Mui-error):hover:before': {
          borderColor: 'rgba(var(--input-border-rgb-color), 0.7)'
        }
      },
      '&.Mui-disabled .MuiInputBase-input, &.Mui-disabled .MuiInputAdornment-root, &.Mui-disabled .MuiInputAdornment-root > *': {
        WebkitTextFillColor: 'var(--text-color)',
        color: 'var(--text-color)',
        opacity: 0.38,
        backgroundColor: 'rgba(var(--input-border-rgb-color),0.2)'
      },
    }
  }
}

export const MuiFilledInput = {
  styleOverrides: {
    root: {
      borderStartStartRadius: 4,
      borderStartEndRadius: 4,
      color: 'var(--text-color)',
      '& .MuiInputBase-input': {
        borderRadius: '4px 4px 0 0',
      },
      '&:before': {
        borderBottom: '1px solid rgba(var(--input-border-rgb-color), 0.22)'
      },
      '&:not(.Mui-disabled, .Mui-error):hover:before': {
        borderBottom: '1px solid rgba(var(--input-border-rgb-color), 0.7)'
      },
      '&.Mui-disabled:before': {
        borderBottom: '1px solid rgba(var(--input-border-rgb-color), 0.2)'
      },
      '&.Mui-disabled .MuiInputBase-input': {
        WebkitTextFillColor: 'var(--text-color)',
        color: 'var(--text-color)',
        opacity: 0.38,
        backgroundColor: 'rgba(var(--input-border-rgb-color),0.2)'
      },
    }
  }
}

export const MuiInputLabel = {
  styleOverrides: {
    shrink: ({ ownerState }) => ({
      ...(ownerState.variant === 'outlined' && {
        transform: 'translate(14px, -8px) scale(0.867)'
      }),
      ...(ownerState.variant === 'filled' && {
        transform: `translate(12px, ${ownerState.size === 'small' ? 4 : 7}px) scale(0.867)`
      }),
      ...(ownerState.variant === 'standard' && {
        transform: 'translate(0, -1.5px) scale(0.867)'
      })
    }),
    root: {
      '&.Mui-disabled': {
        WebkitTextFillColor: 'var(--text-color)',
        color: 'var(--text-color)',
        opacity: 0.38,
      }
    }
  }
}

export const MuiOutlinedInput = {
  styleOverrides: {
    root: {
      color: 'var(--text-color)',
      '& .MuiInputBase-input': {
        borderRadius: '4px',
      },
      '&:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled):hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(var(--input-border-rgb-color), 0.7)'
      },
      '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(var(--input-border-rgb-color), 0.2)'
      },
      '&:not(.Mui-error).MuiInputBase-colorPrimary.Mui-focused': {

      },
      '&.Mui-disabled .MuiInputBase-input': {
        WebkitTextFillColor: 'var(--text-color)',
        color: 'var(--text-color)',
        opacity: 0.38,
        backgroundColor: 'rgba(var(--input-border-rgb-color),0.2)'
      },
    },
    input: ({ theme, ownerState }) => ({
      ...(ownerState?.size === 'medium' && {
        '&:not(.MuiInputBase-inputMultiline, .MuiInputBase-inputAdornedStart)': {

        },
        height: '1.5em'
      }),
      '& ~ .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(var(--input-border-rgb-color), 0.22)'
      }
    }),
    notchedOutline: {
      '& legend': {
        fontSize: '0.867em',
      }
    }
  }
}

export const MuiInputAdornment = {
  styleOverrides: {
    root: {
      color: 'var(--text-color)',
      '& i, & svg': {
        fontSize: '1rem !important'
      },
      '& *': {
        color: 'inherit !important'
      }
    }
  }
}

export const MuiFormHelperText = {
  styleOverrides: {
    root: {
      lineHeight: 1,
      letterSpacing: 'unset'
    }
  }
}