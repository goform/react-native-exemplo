import React, {useRef} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Form, IFormFunctions} from 'goform';

import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import Final from './pages/final';

const App: React.FC = () => {
  const refForm = useRef<IFormFunctions>(null);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <Form
        ref={refForm}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        onSubmit={data => console.log(data)}>
        <StepOne />
        <StepTwo />
        <Final />
      </Form>
    </KeyboardAvoidingView>
  );
};

export default App;
