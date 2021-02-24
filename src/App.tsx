import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MainNavigaiton} from './navigations';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigaiton />
    </NavigationContainer>
  );
};

export default App;
