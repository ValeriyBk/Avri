import React, { useState, useEffect } from 'react';
import { useCars } from '@/utils/carApi';
import CarCard from '@/components/CarCard/CarCard';
import FilterSidebar from '@/components/FilterSidebar/FilterSidebar';
import { Container, Grid, Typography, Box, CircularProgress, Alert } from '@mui/material';
import { CarFilters } from './types/filters';

const HomePage: React.FC = () => {
  const [filters, setFilters] = useState<CarFilters>({
    brand: '',
    model: '',
    priceRange: [0, 10000000],
    location: '',
  });

  const { data, isLoading, isError } = useCars(filters);

  useEffect(() => {
    console.log(filters); 
  }, [filters]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Alert severity="error">Произошла ошибка при загрузке данных</Alert>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ display: 'flex' }}>
      <FilterSidebar setFilters={setFilters} filters={filters} />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Автомобили
        </Typography>
        <Grid container spacing={3}>
          {data && data.length > 0 ? (
            data.map((car) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={car.id}>
                <CarCard
                  image={car.image}
                  title={car.title}
                  price={car.price}
                  location={car.location}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h6" align="center" color="textSecondary">
                Автомобили не найдены по выбранным фильтрам.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
