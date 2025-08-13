// This acts like a fake database for now
const foodItems = [
  { id: 1, name: 'Pizza', price: '$12' },
  { id: 2, name: 'Burger', price: '$8' },
  { id: 3, name: 'Sushi', price: '$15' },
  { id: 4, name: 'Rolls', price: "$13" }
];

// Service function to get all food items
const getAllFood = () => {
  return foodItems;
};

module.exports = {
  getAllFood
};
