import React from 'react';
import {Text, TouchableOpacity, ScrollView, View} from 'react-native';
import Picker from '../../components/PickerSelect';
import Input from '../../components/InputClean';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useForm} from 'goform';

const StepOne: React.FC = () => {
  const {getData, proviousPage} = useForm();

  function handleSubmit(): void {
    const data = getData();

    console.warn(data);
  }

  const state = {
    label: 'What is your state?',
    value: null,
    color: '#999',
  };

  const city = {
    label: 'What is your city?',
    value: null,
    color: '#999',
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flexGrow: 1, paddingBottom: 100}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#fff', marginTop: 30}}>
          Simple inputs date picker
        </Text>
        <Input
          type="date-picker"
          name="birthday"
          placeholder="What is your birthday?"
          placeholderTextColor="#878787"
          autoCapitalize="sentences"
        />

        <Text style={{color: '#fff', marginTop: 30}}>
          Simple inputs picker select
        </Text>
        <Picker
          name="city"
          placeholder={state}
          items={[
            {label: 'Ferraz de Vasconcelos', value: 'ferraz de vasconcelos'},
            {label: 'Suzano', value: 'suzano'},
          ]}
          Icon={() => {
            return <Ionicons name="chevron-down" size={30} color="gray" />;
          }}
        />

        <Picker
          name="state"
          placeholder={city}
          items={[
            {label: 'Bahia', value: 'bahia'},
            {label: 'São Paulo', value: 'sao paulo'},
          ]}
          Icon={() => {
            return <Ionicons name="chevron-down" size={30} color="gray" />;
          }}
        />

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
            onPress={handleSubmit}
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
            <Text style={{color: '#fff', fontSize: 17}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default StepOne;
