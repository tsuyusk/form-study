import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container, ErrorMessage } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <>
      <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        {Icon && <Icon size={20} />}
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </Container>
      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
};

export default Input;
