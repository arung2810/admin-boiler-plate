import React from 'react';
import {
  Stack,
  Typography,
  Grid,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Box,
  Chip,
} from '@mui/material';

import { FaUser, FaShoppingCart, FaDollarSign, FaAddressBook } from 'react-icons/fa';

import Img1 from '../../assets/images/Screenshot_1.png';
import Img2 from '../../assets/images/Screenshot_2.png';
import Img3 from '../../assets/images/Screenshot_3.png';

// Mock state counts
const stateCounts = [
  { label: 'Users', count: 1200, icon: <FaUser /> },
  { label: 'Orders', count: 305, icon: <FaShoppingCart /> },
  { label: 'Revenue', count: '$12,500', icon: <FaDollarSign /> },
  { label: 'Contact', count: 18, icon: <FaAddressBook /> },
];

// Mock table data
const tableRows = [
  { id: 1, name: 'John Doe', status: 'Active', date: '2025-09-01' },
  { id: 2, name: 'Jane Smith', status: 'Inactive', date: '2025-08-30' },
  { id: 3, name: 'Sam Wilson', status: 'Active', date: '2025-08-29' },
  { id: 4, name: 'Lisa Ray', status: 'Pending', date: '2025-08-28' },
];

function Dashboard() {
  return (
    <>
      <Typography variant="h6" className="page-title">
        Dashboard
      </Typography>

      {/* State Counts */}
      <Grid container spacing={2} sx={{ mt: 2, mb: 3 }}>
        {stateCounts.map((item) => (
          <Grid size={{ xs: 12, md: 3 }} key={item.label}>
            <Paper sx={{ p: 2 }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Stack>
                  <Typography variant="subtitle1" mb={1}>
                    {item.label}
                  </Typography>
                  <Typography variant="h3" className="fw-700 text-primary">
                    {item.count}
                  </Typography>
                </Stack>
                <Box className="icon">
                  <Typography variant="h4">{item.icon}</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Table Listing */}
      <Typography variant="h6" className="page-title" mb={2}>
        Recent Users
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={
                      row.status === 'Active'
                        ? 'success'
                        : row.status === 'Inactive'
                        ? 'default'
                        : row.status === 'Pending'
                        ? 'warning'
                        : 'primary'
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dashboard Cards Section */}
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" className="page-title">
              Sales by Countries
            </Typography>
            <Box mt={2}>
              <img src={Img1} alt={Img1}/>
            </Box>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" className="page-title">
              Total Earning
            </Typography>
            <Box mt={2}>
              <img src={Img2} alt={Img2}/>
            </Box>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" className="page-title">
              Monthly Campaign State
            </Typography>
            <Box mt={2}>
              <img src={Img3} alt={Img3}/>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
