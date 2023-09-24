import createMealCard from '../../restaurant-project/src/components/createMealCard';
import menuItems from './menuItems';

const createMenu = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menuItems.forEach((menuItem) => {
    const card = createCard(menuItem);
    menu.appendChild(card);
  });

  return menu;
};

const createCard = (menuItem) => {
  const card = document.createElement('div');
  card.className = 'card';

  const img = new Image();
  img.src = menuItem.image;

  const infoDiv = document.createElement('div');
  infoDiv.className = 'info';

  const mealName = document.createElement('p');
  mealName.className = 'meal-name';
  mealName.textContent = menuItem.name;

  const description = document.createElement('p');
  description.className = 'meal-description';
  description.textContent = menuItem.description;

  infoDiv.append(mealName, description);

  const price = document.createElement('span');
  price.className = 'meal-price';
  price.textContent = menuItem.price;

  card.append(img, infoDiv, price);
  return card;
};

const loadMenu = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
};

export default loadMenu;
