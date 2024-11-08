import React, { useState } from 'react';
import { Input, Button } from '@mui/material';  
import SearchIcon from '@mui/icons-material/Search';
import { headerLinks } from './constants/headerConstants'; 

const Header: React.FC = ({ logoUrl, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex items-center justify-between">
      {/* Логотип */}
      <div className="flex-shrink-0">
        <img src={logoUrl} alt="Auto Logo" className="h-10" />
      </div>

      {/* Навигация */}
      <nav className="flex-1">
        <ul className="flex space-x-6 justify-center">
          {headerLinks.map((link) => (
            <li key={link.name}>
              <a href={link.url} className="hover:text-gray-400 transition duration-200">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Поиск */}
      <div className="flex items-center space-x-2 border border-white rounded-full p-2 bg-white text-gray-800">
        <Input
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Поиск автомобилей"
          disableUnderline
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSearch(searchQuery)}
          startIcon={<SearchIcon />}
        >
          Найти
        </Button>
      </div>
    </header>
  );
};

export default Header;
