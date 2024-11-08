// src/components/CarCard/CarCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

interface CarCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
}

const CarCard: React.FC<CarCardProps> = ({ image, title, price, location }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="200"
        image={image}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography color="text.secondary">Цена: {price} ₽</Typography>
        <Typography color="text.secondary">Локация: {location}</Typography>
      </CardContent>
    </Card>
  );
};

export default CarCard;
