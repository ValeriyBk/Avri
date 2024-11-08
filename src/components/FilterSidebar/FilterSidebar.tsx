// src/components/FilterSidebar/FilterSidebar.tsx
import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Slider, Typography } from '@mui/material';
import debounce from 'lodash.debounce';
import { CarFilters } from '@/pages/types/filters';


interface FilterSidebarProps {
    setFilters: React.Dispatch<React.SetStateAction<CarFilters>>;
    filters: CarFilters; 
  }

  const FilterSidebar: React.FC<FilterSidebarProps> = ({ setFilters, filters }) => {
  const [localFilters, setLocalFilters] = useState<CarFilters>(filters);

  const debouncedSetFilters = debounce((filters: CarFilters) => {
    setFilters(filters);
  }, 500);

  useEffect(() => {
    setLocalFilters(filters); 
  }, [filters]);

  useEffect(() => {
    debouncedSetFilters(localFilters);
    return () => debouncedSetFilters.cancel();
  }, [localFilters]);

  return (
    <Box sx={{ width: 250, padding: 2 }}>
      <Typography variant="h6">Фильтры</Typography>
      <TextField
        label="Марка"
        value={localFilters.brand}
        onChange={(e) => setLocalFilters({ ...localFilters, brand: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Модель"
        value={localFilters.model}
        onChange={(e) => setLocalFilters({ ...localFilters, model: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Локация"
        value={localFilters.location}
        onChange={(e) => setLocalFilters({ ...localFilters, location: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Typography gutterBottom>Цена</Typography>
      <Slider
        value={localFilters.priceRange}
        onChange={(e, newValue) => setLocalFilters({ ...localFilters, priceRange: newValue as number[] })}
        valueLabelDisplay="auto"
        min={0}
        max={10000000}
        step={100000}
        valueLabelFormat={(value) => `₽${value}`}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 2 }}
        onClick={() => setFilters(localFilters)} // Применить фильтры
      >
        Применить
      </Button>
    </Box>
  );
};

export default FilterSidebar;
