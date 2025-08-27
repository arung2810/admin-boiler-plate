import { RiArrowDownSLine } from "react-icons/ri";

export const Autocomplete = ({
  defaultProps: {
    popupIcon: <RiArrowDownSLine />
  },
  styleOverrides: {
    root: {
      '& .MuiButtonBase-root.Mui-disabled i, & .MuiButtonBase-root.Mui-disabled svg': {
        color: 'var(--mui-palette-action-disabled)'
      },
      '& .MuiOutlinedInput-input': {
        height: '1.4375em'
      }
    },
    inputRoot: {
      paddingRight: '2rem',
      '&.Mui-focused': {
        borderColor: 'var(--primary-color)'
      }
    },
    input: {
      '& + .MuiAutocomplete-endAdornment': {
        right: '1rem',
        '& i, & svg': {
          fontSize: '1.25rem',
          color: 'var(--text-color)'
        },
        '& .MuiAutocomplete-clearIndicator': {
          padding: 2
        }
      },
      '&.MuiInputBase-inputSizeSmall + .MuiAutocomplete-endAdornment': {
        '& i, & svg': {
          fontSize: '1rem'
        }
      }
    },
    tag: {
      margin: 2,
      borderRadius: 6,
      '& .MuiChip-label': {
        fontSize: '0.75rem'
      },
      '& .MuiChip-deleteIcon': {
        WebkitTextFillColor: 'rgba(var(--text-rgb-color),0.4)',
        color: 'rgba(var(--text-rgb-color),0.4)',
      },
    },
    popupIndicator: {
      color: 'var(--secondary-color)',
      '&:hover': {
        color: 'var(--text-color)'
      }
    },
    popupIndicatorOpen: {
      transform: 'rotate(180deg)'
    },

    clearIndicator: {
      color: 'var(--secondary-color)',
      '&:hover': {
        color: 'var(--mui-palette-error-main)'
      }
    },

    endAdornment: {

    },

    loading: {
      padding: '0.5rem',
      color: 'var(--secondary-color)'
    },

    noOptions: {
      padding: '0.75rem',
      color: 'var(--mui-palette-text-disabled)'
    },

    popper: {
      // zIndex: 1500
    },
    paper: {
      borderRadius: 8,
      boxShadow: '0px 1px 4px rgb(var(--input-border-rgb-color), 0.1)',
      padding: 8,
      marginBlockStart: '0'
    },
    listbox: ({ theme }) => ({
      padding: theme.spacing(0),
      '& .MuiAutocomplete-option': {
        color: 'var(--text-color)',
        paddingBlock: theme.spacing(1),
        marginInline: theme.spacing(0),
        marginBlock: theme.spacing(0),
        padding: theme.spacing(1, 1.5),
        borderRadius: 8,
        '&[aria-selected="true"]': {
          backgroundColor: 'rgba(var(--primary-rgb-color),0.7)',
          color: 'var(--white-color)',
          '&.Mui-focused, &.Mui-focusVisible': {
            backgroundColor: 'rgba(var(--primary-rgb-color),0.7)',
            color: 'var(--white-color)',
          }
        }
      },
      '& .MuiAutocomplete-option.Mui-focusVisible': {
        backgroundColor: 'var(--mui-palette-action-hover)'
      }
    }),

    option: {
      minHeight: 36
    },

    groupLabel: {
      fontWeight: 600,
      padding: '4px 12px',
      fontSize: '0.75rem',
      color: 'var(--text-color)',
      lineHeight: '24px',
      backgroundColor: 'transparent',
    },

    groupUl: {
      paddingLeft: 12
    }
  }
})