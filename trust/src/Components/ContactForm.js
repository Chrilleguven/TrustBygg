import React from 'react';
import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(yellow[500]),
  backgroundColor: yellow[500],
  '&:hover': {
    backgroundColor: yellow[700],
  },
}));

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'yellow',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'yellow',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'yellow',
    },
  },
});

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      style={{
        width: '100%',
        backgroundColor: 'rgba(112, 112, 112, 0.45)',
        padding: '10%',
      }}
      //noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <CssTextField required label='Namn' variant='standard' />
        <CssTextField required type='email' label='Email' variant='standard' />

        <CssTextField
          required
          id='standard-multiline-static'
          multiline
          rows={2}
          label='Meddelande'
          variant='standard'
          type='text'
        />
        <br />
        <ColorButton variant='contained' type='submit'>
          SKICKA
        </ColorButton>
      </div>
    </form>
  );
};

export default ContactForm;
