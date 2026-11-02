const plants = [
  {
    id: 'succ-1',
    name: 'Jade Plant',
    price: 12.99,
    category: 'Succulents',
    image: 'https://placehold.co/200x200/png?text=Jade+Plant',
  },
  {
    id: 'succ-2',
    name: 'Aloe Vera',
    price: 9.99,
    category: 'Succulents',
    image: 'https://placehold.co/200x200/png?text=Aloe+Vera',
  },
  {
    id: 'succ-3',
    name: 'Echeveria',
    price: 11.49,
    category: 'Succulents',
    image: 'https://placehold.co/200x200/png?text=Echeveria',
  },
  {
    id: 'succ-4',
    name: 'Haworthia',
    price: 10.99,
    category: 'Succulents',
    image: 'https://placehold.co/200x200/png?text=Haworthia',
  },
  {
    id: 'succ-5',
    name: 'String of Pearls',
    price: 14.99,
    category: 'Succulents',
    image: 'https://placehold.co/200x200/png?text=String+of+Pearls',
  },
  {
    id: 'succ-6',
    name: 'Zebra Plant',
    price: 13.49,
    category: 'Succulents',
    image: 'https://placehold.co/200x200/png?text=Zebra+Plant',
  },
  {
    id: 'trop-1',
    name: 'Monstera',
    price: 24.99,
    category: 'Tropical',
    image: 'https://placehold.co/200x200/png?text=Monstera',
  },
  {
    id: 'trop-2',
    name: 'Snake Plant',
    price: 18.99,
    category: 'Tropical',
    image: 'https://placehold.co/200x200/png?text=Snake+Plant',
  },
  {
    id: 'trop-3',
    name: 'Peace Lily',
    price: 21.99,
    category: 'Tropical',
    image: 'https://placehold.co/200x200/png?text=Peace+Lily',
  },
  {
    id: 'trop-4',
    name: 'Bird of Paradise',
    price: 29.99,
    category: 'Tropical',
    image: 'https://placehold.co/200x200/png?text=Bird+of+Paradise',
  },
  {
    id: 'trop-5',
    name: 'Calathea',
    price: 22.49,
    category: 'Tropical',
    image: 'https://placehold.co/200x200/png?text=Calathea',
  },
  {
    id: 'trop-6',
    name: 'Philodendron',
    price: 19.99,
    category: 'Tropical',
    image: 'https://placehold.co/200x200/png?text=Philodendron',
  },
  {
    id: 'flow-1',
    name: 'African Violet',
    price: 15.99,
    category: 'Flowering',
    image: 'https://placehold.co/200x200/png?text=African+Violet',
  },
  {
    id: 'flow-2',
    name: 'Begonia',
    price: 16.49,
    category: 'Flowering',
    image: 'https://placehold.co/200x200/png?text=Begonia',
  },
  {
    id: 'flow-3',
    name: 'Orchid',
    price: 27.99,
    category: 'Flowering',
    image: 'https://placehold.co/200x200/png?text=Orchid',
  },
  {
    id: 'flow-4',
    name: 'Anthurium',
    price: 25.49,
    category: 'Flowering',
    image: 'https://placehold.co/200x200/png?text=Anthurium',
  },
  {
    id: 'flow-5',
    name: 'Kalanchoe',
    price: 14.49,
    category: 'Flowering',
    image: 'https://placehold.co/200x200/png?text=Kalanchoe',
  },
  {
    id: 'flow-6',
    name: 'Cyclamen',
    price: 17.99,
    category: 'Flowering',
    image: 'https://placehold.co/200x200/png?text=Cyclamen',
  },
];

export const categories = ['Succulents', 'Tropical', 'Flowering'];

export const plantsByCategory = categories.map((category) => ({
  category,
  plants: plants.filter((plant) => plant.category === category),
}));

export default plants;
