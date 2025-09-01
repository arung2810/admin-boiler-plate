export const Skeleton = {
  styleOverrides: {
    root: {
      borderRadius: '8px',
      backgroundColor: 'rgb(var(--primary-rgb-color), 0.3)',
    },
  },
  variants: [
    // 🔹 Variants
    {
      props: { variant: 'text' },
      style: {
        borderRadius: '4px',
        transform: 'scale(1, 0.6)',
      },
    },
    {
      props: { variant: 'rectangular' },
      style: {
        borderRadius: '6px',
      },
    },
    {
      props: { variant: 'rounded' },
      style: {
        borderRadius: '12px',
      },
    },
    {
      props: { variant: 'circular' },
      style: {
        borderRadius: '50%',
      },
    },

    // 🔹 Sizes
    {
      props: { size: 'small' },
      style: {
        width: '80px',
        height: '20px',
      },
    },
    {
      props: { size: 'medium' },
      style: {
        width: '120px',
        height: '28px',
      },
    },
    {
      props: { size: 'large' },
      style: {
        width: '160px',
        height: '36px',
      },
    },

    // 🔹 Animations
    {
      props: { animation: 'wave' },
      style: {
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'rgb(var(--primary-rgb-color), 0.3)',
      },
    },
  ],
};

