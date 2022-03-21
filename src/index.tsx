import ReactDOM from 'react-dom';
import App from './containers/App';
import { PokemonProvider } from './context/pokemon';
import './styles/index.scss';

ReactDOM.render(
  <PokemonProvider>
    <App />
  </PokemonProvider>,
  document.getElementById('root')
);
