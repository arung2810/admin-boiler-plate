import React, { useState, forwardRef } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Grid, } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactDatepicker from '../../../components/common/Datepicker';
import CustomTextField from '../../../components/common/CustomTextField';
import { format, subDays, addDays, setHours, setMinutes } from 'date-fns';

function DatepickerPage() {
  const [showCode, setShowCode] = useState({
    basic: false,
    minmax: false,
    rangepicker: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 15));
  const [startDateRange, setStartDateRange] = useState(new Date());
  const [endDateRange, setEndDateRange] = useState(addDays(new Date(), 45));

  const handleOnChange = dates => {
    const [start, end] = dates

    setStartDate(start)
    setEndDate(end)
  }

  const handleOnChangeRange = dates => {
    const [start, end] = dates

    setStartDateRange(start)
    setEndDateRange(end)
  }

  const CustomInput = forwardRef((props, ref) => {
    const { label, start, end, ...rest } = props

    const startDate = format(start, 'MM/dd/yyyy')
    const endDate = end !== null ? ` - ${format(end, 'MM/dd/yyyy')}` : null;

    const value = `${startDate}${endDate !== null ? endDate : ''}`

    return <CustomTextField fullWidth inputRef={ref} {...rest} label={label} value={value} />
  })

  const codeStringBasic = `// If you want to change the style of the datepicker, you can do so in the datepicker.js file
// MUI Imports
import ReactDatepicker from '../../../components/common/Datepicker';
import CustomTextField from '../../../components/common/CustomTextField';

const DatePickerBasic = () => {
  // State
  const [date, setDate] = useState(new Date());

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <ReactDatepicker
          selected={date}
          id='basic-input'
          onChange={date => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomTextField label='Basic' fullWidth />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <ReactDatepicker
          disabled
          selected={date}
          id='disabled-input'
          onChange={date => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomTextField label='Disabled' fullWidth />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <ReactDatepicker
          readOnly
          selected={date}
          id='read-only-input'
          onChange={date => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomTextField slotProps={{ input: { readOnly: true } }} label='Readonly' fullWidth />}
        />
      </Grid>
    </Grid>
  )
}

export default DatePickerBasic`;

  const codeStringMinMax = `// If you want to change the style of the datepicker, you can do so in the datepicker.js file
// MUI Imports
import ReactDatepicker from '../../../components/common/Datepicker';
import CustomTextField from '../../../components/common/CustomTextField';

const DatePickerMinMax = () => {
  // State
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <ReactDatepicker
          id='min-date'
          onChange={date => setMinDate(date)}
          selected={minDate}
          minDate={subDays(new Date(), 5)}
          placeholderText='Click to select a date'
          customInput={<CustomTextField label='Min Date' fullWidth />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <ReactDatepicker
          id='max-date'
          onChange={date => setMaxDate(date)}
          selected={maxDate}
          maxDate={addDays(new Date(), 5)}
          placeholderText='Click to select a date'
          customInput={<CustomTextField label='Max Date' fullWidth />}
        />
      </Grid>
    </Grid>
  )
}

export default DatePickerMinMax`;

  const codeStringRangePicker = `// If you want to change the style of the datepicker, you can do so in the datepicker.js file
// MUI Imports
import ReactDatepicker from '../../../components/common/Datepicker';

const DatePickerRangePicker = () => {
  // State
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 15));
  const [startDateRange, setStartDateRange] = useState(new Date());
  const [endDateRange, setEndDateRange] = useState(addDays(new Date(), 45));

  const handleOnChange = dates => {
    const [start, end] = dates

    setStartDate(start)
    setEndDate(end)
  }

  const handleOnChangeRange = dates => {
    const [start, end] = dates

    setStartDateRange(start)
    setEndDateRange(end)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <ReactDatepicker
          selectsRange
          endDate={endDate}
          selected={startDate}
          startDate={startDate}
          id='date-range-picker'
          onChange={handleOnChange}
          shouldCloseOnSelect={false}
          customInput={<CustomInput label='Date Range' start={startDate} end={endDate} />}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <ReactDatepicker
          selectsRange
          monthsShown={2}
          endDate={endDateRange}
          selected={startDateRange}
          startDate={startDateRange}
          shouldCloseOnSelect={false}
          id='date-range-picker-months'
          onChange={handleOnChangeRange}
          customInput={<CustomInput label='Multiple Months' end={endDateRange} start={startDateRange} />}
        />
      </Grid>
    </Grid>
  )
}

export default DatePickerRangePicker`;

  const handleCopy = async (codeKey) => {
    const codeMap = {
      basic: codeStringBasic,
      minmax: codeStringMinMax,
      rangepicker: codeStringRangePicker,
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
      <Typography variant="h6" className="page-title" mb={2}>Date Picker</Typography>
      <Stack gap={3}>
        {/* BASIC Date Picker */}
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

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ReactDatepicker
                    selected={date}
                    id='basic-input'
                    onChange={date => setDate(date)}
                    placeholderText='Click to select a date'
                    customInput={<CustomTextField label='Basic' fullWidth />}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ReactDatepicker
                    disabled
                    selected={date}
                    id='disabled-input'
                    onChange={date => setDate(date)}
                    placeholderText='Click to select a date'
                    customInput={<CustomTextField label='Disabled' fullWidth />}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ReactDatepicker
                    readOnly
                    selected={date}
                    id='read-only-input'
                    onChange={date => setDate(date)}
                    placeholderText='Click to select a date'
                    customInput={<CustomTextField slotProps={{ input: { readOnly: true } }} label='Readonly' fullWidth />}
                  />
                </Grid>
              </Grid>
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

        {/* Min & Max Pickers */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Min & Max Pickers</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, minmax: !prev.minmax }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("minmax")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ReactDatepicker
                    id='min-date'
                    onChange={date => setMinDate(date)}
                    selected={minDate}
                    minDate={subDays(new Date(), 5)}
                    placeholderText='Click to select a date'
                    customInput={<CustomTextField label='Min Date' fullWidth />}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ReactDatepicker
                    id='max-date'
                    onChange={date => setMaxDate(date)}
                    selected={maxDate}
                    maxDate={addDays(new Date(), 5)}
                    placeholderText='Click to select a date'
                    customInput={<CustomTextField label='Max Date' fullWidth />}
                  />
                </Grid>
              </Grid>
            </Stack>

            {showCode.minmax && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringMinMax}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        {/* Date Range Pickers */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Date Range Pickers</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, rangepicker: !prev.rangepicker }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("rangepicker")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ReactDatepicker
                    selectsRange
                    endDate={endDate}
                    selected={startDate}
                    startDate={startDate}
                    id='date-range-picker'
                    onChange={handleOnChange}
                    shouldCloseOnSelect={false}
                    customInput={<CustomInput label='Date Range' start={startDate} end={endDate} />}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ReactDatepicker
                    selectsRange
                    monthsShown={2}
                    endDate={endDateRange}
                    selected={startDateRange}
                    startDate={startDateRange}
                    shouldCloseOnSelect={false}
                    id='date-range-picker-months'
                    onChange={handleOnChangeRange}
                    customInput={<CustomInput label='Multiple Months' end={endDateRange} start={startDateRange} />}
                  />
                </Grid>
              </Grid>
            </Stack>

            {showCode.rangepicker && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringRangePicker}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Paper>

        { /* Specific Range */}
        <Paper elevation={0}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h6" className='page-title'>Date Range Pickers</Typography>
            <Stack direction="row" spacing={1}>
              <Tooltip title="Show Code">
                <IconButton className='icon-button' onClick={() => setShowCode(prev => ({ ...prev, rangepicker: !prev.rangepicker }))}>
                  <RiCodeSSlashFill />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Code">
                <IconButton className='icon-button' onClick={() => handleCopy("rangepicker")}>
                  <TbCopy />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} gap={4} justifyContent='space-between'>
            <Stack gap={2} className="w-full">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ReactDatepicker
                    selected={date}
                    id='specific-date'
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 5)}
                    onChange={date => setDate(date)}
                    customInput={<CustomTextField label='Specific Date Range' fullWidth />}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ReactDatepicker
                    showTimeSelect
                    selected={time}
                    id='specific-time'
                    dateFormat='MM/dd/yyyy h:mm aa'
                    onChange={date => setTime(date)}
                    minTime={setHours(setMinutes(new Date(), 0), 17)}
                    maxTime={setHours(setMinutes(new Date(), 30), 20)}
                    customInput={<CustomTextField label='Specific Time' fullWidth />}
                  />
                </Grid>
              </Grid>
            </Stack>

            {showCode.rangepicker && (
              <Box className="code-block w-full" sx={{ position: 'relative' }}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                  {codeStringRangePicker}
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
export default DatepickerPage;
