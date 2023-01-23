
import {Provider} from 'react-redux'
import store from './store'
import ComA from './pages/ComA'
import ComB from './pages/ComB'
import ComC from './pages/ComC'

type AppProps = {};

export const App: React.FC<AppProps> = () => {

  return (
    <Provider store={store}>
      <ComC></ComC>
      <ComB></ComB>
      <ComA></ComA>
    </Provider>
  );
};
export default App;
