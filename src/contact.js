import Map from './images/map.png';

const createContact = () => {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const contactDetails = document.createElement('div');
  contactDetails.classList.add('contactDetails');
  const phone = document.createElement('p');
  phone.textContent = '📞 (044) 1234-5678';
  const address = document.createElement('p');
  address.textContent = '🏠 Sunshine Falls, Pandi, Bulacan';
  contactDetails.append(phone, address);

  const map = document.createElement('img');
  map.src = Map;
  map.alt = 'Cafe San Diego restaurant location';

  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.classList.add('contactForm');
  const nameFormField = document.createElement('div');
  const emailFormField = document.createElement('div');
  const messageFormField = document.createElement('div');
  nameFormField.className = 'form-field';
  emailFormField.className = 'form-field';
  messageFormField.className = 'form-field';

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.classList.add('contactUsButton');
  submitBtn.textContent = 'Send';

  const nameLabel = document.createElement('label');
  const emailLabel = document.createElement('label');
  const messageLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'Name';
  emailLabel.setAttribute('for', 'email');
  emailLabel.textContent = 'Email';
  messageLabel.setAttribute('for', 'message');
  messageLabel.textContent = 'Message';

  const nameInput = document.createElement('input');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('required', 'required');

  const emailInput = document.createElement('input');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('required', 'required');

  const messageTextarea = document.createElement('textarea');
  messageTextarea.setAttribute('id', 'message');
  messageTextarea.setAttribute('type', 'textarea');

  nameFormField.append(nameLabel, nameInput);
  emailFormField.append(emailLabel, emailInput);
  messageFormField.append(messageLabel, messageTextarea);

  form.append(nameFormField, emailFormField, messageFormField, submitBtn);

  contact.append(contactDetails, form, map);

  return contact;
};

const loadContact = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
};

export default loadContact;
