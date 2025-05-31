import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './src/routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
