import { createTheme } from '@mui/material/styles';

import { Accordion } from '../common/Accordion';
import { AccordionSummary } from '../common/AccordionSummary';
import { AccordionDetails } from '../common/AccordionDetails';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { Paper } from '../common/Paper';


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
      MuiButton: {
        ...Button,
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
