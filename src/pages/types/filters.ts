export interface CarFilters {
  brand: string | undefined;
  model: string | undefined;
  priceRange: [number, number];
  location: string | undefined;
}
