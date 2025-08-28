import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, IconButton, Paper, Snackbar, Stack, Tooltip, Typography } from '@mui/material';
import { RiArrowDownSLine, RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function AccordionPage() {
  const [showCode, setShowCode] = useState({ basic: false, expand: false, actionExpand: false });
  const [copySuccess, setCopySuccess] = useState(false);

  // States
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [actionExpanded, setActionExpanded] = useState(false)

  const handleActionChange = panel => (event, isActionExpanded) => {
    setActionExpanded(isActionExpanded ? panel : false)
  }

  const codeStringBasic = `// If you want to change the style of the accordion, you can do so in the theme.js file
// MUI Imports  
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

const AccordionBasic = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary id='panel-header-1' aria-controls='panel-content-1'>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
            Topping soufflé tart sweet croissant.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary id='panel-header-2' aria-controls='panel-content-2'>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
            pudding cheesecake pie ice cream.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary id='panel-header-3' aria-controls='panel-content-3'>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
            dessert sweet pastry powder.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
  
export default AccordionBasic`;

  const codeStringExpand = `// If you want to change the style of the accordion, you can do so in the theme.js file
// MUI Imports
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

const AccordionExpand = () => {
  // States
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary id='controlled-panel-header-1' aria-controls='controlled-panel-content-1'>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
            Topping soufflé tart sweet croissant.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary id='controlled-panel-header-2' aria-controls='controlled-panel-content-2'>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
            pudding cheesecake pie ice cream.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary id='controlled-panel-header-3' aria-controls='controlled-panel-content-3'>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
            dessert sweet pastry powder.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
  
export default AccordionExpand`;

  const codeStringActionExpand = `// If you want to change the style of the accordion, you can do so in the theme.js file
// MUI Imports
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

const AccordionExpand = () => {
  // States
  const [actionExpanded, setActionExpanded] = useState(false)

  const handleActionChange = panel => (event, isActionExpanded) => {
    setActionExpanded(isActionExpanded ? panel : false)
  }

  return (
    <>
      <Accordion expanded={actionExpanded === 'panel1'} onChange={handleActionChange('panel1')}>
        <AccordionSummary id='controlled-panel-header-1' aria-controls='controlled-panel-content-1'>
          <FormControlLabel
            label='Accordion 1'
            aria-label='Acknowledge'
            control={<Checkbox disableRipple />}
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
            Topping soufflé tart sweet croissant.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={actionExpanded === 'panel2'} onChange={handleActionChange('panel2')}>
        <AccordionSummary id='controlled-panel-header-2' aria-controls='controlled-panel-content-2'>
          <FormControlLabel
            label='Accordion 2'
            aria-label='Acknowledge'
            control={<Checkbox disableRipple />}
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
            pudding cheesecake pie ice cream.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={actionExpanded === 'panel3'} onChange={handleActionChange('panel3')}>
        <AccordionSummary id='controlled-panel-header-3' aria-controls='controlled-panel-content-3'>
          <FormControlLabel
            label='Accordion 3'
            aria-label='Acknowledge'
            control={<Checkbox disableRipple />}
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
            dessert sweet pastry powder.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
  
export default AccordionExpand`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basic: codeStringBasic,
      expand: codeStringExpand,
      actionExpand: codeStringActionExpand,
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
      <Typography variant="h6" className="page-title" mb={2}>Accordions</Typography>
      <Stack gap={3}>
        {/* BASIC Accordion */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Basic</Typography>
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

          <Stack gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Accordion>
                <AccordionSummary
                  expandIcon={<RiArrowDownSLine />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<RiArrowDownSLine />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<RiArrowDownSLine />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
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

        {/* Expand Accordion */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Expand Accordion</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, expand: !prev.expand }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("expand")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  id='controlled-panel-header-1'
                  aria-controls='controlled-panel-content-1'
                  expandIcon={<RiArrowDownSLine />}
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
                    Topping soufflé tart sweet croissant.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  id='controlled-panel-header-2'
                  aria-controls='controlled-panel-content-2'
                  expandIcon={<RiArrowDownSLine />}
                >
                  <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
                    pudding cheesecake pie ice cream.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  id='controlled-panel-header-3'
                  aria-controls='controlled-panel-content-3'
                  expandIcon={<RiArrowDownSLine />}
                >
                  <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
                    dessert sweet pastry powder.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Stack>

            {showCode.expand && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringExpand}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Additional Action */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Action Accordion</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, actionExpand: !prev.actionExpand }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("actionExpand")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Accordion expanded={actionExpanded === 'panel1'} onChange={handleActionChange('panel1')}>
                <AccordionSummary
                  id='controlled-panel-header-1'
                  aria-controls='controlled-panel-content-1'
                  expandIcon={<RiArrowDownSLine />}
                >
                  <FormControlLabel
                    label='Accordion 1'
                    aria-label='Acknowledge'
                    control={<Checkbox disableRipple />}
                    onClick={event => event.stopPropagation()}
                    onFocus={event => event.stopPropagation()}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
                    Topping soufflé tart sweet croissant.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={actionExpanded === 'panel2'} onChange={handleActionChange('panel2')}>
                <AccordionSummary
                  id='controlled-panel-header-2'
                  aria-controls='controlled-panel-content-2'
                  expandIcon={<RiArrowDownSLine />}
                >
                  <FormControlLabel
                    label='Accordion 2'
                    aria-label='Acknowledge'
                    control={<Checkbox disableRipple />}
                    onClick={event => event.stopPropagation()}
                    onFocus={event => event.stopPropagation()}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
                    pudding cheesecake pie ice cream.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={actionExpanded === 'panel3'} onChange={handleActionChange('panel3')}>
                <AccordionSummary
                  id='controlled-panel-header-3'
                  aria-controls='controlled-panel-content-3'
                  expandIcon={<RiArrowDownSLine />}
                >
                  <FormControlLabel
                    label='Accordion 3'
                    aria-label='Acknowledge'
                    control={<Checkbox disableRipple />}
                    onClick={event => event.stopPropagation()}
                    onFocus={event => event.stopPropagation()}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
                    dessert sweet pastry powder.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Stack>

            {showCode.actionExpand && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringActionExpand}
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

export default AccordionPage;
