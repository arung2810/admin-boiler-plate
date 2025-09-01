import React, { useState } from 'react';
import { Avatar, Box, Button, IconButton, List, ListItem, Paper, Snackbar, Stack, Tooltip, Typography } from '@mui/material';
import { RiCodeSSlashFill, RiFileUploadLine, RiCloseFill, RiFileList2Line } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useDropzone } from 'react-dropzone';
import { styled } from '@mui/material/styles';
// Third-party Imports
import { toast, ToastContainer } from 'react-toastify';
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

  const [defaultFiles, setDefaultFiles] = useState([]);
  const [singleFiles, setSingleFiles] = useState([]);
  const [maxFiles, setMaxFiles] = useState([]);

  // Hooks
  const {
    getRootProps: getRootDefaultProps,
    getInputProps: getInputDefaultProps
  } = useDropzone({
    onDrop: acceptedFiles => {
      setDefaultFiles(acceptedFiles.map(file => Object.assign(file)))
    }
  })

  // Single file dropzone
  const {
    getRootProps: getRootSingleProps,
    getInputProps: getInputSingleProps
  } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: acceptedFiles => {
      setSingleFiles(acceptedFiles.map(file => Object.assign(file)))
    }
  })

  // Max file and size restricted dropzone
  const {
    getRootProps: getRootMaxProps,
    getInputProps: getInputMaxProps
  } = useDropzone({
    maxFiles: 2,
    maxSize: 2000000,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: acceptedFiles => {
      setMaxFiles(acceptedFiles.map(file => Object.assign(file)))
    },
    onDropRejected: () => {
      toast.error('You can only upload 2 files & maximum size of 2 MB.', {
        autoClose: 3000
      })
    }
  })

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />;
    } else {
      return <RiFileList2Line />;
    }
  };

  const FileList = ({ files, onRemoveFile, onRemoveAll }) => (
    <>
      <List>
        {files.map(file => (
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
            <IconButton onClick={() => onRemoveFile(file)}>
              <RiCloseFill />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <div className='buttons'>
        <Button color='error' variant='outlined' onClick={onRemoveAll}>
          Remove All
        </Button>
        <Button variant='contained'>Upload Files</Button>
      </div>
    </>
  );

  const codeStringBasic = `// If you want to change the style of the file upload, you can do so in the theme.js file
// If you want to change the style of the file upload, you can do so in the theme.js file
// MUI Imports
import { useDropzone } from 'react-dropzone'
import { Avatar, Box, Button, List, ListItem, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { FileDropzone } from '../../../components/common/FileDropzone';
// Third-party Imports
import { toast, ToastContainer } from 'react-toastify';

const FileUploadBasic = () => {
  const [defaultFiles, setDefaultFiles] = useState([]);

  // Hooks
  const {
    getRootProps: getRootDefaultProps,
    getInputProps: getInputDefaultProps
  } = useDropzone({
    onDrop: acceptedFiles => {
      setDefaultFiles(acceptedFiles.map(file => Object.assign(file)))
    }
  })

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />;
    } else {
      return <RiFileList2Line />;
    }
  };

  const FileList = ({ files, onRemoveFile, onRemoveAll }) => (
    <>
      <List>
        {files.map(file => (
          <ListItem key={file.name}>
            <div className='file-details'>
              <div className='file-preview'>{renderFilePreview(file)}</div>
              <div>
                <Typography className='file-name'>{file.name}</Typography>
                <Typography className='file-size' variant='body2'>
                  {Math.round(file.size / 100) / 10 > 1000
                    ? \`\${(Math.round(file.size / 100) / 10000).toFixed(1)} mb\`
                    : \`\${ (Math.round(file.size / 100) / 10).toFixed(1) } kb\`}
                </Typography>
              </div>
            </div>
            <IconButton onClick={() => onRemoveFile(file)}>
              <RiCloseFill />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <div className='buttons'>
        <Button color='error' variant='outlined' onClick={onRemoveAll}>
          Remove All
        </Button>
        <Button variant='contained'>Upload Files</Button>
      </div>
    </>
  );

  <Dropzone sx={{ padding: 0 }}>
    <div className="dropzone" {...getRootDefaultProps()}>
      <input {...getInputDefaultProps()} />
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
    {defaultFiles.length > 0 && (
      <FileList
        files={defaultFiles}
        onRemoveFile={file => setDefaultFiles(defaultFiles.filter(f => f.name !== file.name))}
        onRemoveAll={() => setDefaultFiles([])}
      />
    )}
  </Dropzone>

export default FileUploadBasic`;

  const codeStringSingle = `// If you want to change the style of the file upload, you can do so in the theme.js file
// MUI Imports
import { useDropzone } from 'react-dropzone'
import { Avatar, Box, Button, List, ListItem, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { FileDropzone } from '../../../components/common/FileDropzone';
// Third-party Imports
import { toast, ToastContainer } from 'react-toastify';

const FileUploadSingle = () => {
  const [singleFiles, setSingleFiles] = useState([]);

  // Single file dropzone
  const {
    getRootProps: getRootSingleProps,
    getInputProps: getInputSingleProps
  } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: acceptedFiles => {
      setSingleFiles(acceptedFiles.map(file => Object.assign(file)))
    }
  })

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />;
    } else {
      return <RiFileList2Line />;
    }
  };

  const FileList = ({ files, onRemoveFile, onRemoveAll }) => (
    <>
      <List>
        {files.map(file => (
          <ListItem key={file.name}>
            <div className='file-details'>
              <div className='file-preview'>{renderFilePreview(file)}</div>
              <div>
                <Typography className='file-name'>{file.name}</Typography>
                <Typography className='file-size' variant='body2'>
                  {Math.round(file.size / 100) / 10 > 1000
                    ?\`\${(Math.round(file.size / 100) / 10000).toFixed(1)} mb\`
                  : \`\${(Math.round(file.size / 100) / 10).toFixed(1)} kb\`}
                </Typography>
              </div>
            </div>
            <IconButton onClick={() => onRemoveFile(file)}>
              <RiCloseFill />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <div className='buttons'>
        <Button color='error' variant='outlined' onClick={onRemoveAll}>
          Remove All
        </Button>
        <Button variant='contained'>Upload Files</Button>
      </div>
    </>
  );

  <Dropzone sx={{ padding: 0 }}>
    <div className="dropzone" {...getRootSingleProps()}>
      <input {...getInputSingleProps()} />
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
    {singleFiles.length > 0 && (
      <FileList
        files={singleFiles}
        onRemoveFile={file => setSingleFiles(singleFiles.filter(f => f.name !== file.name))}
        onRemoveAll={() => setSingleFiles([])}
      />
    )}
  </Dropzone>

export default FileUploadSingle`;

  const codeStringMaxSize = `// If you want to change the style of the file upload, you can do so in the theme.js file
// MUI Imports
import { useDropzone } from 'react-dropzone'
import { Avatar, Box, Button, List, ListItem, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { FileDropzone } from '../../../components/common/FileDropzone';
// Third-party Imports
import { toast, ToastContainer } from 'react-toastify';

const FileUploadMaxSize = () => {
  const [maxFiles, setMaxFiles] = useState([]);

  // Max file and size restricted dropzone
  const {
    getRootProps: getRootMaxProps,
    getInputProps: getInputMaxProps
  } = useDropzone({
    maxFiles: 2,
    maxSize: 2000000,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: acceptedFiles => {
      setMaxFiles(acceptedFiles.map(file => Object.assign(file)))
    },
    onDropRejected: () => {
      toast.error('You can only upload 2 files & maximum size of 2 MB.', {
        autoClose: 3000
      })
    }
  })

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />;
    } else {
      return <RiFileList2Line />;
    }
  };

  const FileList = ({ files, onRemoveFile, onRemoveAll }) => (
    <>
      <List>
        {files.map(file => (
          <ListItem key={file.name}>
            <div className='file-details'>
              <div className='file-preview'>{renderFilePreview(file)}</div>
              <div>
                <Typography className='file-name'>{file.name}</Typography>
                <Typography className='file-size' variant='body2'>
                  {Math.round(file.size / 100) / 10 > 1000
                    ?\`\${(Math.round(file.size / 100) / 10000).toFixed(1)} mb\`
                  : \`\${(Math.round(file.size / 100) / 10).toFixed(1)} kb\`}
                </Typography>
              </div>
            </div>
            <IconButton onClick={() => onRemoveFile(file)}>
              <RiCloseFill />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <div className='buttons'>
        <Button color='error' variant='outlined' onClick={onRemoveAll}>
          Remove All
        </Button>
        <Button variant='contained'>Upload Files</Button>
      </div>
    </>
  );

  <Dropzone sx={{ padding: 0 }}>
    <div className="dropzone" {...getRootMaxProps()}>
      <input {...getInputMaxProps()} />
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
        <Avatar variant='rounded' sx={{ height: 54, width: 54 }}>
          <RiFileUploadLine size={'32px'} />
        </Avatar>
        <Typography variant='h4' marginTop={2}>
          Drop files here or click to upload.
        </Typography>
        <Typography marginTop={1}>Allowed *.jpeg, *.jpg, *.png, *.gif</Typography>
        <Typography>Max 2 files and max size of 2 MB</Typography>
      </Box>
    </div>
    {maxFiles.length > 0 && (
      <FileList
        files={maxFiles}
        onRemoveFile={file => setMaxFiles(maxFiles.filter(f => f.name !== file.name))}
        onRemoveAll={() => setMaxFiles([])}
      />
    )}
  </Dropzone>

export default FileUploadMaxSize`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basic: codeStringBasic,
      single: codeStringSingle,
      maxsize: codeStringMaxSize
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
            <Typography variant="h6" className='page-title'>Upload Multiple Files</Typography>
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
                <div className="dropzone" {...getRootDefaultProps()}>
                  <input {...getInputDefaultProps()} />
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
                {defaultFiles.length > 0 && (
                  <FileList
                    files={defaultFiles}
                    onRemoveFile={file => setDefaultFiles(defaultFiles.filter(f => f.name !== file.name))}
                    onRemoveAll={() => setDefaultFiles([])}
                  />
                )}
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
        </Paper>

        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Upload Single Files</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, single: !prev.single }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("single")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Dropzone sx={{ padding: 0 }}>
                <div className="dropzone" {...getRootSingleProps()}>
                  <input {...getInputSingleProps()} />
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
                {singleFiles.length > 0 && (
                  <FileList
                    files={singleFiles}
                    onRemoveFile={file => setSingleFiles(singleFiles.filter(f => f.name !== file.name))}
                    onRemoveAll={() => setSingleFiles([])}
                  />
                )}
              </Dropzone>
            </Stack>

            {showCode.single && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringSingle}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Upload Files with Restrictions</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, maxsize: !prev.maxsize }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("maxsize")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Dropzone sx={{ padding: 0 }}>
                <div className="dropzone" {...getRootMaxProps()}>
                  <input {...getInputMaxProps()} />
                  <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                    <Avatar variant='rounded' sx={{ height: 54, width: 54 }}>
                      <RiFileUploadLine size={'32px'} />
                    </Avatar>
                    <Typography variant='h4' marginTop={2}>
                      Drop files here or click to upload.
                    </Typography>
                    <Typography marginTop={1}>Allowed *.jpeg, *.jpg, *.png, *.gif</Typography>
                    <Typography>Max 2 files and max size of 2 MB</Typography>
                  </Box>
                </div>
                {maxFiles.length > 0 && (
                  <FileList
                    files={maxFiles}
                    onRemoveFile={file => setMaxFiles(maxFiles.filter(f => f.name !== file.name))}
                    onRemoveAll={() => setMaxFiles([])}
                  />
                )}
              </Dropzone>
            </Stack>

            {showCode.maxsize && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringMaxSize}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>
      </Stack >

      <ToastContainer />

      <Snackbar
        open={copySuccess}
        message="Code copied!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}

export default FileUploadPage;