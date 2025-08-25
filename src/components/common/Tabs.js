export const Tabs = {
  styleOverrides: {
    root: {
      minHeight: 44,
      textTransform: 'capitalize',
      borderBottom: '1px solid var(--border-color)',
      '&.MuiTabs-vertical': {
          alignItems: 'flex-start',
          borderRight: '1px solid var(--border-color)',
          borderBottom: 'none',
      },
    },
    indicator: {
      height: 3,
      borderRadius: 3,
      backgroundColor:'var(--primary-color)',
      '&.MuiTabs-indicatorVertical': {
        width: 3,
        height: 'auto',
      },
    },
  },
};

export const Tab = {
  styleOverrides: {
    root: {
      textTransform: 'capitalize',
      fontWeight: 600,
      minHeight: 44,
      padding: '8px 16px',
      borderRadius: '8px',
      fontSize:'16px',
      color:'var(--text-color)',
      '&.Mui-selected': {
        color: 'var(--primary-color)',
      },
    },

    // size variants
    sizeSmall: {
      fontSize: '12px',
      padding: '4px 12px',
      borderRadius: '6px',
    },
    sizeMedium: {
      fontSize: '14px',
      padding: '6px 16px',
      borderRadius: '8px',
    },
    sizeLarge: {
      fontSize: '16px',
      padding: '8px 20px',
      borderRadius: '10px',
    },

    // orientation variants
    textColorInherit: {
      '&.MuiTab-root': {
        '&.MuiTab-textColorInherit': {
          '&.Mui-selected': {
            fontWeight: 700,
          },
        },
      },
    },
    wrapped: {
      lineHeight: 1.5,
    },
  },
};
