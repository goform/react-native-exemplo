import React, {useCallback, useEffect, useState} from 'react';

import RNCheckbox, {
  CheckBoxProps as RNCheckboxProps,
} from '@react-native-community/checkbox';
import {useUtil} from 'goform';
import {Text, View, ViewStyle} from 'react-native';

export interface CheckboxOption {
  value: string;
  label?: string;
  style?: ViewStyle;
}

interface CheckboxProps extends RNCheckboxProps {
  name: string;
  options: CheckboxOption[];
}

const Checkbox: React.FC<CheckboxProps> = ({name, options, style, ...rest}) => {
  const {value = [], setValue, defaultValue = []} = useUtil<string[]>(name);

  const [check, setCheck] = useState<string[]>(defaultValue);

  useEffect(() => {
    setValue(check);
  }, [check, setValue]);

  const handleToggleOption = useCallback(
    (isChecked: boolean, optionValue: string) => {
      setCheck(state => {
        if (isChecked) {
          return [...state, optionValue];
        }

        return state.filter(p => p !== optionValue);
      });
    },
    [],
  );

  return (
    <>
      {options.map((option, index) => (
        <View key={index} style={[{width: '100%'}, style]}>
          <RNCheckbox
            testID={`checkbox-${index}`}
            value={value.includes(option.value)}
            onValueChange={isCheck => handleToggleOption(isCheck, option.value)}
            {...rest}
          />
          <Text style={{color: '#fff', fontSize: 18}}>{option.label}</Text>
        </View>
      ))}
    </>
  );
};

export default Checkbox;
