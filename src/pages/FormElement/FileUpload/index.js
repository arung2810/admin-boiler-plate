import React, { useState } from 'react';
import { Avatar, Box, Button, IconButton, List, ListItem, Paper, Snackbar, Stack, Tooltip, Typography } from '@mui/material';
import { RiCodeSSlashFill, RiFileUploadLine, RiCloseFill, RiFileList2Line } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useDropzone } from 'react-dropzone';
import { styled } from '@mui/material/styles';
import { FileDropzone } from '../../../components/common/FileDropzone';

const Dropzone = styled(FileDropzone)(({ theme }) => ({
  minHeight: 'unset',
  padding: theme.spacing(12),
  [theme.breakpoints.down('sm')]: {
    paddingInline: theme.spacing(5)
  },
  '&+.MuiList-root .MuiListItem-root .file-name': {
    fontWeight: theme.typography.body1.fontWeight
  }
}));

function FileUploadPage() {
  const [showCode, setShowCode] = useState({ basic: false });
  const [copySuccess, setCopySuccess] = useState(false);

  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file)));
    }
  });

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />;
    } else {
      return <RiFileList2Line />;
    }
  };

  const handleRemoveFile = file => {
    setFiles(files.filter(i => i.name !== file.name));
  };

  const fileList = files.map(file => (
    <ListItem key={file.name}>
      <div className='file-details'>
        <div className='file-preview'>{renderFilePreview(file)}</div>
        <div>
          <Typography className='file-name'>{file.name}</Typography>
          <Typography className='file-size' variant='body2'>
            {Math.round(file.size / 100) / 10 > 1000
              ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
              : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <RiCloseFill />
      </IconButton>
    </ListItem>
  ));

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  const codeStringBasic = `// If you want to change the style of the file upload, you can do so in the theme.js file
// MUI Imports
import { useDropzone } from 'react-dropzone'
import { Avatar, Box, Button, List, ListItem, Typography } from '@mui/material'

const FileUploadBasic = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file)));
    }
  });

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />;
    } else {
      return <RiFileList2Line />;
    }
  };

  const handleRemoveFile = file => {
    setFiles(files.filter(i => i.name !== file.name));
  };

  const fileList = files.map(file => (
    <ListItem key={file.name}>
      <div className='file-details'>
        <div className='file-preview'>{renderFilePreview(file)}</div>
        <div>
          <Typography className='file-name'>{file.name}</Typography>
          <Typography className='file-size' variant='body2'>
            {Math.round(file.size / 100) / 10 > 1000
              ? \`\${(Math.round(file.size / 100) / 10000).toFixed(1)} mb\`
              : \`\${(Math.round(file.size / 100) / 10).toFixed(1)} kb\`}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <RiCloseFill />
      </IconButton>
    </ListItem>
  ));

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  return (
    <Dropzone sx={{ padding: 0 }}>
      <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} />
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
          <Avatar variant='rounded' sx={{ height: 54, width: 54 }}>
            <RiFileUploadLine size={'32px'} />
          </Avatar>
          <Typography variant='h4' marginTop={2}>
            Drop files here or click to upload.
          </Typography>
          <Typography marginTop={1}>
            Drop files here or click{' '}
            <a href='/' onClick={e => e.preventDefault()}>browse</a>{' '}
            through your machine
          </Typography>
        </Box>
      </div>
      {files.length ? (
        <>
          <List>{fileList}</List>
          <div className='buttons'>
            <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
              Remove All
            </Button>
            <Button variant='contained'>Upload Files</Button>
          </div>
        </>
      ) : null}
    </Dropzone>
  )
}

export default FileUploadBasic`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basic: codeStringBasic,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode(prev => ({ ...prev, [codeKey]: true }));
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>File Upload</Typography>
      <Stack gap={3}>
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Basic File Upload</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, basic: !prev.basic }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("basic")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Dropzone sx={{ padding: 0 }}>
                <div className="dropzone" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                    <Avatar variant='rounded' sx={{ height: 54, width: 54 }}>
                      <RiFileUploadLine size={'32px'} />
                    </Avatar>
                    <Typography variant='h4' marginTop={2}>
                      Drop files here or click to upload.
                    </Typography>
                    <Typography marginTop={1}>
                      Drop files here or click{' '}
                      <a href='/' onClick={e => e.preventDefault()}>browse</a>{' '}
                      through your machine
                    </Typography>
                  </Box>
                </div>
                {files.length ? (
                  <>
                    <List>{fileList}</List>
                    <div className='buttons'>
                      <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                        Remove All
                      </Button>
                      <Button variant='contained'>Upload Files</Button>
                    </div>
                  </>
                ) : null}
              </Dropzone>
            </Stack>

            {showCode.basic && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringBasic}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper >
      </Stack >

      <Snackbar
        open={copySuccess}
        message="Code copied!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}

export default FileUploadPage;