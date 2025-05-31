// src/components/InviteDialogBox.jsx
import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography
} from '@mui/material';

export default function InviteDialogBox({ open, onClose = () => {} }) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div style={{
        background: 'white', padding: 20, borderRadius: 8,
        minWidth: 300, textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
      <Box
        sx={{
          background: 'white',
          borderRadius: 2,
          boxShadow: 3,
          width: { xs: '90%', sm: '600px', md: '700px' },
          p: 3,
        }}
      >
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" fontWeight="bold">
            Send an invite to a new member
          </Typography>
          <Button onClick={onClose} variant="text" color="">
            <p>Go Back</p>
          </Button>
        </Box>

        {/* Invite Email Field */}
       
          <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
            <TextField
              type="email"
              placeholder="amanuelbeyene662@gmail.com"
              variant="outlined"
              fullWidth
              sx={{ borderRadius: 2 }}
            />
            <Button
              variant="contained"
              color="error"
              sx={{ height: '56px', minWidth: '160px' }}
              onClick={() => alert('Invite sent!')}
            >
              Send Invite
            </Button>
          </Box>
        

        {/* Members Heading */}
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          Members
        </Typography>

        {/* Share Link Field */}
       
          <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
            <TextField
              type="text"
              placeholder="https://sharelinkhereandthere.com/34565yy29"
              variant="outlined"
              fullWidth
              sx={{ borderRadius: 2 }}
            />
            <Button
              variant="contained"
              color="error"
              sx={{ height: '56px', minWidth: '160px' }}
              onClick={() => navigator.clipboard.writeText("https://sharelinkhereandthere.com/34565yy29")}
            >
              Copy Link
            </Button>
          </Box>
        
      </Box>
    </div>
    </div>
  );
}
