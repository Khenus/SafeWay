import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStore} from 'redux';

import {storeHandler} from './src/Commons/Constants';
import AppStack from './src/AppStack';

const store = createStore(storeHandler);

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppStack />
      </Provider>
    </SafeAreaProvider>
  );
}
