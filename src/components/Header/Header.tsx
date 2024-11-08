import React, { useState } from 'react';
import { AppBar, Toolbar, Button, InputBase, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { headerLinks } from './constants/headerConstants';
import Link from 'next/link';
import LoginButton from '../LoginForm/LoginForm';

const Header: React.FC<{ logoUrl: string, onSearch: (query: string) => void }> = ({ logoUrl, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'gray', color: 'white' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ flexShrink: 0 }}>
          <img src={logoUrl} alt="Auto Logo" style={{ height: '40px' }} />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
          {headerLinks.map((link) => (
            <Button key={link.name} sx={{ color: 'white', marginLeft: 2 }} href={link.url}>
              {link.name}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '20px', padding: '5px' }}>
          <InputBase
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Поиск автомобилей"
            sx={{ flex: 1, paddingLeft: 1 }}
          />
          <IconButton onClick={() => onSearch(searchQuery)} sx={{ padding: '10px' }}>
            <SearchIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 2 }}>
          <LoginButton />
          <Link href="/registration" passHref>
            <Button variant="contained" color="secondary">
              Регистрация
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
