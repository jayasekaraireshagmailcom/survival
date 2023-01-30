import React,{useState} from 'react';
import Label from './Label'
import {BasicTextFields as Input} from './Input'
import BasicSelect from './DropDown'
import ActionButton from './ActionButton';
import {Grid} from '@mui/material';
import Box from '@mui/material/Box';
import {checkUndefined,checkOnlyLetters,checkTextLength,checkEmail,checkPhoneSL} from '../utils/validations'


export default function Form(props:any) {
  const{btnTittle}=props
  const [firstName,setFirstName] = useState('')
  const [firstNameError,setFirstNameError] = useState(false)
  const [firstNameErrorMsg,setFirstNameErrorMsg] = useState('')
  const [lastName,setLastName] = useState('')
  const [lastNameError,setLastNameError] = useState(false)
  const [lastNameErrorMsg,setLastNameErrorMsg] = useState('')
  const [email,setEmail] = useState('')
  const [emailError,setEmailError] = useState(false)
  const [emailErrorMsg,setEmailErrorMsg] = useState('')
  const [phone,setPhone] = useState('')
  const [phoneError,setPhoneError] = useState(false)
  const [phoneErrorMsg,setPhoneErrorMsg] = useState('')
  const [gender,setGender] = useState('male')


  const validateRecord = ()=>{
    if(checkUndefined(firstName)||checkOnlyLetters(firstName)||checkTextLength(firstName)){
      setFirstNameError(true);
      setFirstNameErrorMsg('Invalidate First Name Input !')
    }else{
      setFirstNameError(false)
      setFirstNameErrorMsg('')
    }

    if(checkUndefined(lastName)||checkOnlyLetters(lastName)||checkTextLength(lastName)){
      setLastNameError(true);
      setLastNameErrorMsg('Invalidate Last Name Input !')
    }else{
      setLastNameError(false)
      setLastNameErrorMsg('')
    }

    if(checkEmail(email)){
      setEmailError(true);
      setEmailErrorMsg('Invalidate Email Input !')
    }else{
      setEmailError(false);
      setEmailErrorMsg('')     
    }

    if(checkPhoneSL(phone)){
      setPhoneError(true);
      setPhoneErrorMsg('Invalidate Phone Input !')
    }else{
      setPhoneError(false);
      setPhoneErrorMsg('')
    }
  }

  const recordChange = (e:any,id:string)=>{
    switch(id){
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break; 
      case 'gender':
        setGender(e.target.value);
        break;
      default:
        return;
    }
  }
  return(    
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} sx={{paddingTop:'2em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} alignItems="center"  sx={{position:'relative',top:'1em'}}>
        <Label>First Name</Label>
      </Grid>
      <Grid item xs={8}>
        <Input fieldColor='filled' valueChange={(e:any)=>recordChange(e,'firstName')} errorField={firstNameError} helperMsg={firstNameErrorMsg}/>
      </Grid>
      <Grid item xs={1}></Grid>      
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{position:'relative',top:'1em'}}>
        <Label sx={{padding:'2em'}}>Last Name</Label>
      </Grid>
      <Grid item xs={8}>
        <Input fieldColor='filled' valueChange={(e:any)=>recordChange(e,'lastName')} errorField={lastNameError} helperMsg={lastNameErrorMsg}/>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{position:'relative',top:'1em'}}>
        <Label sx={{padding:'2em'}}>Email</Label>
      </Grid>
      <Grid item xs={8}>
        <Input fieldColor='filled' valueChange={(e:any)=>recordChange(e,'email')} errorField={emailError} helperMsg={emailErrorMsg}/>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{position:'relative',top:'1em'}}>
        <Label sx={{padding:'2em'}}>Phone</Label>
      </Grid>
      <Grid item xs={8}>
        <Input fieldColor='filled' valueChange={(e:any)=>recordChange(e,'phone')} errorField={phoneError} helperMsg={phoneErrorMsg}/>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{position:'relative',top:'1em'}}>
        <Label sx={{padding:'2em'}}>Gender</Label>
      </Grid>
      <Grid item xs={8}>
        <BasicSelect fieldColor='filled' dataSource={[{id:1,value:'male',label:'M'},{id:2,value:'female',label:'F'},{id:3,value:'bysex',label:'NA'}]} value={gender} validation={['male','female']}/>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
    <Grid container spacing={0} sx={{padding:'2em 0 2em 2em'}}>
      <Grid item xs={11}><ActionButton  vlidateData={validateRecord}  title={btnTittle} customStyles={{marginTop:'2em',borderRadius:'5px',fontWeight:'600', width:'20%',background:'#fff',color:'purple',float:'right',border:1}} colorface={"blue"}/></Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  </Box>
  )
}