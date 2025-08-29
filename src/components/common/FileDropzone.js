// MUI imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

// Styled Components
export const FileDropzone = styled(Box)(({ theme }) => ({
  '& .dropzone': {
    minHeight: 300,
    display: 'flex',
    flexWrap: 'wrap',
    cursor: 'pointer',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
    borderRadius: '8px',
    border: '2px dashed var(--border-color)',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    '&:focus': {
      outline: 'none'
    },
    '& + .MuiList-root': {
      padding: 0,
      marginTop: theme.spacing(2),
      '& .MuiListItem-root': {
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '8px',
        padding: theme.spacing(1.5),
        border: '1px solid var(--border-color)',
        '& .file-details': {
          display: 'flex',
          alignItems: 'center',
          '& + .MuiButtonBase-root': {
            color: 'rgba(var(--text-rgb-color),0.5)',
          }
        },
        '& .file-preview': {
          display: 'flex',
          marginRight: theme.spacing(1),
          '& svg': {
            fontSize: '2rem'
          }
        },
        '& img': {
          width: 38,
          height: 38,
          padding: theme.spacing(0.75),
          borderRadius: '8px',
          border: '1px solid var(--border-color)'
        },
        '& .file-name': {
          fontWeight: 600
        },
        '& + .MuiListItem-root': {
          marginTop: theme.spacing(2)
        }
      },
      '& + .buttons': {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(3),
        gap: theme.spacing(2),
      }
    },
    '& img.single-file-image': {
      objectFit: 'cover',
      position: 'absolute',
      width: 'calc(100% - 1rem)',
      height: 'calc(100% - 1rem)',
      borderRadius: '8px'
    },
    '& .MuiAvatar-root': {
      backgroundColor: 'var(--text-color)',
      color: 'var(--card-bg-color)',
    },
    '& a': {
      color: 'var(--primary-color)',
      textDecoration: 'none'
    }
  }
}))
