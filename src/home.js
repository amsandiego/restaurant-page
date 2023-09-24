const createHome = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  const welcome = createParagraph('Welcome to Cafe San Diego');
  welcome.classList.add('welcome');

  const tagline = createParagraph('Where flavor meets tradition');
  tagline.classList.add('tagline');

  const message = createParagraph(
    'Explore our best menu and taste the difference of our Asian comfort food.'
  );
  message.classList.add('message');

  const actionButtons = document.createElement('div');
  actionButtons.classList.add('actionButtons');
  const menuButton = createButton('Our Menu');
  menuButton.setAttribute('id', 'menu-button');
  const contactButton = createButton('Contact Us');
  actionButtons.append(menuButton, contactButton);

  home.append(welcome, tagline, message, actionButtons);

  return home;
};

const loadHome = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
};

const createParagraph = (text) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
};

const createButton = (text) => {
  const btn = document.createElement('button');
  btn.textContent = text;
  return btn;
};

export default loadHome;
