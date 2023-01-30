import React,{useState,useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ViewListIcon from '@mui/icons-material/ViewList';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
export default function IcnButton(props:any) {
     
  const {view,changeDisplay,color} = props
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
      <IconButton color={color} aria-label="displayView" component="label" onClick={changeDisplay}>
          {statues}
      </IconButton>
  );
}