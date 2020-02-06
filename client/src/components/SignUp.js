import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { auth } from '../configs/firebase';
import {
  Box,
  Button,
  CheckBox,
  Grommet,
  Form,
  FormField,
  RadioButtonGroup,
  RangeInput,
  Select,
  TextArea,
} from 'grommet';
import { grommet } from 'grommet/themes';

const SignUp = () => {
  const { addToast } = useToasts();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password).catch(err => {
      // handle errors
      console.log(err.code);
      addToast(err.message, {
        appearance: 'error',
        autoDismiss: true,
      });
    });
  };

  return (
    <div>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            onReset={event => console.log(event)}
            onSubmit={({ value, touched }) => console.log('Submit', value, touched)}
          >
            <FormField label="Email" name="email" required />
            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
              <Button label="Cancel" />
              <Button type="reset" label="Reset" />
              <Button type="submit" label="Update" primary />
            </Box>
          </Form>
        </Box>
      </Box>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SignUp;
