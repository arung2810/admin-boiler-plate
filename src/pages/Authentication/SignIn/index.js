import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Container } from '@mui/material';

function SignIn() {
    const navigate = useNavigate();
  return (
    <>
      <Container maxWidth={false}>
        <h1>Sign In</h1>
        <Button className='btn primary-btn' fullWidth onClick={() => navigate('/dashboard')}>
          Sign Up
        </Button>
      </Container>
    </>
  );
}

export default SignIn;
