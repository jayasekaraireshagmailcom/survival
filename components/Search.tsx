import {useState} from 'react'
const SearchJobForm = ({searchFormState,setSearchFormState, setDisplayedJobs})=>{
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(searchFormState){
      alert(`searching:${searchFormState}`)
    }
  }
}