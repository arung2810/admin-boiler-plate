import { createTheme } from '@mui/material/styles';

import { Accordion } from '../common/Accordion';
import { AccordionSummary } from '../common/AccordionSummary';
import { AccordionDetails } from '../common/AccordionDetails';
import { Avatar } from '../common/Avatar';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Chip } from '../common/Chip';
import { Input } from '../common/Input';
import { Paper } from '../common/Paper';
import { Checkbox } from '../common/Checkbox';


const getTheme = () =>
  createTheme({
    typography: {
      fontFamily: 'Inter',
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            maxWidth: '1920px',
            width: '100%',
          },
        },
      },
      MuiAccordion: {
        ...Accordion,
      },
      MuiAccordionSummary: {
        ...AccordionSummary,
      },
      MuiAccordionDetails: {
        ...AccordionDetails,
      },
      MuiAvatar: {
        ...Avatar,
      },
      MuiBadge: {
        ...Badge,
      },
      MuiButton: {
        ...Button,
      },
      MuiCheckbox: {
        ...Checkbox,
      },
      MuiChip: {
        ...Chip,
      },
      MuiTextField: {
        ...Input,
      },
      MuiPaper: {
        ...Paper,
      },
    },
  });

export default getTheme;
