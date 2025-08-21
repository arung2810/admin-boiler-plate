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
import { ButtonGroups } from '../common/ButtonGroups';
import { Dialogs, DialogTitle, DialogContent, DialogContentText } from '../common/Dialogs';
import { List, ListItem, ListItemText, ListItemIcon } from "../common/List";
import { Menu, MenuItem } from "../common/Menu";
import { Pagination, PaginationItem } from "../common/Pagination";
import { LinearProgress, CircularProgress } from "../common/Progress";
import { Ratings } from '../common/Ratings';

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
      MuiButtonGroup: {
        ...ButtonGroups,
      },
      MuiDialog: {
        ...Dialogs,
      },
      MuiDialogTitle: {
        ...DialogTitle,
      },
      MuiDialogContent: {
        ...DialogContent,
      },
      MuiDialogContentText: {
        ...DialogContentText,
      },
      MuiList: { 
        ...List
      },
      MuiListItem: {
        ...ListItem 
      },
      MuiListItemText: { 
        ...ListItemText 
      },
      MuiListItemIcon: { 
        ...ListItemIcon 
      },
      MuiMenu: {
        ...Menu,
      },
      MuiMenuItem: {
        ...MenuItem,
      },
      MuiPagination: {
        ...Pagination,
      },
      MuiPaginationItem: {
        ...PaginationItem,
      },
      MuiLinearProgress: {
        ...LinearProgress,
      },
      MuiCircularProgress: {
        ...CircularProgress,
      },
      MuiRating: {
        ...Ratings,
      },
    },
  });

export default getTheme;
