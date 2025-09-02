import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Container, IconButton, InputAdornment, Paper, Stack, Typography } from '@mui/material';
import { RiEyeOffLine } from 'react-icons/ri';
import CustomTextField from '../../../components/common/CustomTextField';

function SignIn() {
    const navigate = useNavigate();
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", "light");
    }, []);
  return (
    <>
      <Container maxWidth={false}>
        <Paper elevation={0} className='sign-in-card'>
          <Stack gap={3}>
              <Typography variant="h6" className="page-title text-center">Sign In</Typography>
                <CustomTextField label='Email Id' placeholder='Enter Email Id' />
                <CustomTextField
                  label='Password'
                  id='icons-adornment-password'
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                             <RiEyeOffLine />
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }}
                  fullWidth
                />
              <Button className='btn primary-btn' fullWidth onClick={() => navigate('/dashboard')}>
                Sign Up
              </Button>
          </Stack>

        </Paper>
      </Container>
    </>
  );
}

export default SignIn;
