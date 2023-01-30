import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
     backgroundColor: "#4d4dff",
     ...theme.typography.body2,
     padding: theme.spacing(2),
     textAlign: 'left',
     color: "#fff",
     fontSize: '18px',
     fontWeight:'bold',
     borderRadius: '0 0',
   }));

export default function TopHeader(props:any) {
  const {title} = props
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Item>{title}</Item>
      </Grid>
    </Grid>);
}