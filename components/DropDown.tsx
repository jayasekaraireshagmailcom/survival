import React,{useState,useEffect} from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

export default function BasicSelect(props:any) {
  const {labelId,id,label,fieldColor,handleChange,dataSource,value,error,errorMsg} = props

  return (  
    <FormControl fullWidth variant={fieldColor} error={error}>
      <Select    
      labelId={labelId} 
      id={id} 
      value={value} 
      label={label} 
      onChange={handleChange}>
        {dataSource.map((option:any)=>{
          return (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)
        })}
      </Select>
      <FormHelperText>{errorMsg}</FormHelperText>
    </FormControl>
  );
}
