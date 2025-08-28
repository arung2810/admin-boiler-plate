export const Slider = {
  // Map MUI color prop -> your CSS variables
  variants: [
    { props: { color: 'primary' },   style: { '--slider-color': 'var(--primary-color)',   '--slider-rgb': 'var(--primary-rgb-color)' } },
    { props: { color: 'secondary' }, style: { '--slider-color': 'var(--secondary-color)', '--slider-rgb': 'var(--secondary-rgb-color)' } },
    { props: { color: 'error' },     style: { '--slider-color': 'var(--red-color)',       '--slider-rgb': 'var(--red-rgb-color)' } },
    { props: { color: 'warning' },   style: { '--slider-color': 'var(--yellow-color)',    '--slider-rgb': 'var(--yellow-rgb-color)' } },
    { props: { color: 'info' },      style: { '--slider-color': 'var(--blue-color)',      '--slider-rgb': 'var(--blue-rgb-color)' } },
    { props: { color: 'success' },   style: { '--slider-color': 'var(--green-color)',     '--slider-rgb': 'var(--green-rgb-color)' } },
  ],

  styleOverrides: {
    root: ({ ownerState }) => ({
      // Fallbacks if no color prop set (defaults to primary)
      '--_slider-color': 'var(--slider-color, var(--primary-color))',
      '--_slider-rgb': 'var(--slider-rgb, var(--primary-rgb-color))',

      boxSizing: 'border-box',
      ...(ownerState.orientation === 'horizontal'
        ? ownerState.size !== 'small'
          ? { blockSize: 6 }
          : { blockSize: 4 }
        : ownerState.size !== 'small'
          ? { inlineSize: 6 }
          : { inlineSize: 4 }),
      '&.Mui-disabled': { opacity: 0.45 },
    }),

    thumb: ({ ownerState }) => ({
      ...(ownerState.size === 'small'
        ? {
            blockSize: 14,
            inlineSize: 14,
            border: '2px solid var(--_slider-color)',
            '&:hover, &.Mui-focusVisible': {
              boxShadow: '0 0 0 7px rgba(var(--_slider-rgb), 0.12)',
            },
            '&.Mui-active, &.Mui-active.Mui-focusVisible': {
              boxShadow: '0 0 0 10px rgba(var(--_slider-rgb), 0.16)',
            },
          }
        : {
            blockSize: 22,
            inlineSize: 22,
            border: '4px solid var(--_slider-color)',
          }),
      backgroundColor: 'var(--white-color)',
      ...(!ownerState.disabled && { boxShadow: '0px 2px 6px rgb(var(--_slider-rgb), 0.3)' }),
      '&:before': { boxShadow: 'none' },
      '&:after': (ownerState.size === 'small'
        ? { blockSize: 28, inlineSize: 28 }
        : { blockSize: 38, inlineSize: 38 }),
      '&:hover, &.Mui-focusVisible': {
        boxShadow: '0 0 0 8px rgba(var(--_slider-rgb), 0.16)',
      },
      '&.Mui-active, &.Mui-active.Mui-focusVisible': {
        boxShadow: '0 0 0 13px rgba(var(--_slider-rgb), 0.20)',
      },
    }),

    rail: () => ({
      opacity: 1,
      backgroundColor: 'rgba(var(--_slider-rgb), 0.12)',
    }),

    track: ({ ownerState }) => ({
      backgroundColor: 'var(--_slider-color)',
      borderColor: 'rgba(var(--_slider-rgb), 0.24)',
      border: 0,
      ...(ownerState.track === 'inverted' && {
        backgroundColor: 'rgba(var(--_slider-rgb), 0.16)',
        borderColor: 'rgba(var(--_slider-rgb), 0.16)',
      }),
    }),

    mark:{
      backgroundColor: 'var(--_slider-color)',
    },

    valueLabel: ({ theme, ownerState }) => ({
      ...(ownerState.size === 'small'
        ? { ...theme.typography.caption, padding: theme.spacing(0.5, 2), borderRadius: 'var(--mui-shape-customBorderRadius-sm)' }
        : { ...theme.typography.body2, fontWeight: theme.typography.fontWeightMedium, padding: theme.spacing(0.5, 2.5), borderRadius: 'var(--mui-shape-borderRadius)' }),
      color: 'var(--card-bg-color)',
      backgroundColor: 'var(--text-color)',
      borderRadius: '4px',
      padding: '4px 12px',
      '&:before': { display: 'none' },
    }),
  },
};
