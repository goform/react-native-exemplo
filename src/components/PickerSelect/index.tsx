import React, {useCallback, useRef} from 'react';
import Picker, {PickerSelectProps} from 'react-native-picker-select';

import {useUtil} from 'goform';

import {PickerSelectStyles, Container} from './styles';

interface InputProps extends Omit<PickerSelectProps, 'onValueChange'> {
  name: string;
}

const PickerSelect: React.FC<InputProps> = ({name, items, ...rest}) => {
  const pickerRef = useRef(null);
  const {setValue, value, error, defaultValue, clearFieldError} = useUtil(name);

  const handleSelect = (data: any): void => {
    setValue(data);
  };

  const handleClick = useCallback(() => {
    if (error) {
      clearFieldError();
    }
  }, [error, clearFieldError]);

  return (
    <Container isError={!!error}>
      <Picker
        ref={pickerRef}
        value={defaultValue || value}
        onOpen={handleClick}
        onValueChange={handleSelect}
        useNativeAndroidPickerStyle={false}
        items={items}
        style={PickerSelectStyles}
        {...rest}
      />
    </Container>
  );
};

export default PickerSelect;
