
import { Provider } from 'react-redux'
import store from './store'
import Boy from './components/Boy'
import Girl from './components/Girl'

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  
  return (
    <Provider store={store}>
      <Boy />
      <Girl />
    </Provider>
  );
};
export default App;
