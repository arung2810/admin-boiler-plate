import { forwardRef } from 'react'

// MUI Imports
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    transform: 'none',
    width: 'fit-content',
    maxWidth: '100%',
    lineHeight: 1.153,
    position: 'relative',
    fontSize: theme.typography.body2.fontSize,
    marginBottom: theme.spacing(1),
    color: 'var(--text-color)',
    '&:not(.Mui-error).MuiFormLabel-colorPrimary.Mui-focused': {
      color: 'var(--primary-color)'
    },
    '&.Mui-disabled': {
      color: 'var(--text-color)',
      opacity: 0.38
    },
    '&.Mui-error': {
      color: 'var(--red-color)'
    }
  },
  '& .MuiInputBase-root': {
    backgroundColor: 'transparent !important',
    borderRadius: "4px",
    border: `1px solid rgba(var(--input-border-rgb-color),0.22)`,
    '& .MuiInputBase-input': {
      borderRadius: '7px',
    },
    '& .MuiInputBase-input::placeholder': {
    },
    '&.Mui-disabled .MuiInputBase-input::placeholder': {
    },
    '&.Mui-disabled .MuiInputBase-input': {
      WebkitTextFillColor: 'var(--text-color)',
      color: 'var(--text-color)',
      opacity: 0.38,
      backgroundColor: 'rgba(var(--input-border-rgb-color),0.2)'
    },
    '&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover': {
      borderColor: 'var(--input-border-rgb-color)'
    },
    '&:before, &:after': {
      display: 'none'
    },
    '&.MuiInputBase-sizeSmall': {
      borderRadius: '6px'
    },
    '&.Mui-error': {
      borderColor: 'var(--red-color)'
    },
    '&.Mui-focused': {
      borderWidth: 2,
      '& :not(textarea).MuiFilledInput-input': {
        padding: '7px 15px'
      },
      '&:not(.Mui-error).MuiInputBase-colorPrimary': {
        borderColor: 'var(--primary-color)',
      },
      '&.MuiInputBase-colorSecondary': {
        borderColor: 'var(--secondary-color)'
      },
      '&.MuiInputBase-colorInfo': {
        borderColor: 'var(--blue-color)'
      },
      '&.MuiInputBase-colorSuccess': {
        borderColor: 'var(--green-color)'
      },
      '&.MuiInputBase-colorWarning': {
        borderColor: 'var(--yellow-color)'
      },
      '&.MuiInputBase-colorError': {
        borderColor: 'var(--red-color)'
      },
      '&.Mui-error': {
        borderColor: 'var(--red-color)'
      }
    },
    '&.Mui-disabled': {
      backgroundColor: 'rgba(var(--input-border-rgb-color),0.2)',
      color: 'var(--text-color)',
      opacity: 0.38
    }
  },

  // Adornments
  '& .MuiInputAdornment-root': {
    marginBlockStart: '0px !important',
    '&.MuiInputAdornment-positionStart + .MuiInputBase-input:not(textarea)': {
      paddingInlineStart: '0px !important'
    }
  },
  '& .MuiInputBase-inputAdornedEnd.MuiInputBase-input': {
    paddingInlineEnd: '0px !important'
  },
  '& .MuiInputBase-sizeSmall.MuiInputBase-adornedStart.Mui-focused': {
    paddingInlineStart: '13px',
    '& .MuiInputBase-input': {
      paddingInlineStart: '0px !important'
    }
  },
  '& .MuiInputBase-sizeSmall.MuiInputBase-adornedStart:not(.MuiAutocomplete-inputRoot)': {
    paddingInlineStart: '14px'
  },
  '& .MuiInputBase-sizeSmall.MuiInputBase-adornedEnd:not(.MuiAutocomplete-inputRoot)': {
    paddingInlineEnd: '14px'
  },
  '& .MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.Mui-focused:not(.MuiAutocomplete-inputRoot)': {
    paddingInlineEnd: '13px',
    '& .MuiInputBase-input': {
      paddingInlineEnd: '0px !important'
    }
  },
  '& :not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart.Mui-focused': {
    paddingInlineStart: '15px',
    '& .MuiInputBase-input': {
      paddingInlineStart: '0px !important'
    }
  },
  '& :not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart': {
    paddingInlineStart: '16px'
  },
  '& :not(.MuiInputBase-sizeSmall).MuiInputBase-adornedEnd.Mui-focused': {
    paddingInlineEnd: '15px',
    '& .MuiInputBase-input': {
      paddingInlineEnd: '0px !important'
    }
  },
  '& :not(.MuiInputBase-sizeSmall).MuiInputBase-adornedEnd': {
    paddingInlineEnd: '16px'
  },
  '& .MuiInputAdornment-sizeMedium': {
    'i, svg': {
      fontSize: '1.25rem'
    }
  },
  '& .MuiInputBase-input': {
    '&:not(textarea).MuiInputBase-inputSizeSmall': {
      padding: '8px 16px'
    },
    '&:not(.MuiInputBase-readOnly):not([readonly])::placeholder': {
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shorter
      })
    }
  },
  '& :not(.MuiInputBase-sizeSmall).MuiInputBase-root': {
    borderRadius: '8px',
    fontSize: theme.typography.body1.fontSize,
    lineHeight: '1.41',
    padding: 0,
    '& .MuiInputBase-input': {
      padding: '12px 16px'
    },
    '&.Mui-focused': {
      '& .MuiInputBase-input': {
        padding: '11px 15px'
      }
    }
  },
  '& .MuiFormHelperText-root': {
    lineHeight: 1.154,
    margin: theme.spacing(1, 0, 0),
    fontSize: theme.typography.body2.fontSize,
    color: 'var(--text-color)',
    '&.Mui-error': {
      color: 'var(--red-color)'
    },
    '&.Mui-disabled': {
      color: 'var(--text-color)',
      opacity: 0.38
    }
  },

  // For Autocomplete
  '& :not(.MuiInputBase-sizeSmall).MuiAutocomplete-inputRoot': {
    paddingBlock: '5.55px',
    '& .MuiAutocomplete-input': {
      paddingInline: '8px !important',
      paddingBlock: '5.25px !important'
    },
    '&.Mui-focused .MuiAutocomplete-input': {
      paddingInlineStart: '7px !important'
    },
    '&.Mui-focused': {
      paddingBlock: '4.55px !important'
    },
    '& .MuiAutocomplete-endAdornment': {
      top: 'calc(50% - 12px)'
    }
  },
  '& .MuiAutocomplete-inputRoot.MuiInputBase-sizeSmall': {
    paddingBlock: '4.75px !important',
    paddingInlineStart: '10px',
    '&.Mui-focused': {
      paddingBlock: '3.75px !important',
      paddingInlineStart: '9px',
      '.MuiAutocomplete-input': {
        paddingBlock: '2.5px',
        paddingInline: '3px !important'
      }
    },
    '& .MuiAutocomplete-input': {
      paddingInline: '3px !important'
    }
  },
  '& .MuiAutocomplete-inputRoot': {
    display: 'flex',
    gap: '0.25rem',
    '& .MuiAutocomplete-tag': {
      margin: 0
    }
  },
  '& .MuiAutocomplete-inputRoot.Mui-focused .MuiAutocomplete-endAdornment': {
    right: '.9375rem'
  },

  // For Textarea
  '& .MuiInputBase-multiline': {
    '&.MuiInputBase-sizeSmall': {
      padding: '6px 14px',
      '&.Mui-focused': {
        padding: '5px 13px'
      }
    },
    '& textarea.MuiInputBase-inputSizeSmall:placeholder-shown': {
      overflowX: 'hidden'
    }
  },

  // For Select
  '& .MuiSelect-select.MuiInputBase-inputSizeSmall, & .MuiNativeSelect-select.MuiInputBase-inputSizeSmall': {
    '& ~ i, & ~ svg': {
      inlineSize: '1.125rem',
      blockSize: '1.125rem'
    }
  },
  '& .MuiSelect-select': {
    // lineHeight: 1.5,
    minHeight: 'unset !important',
    lineHeight: '1.4375em',
    '&.MuiInputBase-input': {
      paddingInlineEnd: '32px !important'
    }
  },
  '& .Mui-focused .MuiSelect-select': {
    '& ~ i, & ~ svg': {
      right: '0.9375rem'
    }
  },
  '& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus': {
    backgroundColor: 'transparent'
  },
}))

const CustomTextField = forwardRef((props, ref) => {
  const { size = 'small', slotProps, ...rest } = props

  return (
    <TextFieldStyled
      size={size}
      inputRef={ref}
      {...rest}
      variant='filled'
      slotProps={{
        ...slotProps,
        inputLabel: { ...slotProps?.inputLabel, shrink: true }
      }}
    />
  )
})

export default CustomTextField
