import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const initialize = () => {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  //   content.appendChild(createMain());
  //   content.appendChild(createFooter());

  //   setActiveBtn(document.querySelector('.nav-button'));
  //   loadHome();
};

const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const name = document.createElement('h1');
  name.classList.add('name');
  name.textContent = 'Cafe San Diego';

  header.appendChild(name);
  //   header.appendChild(createNav());
  return header;
};

export default initialize;
