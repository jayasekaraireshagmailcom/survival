import React,{useState} from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

export default function BasicSelect(props:any) {
  const {labelId,id,value,label,dataSource,validation} = props
  const [gender,setGender] = useState(value)
  const [genderError,setGenderError] = useState(false)
  const [genderErrorMsg,setGenderErrorMsg] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value)

      if(!validation.includes(event.target.value)){
        setGenderError(true)
        setGenderErrorMsg('Invalied Gender Option !')
      }
  };
  
  return (
  <FormControl fullWidth error={genderError}>
    <Select 
    labelId={labelId} 
    id={id} 
    value={gender} 
    label={label} 
    onChange={handleChange}>
      {dataSource.map((option:any)=>{
        return (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)
      })}
        
      
    </Select>
    <FormHelperText>{genderErrorMsg}</FormHelperText>
  </FormControl>
  );
}
