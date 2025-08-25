import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Collapse } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

// ---------------- BASIC TABLE ----------------
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

// ---------------- STICKY HEADER ----------------
const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  { id: 'population', label: 'Population', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US'), },
  { id: 'size', label: 'Size\u00a0(km\u00b2)', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US'), },
  { id: 'density', label: 'Density', minWidth: 170, align: 'right', format: (value) => value.toFixed(2), },
];
function createData1(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}
const rows1 = [
  createData1('India', 'IN', 1324171354, 3287263),
  createData1('China', 'CN', 1403500365, 9596961),
  createData1('Italy', 'IT', 60483973, 301340),
  createData1('United States', 'US', 327167434, 9833520),
  createData1('Canada', 'CA', 37602103, 9984670),
  createData1('Australia', 'AU', 25475400, 7692024),
  createData1('Germany', 'DE', 83019200, 357578),
  createData1('Ireland', 'IE', 4857000, 70273),
  createData1('Mexico', 'MX', 126577691, 1972550),
  createData1('Japan', 'JP', 126317000, 377973),
  createData1('France', 'FR', 67022000, 640679),
  createData1('United Kingdom', 'GB', 67545757, 242495),
  createData1('Russia', 'RU', 146793744, 17098246),
  createData1('Nigeria', 'NG', 200962417, 923768),
  createData1('Brazil', 'BR', 210147125, 8515767),
];

// ---------------- COLLAPSIBLE TABLE ----------------
function createCollapsibleData(name, calories, fat, carbs, protein, history) {
  return { name, calories, fat, carbs, protein, history };
}
const collapsibleRows = [
  createCollapsibleData('Frozen yoghurt', 159, 6.0, 24, 4.0, [
    { date: '2020-01-05', customerId: '11091700', amount: 3 },
    { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
  ]),
  createCollapsibleData('Ice cream sandwich', 237, 9.0, 37, 4.3, [
    { date: '2020-01-05', customerId: '11091701', amount: 2 },
  ]),
  createCollapsibleData('Cupcake', 305, 3.7, 67, 4.3, [
    { date: '2020-01-03', customerId: '11091702', amount: 5 },
    { date: '2020-01-04', customerId: '11091703', amount: 1 },
  ]),
];

function CollapsibleRow({ row }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton color='primary' className='icon-button' size="small" onClick={() => setOpen(!open)}>
            {open ? <FiChevronUp /> : <FiChevronDown />}
          </IconButton>
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={6} style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box my={2}>
              <TableContainer>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell align="right">Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{historyRow.date}</TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function TablePage() {
  const [showCode, setShowCode] = useState({
    basicTable: false,
    stickyHeadTable: false,
    CollapsibleTable: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

const codeStringBasicTable = `
// If you want to change the style of the Table, you can do so in the theme.js file
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}`;

const codeStringStickyHeadTable = `
// If you want to change the style of the Table, you can do so in the theme.js file
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function StickyHeadTable() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}`;

const codeStringCollapsibleTable = `
// If you want to change the style of the Table, you can do so in the theme.js file
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basicTable: codeStringBasicTable,
      stickyHeadTable: codeStringStickyHeadTable,
      stickyCollapsibleTable: codeStringCollapsibleTable,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); 
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };
 

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Table
      </Typography>

        <Stack gap={3}>
            {/* BASIC TABLE */}
            <Paper elevation={0}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h6" className="page-title">Basic Table</Typography>
                <Stack direction="row" spacing={1}>
                  <Tooltip title="Show Code">
                    <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, basicTable: !prev.basicTable }))}>
                      <RiCodeSSlashFill />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Copy Code">
                    <IconButton className='icon-button' onClick={() => handleCopy("basicTable")}>
                      <TbCopy />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Stack>
              <Stack gap={3}>

                <TableContainer>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                {showCode.basicTable && (
                  <Box className="code-block" sx={{ position: 'relative' }}>
                    <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                      {codeStringBasicTable}
                    </SyntaxHighlighter>
                  </Box>
                )}
              </Stack>
            </Paper>  

            {/* STICKY HEADER*/}
            <Paper elevation={0}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h6" className="page-title">Sticky Header</Typography>
                <Stack direction="row" spacing={1}>
                  <Tooltip title="Show Code">
                    <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, stickyHeadTable: !prev.stickyHeadTable }))}>
                      <RiCodeSSlashFill />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Copy Code">
                    <IconButton className='icon-button' onClick={() => handleCopy("stickyHeadTable")}>
                      <TbCopy />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Stack>
              <Stack gap={3}>

                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows1.map((row) => (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>                

                {showCode.stickyHeadTable && (
                  <Box className="code-block" sx={{ position: 'relative' }}>
                    <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                      {codeStringStickyHeadTable}
                    </SyntaxHighlighter>
                  </Box>
                )}
              </Stack>
            </Paper>    

            {/* COLLAPSIBLE TABLE */}
              <Paper elevation={0}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                  <Typography variant="h6" className="page-title">Collapsible Table</Typography>
                  <Stack direction="row" spacing={1}>
                    <Tooltip title="Show Code">
                      <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, collapsibleTable: !prev.collapsibleTable }))}>
                        <RiCodeSSlashFill />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Copy Code">
                      <IconButton className='icon-button' onClick={() => handleCopy("collapsibleTable")}>
                        <TbCopy />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Stack>
                <Stack gap={3}>
                  <TableContainer>
                    <Table aria-label="collapsible table">
                      <TableHead>
                        <TableRow>
                          <TableCell />
                          <TableCell>Dessert</TableCell>
                          <TableCell align="right">Calories</TableCell>
                          <TableCell align="right">Fat&nbsp;(g)</TableCell>
                          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                          <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {collapsibleRows.map((row) => (
                          <CollapsibleRow key={row.name} row={row} />
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  {showCode.collapsibleTable && (
                    <Box className="code-block" sx={{ position: 'relative' }}>
                      <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                        {codeStringCollapsibleTable}
                      </SyntaxHighlighter>
                    </Box>
                  )}
                </Stack>
              </Paper> 

        </Stack>
      

      {/* Copy feedback */}
      <Snackbar
        open={copySuccess}
        message="Code copied!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}

export default TablePage;
