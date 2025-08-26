import { createTheme } from '@mui/material/styles';

import { Accordion, AccordionSummary, AccordionDetails } from '../common/Accordion';
import { Avatar } from '../common/Avatar';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Chip } from '../common/Chip';
import { MuiFormControl, MuiInputBase, MuiFilledInput, MuiInputLabel, MuiOutlinedInput, MuiInputAdornment, MuiFormHelperText } from '../common/Input';
import { Paper } from '../common/Paper';
import { Checkbox } from '../common/Checkbox';
import { ButtonGroups } from '../common/ButtonGroups';
import { FormControlLabel } from '../common/FormControlLabel';
import { Radio } from '../common/Radio';
import { Dialogs, DialogTitle, DialogContent, DialogContentText } from '../common/Dialogs';
import { List, ListItem, ListItemText, ListItemIcon } from "../common/List";
import { Menu, MenuItem } from "../common/Menu";
import { Pagination, PaginationItem } from "../common/Pagination";
import { LinearProgress, CircularProgress } from "../common/Progress";
import { Ratings } from '../common/Ratings';
import { Select, NativeSelect } from '../common/Select';
import { Switch } from '../common/Switch';
import { Autocomplete } from '../common/Autocomplete';
import { Tab, Tabs } from '../common/Tabs';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '../common/Table';
import { Divider } from '../common/Divider';
import { Link } from '../common/Link';
import { Drawer } from '../common/Drawer';
import { Popover } from '../common/Popover';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Popper } from '../common/Popper';

const getTheme = () =>
  createTheme({
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
      ].join(','),
      h1: {
        fontSize: 56,
      },
      h2: {
        fontSize: 40,
      },
      h3: {
        fontSize: 36,
      },
      h4: {
        fontSize: 32,
      },
      h5: {
        fontSize: 24,
      },
      h6: {
        fontSize: 20,
      },
      subtitle1: {
        fontSize: 18,
      },
      subtitle2: {
        fontSize: 14,
      },
      body1: {
        fontSize: 16,
      },
      body2: {
        fontSize: 14,
      },
      caption: {
        fontSize: 12,
      },
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
      MuiFormControl: {
        ...MuiFormControl
      },
      MuiInputBase: {
        ...MuiInputBase
      },
      MuiFilledInput: {
        ...MuiFilledInput
      },
      MuiInputLabel: {
        ...MuiInputLabel
      },
      MuiOutlinedInput: {
        ...MuiOutlinedInput
      },
      MuiInputAdornment: {
        ...MuiInputAdornment
      },
      MuiFormHelperText: {
        ...MuiFormHelperText
      },
      MuiPaper: {
        ...Paper,
      },
      MuiButtonGroup: {
        ...ButtonGroups,
      },
      MuiFormControlLabel: {
        ...FormControlLabel
      },
      MuiRadio: {
        ...Radio,
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
      MuiSelect: {
        ...Select
      },
      MuiNativeSelect: {
        ...NativeSelect
      },
      MuiSwitch: {
        ...Switch
      },
      MuiAutocomplete: {
        ...Autocomplete
      },
      MuiTabs: { 
        ...Tabs
      },
      MuiTab: { 
        ...Tab 
      },
      MuiTableContainer: { 
        ...TableContainer 
      },
      MuiTable: { 
        ...Table 
      },
      MuiTableHead: { 
        ...TableHead 
      },
      MuiTableBody: { 
        ...TableBody 
      },
      MuiTableRow: { 
        ...TableRow 
      },
      MuiTableCell: { 
        ...TableCell 
      },
      MuiDivider: {
        ...Divider,
      },
      MuiLink: {
        ...Link,
      },
      MuiDrawer: {
        ...Drawer,
      },
      MuiPopover: {
        ...Popover
      },
      MuiBreadcrumbs: {
        ...Breadcrumbs
      },
      MuiPopper: {
        ...Popper
      },
    },
  });

export default getTheme;
