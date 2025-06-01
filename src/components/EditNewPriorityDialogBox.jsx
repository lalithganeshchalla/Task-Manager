// src/components/InviteDialogBox.jsx
import React from 'react';
import { Box ,
  Button,
  Card,
  TextField,
 } from '@mui/material';

export default function EditNewPriorityDialogBox({ open, onClose }) {
  if (!open) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white', padding: 20, borderRadius: 8,
        minWidth: 300, textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
        <Box
  display='flex'
  flexDirection='row'
  justifyContent='space-between'
  alignItems="center"
  sx={{
    width: '700px',
    height: 'auto',
    paddingBottom: 0,
    marginBottom: 0,
  }}
>
  <h2 style={{ margin: 0 }}>Edit New Priority</h2>
  <Button sx={{ mt: 0 }} onClick={onClose}>Go Back</Button>
</Box>

<Card  sx={{ mt: 0, pt: 0 }}>
  <Box display='flex' flexDirection='column' sx={{ padding: '10px', marginTop: 0 ,borderRadius: 3 }}>
    <TextField
      type="text"
      placeholder='Task Name'
      style={{
        width: '97%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '10px',
        marginRight:'10px',
      }}
    />
    <TextField
      type="date"
      style={{
        width: '97%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '10px',
        marginRight:'10px',
      }}
    />
  </Box>
  {/* <Box display='flex' flexDirection='column' sx={{ padding: '10px', marginTop: 0 ,borderRadius: 3 }}>
      
      
  </Box> */}
 <Box
  display="flex"
  flexDirection="row"
  alignItems="center"
  sx={{ p: 1, borderRadius: 3, gap: 2 ,pl: 2, pr: 2}}
>
  <TextField
  fullWidth
    type="url"
    placeholder="https://sharelinkhereandthere.com/34565yy29"
    sx={{
      "& .MuiInputBase-root": {
        height: '56px',
        borderRadius: 2,
      },
    }}
  />

  <Button
    variant="contained"
    color="error"
    sx={{ height: '56px', minWidth: '160px' }}
    onClick={() => alert('Link sent!')}
  >
    Send Link
  </Button>
</Box>


</Card>
</div>
    </div>
  );
}
