const createHome = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  const welcome = createParagraph('Welcome to Cafe San Diego');
  welcome.classList.add('welcome');
  home.appendChild(welcome);

  const tagline = createParagraph('Where flavor meets tradition');
  tagline.classList.add('tagline');
  home.appendChild(tagline);

  const message = createParagraph(
    'Explore our best menu and taste the difference of our Asian comfort food.'
  );
  message.classList.add('message');
  home.appendChild(message);

  const actionButtons = createElement('div');
  actionButtons.classList.add('actionButtons');
  actionButtons.appendChild(createButton('Our Menu'));
  actionButtons.appendChild(createButton('Contact Us'));
  home.appendChild(actionButtons);

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
