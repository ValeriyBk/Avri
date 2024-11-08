import React, { useState } from 'react';
import { Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Box } from '@mui/material';

const RegistrationForm: React.FC = () => {
  const [userType, setUserType] = useState<'user' | 'company'>('user');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    companyName: '',
    companyEmail: '',
    companyLicense: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUserTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(e.target.value as 'user' | 'company');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Add registration logic here
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
      <h2>{userType === 'user' ? 'Регистрация пользователя' : 'Регистрация компании'}</h2>
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" fullWidth sx={{ marginBottom: 2 }}>
          <FormLabel component="legend">Тип пользователя</FormLabel>
          <RadioGroup row value={userType} onChange={handleUserTypeChange}>
            <FormControlLabel value="user" control={<Radio />} label="Обычный пользователь" />
            <FormControlLabel value="company" control={<Radio />} label="Компания" />
          </RadioGroup>
        </FormControl>

        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Пароль"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />

        {userType === 'user' && (
          <TextField
            label="Имя"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
        )}

        {userType === 'company' && (
          <>
            <TextField
              label="Название компании"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Email компании"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              type="email"
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Лицензия / ИНН"
              name="companyLicense"
              value={formData.companyLicense}
              onChange={handleChange}
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />
          </>
        )}

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Box>
  );
};

export default RegistrationForm;
