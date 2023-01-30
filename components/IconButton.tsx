import React,{useState,useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ViewListIcon from '@mui/icons-material/ViewList';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from '@mui/material/Link';
export default function IcnButton(props:any) {
     
  const {view,changeDisplay,color,src} = props
  const [statues,setStatues] = useState(<ViewListIcon/>);
  useEffect(()=>{
    switch(view.viewType){
      case 'list':
        setStatues(<ViewComfyIcon/>);
          break;
      case 'grid':
        setStatues(<ViewListIcon/>);
          break;
      case 'delete':
        setStatues(<DeleteIcon/>);
          break;
      case 'edit':
        setStatues(<EditIcon/>);
          break;
      default:
        setStatues(<EditIcon/>)
    }  
  },[view])
  return (
    <Link href={src} underline="none" >     
      <IconButton color={color} aria-label="displayView" component="label" onClick={changeDisplay}>
          {statues}
      </IconButton>
    </Link>
  );
}