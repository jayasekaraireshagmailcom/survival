import React,{useState} from 'react';
import Label from './Label'
import Input from './Input'
import BasicSelect from './DropDown'
import ActionButton from './ActionButton';
import {Grid} from '@mui/material';
import Box from '@mui/material/Box';

export default function Form(props:any) {
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
    const letters = /^[A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const phoneRegex = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;  
    if(typeof firstName !== undefined){setFirstNameError(true);setFirstNameErrorMsg('Invalidate First Name Input !')}
    if(firstName.match(letters)){setFirstNameError(true)}
    if(firstName.length>6 && firstName.length<10){setFirstNameError(true)}
    if(typeof lastName !== undefined){setLastNameError(true);setLastNameErrorMsg('Invalidate Last Name Input !')}
    if(lastName.match(letters)){setLastNameError(true);setLastNameErrorMsg('Invalidate Last Name Input !')}
    if(lastName.length>6 && lastName.length<10){setLastNameError(true);setLastNameErrorMsg('Invalidate Last Name Input !')}
    if(email.match(emailRegex)){setEmailError(true);setEmailErrorMsg('Invalidate Email Input !')}
    if(phone.match(phoneRegex)){setPhoneError(true);setPhoneErrorMsg('Invalidate Phone Input !')}
    console.log(gender)
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
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={3}>
        <Label sx={{padding:'2em'}}>First Name</Label>
      </Grid>
      <Grid item xs={3}>
        <Input variant='filled' valueChange={(e:any)=>recordChange(e,'firstName')} errorField={firstNameError} helperMsg={firstNameErrorMsg}/>
      </Grid>
      <Grid item xs={6}></Grid>      
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={3}>
        <Label sx={{padding:'2em'}}>Last Name</Label>
      </Grid>
      <Grid item xs={3}>
        <Input variant='filled' valueChange={(e:any)=>recordChange(e,'lastName')} errorField={lastNameError} helperMsg={lastNameErrorMsg}/>
      </Grid>
      <Grid item xs={6}>
      </Grid>
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={3}>
        <Label sx={{padding:'2em'}}>Email</Label>
      </Grid>
      <Grid item xs={3}>
        <Input variant={'filled'} valueChange={(e:any)=>recordChange(e,'email')} errorField={emailError} helperMsg={emailErrorMsg}/>
      </Grid>
      <Grid item xs={6}>
      </Grid>
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={3}>
        <Label sx={{padding:'2em'}}>Phone</Label>
      </Grid>
      <Grid item xs={3}>
        <Input variant={'filled'} valueChange={(e:any)=>recordChange(e,'phone')} errorField={phoneError} helperMsg={phoneErrorMsg}/>
      </Grid>
      <Grid item xs={6}>
      </Grid>
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={3}>
        <Label sx={{padding:'2em'}}>Gender</Label>
      </Grid>
      <Grid item xs={3}>
        <BasicSelect dataSource={[{id:1,value:'male',label:'M'},{id:2,value:'female',label:'F'},{id:3,value:'bysex',label:'NA'}]} value={gender} validation={['male','female']}/>
      </Grid>
      <Grid item xs={6}>
      </Grid>
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={6}><ActionButton  vlidateData={validateRecord}variant="outlined" title="Add" customStyles={{marginTop:'2em',borderRadius:'5px',fontWeight:'600', width:'20%',background:'#fff',color:'purple',float:'right',border:1}} colorface={"blue"}/></Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  </Box>
  )
}