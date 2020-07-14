import React, { useRef, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as yup from 'yup';
import { FormHandles } from '@unform/core';
import { FiMail, FiLock } from 'react-icons/fi';

import {
  Container,
  Box,
  GreetingsContainer,
  FormContainer,
  Form,
} from './styles';

import getValidationErrors from '../../utils/getValidationErrors';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

interface SignInData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const handleSubmit = useCallback(async (data: SignInData) => {
    try {
      formRef.current?.setErrors({});
      const schema = yup.object().shape({
        email: yup.string().required('Required').email('Invalid E-mail'),
        password: yup.string().required('Required').min(2, 'Too short'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Box>
        <FormContainer>
          <h1>Sign in to developer</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              placeholder="E-mail"
              type="email"
              icon={FiMail}
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              icon={FiLock}
            />
            <Link to="/forgot">Forget password?</Link>
            <Button type="submit" color="#fff" background="#51a59c" outline>
              Sign up
            </Button>
          </Form>
        </FormContainer>
        <GreetingsContainer>
          <h1>Hello, friend!</h1>
          <p>Enter your password details and start a journey with us!</p>
          <Button
            color="#fff"
            background="#51a59c"
            outline
            onClick={() => history.push('/signup')}
          >
            Sign up
          </Button>
        </GreetingsContainer>
      </Box>
    </Container>
  );
};

export default SignIn;
