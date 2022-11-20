import React from 'react';
import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import useFormState from '../Hooks/useFormState';
import { useState } from 'react';

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
  const [name, updateName, resetName] = useFormState('');
  const [email, updateEmail, resetEmail] = useFormState('');
  const [message, updateMessage, resetMessage] = useFormState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [messageErrorMessage, setMessageErrorMessage] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    };
    const response = await fetch(
      'http://localhost:7071/api/HttpTriggerSendEmail',
      requestOptions
    );
    const data = await response.status;
    if (data === 200) {
      resetName();
      resetMessage();
      resetEmail();
      alert('Thank you for submitting, we will contact you asap!');
    } else {
      alert(
        'Something went wrong with sending your message, please try again!'
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    setNameErrorMessage('');
    setEmailErrorMessage('');
    setMessageErrorMessage('');

    if (
      name === '' ||
      email === '' ||
      message === '' ||
      !mailFormat.test(email) ||
      message.length < 20
    ) {
      if (name === '') {
        setNameError(true);
        setNameErrorMessage('Please enter value');
      }
      if (email === '' || !mailFormat.test(email)) {
        setEmailError(true);
        if (!email === '') {
          setEmailErrorMessage('You have entered an invalid email');
        } else {
          setEmailErrorMessage('Please enter value');
        }
      }
      if (message === '' || message.length < 20) {
        setMessageError(true);
        if (!message === '') {
          setMessageErrorMessage(
            'Incorrect message, needs to be atleast 20 char!'
          );
        } else {
          setMessageErrorMessage('Please enter longer message');
        }
      }
    } else {
      submitForm(e);
      console.log('submitted');
    }
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
        <CssTextField
          required
          label='Namn'
          variant='standard'
          value={name}
          onChange={updateName}
          error={nameError}
          helperText={nameError == true ? nameErrorMessage : ''}
        />
        <CssTextField
          required
          type='email'
          label='Email'
          variant='standard'
          value={email}
          onChange={updateEmail}
          error={emailError}
          helperText={emailError == true ? emailErrorMessage : ''}
        />

        <CssTextField
          required
          id='standard-multiline-static'
          multiline
          rows={2}
          label='Meddelande'
          variant='standard'
          type='text'
          value={message}
          onChange={updateMessage}
          error={messageError}
          helperText={messageError == true ? messageErrorMessage : ''}
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
