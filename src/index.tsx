import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
// import { PokemonProvider } from './context/pokemon';
import store from './store';
import './styles/index.scss';

ReactDOM.render(
  // <PokemonProvider>
  <Provider store={store}>
    <App />
  </Provider>,
  // </PokemonProvider>,
  document.getElementById('root')
);
