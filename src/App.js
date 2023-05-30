import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { Router } from './components/router/router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
