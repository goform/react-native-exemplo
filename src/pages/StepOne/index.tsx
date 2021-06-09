import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import Checkbox from '../../components/CheckBox';
import CheckBoxOne from '../../components/CheckBoxOne';

import {useForm} from 'goform';

const StepOne: React.FC = () => {
  const {nextPage} = useForm();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flexGrow: 1, paddingBottom: 100}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#fff'}}>Select multiple checkbox</Text>
        <Checkbox
          style={{
            width: 366,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          name="goals"
          options={[
            {value: 'cheers', label: 'improve health'},
            {value: 'strength', label: 'Gain more strength'},
          ]}
        />

        <Text style={{color: '#fff', marginTop: 30}}>Select one checkbox</Text>
        <CheckBoxOne
          style={{
            width: 366,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          name="sexo"
          options={[
            {value: 'men', label: 'Men'},
            {value: 'women', label: 'Women'},
          ]}
        />

        <TouchableOpacity
          onPress={nextPage}
          style={{
            top: 70,
            width: 200,
            height: 50,
            backgroundColor: '#987',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: '#fff', fontSize: 17}}>Next page</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default StepOne;
