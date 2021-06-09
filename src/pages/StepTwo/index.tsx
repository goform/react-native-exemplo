import React, {useRef} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Input from '../../components/InputClean';
import {Group} from 'goform';

import {useForm} from 'goform';

const StepOne: React.FC = () => {
  const {nextPage, proviousPage} = useForm();
  const cityRef = useRef<TextInput>(null);
  const stateRef = useRef<TextInput>(null);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flexGrow: 1, paddingBottom: 100}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#fff', marginTop: 30}}>Simple inputs</Text>
        <Input
          name="name"
          placeholder="What is your name?"
          placeholderTextColor="#878787"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => {
            cityRef.current?.focus();
          }}
        />

        <Text style={{color: '#fff', marginTop: 30}}>Address book</Text>

        <Group groupName="address[0]">
          <Input
            ref={cityRef}
            name="city"
            placeholder="What is your city?"
            placeholderTextColor="#878787"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => {
              stateRef.current?.focus();
            }}
          />

          <Input
            ref={stateRef}
            name="state"
            placeholder="What is your state?"
            placeholderTextColor="#878787"
            autoCorrect={false}
            returnKeyType="send"
          />
        </Group>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={proviousPage}
            style={{
              top: 70,
              width: 200,
              height: 50,
              backgroundColor: '#843',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopStartRadius: 5,
              borderBottomStartRadius: 5,
            }}>
            <Text style={{color: '#fff', fontSize: 17}}>Previous page</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={nextPage}
            style={{
              top: 70,
              width: 200,
              height: 50,
              backgroundColor: '#987',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopEndRadius: 5,
              borderBottomEndRadius: 5,
            }}>
            <Text style={{color: '#fff', fontSize: 17}}>Next page</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default StepOne;
