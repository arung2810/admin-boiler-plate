import React, { useState } from 'react';
import { Box, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Snackbar, Stack, Tooltip, Typography } from '@mui/material';
import { RiCodeSSlashFill, } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CustomTextField from '../../../components/common/CustomTextField';
import ReactSelect from '../../../components/common/ReactSelect';

function SelectPage() {
  const [showCode, setShowCode] = useState({ variant: false, nativevariant: false, props: false, size: false, customselect: false, });
  const [copySuccess, setCopySuccess] = useState(false);

  const [ages, setAges] = useState(Array(15).fill(""));

  const handleChange = (index, value) => {
    setAges(prev => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const codeStringVariant = `// If you want to change the style of the input, you can do so in the theme.js file
// MUI Imports
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'

const SelectVariants = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-basic-select-outlined-label'>Age</InputLabel>
          <Select
            label='Age'
            id='demo-basic-select-outlined'
            labelId='demo-basic-select-outlined-label'
            value=''
          >
            <MenuItem value='' disabled>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <FormControl variant='filled' fullWidth>
          <InputLabel id='demo-basic-select-filled-label'>Age</InputLabel>
          <Select label='Age' labelId='demo-basic-select-filled-label' id='demo-basic-select-filled' value=''>
            <MenuItem value='' disabled>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <FormControl variant='standard' fullWidth>
          <InputLabel id='demo-basic-select-label'>Age</InputLabel>
          <Select label='Age' labelId='demo-basic-select-label' id='demo-basic-select' value=''>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default SelectVariants`;

  const codeStringNativeVariant = `// If you want to change the style of the input, you can do so in the theme.js file
// MUI Imports
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'

const SelectNative = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <FormControl fullWidth>
          <InputLabel htmlFor='outlined-age-native-basic'>Age</InputLabel>
          <Select
            native
            label='Age'
            value=''
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-basic'
            }}
          >
            <option aria-label='None' value='' />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <FormControl variant='filled' fullWidth>
          <InputLabel htmlFor='filled-age-native-basic'>Age</InputLabel>
          <Select
            native
            label='Age'
            value=''
            inputProps={{
              name: 'age',
              id: 'filled-age-native-basic'
            }}
          >
            <option aria-label='None' value='' />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <FormControl variant='standard' fullWidth>
          <InputLabel htmlFor='age-native-basic'>Age</InputLabel>
          <Select
            native
            label='Age'
            value=''
            inputProps={{
              name: 'age',
              id: 'age-native-basic'
            }}
          >
            <option aria-label='None' value='' />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default SelectNative`;

  const codeStringProps = `// If you want to change the style of the input, you can do so in the theme.js file
// MUI Imports
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import CustomTextField from '../../../components/common/CustomTextField'

const CustomSelectProps = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomTextField
          fullWidth
          select
          value=''
          label='Age'
          id='select-helper'
          helperText='With label + helper text'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomTextField
          fullWidth
          select
          label='Age'
          value=''
          id='select-autoWidth'
          helperText='Auto width'
          slotProps={{
            select: {
              autoWidth: true
            }
          }}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomTextField
          fullWidth
          select
          disabled
          label='Age'
          value=''
          helperText='Disabled'
          id='select-props-disabled'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomTextField
          fullWidth
          error
          select
          value=''
          label='Age'
          id='select-error'
          helperText='Error'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomTextField
          fullWidth
          select
          label='Age'
          value=''
          helperText='Read only'
          id='select-props-readOnly'
          slotProps={{
            select: {
              readOnly: true
            }
          }}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomTextField fullWidth select required value='' label='Age' id='select-required' helperText='Required'>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomTextField
          fullWidth
          select
          value=''
          id='select-without-label'
          helperText='Without label'
          slotProps={{
            select: { displayEmpty: true },
            htmlInput: { 'aria-label': 'Without label' }
          }}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </CustomTextField>
      </Grid>
    </Grid>
  )
}

export default CustomSelectProps`;

  const codeStringSize = `// If you want to change the style of the input, you can do so in the theme.js file
// MUI Imports
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import CustomTextField from '../../../components/common/CustomTextField'

const CustomSelectSize = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomTextField
          select
          fullWidth
          label='Country'
          value=''
        >
          <MenuItem value=''>Select Country</MenuItem>
          <MenuItem value={10}>UK</MenuItem>
          <MenuItem value={20}>USA</MenuItem>
          <MenuItem value={30}>Australia</MenuItem>
          <MenuItem value={40}>Germany</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomTextField
          select
          fullWidth
          label='Country'
          value=''
          size="medium"
        >
          <MenuItem value=''>Select Country</MenuItem>
          <MenuItem value={10}>UK</MenuItem>
          <MenuItem value={20}>USA</MenuItem>
          <MenuItem value={30}>Australia</MenuItem>
          <MenuItem value={40}>Germany</MenuItem>
        </CustomTextField>
      </Grid>
    </Grid>
  )
}

export default CustomSelectSize`;

  const codeStringReactSelect = `// If you want to change the style of the reactselect, you can do so in the reactselect.js file
// React-Select Imports
import { Grid, Typography } from "@mui/material";
import Select from "react-select";

const colourOptions = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "orange", label: "Orange" },
  { value: "purple", label: "Purple" },
];

const ReactSelect = () => {
  // State
  const [singleValue, setSingleValue] = useState(null);
  const [multiValue, setMultiValue] = useState([]);

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        {/* Default Single Select */}
        <Typography variant="body2" mb={0.5} className='page-title'>Default Select</Typography>
        <Select
          options={colourOptions}
          styles={customStyles}
          value={singleValue}
          onChange={setSingleValue}
          placeholder="Select a color"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        {/* Multi Select */}
        <Typography variant="body2" mb={0.5} className='page-title'>Multi Select</Typography>
        <Select
          isMulti
          options={colourOptions}
          styles={customStyles}
          value={multiValue}
          onChange={setMultiValue}
          placeholder="Select multiple colors"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        {/* Disabled Select */}
        <Typography variant="body2" mb={0.5} className='page-title'>Disabled Select</Typography>
        <Select
          options={colourOptions}
          styles={customStyles}
          isDisabled
          placeholder="Disabled"
        />
      </Grid>


      <Grid size={{ xs: 12, md: 4 }}>
        {/* Clearable Select */}
        <Typography variant="body2" mb={0.5} className='page-title'>Clearable Select</Typography>
        <Select
          options={colourOptions}
          styles={customStyles}
          isClearable
          placeholder="Clearable"
        />
      </Grid>
    </Grid>
  )
}

export default ReactSelect`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      variant: codeStringVariant,
      nativevariant: codeStringNativeVariant,
      props: codeStringProps,
      size: codeStringSize,
      customselect: codeStringReactSelect
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode(prev => ({ ...prev, [codeKey]: true })); // Show code block if not visible
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>Select</Typography>
      <Stack gap={3}>

        {/* Varients */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Varients</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, variant: !prev.variant }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("variant")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction='column' gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>                  <FormControl fullWidth>
                  <InputLabel id='demo-basic-select-outlined-label'>Age</InputLabel>
                  <Select
                    label='Age'
                    id='demo-basic-select-outlined'
                    labelId='demo-basic-select-outlined-label'
                    value={ages[0]}
                    onChange={(e) => handleChange(0, e.target.value)}
                  >
                    <MenuItem value='' disabled>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <FormControl variant='filled' fullWidth>
                    <InputLabel id='demo-basic-select-filled-label'>Age</InputLabel>
                    <Select
                      label='Age'
                      labelId='demo-basic-select-filled-label'
                      id='demo-basic-select-filled'
                      value={ages[1]}
                      onChange={(e) => handleChange(1, e.target.value)}
                    >
                      <MenuItem value='' disabled>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <FormControl variant='standard' fullWidth>
                    <InputLabel id='demo-basic-select-label'>Age</InputLabel>
                    <Select
                      label='Age'
                      labelId='demo-basic-select-label'
                      id='demo-basic-select'
                      value={ages[2]}
                      onChange={(e) => handleChange(2, e.target.value)}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Stack>

            {showCode.variant && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringVariant}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Native Select */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Native Select</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, nativevariant: !prev.nativevariant }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("nativevariant")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction='column' gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor='outlined-age-native-basic'>Age</InputLabel>
                    <Select
                      native
                      label='Age'
                      value={ages[3]}
                      onChange={(e) => handleChange(3, e.target.value)}
                      inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-basic'
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <FormControl variant='filled' fullWidth>
                    <InputLabel htmlFor='filled-age-native-basic'>Age</InputLabel>
                    <Select
                      native
                      label='Age'
                      value={ages[4]}
                      onChange={(e) => handleChange(4, e.target.value)}
                      inputProps={{
                        name: 'age',
                        id: 'filled-age-native-basic'
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <FormControl variant='standard' fullWidth>
                    <InputLabel htmlFor='age-native-basic'>Age</InputLabel>
                    <Select
                      native
                      label='Age'
                      value={ages[5]}
                      onChange={(e) => handleChange(5, e.target.value)}
                      inputProps={{
                        name: 'age',
                        id: 'age-native-basic'
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Stack>

            {showCode.nativevariant && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringNativeVariant}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Props with Custom Select */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Custom Select with Props</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, props: !prev.props }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("props")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction='column' gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomTextField
                    fullWidth
                    select
                    value={ages[7]}
                    onChange={(e) => handleChange(7, e.target.value)}
                    label='Age'
                    id='select-helper'
                    helperText='With label + helper text'
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomTextField
                    fullWidth
                    select
                    label='Age'
                    value={ages[8]}
                    onChange={(e) => handleChange(8, e.target.value)}
                    id='select-autoWidth'
                    helperText='Auto width'
                    slotProps={{
                      select: {
                        autoWidth: true
                      }
                    }}
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomTextField
                    fullWidth
                    select
                    disabled
                    label='Age'
                    value={ages[8]}
                    onChange={(e) => handleChange(8, e.target.value)}
                    helperText='Disabled'
                    id='select-props-disabled'
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomTextField
                    fullWidth
                    error
                    select
                    value={ages[9]}
                    onChange={(e) => handleChange(9, e.target.value)}
                    label='Age'
                    id='select-error'
                    helperText='Error'
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomTextField
                    fullWidth
                    select
                    label='Age'
                    value={ages[10]}
                    onChange={(e) => handleChange(10, e.target.value)}
                    helperText='Read only'
                    id='select-props-readOnly'
                    slotProps={{
                      select: {
                        readOnly: true
                      }
                    }}
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomTextField
                    fullWidth
                    select
                    required
                    value={ages[11]}
                    onChange={(e) => handleChange(11, e.target.value)}
                    label='Age'
                    id='select-required'
                    helperText='Required'
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomTextField
                    fullWidth
                    select
                    value={ages[12]}
                    onChange={(e) => handleChange(12, e.target.value)}
                    id='select-without-label'
                    helperText='Without label'
                    slotProps={{
                      select: { displayEmpty: true },
                      htmlInput: { 'aria-label': 'Without label' }
                    }}
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </CustomTextField>
                </Grid>
              </Grid>
            </Stack>

            {showCode.props && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringProps}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Size with Custom Select */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Size</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, size: !prev.size }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("size")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction='column' gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Country'
                    value={ages[13]}
                    onChange={(e) => handleChange(13, e.target.value)}
                  >
                    <MenuItem value=''>Select Country</MenuItem>
                    <MenuItem value={10}>UK</MenuItem>
                    <MenuItem value={20}>USA</MenuItem>
                    <MenuItem value={30}>Australia</MenuItem>
                    <MenuItem value={40}>Germany</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomTextField
                    select
                    fullWidth
                    label='Country'
                    value={ages[14]}
                    onChange={(e) => handleChange(14, e.target.value)}
                    size="medium"
                  >
                    <MenuItem value=''>Select Country</MenuItem>
                    <MenuItem value={10}>UK</MenuItem>
                    <MenuItem value={20}>USA</MenuItem>
                    <MenuItem value={30}>Australia</MenuItem>
                    <MenuItem value={40}>Germany</MenuItem>
                  </CustomTextField>
                </Grid>
              </Grid>
            </Stack>

            {showCode.size && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringSize}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* React Select Plugin */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>React Select Plugin</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, customselect: !prev.customselect }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("customselect")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction='column' gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <ReactSelect />
            </Stack>

            {showCode.customselect && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringReactSelect}
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
  )
}

export default SelectPage;