import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import Select from "react-select";

const colourOptions = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "orange", label: "Orange" },
  { value: "purple", label: "Purple" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "8px",
    minHeight: "44px",
    fontSize: "16px",
    border: `1px solid rgba(var(--input-border-rgb-color),0.2)`,
    backgroundColor: state.isDisabled
      ? "rgba(var(--input-border-rgb-color),0.1)"
      : "transparent",
    color: "var(--text-color)",
    boxShadow: "none",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: "var(--input-border-rgb-color)",
    },
    ...(state.isFocused && {
      borderColor: "var(--primary-color)",
      // borderWidth: "2px",
      boxShadow: "0 0 0 1px var(--primary-color)",
    }),
    ...(state.isDisabled && {
      opacity: 0.38,
      cursor: "not-allowed",
    }),
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: state.isDisabled ? "var(--text-color)" : "var(--text-color)",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    // color: state.isDisabled ? "var(--text-color)" : "var(--text-color)",
    color: "var(--text-color)",
    opacity: state.isDisabled ? 0.38 : 1,
  }),
  input: (provided) => ({
    ...provided,
    color: "var(--text-color)",
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: state.isSelected
      ? "var(--primary-color)" // selected option bg
      : state.isFocused
        ? "var(--primary-color)" // hover/focus bg
        : "var(--card-bg-color)",

    color: state.isSelected
      ? "var(--white-color)" // selected text
      : state.isFocused
        ? "var(--white-color)" // focused text
        : "var(--text-color)",
    cursor: "pointer",
    padding: "8px 12px",

    ":active": {
      backgroundColor: "var(--primary-dark)",
      color: "var(--text-color)",
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "var(--primary-color)",
    color: "var(--white-color)",
    borderRadius: "6px",
    paddingInline: "4px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "var(--white-color)",
    fontWeight: 400,
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "var(--white-color)",
    ":hover": {
      backgroundColor: "rgba(var(--primary-rgb-color),0.8)",
      color: "var(--white-color)",
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    // color: state.isFocused ? "var(--primary-color)" : "var(--text-color)",
    color: 'var(--text-color)',
    "&:hover": {
      color: 'var(--text-color)',
    },
    svg: {
      width: "16px",
      height: "16px",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: 'var(--text-color)',
    ":hover": {
      color: 'var(--text-color)',
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "var(--card-bg-color)",
    // border: `1px solid rgba(var(--input-border-rgb-color),0.22)`,
    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
    marginTop: "2px",
    marginBottom: 0,
    zIndex: 10,
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
};
export default function CustomSelectDemo() {
  const [singleValue, setSingleValue] = useState(null);
  const [multiValue, setMultiValue] = useState([]);
  const [styledValue, setStyledValue] = useState(null);

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
  );
}
