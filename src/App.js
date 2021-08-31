import Home from '../src/pages/home/Home';

import './app.scss';
import MoreInfoProvider from './context/MoreInfoProvider';

function App() {
  return (
    <MoreInfoProvider>
      <Home />
    </MoreInfoProvider>
  );
}

export default App;
