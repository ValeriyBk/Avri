import type { NextApiRequest, NextApiResponse } from 'next';

interface Car {
  id: string;
  title: string;
  image: string;
  price: string;
  location: string;
}

const cars: Car[] = [
  {
    id: '1',
    title: 'Toyota Camry 2020',
    image: 'https://via.placeholder.com/200',
    price: '1,500,000',
    location: 'Москва',
  },
  {
    id: '2',
    title: 'Honda Civic 2019',
    image: 'https://via.placeholder.com/200',
    price: '1,200,000',
    location: 'Санкт-Петербург',
  },
  {
    id: '3',
    title: 'BMW X5 2021',
    image: 'https://via.placeholder.com/200',
    price: '3,500,000',
    location: 'Екатеринбург',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Car[]>
) {
  const { brand, model, priceRange, location } = req.query;

  let filteredCars = cars;

  // Фильтрация по марке
  if (brand) {
    filteredCars = filteredCars.filter((car) => car.title.toLowerCase().includes((brand as string).toLowerCase()));
  }

  // Фильтрация по модели
  if (model) {
    filteredCars = filteredCars.filter((car) => car.title.toLowerCase().includes((model as string).toLowerCase()));
  }

  // Фильтрация по локации
  if (location) {
    filteredCars = filteredCars.filter((car) => car.location.toLowerCase().includes((location as string).toLowerCase()));
  }

  // Фильтрация по цене
  if (priceRange) {
    const [minPrice, maxPrice] = (priceRange as string).split(',').map(Number);
    filteredCars = filteredCars.filter((car) => {
      const price = parseInt(car.price.replace('₽', '').replace(',', ''));
      return price >= minPrice && price <= maxPrice;
    });
  }

  res.status(200).json(filteredCars);
}
