export default function handler(req, res) {
    res.status(200).json([
      {
        id: 1,
        image: '/images/car1.jpg',
        title: 'Audi Q7 2020',
        price: '2,500,000 ₽',
        location: 'Москва, Россия',
      },
      {
        id: 2,
        image: '/images/car2.jpg',
        title: 'BMW X5 2019',
        price: '3,200,000 ₽',
        location: 'Санкт-Петербург, Россия',
      },
      {
        id: 3,
        image: '/images/car3.jpg',
        title: 'Mercedes-Benz GLC 2021',
        price: '3,500,000 ₽',
        location: 'Казань, Россия',
      },
    ]);
  }
  