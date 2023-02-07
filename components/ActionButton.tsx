import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Button, { ButtonProps } from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import ViewComfyIcon from '@mui/icons-material/ViewComfy';
// import ViewListIcon from '@mui/icons-material/ViewList';

import * as color from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

export default function ActionButton(props:any) {
  const {id,title,customStyles,colorface,src,vlidateData,btnvarient,autoFocus,size,disabled} = props

  const [btnColor,setBtnColor] = React.useState(colorface)
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(color.purple[500]),
    backgroundColor: '#fff',
    borderColor:color.purple[500],
    '&:hover': {
      backgroundColor: '#fff',
      color: color.purple[700],
    },
  }));

  return (
      <ColorButton id={id} disabled={disabled} size={size} autoFocus onClick={vlidateData} variant={btnvarient} sx={customStyles}><Link href={src} underline="none" >{title}</Link></ColorButton>
  );
}