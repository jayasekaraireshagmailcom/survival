import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
const BasicTextFields = (props:any)=> {
  const {inputid,label,fieldColor,valueChange,recordValue,errorField,helperMsg,textRef,fullWidth,inputValue} = props
  return <TextField inputRef={textRef} helperText={helperMsg} error={errorField} variant={fieldColor} fullWidth={fullWidth} defaultValue={inputValue}/>;
}
export {BasicTextFields}