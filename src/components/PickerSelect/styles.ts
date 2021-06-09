import styled, {css} from 'styled-components/native';
import {PickerStyle} from 'react-native-picker-select';
import {StyleSheet} from 'react-native';

interface IPickerProp {
  isError: boolean;
}

export const Container = styled.View<IPickerProp>`
  width: 350px;
  height: 55px;
  margin-bottom: 10px;
  border-radius: 4px;
  padding-horizontal: 10px;
  background-color: #575757;

  border: 2px solid #575757;

  ${props =>
    props.isError &&
    css`
      border-color: #c53030;
    `}
`;

export const PickerSelectStyles = StyleSheet.create<PickerStyle>({
  inputAndroid: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'RobotoSlab-Regular',
  },

  inputIOS: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'RobotoSlab-Regular',
  },

  placeholder: {
    color: '#999',
  },

  iconContainer: {
    top: 10,
  },
});
