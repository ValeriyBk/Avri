import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const LoginButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login data submitted:', loginData);
    // Add backend authentication logic here
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        Вход
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Вход</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              type="email"
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Пароль"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              type="password"
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Закрыть
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Войти
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginButton;
