import React from 'react';
import SignUp from './components/signup/SignUp'; // Assuming SignUp is also a TypeScript component

interface AppProps {
  // Add any props you expect to pass to the App component here
}

const App: React.FC<AppProps> = () => {
  return (
    <div className="app">
      <SignUp />
    </div>
  );
};

export default App;
