import Home from '../src/pages/home/Home';

import './app.scss';
import MoreInfoProvider from './context/MoreInfoProvider';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
  return (
    <MoreInfoProvider>
      <Login />
    </MoreInfoProvider>
  );
}

export default App;
