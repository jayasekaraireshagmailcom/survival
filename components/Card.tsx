import * as React from 'react';
import Stack from '@mui/material/Stack';

export default function Card(props:any) {
  const {spacing,direction,justifyContent,alignItems,children,customStyles} = props
  return (
    <Stack spacing={spacing} direction={direction} justifyContent={justifyContent} alignItems={alignItems} sx={customStyles}>
       {children}
    </Stack>);
}