export const TableContainer = {
  styleOverrides: {
    root: {
      borderRadius: '12px',
      border: '1px solid var(--border-color)',
      overflow: 'auto', 
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      backgroundColor: 'var(--card-bg-color)',
    },
  },
};

export const Table = {
  styleOverrides: {
    root: {
      borderCollapse: 'separate',
      borderSpacing: 0,
      boxShadow: 'none', 
    },
  },
};

export const TableHead = {
  styleOverrides: {
    root: {
      backgroundColor: 'var(--primary-color)',
      '& .MuiTableCell-root': {
        fontWeight: 600,
        fontSize: '16px',
        color: 'var(--white-color)',
        textTransform: 'capitalize',
        padding: '12px 16px',
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: 'var(--primary-color)',
      },
      '&.MuiTable-stickyHeader .MuiTableCell-root': {
        zIndex: '2 !important',
      },
    },
  },
};

export const TableBody = {
  styleOverrides: {
    root: {
      '& .MuiTableRow-root:hover': {
        backgroundColor: 'var(--hover-bg)',
      },
    },
  },
};

export const TableRow = {
  styleOverrides: {
    root: {
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    },
  },
};

export const TableCell = {
  styleOverrides: {
    root: {
        borderBottom: '1px solid var(--border-color)',
    },
    body: {
        fontSize: '14px',
        padding: '12px 16px',
        color: 'var(--text-color)',
    },
  },
};
