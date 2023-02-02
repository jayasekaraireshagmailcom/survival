import React,{useState,useRef,useEffect,useContext,useMemo} from 'react';
import Label from './Label'
import {BasicTextFields as Input} from './Input'
import BasicSelect from './DropDown'
import ActionButton from './ActionButton';
import {Grid} from '@mui/material';
import Box from '@mui/material/Box';
import {checkUndefined,checkOnlyLetters,checkTextLength,checkEmail,checkPhoneSL,checkValueExsistInTheArray,checkNullable} from '../utils/validations'
import { useRouter } from 'next/router'

export default function Form(props:any) {
  
  const {query} = useRouter()
  const { id } = query
  const{btnTittle,data}=props
  

  const [firstNameError,setFirstNameError] = useState(false)
  const [firstNameErrorMsg,setFirstNameErrorMsg] = useState('')
  const [lastNameError,setLastNameError] = useState(false)
  const [lastNameErrorMsg,setLastNameErrorMsg] = useState('')
  const [emailError,setEmailError] = useState(false)
  const [emailErrorMsg,setEmailErrorMsg] = useState('')
  const [phoneError,setPhoneError] = useState(false)
  const [phoneErrorMsg,setPhoneErrorMsg] = useState('')
  const [gender,setGender] = useState('M')
  const [genderError,setGenderError] = useState(false)
  const [genderErrorMsg,setGenderErrorMsg] = useState('')
  const genderValidation=['M','F']

  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')

  const firstNameRef = useRef('')  
  const lastNameRef = useRef('')
  const emailRef = useRef('')
  const phoneRef = useRef('')
  
  const validateRecord = ()=>{

    let flag = true;
    const fname = checkNullable(data)?firstName:firstNameRef.current.value;
    const lname = checkNullable(data)?lastName:lastNameRef.current.value;
    const validateEmail = checkNullable(data)?email:emailRef.current.value;
    const validatePhone = checkNullable(data)?phone:phoneRef.current.value;

    if(checkUndefined(fname) && checkOnlyLetters(fname) && checkTextLength(fname)){
      setFirstNameError(true);
      setFirstNameErrorMsg('Invalidate First Name Input !')
      flag = false
    }else{
      setFirstNameError(false)
      setFirstNameErrorMsg('')
    }

    if(checkUndefined(lname)||checkOnlyLetters(lname)||checkTextLength(lname)){
      setLastNameError(true);
      setLastNameErrorMsg('Invalidate Last Name Input !')
      flag = false
    }else{
      setLastNameError(false)
      setLastNameErrorMsg('')
    }

    if(checkEmail(validateEmail)){
      setEmailError(true);
      setEmailErrorMsg('Invalidate Email Input !')
      flag = false
    }else{
      setEmailError(false);
      setEmailErrorMsg('')     
    }

    if(checkPhoneSL(validatePhone)){
      setPhoneError(true);
      setPhoneErrorMsg('Invalidate Phone Input !')
      flag = false
    }else{
      setPhoneError(false);
      setPhoneErrorMsg('')
    }

    if(checkValueExsistInTheArray(genderValidation,gender)){
      setGenderError(true)
      setGenderErrorMsg('Invalied Gender Option !')
      flag = false
    }else{
      setGenderError(false)
      setGenderErrorMsg('')
    }
    var newRecord = {"first_name":fname,"last_name": lname,"email": email,"number": phone,"gender": gender}
    
    newRecord = checkNullable(data) ? Object.assign(newRecord, {"id":id}):newRecord;

    if(flag){      
      const response = fetch('/api',{
        method:checkNullable(data)?'PUT':'POST',
        body:JSON.stringify(newRecord),
        headers:{
          'Content-Type': 'application/json'
        }
      })
    }
  }

  const recordChange = (title:string) =>{
    switch(title){
      case 'firstname':
        setFirstName(firstNameRef.current.value);
        break;
      case 'lastname':
        setLastName(lastNameRef.current.value);
        break;
      case 'email':
        setEmail(emailRef.current.value);
        break;
      case 'phone':
        setPhone(phoneRef.current.value);
        break;
    }
    
  }

  const dropdowndChange = (e)=>{
    setGender(e.target.value);
  }

  useMemo(()=>{
    if(data?.length>0){
      const { first_name,last_name,email,number,gender} = data[0]
      setFirstName(first_name)
      setLastName(last_name)
      setEmail(email)
      setPhone(number)
      setGender(gender)
      
    }
  },[data])

    return (    
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} sx={{paddingTop:'2em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} alignItems="center"  sx={{position:'relative',top:'1em'}}>
        <Label>First Name</Label>
      </Grid>
      <Grid item xs={8}>
        {checkNullable(data)?
        <Input  textChange={recordChange('firstname')} textInput={firstName} textRef={firstNameRef} fieldColor='filled'  errorField={firstNameError} helperMsg={firstNameErrorMsg} fullWidth={true}/>
          :<Input  textRef={firstNameRef} fieldColor='filled'  errorField={firstNameError} helperMsg={firstNameErrorMsg} fullWidth={true}/>}
        </Grid>
      <Grid item xs={1}></Grid>      
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{position:'relative',top:'1em'}}>
        <Label sx={{padding:'2em'}}>Last Name</Label>
      </Grid>
      <Grid item xs={8}>
      { checkNullable(data)?
        <Input textChange={recordChange('lastname')} textInput={lastName} textRef={lastNameRef} fieldColor='filled' errorField={lastNameError} helperMsg={lastNameErrorMsg} fullWidth={true}/>:
        <Input textRef={lastNameRef} fieldColor='filled' errorField={lastNameError} helperMsg={lastNameErrorMsg} fullWidth={true}/>}
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{position:'relative',top:'1em'}}>
        <Label sx={{padding:'2em'}}>Email</Label>
      </Grid>
      <Grid item xs={8}>
      { checkNullable(data)?
      <Input textChange={recordChange('email')}  textInput={email}  textRef={emailRef} fieldColor='filled' errorField={emailError} helperMsg={emailErrorMsg} fullWidth={true}/>
        :<Input textRef={emailRef} fieldColor='filled' errorField={emailError} helperMsg={emailErrorMsg} fullWidth={true}/>}
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{position:'relative',top:'1em'}}>
        <Label sx={{padding:'2em'}}>Phone</Label>
      </Grid>
      <Grid item xs={8}>
      { checkNullable(data)?
        <Input textChange={recordChange('phone')} textInput={phone} textRef={phoneRef} fieldColor='filled' errorField={phoneError} helperMsg={phoneErrorMsg} fullWidth={true}/>
        :<Input textRef={phoneRef} fieldColor='filled' errorField={phoneError} helperMsg={phoneErrorMsg} fullWidth={true}/>}
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{position:'relative',top:'1em'}}>
        <Label sx={{padding:'2em'}}>Gender</Label>
      </Grid>
      <Grid item xs={8}>
        <BasicSelect fieldColor='filled' handleChange={dropdowndChange} dataSource={[{id:1,value:'M',label:'M'},{id:2,value:'F',label:'F'},{id:3,value:'bysex',label:'NA'}]} value={gender} error={genderError} errorMsg={genderErrorMsg}/>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
    <Grid container spacing={0} sx={{padding:'2em 0 2em 2em'}}>
      <Grid item xs={11}><ActionButton  btnvarient={'contained'} vlidateData={validateRecord}  title={btnTittle} customStyles={{marginTop:'2em',borderRadius:'5px',fontWeight:'600', width:'20%',background:'#fff',color:'purple',float:'right',border:1}} colorface={"blue"}/></Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  </Box>
  )
}