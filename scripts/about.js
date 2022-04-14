// 1. Data
// 1.1. Past events data
const pastEvents = [{
  imageUrl: 'images/backgrounds/pexels-thibault-trillet-167478.jpg',
  year: '2020',
  description: 'Sustainable Development Event 2020 in California, USA',
},
{
  imageUrl: 'images/backgrounds/pexels-icsa-1709003.jpg',
  year: '2018',
  description: 'Sustainable Development Event 2018 in Surabaya, Indonesia',
}];

// 2. Functions
// 2.1. Shorthand function for creating generic elements
// elem = string, classes = array of string(s), parent = DOM element
function addElem(elem, classes, parent) {
  const createdElem = document.createElement(elem);
  if (classes !== undefined) {
    classes.forEach((cl) => createdElem.classList.add(cl));
  }
  parent.appendChild(createdElem);

  return createdElem;
}

// 3. DOM manipulations
// Generate past events
const pastCardCtr = document.querySelector('.past-card-container');

pastEvents.forEach((pastEvent) => {
  const pastCardBg = addElem('div', ['past-card-bg'], pastCardCtr);
  pastCardBg.style.backgroundImage = `url('${pastEvent.imageUrl}')`;
  const pastCard = addElem('div', ['past-card', 'flex-column', 'justify-center', 'align-center'], pastCardBg);
  const pastYear = addElem('h4', [], pastCard);
  pastYear.textContent = pastEvent.year;
  const pastDesc = addElem('p', [], pastCard);
  pastDesc.textContent = pastEvent.description;
});