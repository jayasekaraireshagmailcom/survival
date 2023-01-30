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
  return !value.match(emailRegex)
}
const checkPhoneSL = (value:any)=>{
  const phoneRegex = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;
  return !value.match(phoneRegex)
}
export {checkUndefined,checkOnlyLetters,checkTextLength,checkEmail,checkPhoneSL}