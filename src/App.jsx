import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Login from './Components/Login';

const App = () => {
  return (
    <>
      <Login />
      <Analytics />
    </>
  );
};

export default App;