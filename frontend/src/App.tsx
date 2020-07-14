import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/Global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
