import React, {useCallback} from 'react';

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
  const {value = '', setValue} = useUtil<string>(name);

  const handleToggleOption = useCallback(
    (isChecked: boolean, optionValue: string) => {
      if (isChecked) {
        setValue(optionValue);
      }
    },
    [setValue],
  );

  return (
    <>
      {options.map((option, index) => (
        <View key={index} style={[{width: '100%'}, style]}>
          <RNCheckbox
            testID={`checkbox-${index}`}
            value={value === option.value}
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
