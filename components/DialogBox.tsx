import * as React from 'react';
import ActionButton from './ActionButton'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IcnButton from './IconButton'

export default function AlertDialog(props:any) {
  const {view,color,content,mainTitle,canselTitle,okTitle} = props
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IcnButton view={view} color={color} changeDisplay={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{mainTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <ActionButton vlidateData={handleClose} title={canselTitle} />
          <ActionButton vlidateData={handleClose} autoFocus title={okTitle} />
        </DialogActions>
      </Dialog>
    </div>
  );
}