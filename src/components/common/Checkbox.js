import { RiCheckboxBlankLine, RiCheckboxLine } from "react-icons/ri"


export const Checkbox = {
  styleOverrides: {
    root: {
      '&.Mui-checked': {
      },
      '&:not(.Mui-checked)': {
      },
    },
    icon: {
    },
    checkedIcon: {
    },
  },
  defaultProps: {
    color: 'secondary',
    icon: <RiCheckboxBlankLine size={24} />,
    checkedIcon: <RiCheckboxLine size={24} />,
  },
}