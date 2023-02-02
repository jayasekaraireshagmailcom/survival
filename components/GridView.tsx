import React,{useState} from 'react';
import {Grid,Paper,List,ListItem,ListItemButton,ListItemText,Pagination,styled} from '@mui/material';
import Image from "next/image";
import imageLoader from "../imageLoader";
import IcnButton from './IconButton';
import usePagination from "../components/Pagination";
import AlertDialog from './DialogBox';
import { ViewState } from '../types';

export default function DisplayGrid(props:any) {
  const [spacing, setSpacing] = React.useState(1)
  const [deletebtn, setDeleteBtn] = useState<ViewState>({viewType: 'delete',});
  const [editbtn, setEditBtn] = useState<ViewState>({viewType: 'edit',});

  const {dataSource} = props
  const text ={fontSize:'10px',marginBottom:'-2em'}

  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(dataSource.length / PER_PAGE);
  const _DATA = usePagination(dataSource, PER_PAGE);

  const handleChange = (e:any, p:number) => {
    setPage(p);
    _DATA.jump(p);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'transparent',
    height:'10em',
  }));
  
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2} >
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {_DATA.currentData().map((value:any) => (
            <Grid key={value.id} item >
              <Paper
                sx={{
                  height: 200,
                  width: 200,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  boxShadow: 2,
                  
                }}                
              >
              <Image
               loader={imageLoader}
               unoptimized
               src={value.photo}
               alt={value.first_name+ ' ' +value.last_name}
               width="200"
               height="200"
              />
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={value.first_name + ' ' + value.last_name} primaryTypographyProps={{ style: text }}/>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                     <ListItemText primary={value.email} primaryTypographyProps={{ style: text }}/>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                     <ListItemText primary={value.number} primaryTypographyProps={{ style: text }}/>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                   <ListItemButton>
                     <ListItemText primary={value.gender} primaryTypographyProps={{ style: text }}/>
                     <AlertDialog view={deletebtn} color='error' content={'Are you sure you want to DELETE?'} canselTitle='Cansel' okTitle='Ok' actionapi={`/employee/delete/${value.id}`}/>
                     <IcnButton view={editbtn} color='success' src={`/employee/edit/${value.id}`}/>
                   </ListItemButton>
                </ListItem> 
              </List>              
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
      
      <Grid container justifyContent="center" spacing={0}>
      <Grid item xs={12}><Item></Item></Grid>
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        color="primary"
      />
      </Grid>
      </Grid>

    </Grid>
  );
}