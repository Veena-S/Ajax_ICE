// import axios from 'axios';

const displayItems = (itemsReturned) => {
  // const ulElement = document.createElement('ol');
  // document.body.append(ulElement);

  // itemsReturned.forEach((singleItem) => {
  //   const itemEl = document.createElement('li');
  //   itemEl.innerHTML = singleItem;
  //   ulElement.append(itemEl);
  // });

  itemsReturned.forEach((singleItem) => {
    const pEl = document.createElement('p');
    pEl.innerText = singleItem.description;
    document.body.appendChild(pEl);
  });
};

const requestItems = () => {
  console.log('Button pressed: sending request though axios ');
  // Make request to the items
  axios.get('/items').then((response) => {
  // Handle request success
    console.log(response);
    const { itemsReturned } = response.data;
    console.log(itemsReturned);
    displayItems(itemsReturned);
  });
};

const clickMeButton = document.getElementById('clickButton');

clickMeButton.addEventListener('click', requestItems);
