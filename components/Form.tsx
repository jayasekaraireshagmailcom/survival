import React,{useState,useRef,useEffect,useContext,useMemo} from 'react';
import Label from './Label'
import {BasicTextFields as Input} from './Input'
import BasicSelect from './DropDown'
import ActionButton from './ActionButton';
import {Grid} from '@mui/material';
import Box from '@mui/material/Box';
import {checkUndefined,checkOnlyLetters,checkTextLength,checkEmail,checkPhoneSL,checkValueExsistInTheArray} from '../utils/validations'
import { useRouter } from 'next/router'

export default function Form(props:any) {
  const {query} = useRouter()
  const { id } = query
  const{btnTittle}=props
  const [firstName,setFirstName] = useState('')

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

  useMemo(()=>{
    if(id){


      // const filteredData = val.filter((raw:any)=>raw.id==id)
      // const { first_name,last_name,email,phone,gender} = filteredData[0]
    }
  })

  // if(id){
  //   
  //     const response = async()=> await fetch('/api')
  //     const val = async()=> await response.json()
  //     console.log(val)
  //   })
  // }


  

    
    // if(id){
    //   console.log(id)
      
    //   // console.log(query)
    //   // const filteredData = data?.filter((raw:any)=>raw.id==id)
    //   // console.log(filteredData)
    //   // const { first_name,last_name,email,phone,gender} = filteredData[0]
    //   // setFirstName(first_name)
    //   //setGender(gender)
    // }
  

  const firstNameRef = useRef('')  
  const lastNameRef = useRef('')
  const emailRef = useRef('')
  const phoneRef = useRef('')

  



  const validateRecord = ()=>{
    let flag = true;
    const fname = firstNameRef.current.value;
    const lname = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    if(checkUndefined(fname)||checkOnlyLetters(fname)||checkTextLength(fname)){
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

    if(checkEmail(email)){
      setEmailError(true);
      setEmailErrorMsg('Invalidate Email Input !')
      flag = false
    }else{
      setEmailError(false);
      setEmailErrorMsg('')     
    }

    if(checkPhoneSL(phone)){
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
    if(flag){      
      const response = fetch('/api',{
        method:'POST',
        body:JSON.stringify({
            "first_name": fname,
            "last_name": lname,
            "email": email,
            "number": phone,
            "gender": gender,
        }),
        headers:{
          'Content-Type': 'application/json'
        }
      })
    }
  }

  const recordChange = (e:any) =>{
    setGender(e.target.value)
  }


  return(        
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} sx={{paddingTop:'2em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} alignItems="center"  sx={{position:'relative',top:'1em'}}>
        <Label>First Name</Label>
      </Grid>
      <Grid item xs={8}>
        <Input textRef={firstNameRef} fieldColor='filled'  errorField={firstNameError} helperMsg={firstNameErrorMsg} fullWidth={true}/>
      </Grid>
      <Grid item xs={1}></Grid>      
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{position:'relative',top:'1em'}}>
        <Label sx={{padding:'2em'}}>Last Name</Label>
      </Grid>
      <Grid item xs={8}>
        <Input textRef={lastNameRef} fieldColor='filled' errorField={lastNameError} helperMsg={lastNameErrorMsg} fullWidth={true}/>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{position:'relative',top:'1em'}}>
        <Label sx={{padding:'2em'}}>Email</Label>
      </Grid>
      <Grid item xs={8}>
        <Input textRef={emailRef} fieldColor='filled' errorField={emailError} helperMsg={emailErrorMsg} fullWidth={true}/>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{position:'relative',top:'1em'}}>
        <Label sx={{padding:'2em'}}>Phone</Label>
      </Grid>
      <Grid item xs={8}>
        <Input textRef={phoneRef} fieldColor='filled' errorField={phoneError} helperMsg={phoneErrorMsg} fullWidth={true}/>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
    <Grid container spacing={0} sx={{paddingTop:'1em'}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={2} sx={{position:'relative',top:'1em'}}>
        <Label sx={{padding:'2em'}}>Gender</Label>
      </Grid>
      <Grid item xs={8}>
        <BasicSelect fieldColor='filled' handleChange={recordChange} dataSource={[{id:1,value:'M',label:'M'},{id:2,value:'F',label:'F'},{id:3,value:'bysex',label:'NA'}]} value={gender} error={genderError} errorMsg={genderErrorMsg}/>
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