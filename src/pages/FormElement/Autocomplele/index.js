import React, { useState } from 'react';
import { Autocomplete, Box, Checkbox, Grid, IconButton, Paper, Snackbar, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { RiCodeSSlashFill, } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import top100Films from '../../fakeData/top100Films';
import CustomAutocomplete from '../../../components/common/CustomAutocomplete';
import CustomTextField from '../../../components/common/CustomTextField';

function AutocompletePage() {
  const [showCode, setShowCode] = useState({
    variant: false,
    multiplevariant: false,
    checkbox: false,
    limittag: false,
    props: false,
    grouped: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const options = top100Films.map((film) => ({
    ...film,
    firstLetter: film.title[0].toUpperCase(),
  }));

  const codeStringVariant = `// If you want to change the style of the autocompleted, you can do so in the theme.js file
// MUI Imports
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutocompleteVariant = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          disablePortal
          variant="standard"
          options={top100Films}
          renderInput={(params) => <TextField {...params} variant="outlined" label="Movie" />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          disablePortal
          variant="filled"
          options={top100Films}
          renderInput={(params) => <TextField {...params} variant="filled" label="Movie" />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          disablePortal
          variant="filled"
          options={top100Films}
          renderInput={(params) => <TextField {...params} variant="standard" label="Movie" />}
        />
      </Grid>
    </Grid>
  )
}

export default AutocompleteVariant`;

  const codeStringMulitpleVariant = `// If you want to change the style of the autocompleted, you can do so in the theme.js file
// MUI Imports
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutocompleteMultipleVariant = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          disablePortal
          variant="standard"
          options={top100Films}
          renderInput={(params) => <TextField {...params} variant="outlined" label="Movie" />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          disablePortal
          variant="filled"
          options={top100Films}
          renderInput={(params) => <TextField {...params} variant="filled" label="Movie" />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          disablePortal
          variant="filled"
          options={top100Films}
          renderInput={(params) => <TextField {...params} variant="standard" label="Movie" />}
        />
      </Grid>
    </Grid>
  )
}

export default AutocompleteMultipleVariant`;

  const codeStringCheckbox = `// If you want to change the style of the autocompleted, you can do so in the theme.js file
// MUI Imports
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutocompleteCheckbox = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title || ''}
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            return (
              <li key={key} {...optionProps}>
                <Checkbox
                  checked={selected}
                />
                {option.title}
              </li>
            );
          }}
          renderInput={(params) => <TextField {...params} variant="outlined" label="Checkboxes" />}
        />
      </Grid>
    </Grid>
  )
}

export default AutocompleteCheckbox`;

  const codeStringLimitTags = `// If you want to change the style of the autocompleted, you can do so in the theme.js file
// MUI Imports
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutocompleteLimitTags = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          multiple
          limitTags={2}
          id="multiple-limit-tags"
          options={top100Films}
          getOptionLabel={(option) => option.title || ''}
          defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
          renderInput={(params) => <TextField {...params} variant="outlined" label="Checkboxes" />}
        />
      </Grid>
    </Grid>
  )
}

export default AutocompleteLimitTags`;

  const codeStringProps = `// If you want to change the style of the autocompleted, you can do so in the theme.js file
// MUI Imports

// Components Imports
import CustomAutocomplete from '../../../components/common/CustomAutocomplete';
import CustomTextField from '../../../components/common/CustomTextField';

const AutocompleteProps = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomAutocomplete
          disableCloseOnSelect
          options={top100Films}
          id='autocomplete-disableCloseOnSelect'
          getOptionLabel={option => option.title || ''}
          renderInput={params => <CustomTextField {...params} label='disableCloseOnSelect' />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomAutocomplete
          className='is-[250px]'
          clearOnEscape
          options={top100Films}
          id='autocomplete-clearOnEscape'
          getOptionLabel={option => option.title || ''}
          renderInput={params => <CustomTextField {...params} label='clearOnEscape' />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomAutocomplete
          className='is-[250px]'
          disableClearable
          options={top100Films}
          id='autocomplete-disableClearable'
          getOptionLabel={option => option.title || ''}
          renderInput={params => <CustomTextField {...params} label='disableClearable' />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomAutocomplete
          className='is-[250px]'
          openOnFocus
          options={top100Films}
          id='autocomplete-openOnFocus'
          getOptionLabel={option => option.title || ''}
          renderInput={params => <CustomTextField {...params} label='openOnFocus' />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomAutocomplete
          className='is-[250px]'
          autoHighlight
          options={top100Films}
          id='autocomplete-autoHighlight'
          getOptionLabel={option => option.title || ''}
          renderInput={params => <CustomTextField {...params} label='autoHighlight' />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomAutocomplete
          className='is-[250px]'
          autoSelect
          options={top100Films}
          id='autocomplete-autoSelect'
          getOptionLabel={option => option.title || ''}
          renderInput={params => <CustomTextField {...params} label='autoSelect' />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomAutocomplete
          className='is-[250px]'
          blurOnSelect
          options={top100Films}
          id='autocomplete-blurOnSelect'
          getOptionLabel={option => option.title || ''}
          renderInput={params => <CustomTextField {...params} label='blurOnSelect' />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CustomAutocomplete
          className='is-[250px]'
          clearOnBlur
          options={top100Films}
          id='autocomplete-clearOnBlur'
          getOptionLabel={option => option.title || ''}
          renderInput={params => <CustomTextField {...params} label='clearOnBlur' />}
        />
      </Grid>
    </Grid>
  )
}

export default AutocompleteProps`;

  const codeStringGrouped = `// If you want to change the style of the autocompleted, you can do so in the theme.js file
// MUI Imports
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = top100Films.map((option) => {
  const firstLetter = option.title[0].toUpperCase();
  return {
    firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
    ...option,
  };
});

const AutocompleteGrouped = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Autocomplete
          multiple
          id="multiple-limit-tags"
          options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title || ''}
          renderInput={(params) => <TextField {...params} label="With categories" />}
        />
      </Grid>
    </Grid>
  )
}

export default AutocompleteGrouped`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      variant: codeStringVariant,
      multiplevariant: codeStringMulitpleVariant,
      checkbox: codeStringCheckbox,
      limittag: codeStringLimitTags,
      props: codeStringProps,
      grouped: codeStringGrouped,
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
      <Typography variant="h6" className="page-title" mb={2}>Autocomplete</Typography>
      <Stack gap={3}>

        {/* BASIC Autocomplete */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Variants</Typography>
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

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  {/* <Autocomplete
                    disablePortal
                    variant="standard"
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} variant="outlined" label="Movie" />}
                  /> */}
                  <Autocomplete
                    disablePortal
                    variant="standard"
                    options={top100Films}
                    getOptionLabel={(option) => option.title || ''}
                    renderInput={(params) => <TextField {...params} variant="outlined" label="Movie" />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  {/* <Autocomplete
                    disablePortal
                    variant="filled"
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} variant="filled" label="Movie" />}
                  /> */}
                  <Autocomplete
                    disablePortal
                    variant="filled"
                    options={top100Films}
                    getOptionLabel={(option) => option.title || ''}
                    renderInput={(params) => <TextField {...params} variant="filled" label="Movie" />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Autocomplete
                    disablePortal
                    variant="filled"
                    options={top100Films}
                    getOptionLabel={(option) => option.title || ''}
                    renderInput={(params) => <TextField {...params} variant="standard" label="Movie" />}
                  />
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

        {/* Multiple Autocomplete */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Multiple Values</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, multiplevariant: !prev.multiplevariant }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("multiplevariant")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Autocomplete
                    disablePortal
                    multiple
                    variant="standard"
                    options={top100Films}
                    getOptionLabel={(option) => option.title || ''}
                    renderInput={(params) => <TextField {...params} variant="outlined" label="Movie" />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Autocomplete
                    disablePortal
                    multiple
                    variant="filled"
                    options={top100Films}
                    getOptionLabel={(option) => option.title || ''}
                    renderInput={(params) => <TextField {...params} variant="filled" label="Movie" />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Autocomplete
                    disablePortal
                    multiple
                    variant="filled"
                    options={top100Films}
                    getOptionLabel={(option) => option.title || ''}
                    renderInput={(params) => <TextField {...params} variant="standard" label="Movie" />}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title || ''}
                    renderOption={(props, option, { selected }) => {
                      const { key, ...optionProps } = props;
                      return (
                        <li key={key} {...optionProps}>
                          <Checkbox
                            checked={selected}
                          />
                          {option.title}
                        </li>
                      );
                    }}
                    renderInput={(params) => <TextField {...params} variant="outlined" label="Checkboxes" />}
                  />
                </Grid>
              </Grid>
            </Stack>

            {showCode.multiplevariant && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringMulitpleVariant}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Checkboxes Autocomplete */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Checkboxes</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, checkbox: !prev.checkbox }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("checkbox")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title || ''}
                    renderOption={(props, option, { selected }) => {
                      const { key, ...optionProps } = props;
                      return (
                        <li key={key} {...optionProps}>
                          <Checkbox
                            checked={selected}
                          />
                          {option.title}
                        </li>
                      );
                    }}
                    renderInput={(params) => <TextField {...params} variant="outlined" label="Checkboxes" />}
                  />
                </Grid>
              </Grid>
            </Stack>

            {showCode.checkbox && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringCheckbox}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Limit Tags Autocomplete */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Limit Tags</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, limittag: !prev.limittag }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("limittag")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Autocomplete
                    multiple
                    limitTags={2}
                    id="multiple-limit-tags"
                    options={top100Films}
                    getOptionLabel={(option) => option.title || ''}
                    defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
                    renderInput={(params) => <TextField {...params} variant="outlined" label="Checkboxes" />}
                  />
                </Grid>
              </Grid>
            </Stack>

            {showCode.limittag && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringLimitTags}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Autocomplete Props with CustomAutocomplete */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Autocomplete Props with CustomAutocomplete</Typography>
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

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomAutocomplete
                    disableCloseOnSelect
                    options={top100Films}
                    id='autocomplete-disableCloseOnSelect'
                    getOptionLabel={option => option.title || ''}
                    renderInput={params => <CustomTextField {...params} label='disableCloseOnSelect' />}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomAutocomplete
                    className='is-[250px]'
                    clearOnEscape
                    options={top100Films}
                    id='autocomplete-clearOnEscape'
                    getOptionLabel={option => option.title || ''}
                    renderInput={params => <CustomTextField {...params} label='clearOnEscape' />}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomAutocomplete
                    className='is-[250px]'
                    disableClearable
                    options={top100Films}
                    id='autocomplete-disableClearable'
                    getOptionLabel={option => option.title || ''}
                    renderInput={params => <CustomTextField {...params} label='disableClearable' />}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomAutocomplete
                    className='is-[250px]'
                    openOnFocus
                    options={top100Films}
                    id='autocomplete-openOnFocus'
                    getOptionLabel={option => option.title || ''}
                    renderInput={params => <CustomTextField {...params} label='openOnFocus' />}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomAutocomplete
                    className='is-[250px]'
                    autoHighlight
                    options={top100Films}
                    id='autocomplete-autoHighlight'
                    getOptionLabel={option => option.title || ''}
                    renderInput={params => <CustomTextField {...params} label='autoHighlight' />}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomAutocomplete
                    className='is-[250px]'
                    autoSelect
                    options={top100Films}
                    id='autocomplete-autoSelect'
                    getOptionLabel={option => option.title || ''}
                    renderInput={params => <CustomTextField {...params} label='autoSelect' />}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomAutocomplete
                    className='is-[250px]'
                    blurOnSelect
                    options={top100Films}
                    id='autocomplete-blurOnSelect'
                    getOptionLabel={option => option.title || ''}
                    renderInput={params => <CustomTextField {...params} label='blurOnSelect' />}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomAutocomplete
                    className='is-[250px]'
                    clearOnBlur
                    options={top100Films}
                    id='autocomplete-clearOnBlur'
                    getOptionLabel={option => option.title || ''}
                    renderInput={params => <CustomTextField {...params} label='clearOnBlur' />}
                  />
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

        {/* Grouped Autocomplete */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Grouped</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, grouped: !prev.grouped }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("grouped")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Autocomplete
                    multiple
                    id="multiple-limit-tags"
                    options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                    groupBy={(option) => option.firstLetter}
                    getOptionLabel={(option) => option.title || ''}
                    renderInput={(params) => <TextField {...params} label="With categories" />}
                  />
                </Grid>
              </Grid>
            </Stack>

            {showCode.grouped && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringGrouped}
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
  );
}

export default AutocompletePage;
