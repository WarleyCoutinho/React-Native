import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CompPadrao, {Comp1, Comp2} from './components/Multi';
import Primeiro from './components/Primeiro';

export default () => (
  <SafeAreaView>
    <Primeiro />
    <CompPadrao />
    <Comp1 />
    <Comp2 />
  </SafeAreaView>
);

// export default App;

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
