import React from 'react';
import { useToasts } from 'react-toast-notifications';
import { auth } from '../configs/firebase';
import { Box, Button, Main, Form, FormField, Image } from 'grommet';

const SignUp = () => {
  const { addToast } = useToasts();

  const handleSubmit = data => {
    const { value } = data;
    if (value.password === value.passwordConfirmation) {
      auth.createUserWithEmailAndPassword(value.email, value.password).catch(err => {
        // handle errors
        console.log(err.code);
        addToast(err.message, {
          appearance: 'error',
          autoDismiss: true,
        });
      });
    } else {
      addToast('Passwords do not match', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  return (
    <Main justify="center" align="center" pad="large" fill>
      <Box
        width="medium"
        elevation="medium"
        round="small"
        animation="fadeIn"
        pad="small"
      >
        <Image
          fit="contain"
          src="/logo192.png"
        />
        <Form onSubmit={handleSubmit}>
          <FormField label="Email" name="email" required />
          <FormField label="Password" name="password" type="password" required />
          <FormField
            label="Password Confirmation"
            name="passwordConfirmation"
            type="password"
            required
          />
          <Box direction="row" justify="center" margin={{ top: 'medium', bottom: 'medium' }}>
            <Button type="submit" label="Sign Up" primary />
          </Box>
        </Form>
      </Box>
    </Main>
  );
};

export default SignUp;
