import React,{useState,useRef} from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, IconButton} from '@mui/material';
import {BasicTextFields as Input} from './Input'
import Image from "next/image";
import imageLoader from "../imageLoader";
import ActionButton from './ActionButton'
import IcnButton from '../components/IconButton'
import { ViewState } from '../types';
import Card from '../components/Card'
import AlertDialog from '../components/DialogBox'

export default function DisplayTable(props:any) {
  const {dataSource} = props
  const [deletebtn, setDeleteBtn] = useState<ViewState>({viewType: 'delete',});
  const [clearbtn, setClearBtn] = useState<ViewState>({viewType: 'clear',});

  const fname = useRef('')
  const lname = useRef('')
  const email = useRef('')
  const number = useRef('')
  const gender = useRef('')
  const [search, setSearch] = useState({
    first_name:fname.current.value,
    last_name: lname.current.value,
    email: email.current.value,
    number: number.current.value,
    gender: gender.current.value,
  });
  const [originalData,setOriginalData] = useState(dataSource);
  const handleSearch = (sendSearch:any,reset=null)=>{
    var x = originalData.filter((key:any)=>key.first_name.includes(search.first_name) &&
      key.last_name.includes(search.last_name) &&
      key.email.includes(search.email) &&
      key.number.includes(search.number) &&
      key.gender.includes(search.gender))
      
    if(reset){
      const {first_name,last_name,email,number,gender} = sendSearch
      x = dataSource.filter((key:any)=>key.first_name.includes(first_name) &&
      key.last_name.includes(last_name) &&
      key.email.includes(email) &&
      key.number.includes(number) &&
      key.gender.includes(gender))
    }
    setOriginalData(x)
  }
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow key={'search'} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row"></TableCell>
          <TableCell component="th" scope="row"><Input textInput={search.first_name
          } textChange={(e)=>{
                const clearFilters = {
                  first_name:e.target.value,
                  last_name: lname.current.value,
                  email: email.current.value,
                  number: number.current.value,
                  gender: gender.current.value,
                }
                setSearch(clearFilters)
          }} textRef={fname} fullWidth={true} fieldColor='filled' inputProps={<IcnButton view={clearbtn} changeDisplay={()=>{
            const clearFilters = {
              first_name: '',
              last_name: lname.current.value,
              email: email.current.value,
              number: number.current.value,
              gender: gender.current.value,
            }
            setSearch(clearFilters)
            handleSearch(clearFilters,'reset')
          }} color='error'/>}/></TableCell>
          <TableCell component="th" scope="row"><Input textChange={(e)=>{
                const clearFilters = {
                  first_name: fname.current.value,
                  last_name: e.target.value,
                  email: email.current.value,
                  number: number.current.value,
                  gender: gender.current.value,
                }
                setSearch(clearFilters)           
          }} textInput={search.last_name} textRef={lname} fullWidth={true} fieldColor='filled' inputProps={<IcnButton view={clearbtn} changeDisplay={()=>{
            const clearFilters = {
              first_name: fname.current.value,
              last_name: '',
              email: email.current.value,
              number: number.current.value,
              gender: gender.current.value,
            }
            setSearch(clearFilters) 
            handleSearch(clearFilters,'reset')
          }} color='error'/>}/></TableCell>
          <TableCell component="th" scope="row"><Input textChange={(e)=>{
              const clearFilters = {
                first_name: fname.current.value,
                last_name: lname.current.value,
                email: e.target.value,
                number: number.current.value,
                gender: gender.current.value,
              }
              setSearch(clearFilters)
          }} textInput={search.email} textRef={email} fullWidth={true} fieldColor='filled' inputProps={<IcnButton view={clearbtn} changeDisplay={(e)=>{
          const clearFilters = {
            first_name: fname.current.value,
            last_name: lname.current.value,
            email: '',
            number: number.current.value,
            gender: gender.current.value,
          }
          setSearch(clearFilters)
          handleSearch(clearFilters,'reset')
          }} color='error'/>}/></TableCell>
          <TableCell component="th" scope="row"><Input textChange={(e)=>{
              const clearFilters = {
                first_name: fname.current.value,
                last_name: lname.current.value,
                email: email.current.value,
                number: e.target.value,
                gender: gender.current.value,
              }
              setSearch(clearFilters)
          }} textInput={search.number} textRef={number} fullWidth={true} fieldColor='filled' inputProps={<IcnButton view={clearbtn} changeDisplay={()=>{
            const clearFilters = {
              first_name: fname.current.value,
              last_name: lname.current.value,
              email: email.current.value,
              number: '',
              gender: gender.current.value,
            }
            setSearch(clearFilters)
            handleSearch(clearFilters,'reset')
          }} color='error'/>}/></TableCell>
          <TableCell component="th" scope="row"><Input textChange={(e)=>{
              const clearFilters = {
                first_name: fname.current.value,
                last_name: lname.current.value,
                email: email.current.value,
                number: number.current.value,
                gender: e.target.value,
              }
              setSearch(clearFilters)
          }} textInput={search.gender} textRef={gender} fullWidth={true} fieldColor='filled' inputProps={<IcnButton view={clearbtn} changeDisplay={()=>{
            const clearFilters = {
              first_name: fname.current.value,
              last_name: lname.current.value,
              email: email.current.value,
              number: number.current.value,
              gender: '',
            }
            setSearch(clearFilters)
            handleSearch(clearFilters,'reset')
          }} color='error'/>}/></TableCell>
          <TableCell component="th" scope="row"><ActionButton vlidateData={handleSearch} title={'Search'} colorface={"grey"} btnvarient={'contained'}/></TableCell>
        </TableRow>
          {originalData.map((row:any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Image
               loader={imageLoader}
               unoptimized
               src={row?.photo}
               alt={row.first_name+ ' ' +row.last_name}
               width="50"
               height="50"
              />
              </TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>
              <Card spacing="0" direction="row" justifyContent="flex-start" alignItems="center">
                <ActionButton title={'Edit'} colorface={"grey"} src={`/employee/edit/${row.id}`} btnvarient={'contained'}/>
                <AlertDialog view={deletebtn} color='error' content={'Are you sure you want to DELETE?'} canselTitle='Cansel' okTitle='Ok' actionapi={`/employee/delete/${row.id}`}/>                
              </Card>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}