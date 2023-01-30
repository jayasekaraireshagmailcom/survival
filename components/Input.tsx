import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
export default function BasicTextFields(props:any) {
  const {inputid,label,varient,valueChange,recordValue,errorField,helperMsg} = props
  return (<FormControl fullWidth><TextField helperText={helperMsg} error={errorField}value={recordValue} id={inputid} label={label} variant={varient} onChange={valueChange}/></FormControl>);
}