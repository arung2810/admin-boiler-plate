'use client'

// MUI imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

// Third-party Imports
import ReactDatePickerComponent from 'react-datepicker'

// Styles
import 'react-datepicker/dist/react-datepicker.css'

// Styled Components
const StyledReactDatePicker = styled(Box)(({ theme }) => {
  return {
    '& .react-datepicker-popper': {
      zIndex: 20,
    },
    '& .react-datepicker-wrapper': {
      width: '100%'
    },
    '& .react-datepicker__triangle': {
      display: 'none'
    },
    '& .react-datepicker': {
      color: 'var(--text-color)',
      borderRadius: 8,
      fontFamily: theme.typography.fontFamily,
      backgroundColor: 'var(--card-bg-color)',
      boxShadow: '0px 1px 4px rgba(0,0,0, 0.1)',
      border: 'none',
      '& .react-datepicker__header': {
        padding: 0,
        border: 'none',
        fontWeight: 'normal',
        backgroundColor: 'var(--card-bg-color)',
        '& .react-datepicker__current-month, &.react-datepicker-year-header': {
          textAlign: 'left'
        },
        '&:not(.react-datepicker-year-header)': {
          '& + .react-datepicker__month, & + .react-datepicker__year': {
            margin: theme.spacing(2),
            marginTop: theme.spacing(4.5)
          }
        },
        '&.react-datepicker-year-header': {
          '& + .react-datepicker__month, & + .react-datepicker__year': {
            margin: theme.spacing(2),
            marginTop: theme.spacing(0)
          }
        }
      },
      '& > .react-datepicker__navigation': {
        top: 13,
        borderRadius: '50%',
        backgroundColor: 'rgba(var(--input-border-rgb-color),0.1)',
        '&.react-datepicker__navigation--previous': {
          width: 30,
          height: 30,
          border: 'none',
          top: 12,
          left: 'auto',
          right: '57px',
          ...(theme.direction === 'ltr'
            ? {
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(47, 43, 61, 0.7)' d='M17.5 10L12.5 15L17.5 20' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\")",
              ...theme.applyStyles('dark', {
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(225, 222, 245, 0.7)' d='M17.5 10L12.5 15L17.5 20' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\")"
              })
            }
            : {
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(47, 43, 61, 0.7)' d='M12.5 10L17.5 15L12.5 20' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\")",
              ...theme.applyStyles('dark', {
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(225, 222, 245, 0.7)' d='M12.5 10L17.5 15L12.5 20' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\")"
              })
            }),
          '& .react-datepicker__navigation-icon': {
            display: 'none'
          },
          '&:has(+ .react-datepicker__navigation--next--with-time)':
            theme.direction === 'ltr' ? { right: 177 } : { left: 177 }
        },
        '&.react-datepicker__navigation--next': {
          width: 30,
          height: 30,
          border: 'none',
          top: 12,
          right: 15,
          left: 'auto',
          ...(theme.direction === 'ltr'
            ? {
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(47, 43, 61, 0.7)' d='M12.5 10L17.5 15L12.5 20' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\")",
              ...theme.applyStyles('dark', {
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(225, 222, 245, 0.7)' d='M12.5 10L17.5 15L12.5 20' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\")"
              })
            }
            : {
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(47, 43, 61, 0.7)' d='M17.5 10L12.5 15L17.5 20' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\")",
              ...theme.applyStyles('dark', {
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(225, 222, 245, 0.7)' d='M17.5 10L12.5 15L17.5 20' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E\")"
              })
            }),
          '& .react-datepicker__navigation-icon': {
            display: 'none'
          }
        },
        '&.react-datepicker__navigation--next--with-time': theme.direction === 'ltr' ? { right: 135 } : { left: 135 },
        '&:focus, &:active': {
          outline: 0
        }
      },
      '& .react-datepicker__current-month, & .react-datepicker-year-header': {
        ...theme.typography.body1,
        lineHeight: 2,
        paddingBlockStart: theme.spacing(1.5),
        paddingBlockEnd: theme.spacing(2),
        paddingInline: theme.spacing(2),
        color: 'var(--text-color)'
      },
      '& .react-datepicker__day-name': {
        margin: 0,
        width: '2.25rem',
        ...theme.typography.caption,
        color: 'var(--text-color)'
      },
      '& .react-datepicker__day-names': {
        margin: 6.4
      },
      '& .react-datepicker__day': {
        margin: 0,
        width: '2.25rem',
        borderRadius: '50%',
        lineHeight: '2.25rem',
        color: 'var(--text-color)',
        fontSize: theme.typography.body2,
        '&.react-datepicker__day--selected.react-datepicker__day--in-selecting-range.react-datepicker__day--selecting-range-start, &.react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--in-range, &.react-datepicker__day--range-start':
        {
          borderRadius: '18px 0px 0px 18px;',
          color: 'var(--white-color)',
          backgroundColor: 'var(--primary-color)'
        },
        '&.react-datepicker__day--range-end.react-datepicker__day--in-range': {
          borderRadius: '0px 18px 18px 0px',
          color: 'var(--white-color)',
          backgroundColor: 'var(--primary-color)'
        },
        '&.react-datepicker__day--selected:hover': {
          backgroundColor: 'var(--primary-color)',
          color: 'var(--white-color)'
        },
        '&:focus, &:active': {
          outline: 0
        },
        '&.react-datepicker__day--outside-month, &.react-datepicker__day--disabled:not(.react-datepicker__day--selected)':
        {
          color: 'rgba(var(--text-rgb-color),0.4)',
          '&:hover': {
            backgroundColor: 'transparent'
          }
        },
        '&.react-datepicker__day--highlighted, &.react-datepicker__day--highlighted:hover': {
          color: 'var(--green-color)',
          backgroundColor: 'rgba(var(--green-rgb-color),0.2)',
          '&.react-datepicker__day--selected': {
            backgroundColor: 'var(--primary-color) !important'
          }
        }
      },
      '&:has(.react-datepicker__day--in-range)': {
        '& > .react-datepicker__navigation': {
          '&.react-datepicker__navigation--previous': {
            ...(theme.direction === 'ltr' ? { left: 15 } : { right: 15 })
          }
        },
        '& .react-datepicker__header': {
          '& .react-datepicker__current-month': {
            textAlign: 'center'
          }
        }
      },
      '& .react-datepicker__day--in-range, & .react-datepicker__day--in-selecting-range': {
        borderRadius: '0',
        color: 'var(--primary-color)',
        backgroundColor: 'rgba(var(--primary-rgb-color), 0.2)'
      },
      '& .react-datepicker__day--today': {
        fontWeight: 'normal',
        '&:not(.react-datepicker__day--selected):not(:empty)': {
          color: 'var(--primary-color)',
          backgroundColor: 'rgba(var(--primary-rgb-color),0.2)',
          '&:hover': {
            backgroundColor: 'rgba(var(--primary-rgb-color),0.3)'
          },
          '&.react-datepicker__day--keyboard-selected': {
            backgroundColor: 'rgba(var(--primary-rgb-color), 0.2)',
            '&:hover': {
              backgroundColor: 'rgba(var(--primary-rgb-color), 0.2)'
            }
          }
        }
      },
      '& .react-datepicker__month-text--today': {
        fontWeight: 'normal',
        '&:not(.react-datepicker__month-text--selected)': {
          lineHeight: '2.125rem',
          color: 'var(--primary-color)',
          border: '1px solid var(--primary-color)',
          '&:hover': {
            backgroundColor: 'rgba(var(--primary-rgb-color), 0.04)'
          }
        }
      },
      '& .react-datepicker__year-text--today': {
        fontWeight: 'normal',
        '&:not(.react-datepicker__year-text--selected)': {
          lineHeight: '2.125rem',
          color: 'var(--primary-color)',
          border: '1px solid var(--primary-color)',
          '&:hover': {
            backgroundColor: 'rgba(var(--primary-rgb-color), 0.04)'
          },
          '&.react-datepicker__year-text--keyboard-selected': {
            color: 'var(--primary-color)',
            backgroundColor: 'rgba(var(--primary-rgb-color), 0.06)',
            '&:hover': {
              color: 'var(--primary-color)',
              backgroundColor: 'rgba(var(--primary-rgb-color), 0.06)'
            }
          }
        }
      },
      '& .react-datepicker__day--keyboard-selected': {
        '&:not(.react-datepicker__day--in-range)': {
          color: 'var(--primary-color)',
          backgroundColor: 'rgba(var(--primary-rgb-color),0.16)',
          '&:hover': {
            backgroundColor: 'rgba(var(--primary-rgb-color),0.16)'
          }
        }
      },
      '& .react-datepicker__month-text--keyboard-selected': {
        '&:not(.react-datepicker__month--in-range)': {
          color: 'var(--primary-color)',
          backgroundColor: 'rgba(var(--primary-rgb-color),0.16)',
          '&:hover': {
            backgroundColor: 'rgba(var(--primary-rgb-color),0.16)'
          }
        }
      },
      '& .react-datepicker__year-text--keyboard-selected, & .react-datepicker__quarter-text--keyboard-selected': {
        color: 'var(--primary-color)',
        backgroundColor: 'rgba(var(--primary-rgb-color), 0.16)'
      },
      '& .react-datepicker__day--selected, & .react-datepicker__month-text--selected, & .react-datepicker__year-text--selected, & .react-datepicker__quarter-text--selected':
      {
        color: 'var(--white-color)',
        backgroundColor: 'rgb(var(--primary-rgb-color))',
        boxShadow: '0px 1px 4px rgba(0,0,0, 0.1)',
        '&:hover': {
          backgroundColor: 'rgba(var(--primary-color),0.8)'
        }
      },
      '& .react-datepicker__header__dropdown': {
        '& .react-datepicker__month-dropdown-container:not(:last-child)': {
          marginRight: theme.spacing(8)
        },
        '& .react-datepicker__month-dropdown-container, & .react-datepicker__year-dropdown-container': {
          marginBottom: theme.spacing(4)
        },
        '& .react-datepicker__month-read-view--selected-month, & .react-datepicker__year-read-view--selected-year': {
          fontSize: '0.875rem',
          marginRight: theme.spacing(1),
          color: 'var(--text-color)'
        },
        '& .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow':
        {
          borderColor: 'var(--text-color)'
        },
        '& .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view--down-arrow': {
          top: 4,
          borderColor: 'var(--secondary-color)'
        },
        '& .react-datepicker__month-dropdown, & .react-datepicker__year-dropdown': {
          padding: theme.spacing(2),
          border: 'none',
          borderRadius: '6px',
          backgroundColor: 'var(--card-bg-color)',
          boxShadow: '0px 1px 4px rgba(0,0,0, 0.1)',
          '[data-skin="bordered"] &': {
            boxShadow: 'none',
            border: `1px solid rgba(var(--input-border-rgb-color),0.1)`
          }
        },
        '& .react-datepicker__month-option, & .react-datepicker__year-option': {
          ...theme.typography.body1,
          padding: theme.spacing(1.5, 4),
          borderRadius: '6px',
          marginBlockEnd: theme.spacing(0.5),
          '&:hover': {
            backgroundColor: 'rgba(var(--text-rgb-color),0.3)'
          }
        },
        '& .react-datepicker__month-option.react-datepicker__month-option--selected_month': {
          color: 'var(--primary-color)',
          backgroundColor: 'rgba(var(--primary-rgb-color),0.1)',
          '&:hover': {
            backgroundColor: 'rgba(var(--primary-rgb-color,0.1))'
          },
          '& .react-datepicker__month-option--selected': {
            display: 'none'
          }
        },
        '& .react-datepicker__year-option.react-datepicker__year-option--selected_year': {
          color: 'var(--primary-color)',
          backgroundColor: 'rgba(var(--primary-rgb-color),0.1)',
          '&:hover': {
            backgroundColor: 'rgba(var(--primary-rgb-color,0.1))'
          },
          '& .react-datepicker__year-option--selected': {
            display: 'none'
          }
        },
        '& .react-datepicker__year-option': {
          // TODO: Remove some of the following styles for arrow in Year dropdown when react-datepicker give arrows in Year dropdown
          '& .react-datepicker__navigation--years-upcoming': {
            width: 9,
            height: 9,
            borderStyle: 'solid',
            borderWidth: '3px 3px 0 0',
            transform: 'rotate(-45deg)',
            borderTopColor: 'var(--secondary-color)',
            borderRightColor: 'var(--secondary-color)',
            margin: `${theme.spacing(2.75)} auto ${theme.spacing(0)}`
          },
          '&:hover .react-datepicker__navigation--years-upcoming': {
            borderTopColor: 'var(--text-color)',
            borderRightColor: 'var(--text-color)'
          },
          '& .react-datepicker__navigation--years-previous': {
            width: 9,
            height: 9,
            borderStyle: 'solid',
            borderWidth: '0 0 3px 3px',
            transform: 'rotate(-45deg)',
            borderLeftColor: 'var(--secondary-color)',
            borderBottomColor: 'var(--secondary-color)',
            margin: `${theme.spacing(0)} auto ${theme.spacing(2.75)}`
          },
          '&:hover .react-datepicker__navigation--years-previous': {
            borderLeftColor: 'var(--text-color)',
            borderBottomColor: 'var(--text-color)'
          }
        }
      },
      '& .react-datepicker__week-number': {
        margin: 0,
        fontWeight: 500,
        width: '2.25rem',
        lineHeight: '2.25rem',
        fontSize: theme.typography.body2.fontSize,
        color: 'var(--text-color)'
      },
      '& .react-datepicker__month-text, & .react-datepicker__year-text, & .react-datepicker__quarter-text': {
        margin: 0,
        alignItems: 'center',
        fontSize: theme.typography.body1.fontSize,
        lineHeight: '2rem',
        display: 'inline-flex',
        justifyContent: 'center',
        borderRadius: '6px',
        '&:focus, &:active': {
          outline: 0
        }
      },
      '& .react-datepicker__year-wrapper': {
        maxWidth: 205,
        justifyContent: 'center'
      },
      '& .react-datepicker__input-time-container': {
        display: 'flex',
        alignItems: 'center',
        ...(theme.direction === 'rtl' ? { flexDirection: 'row-reverse' } : {})
      },
      '& .react-datepicker__today-button': {
        borderTop: 0,
        borderRadius: '1rem',
        margin: theme.spacing(0, 4, 4),
        color: 'var(--white-color)',
        backgroundColor: 'var(--primary-color)'
      },

      // Time Picker
      '&:not(.react-datepicker--time-only)': {
        '& .react-datepicker__time-container': {
          borderLeftColor: 'rgba(var(--input-border-rgb-color),0.1)',
          [theme.breakpoints.down('sm')]: {
            width: '5.5rem'
          },
          [theme.breakpoints.up('sm')]: {
            width: '7.4375rem'
          }
        }
      },
      '&.react-datepicker--time-only': {
        width: '7.4375rem',
        '& .react-datepicker__time-container': {
          width: '7.4375rem'
        }
      },
      '& .react-datepicker__time-container': {
        padding: theme.spacing(0.75, 0),
        '& .react-datepicker-time__header': {
          ...theme.typography.body2,
          marginBottom: theme.spacing(1.5),
          marginTop: theme.spacing(1.5),
          color: 'var(--text-color)'
        },
        '& .react-datepicker__time': {
          background: 'var(--card-bg-color)',
          '& .react-datepicker__time-box .react-datepicker__time-list-item--disabled': {
            pointerEvents: 'none',
            color: 'rgba(var(--text-rgb-color),0.4)',
            '&.react-datepicker__time-list-item--selected': {
              fontWeight: 'normal',
              backgroundColor: 'rgba(var(--text-rgb-color),0.2)'
            }
          }
        },
        '& .react-datepicker__time-list-item': {
          height: 'auto !important',
          padding: `${theme.spacing(1, 0)} !important`,
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
          ...theme.typography.body2,
          color: 'var(--text-color)',
          borderRadius: '6px',
          '&:focus, &:active': {
            outline: 0
          },
          '&:hover': {
            backgroundColor: 'rgba(var(--input-border-rgb-color), 0.1) !important'
          },
          '&.react-datepicker__time-list-item--selected:not(.react-datepicker__time-list-item--disabled)': {
            fontWeight: 'normal',
            color: 'var(--white-color)',
            backgroundColor: 'var(--primary-color) !important',
          }
        },
        '& .react-datepicker__time-box': {
          width: '100%'
        },
        '& .react-datepicker__time-list': {
          '&::-webkit-scrollbar': {
            width: 8
          },

          /* Track */
          '&::-webkit-scrollbar-track': {
            background: 'var(--card-bg-color)'
          },

          /* Handle */
          '&::-webkit-scrollbar-thumb': {
            borderRadius: 10,
            background: '#aaa'
          },

          /* Handle on hover */
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#999'
          }
        }
      },
      '& .react-datepicker__day:hover, & .react-datepicker__month-text:hover, & .react-datepicker__quarter-text:hover, & .react-datepicker__year-text:hover':
      {
        // backgroundColor: 'var(--primary-color)'
        color: 'var(--text-color)',
        backgroundColor: 'rgba(var(--input-border-rgb-color), 0.1)'
      },
      '[data-skin="bordered"] &': {
        boxShadow: 'none',
        border: `1px solid rgba(0,0,0, 0.1)`
      }
    },
    '& .react-datepicker__close-icon': {
      top: 10,
      paddingRight: theme.spacing(4),
      ...(theme.direction === 'rtl' ? { right: 0, left: 'auto' } : {}),
      '&:after': {
        width: 'unset',
        height: 'unset',
        fontSize: '1.5rem',
        color: 'var(--text-color)',
        backgroundColor: 'transparent !important'
      }
    }
  }
})

const ReactDatepicker = props => {
  // Props
  const { boxProps, ...rest } = props

  return (
    <StyledReactDatePicker {...boxProps}>
      <ReactDatePickerComponent popperPlacement='bottom-start' {...rest} />
    </StyledReactDatePicker>
  )
}

export default ReactDatepicker
