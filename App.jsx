/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from "react-redux";

import StackNavigator from './src/navigation/StackNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import store, { persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      
      <StackNavigator />
    
    </GestureHandlerRootView>
    </PersistGate>
    </Provider>
  );
};

export default App;
