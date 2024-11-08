import axios from 'axios';
import { useQuery } from 'react-query';

interface CarFilters {
  brand: string;
  model: string;
  priceRange: [number, number];
  location: string;
}

const fetchCars = async (filters: CarFilters) => {
    const response = await axios.get('/api/cars', {
      params: {
        brand: filters.brand,
        model: filters.model,
        location: filters.location,
        priceRange: filters.priceRange,
      },
    });
    return response.data;
  };
  

export const useCars = (filters: CarFilters) => {
  return useQuery(['cars', filters], () => fetchCars(filters));
};
