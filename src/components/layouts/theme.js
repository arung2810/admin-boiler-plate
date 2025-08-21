import { createTheme } from '@mui/material/styles';

import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { Paper } from '../common/Paper';
import { ButtonGroups } from '../common/ButtonGroups';
import { Dialogs } from '../common/Dialogs';


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
      MuiButton: {
        ...Button,
      },
      MuiTextField: {
        ...Input,
      },
      MuiPaper: {
        ...Paper,
      },
      MuiButtonGroup: {
        ...ButtonGroups,
      },
      MuiDialog: {
        ...Dialogs,
      },
    },
  });

export default getTheme;
