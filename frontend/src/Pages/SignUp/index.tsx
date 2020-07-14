import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { FormHandles } from '@unform/core';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

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

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const handleSubmit = useCallback(async (data: SignUpData) => {
    try {
      formRef.current?.setErrors({});
      const schema = yup.object().shape({
        name: yup.string().required('Required').min(6, 'Too short'),
        email: yup.string().required('Required').email('Invalid E-mail'),
        password: yup.string().min(2, 'Too short'),
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
        <GreetingsContainer>
          <h1>Welcome back!</h1>
          <p>Click below to go to the login page</p>
          <Button
            color="#fff"
            background="#51a59c"
            outline
            onClick={() => history.push('/')}
          >
            Login
          </Button>
        </GreetingsContainer>
        <FormContainer>
          <h1>Create an account!</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Name" icon={FiUser} />
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
            <Button type="submit" color="#fff" background="#51a59c" outline>
              Sign up
            </Button>
          </Form>
        </FormContainer>
      </Box>
    </Container>
  );
};

export default SignUp;
