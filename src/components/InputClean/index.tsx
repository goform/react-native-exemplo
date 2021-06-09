import React, {
  useState,
  useCallback,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {Keyboard, TextInputProps, View} from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';

import {useUtil} from 'goform';

import {Container, TextInput} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  type?: 'date-picker' | 'text-input';
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {name, type, ...rest},
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const {error, setValue, defaultValue, value, clearFieldError} = useUtil(name);

  const [isFocused, setIsFocused] = useState(false);

  const hideDatePicker = (): void => {
    setIsFocused(false);
  };

  const handleConfirm = (date: Date): void => {
    const fullDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    setValue(fullDate);
    hideDatePicker();
    Keyboard.dismiss();
  };

  const handleInputFocus = useCallback(() => {
    if (error) {
      clearFieldError();
    }

    setIsFocused(true);
  }, [error, clearFieldError]);

  const handleInputBlur = useCallback(() => {
    if (error) {
      clearFieldError();
    }

    setIsFocused(false);
  }, [error, clearFieldError]);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <>
      {type === 'date-picker' && (
        <View>
          <DateTimePicker
            headerTextIOS="Escolha sua data"
            isVisible={isFocused}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      )}

      <Container isFocused={isFocused} isErrored={!!error}>
        <TextInput
          ref={inputElementRef}
          keyboardAppearance="dark"
          placeholderTextColor="#666360"
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={value}
          onChangeText={setValue}
          {...rest}
        />
      </Container>
    </>
  );
};

export default forwardRef(Input);
