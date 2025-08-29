import React, { useState } from 'react';
import { Box, IconButton, Paper, Slider, Snackbar, Stack, Tooltip, Typography } from '@mui/material';
import { RiCodeSSlashFill, } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function SliderPage() {
  const [showCode, setShowCode] = useState({
    basic: false,
    color: false,
    discrete: false,
    smallstep: false,
    custommarks: false,
    restrictedvalues: false,
    labelvisible: false,
    vertical: false,
    size: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const marks = [
    {
      value: 0,
      label: '0°'
    },
    {
      value: 20,
      label: '20°'
    },
    {
      value: 37,
      label: '37°'
    },
    {
      value: 100,
      label: '100°'
    }
  ]

  const valuetext = value => {
    return `${value}°C`
  }

  const valueLabelFormat = value => {
    return marks.findIndex(mark => mark.value === value) + 1
  }

  const codeStringBasic = `// If you want to change the style of the slider, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const SliderBasic = () => {
  return (
    <Box>
      <Typography>Basic Slider</Typography>
      <Slider defaultValue={30} aria-labelledby='continuous-slider' />
      <Typography>Disabled Slider</Typography>
      <Slider disabled defaultValue={30} aria-labelledby='disabled-slider' />
    </Box>
  )
}

export default SliderBasic`;

  const codeStringColor = `// If you want to change the style of the slider, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const SliderColor = () => {
  return (
    <Box>
      <Typography variant="body1" className='page-title'>Secondary Slider</Typography>
      <Slider defaultValue={30} color='secondary' aria-labelledby='secondary-slider' />
      <Typography variant="body1" className='page-title'>Error Slider</Typography>
      <Slider defaultValue={30} color='error' aria-labelledby='error-slider' />
      <Typography variant="body1" className='page-title'>Warning Slider</Typography>
      <Slider defaultValue={30} color='warning' aria-labelledby='warning-slider' />
      <Typography variant="body1" className='page-title'>Info Slider</Typography>
      <Slider defaultValue={30} color='info' aria-labelledby='info-slider' />
      <Typography variant="body1" className='page-title'>Success Slider</Typography>
      <Slider defaultValue={30} color='success' aria-labelledby='success-slider' />
    </Box>
  )
}

export default SliderColor`;

  const codeStringDiscrete = `// If you want to change the style of the slider, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

const valuetext = value => {
  return \`\${value}°C\`
}

const SliderDiscrete = () => {
  return (
    <Box>
      <Slider
        marks
        min={10}
        max={110}
        step={10}
        defaultValue={30}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        aria-labelledby='discrete-slider'
      />
    </Box>
  )
}

export default SliderDiscrete`;

  const codeStringSmallStep = `// If you want to change the style of the slider, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

const valuetext = value => {
  return \`\${value}°C\`
}

const SliderSmallStep = () => {
  return (
    <Box>
      <Slider
        marks
        step={5}
        defaultValue={20}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        aria-labelledby='small-steps-slider'
      />
    </Box>
  )
}

export default SliderSmallStep`;

  const codeStringCustomMarks = `// If you want to change the style of the slider, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

const marks = [
    {
      value: 0,
      label: '0°'
    },
    {
      value: 20,
      label: '20°'
    },
    {
      value: 37,
      label: '37°'
    },
    {
      value: 100,
      label: '100°'
    }
  ]

const valuetext = value => {
  return \`\${value}°C\`
}

const SliderCustomMarks = () => {
  return (
    <Box>
      <Slider
        marks
        step={5}
        defaultValue={20}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        aria-labelledby='small-steps-slider'
      />
    </Box>
  )
}

export default SliderCustomMarks`;

  const codeStringRestrictedValue = `// If you want to change the style of the slider, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

const marks = [
    {
      value: 0,
      label: '0°'
    },
    {
      value: 20,
      label: '20°'
    },
    {
      value: 37,
      label: '37°'
    },
    {
      value: 100,
      label: '100°'
    }
  ]

const valuetext = value => {
  return \`\${value}°C\`
}

const valueLabelFormat = value => {
  return marks.findIndex(mark => mark.value === value) + 1
}

const SliderRestrictedValues = () => {
  return (
    <Box>
      <Slider
        step={null}
        marks={marks}
        defaultValue={20}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        valueLabelFormat={valueLabelFormat}
        aria-labelledby='restricted-values-slider'
      />
    </Box>
  )
}

export default SliderRestrictedValues`;

  const codeStringLabelVisible = `// If you want to change the style of the slider, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

const marks = [
    {
      value: 0,
      label: '0°'
    },
    {
      value: 20,
      label: '20°'
    },
    {
      value: 37,
      label: '37°'
    },
    {
      value: 100,
      label: '100°'
    }
  ]

const valuetext = value => {
  return \`\${value}°C\`
}

const SliderLabelVisible = () => {
  return (
    <Box>
      <Slider
        step={10}
        marks={marks}
        defaultValue={80}
        valueLabelDisplay='on'
        getAriaValueText={valuetext}
        aria-labelledby='label-always-visible-slider'
      />
    </Box>
  )
}

export default SliderLabelVisible`;

  const codeStringVerticalSlider = `// If you want to change the style of the slider, you can do so in the theme.js file
// MUI Imports
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

const marks = [
    {
      value: 0,
      label: '0°'
    },
    {
      value: 20,
      label: '20°'
    },
    {
      value: 37,
      label: '37°'
    },
    {
      value: 100,
      label: '100°'
    }
  ]

const valuetext = value => {
  return \`\${value}°C\`
}

const SliderVertical = () => {
  return (
    <Box sx={{ height: 240 }}>
      <Slider
        orientation='vertical'
        getAriaValueText={valuetext}
        defaultValue={30}
        aria-labelledby='vertical-slider'
      />
      <Slider
        disabled
        defaultValue={30}
        orientation='vertical'
        getAriaValueText={valuetext}
        aria-labelledby='vertical-disabled-slider'
      />
      <Slider
        marks={marks}
        orientation='vertical'
        defaultValue={[20, 37]}
        getAriaValueText={valuetext}
        aria-labelledby='vertical-marks-slider'
      />
    </Box>
  )
}

export default SliderVertical`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basic: codeStringBasic,
      color: codeStringColor,
      discrete: codeStringDiscrete,
      smallstep: codeStringSmallStep,
      custommarks: codeStringCustomMarks,
      restrictedvalues: codeStringRestrictedValue,
      labelvisible: codeStringLabelVisible,
      vertical: codeStringVerticalSlider,
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
      <Typography variant="h6" className="page-title" mb={2}>Switch</Typography>
      <Stack gap={3}>

        {/* Basic Slider */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Basic Slidere</Typography>
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
              <Typography>Basic Slider</Typography>
              <Slider defaultValue={30} aria-labelledby='continuous-slider' />
              <Typography>Disabled Slider</Typography>
              <Slider disabled defaultValue={30} aria-labelledby='disabled-slider' />
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

        {/* Colors */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Colors</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, color: !prev.color }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("color")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Typography variant="body1" className='page-title'>Secondary Slider</Typography>
              <Slider defaultValue={30} color='secondary' aria-labelledby='secondary-slider' />
              <Typography variant="body1" className='page-title'>Error Slider</Typography>
              <Slider defaultValue={30} color='error' aria-labelledby='error-slider' />
              <Typography variant="body1" className='page-title'>Warning Slider</Typography>
              <Slider defaultValue={30} color='warning' aria-labelledby='warning-slider' />
              <Typography variant="body1" className='page-title'>Info Slider</Typography>
              <Slider defaultValue={30} color='info' aria-labelledby='info-slider' />
              <Typography variant="body1" className='page-title'>Success Slider</Typography>
              <Slider defaultValue={30} color='success' aria-labelledby='success-slider' />
            </Stack>

            {showCode.color && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringColor}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Discrete  */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Discrete Slider</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, discrete: !prev.discrete }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("discrete")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Slider
                marks
                min={10}
                max={110}
                step={10}
                defaultValue={30}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
                aria-labelledby='discrete-slider'
              />
            </Stack>

            {showCode.discrete && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringDiscrete}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Small Steps */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Small Steps</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, smallstep: !prev.smallstep }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("smallstep")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Slider
                marks
                step={5}
                defaultValue={20}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
                aria-labelledby='small-steps-slider'
              />
            </Stack>

            {showCode.smallstep && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringSmallStep}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Custom Marks */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Custom Marks</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, custommarks: !prev.custommarks }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("custommarks")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Slider
                step={10}
                marks={marks}
                defaultValue={20}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
                aria-labelledby='custom-marks-slider'
              />
            </Stack>

            {showCode.custommarks && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringCustomMarks}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Restricted Values */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Restricted Values</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, restrictedvalues: !prev.restrictedvalues }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("restrictedvalues")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Slider
                step={null}
                marks={marks}
                defaultValue={20}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
                valueLabelFormat={valueLabelFormat}
                aria-labelledby='restricted-values-slider'
              />
            </Stack>

            {showCode.restrictedvalues && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringRestrictedValue}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Label Always Visible */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Label Always Visible</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, labelvisible: !prev.labelvisible }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("labelvisible")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Slider
                step={10}
                marks={marks}
                defaultValue={80}
                valueLabelDisplay='on'
                getAriaValueText={valuetext}
                aria-labelledby='label-always-visible-slider'
              />
            </Stack>

            {showCode.labelvisible && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringLabelVisible}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Vertical Sliders */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Vertical Sliders</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, vertical: !prev.vertical }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("vertical")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} direction={'row'} className="w-full" sx={{ height: 240 }}>
              <Slider
                orientation='vertical'
                getAriaValueText={valuetext}
                defaultValue={30}
                aria-labelledby='vertical-slider'
              />
              <Slider
                disabled
                defaultValue={30}
                orientation='vertical'
                getAriaValueText={valuetext}
                aria-labelledby='vertical-disabled-slider'
              />
              <Slider
                marks={marks}
                orientation='vertical'
                defaultValue={[20, 37]}
                getAriaValueText={valuetext}
                aria-labelledby='vertical-marks-slider'
              />
            </Stack>

            {showCode.vertical && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringVerticalSlider}
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

export default SliderPage;
