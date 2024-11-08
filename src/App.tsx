import React from 'react';
import Header from './components/Header/Header';

const App: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Поиск:', query);  
  };

  return (
    <div>
      <Header logoUrl="/logo.png" onSearch={handleSearch} />
    </div>
  );
};

export default App;
