// ../common/Drawer.js
export const Drawer = {
  styleOverrides: {
    paper: {
      backgroundColor: 'var(--card-bg-color)',
      borderRadius: '12px 0 0 12px',
      padding: '0',
    },
    docked: {
      width: 240, // default docked drawer width
      flexShrink: 0,
    },
    modal: {
      zIndex: 1300,
    },
    paperAnchorLeft: {
        borderRadius: '0 12px 12px 0',
    },
    paperAnchorRight: {
        borderRadius: '12px 0 0 12px',
    },
    paperAnchorTop: {
        borderRadius: '0 0 12px 12px',
    },
    paperAnchorBottom: {
        borderRadius: '12px 12px 0 0',
    },
  },
};
