const checkUndefined = (value:any)=>{
  return value.length===0 
}
const checkOnlyLetters = (value:any)=>{
  const letters = /^[A-Za-z]+$/;
  return !value.match(letters)
}
const checkTextLength = (value:any)=>{
  return !(value.length>=6 && value.length<=10)
}
const checkEmail = (value:any)=>{
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return !String(value).match(emailRegex)
}
const checkPhoneSL = (value:any)=>{
  const phoneRegex = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;
  return !String(value).match(phoneRegex)
}
const checkValueExsistInTheArray = (arrayOfData:any,value:any)=>{
  return !arrayOfData.includes(value)
}
const checkNullable = (value:any)=>{
  return value?.length>0
}
const sortData = (data:any,field:any,order:string)=>{
  if(order=='sort-asc'){
    return data.sort(function (a, b) {
      return a[Object.keys(field)[0]].localeCompare(b[Object.keys(field)[0]]);
    });    
  }else{
    return data.reverse(function (a, b) {
      return a[Object.keys(field)[0]].localeCompare(b[Object.keys(field)[0]]);
    });
  }

}
export {checkUndefined,checkOnlyLetters,checkTextLength,checkEmail,checkPhoneSL,checkValueExsistInTheArray,checkNullable,sortData}