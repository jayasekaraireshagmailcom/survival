import React,{useState} from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material';

import Image from "next/image";
import imageLoader from "../imageLoader";
import ActionButton from '../components/ActionButton'
import IcnButton from '../components/IconButton'
import { ViewState } from '../types';
import Card from '../components/Card'
import AlertDialog from '../components/DialogBox'

export default function DisplayTable(props:any) {
  const {dataSource} = props
  const [deletebtn, setDeleteBtn] = useState<ViewState>({viewType: 'delete',});
  const [search, setSearch] = useState('');
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
          {dataSource.map((row:any) => (
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
                <AlertDialog view={deletebtn} color='error' content={'Are you sure you want to DELETE?'} canselTitle='Cansel'okTitle='Ok' />                
              </Card>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}