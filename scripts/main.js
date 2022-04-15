// 1. Data
// 1.1. Speaker data
const speakers = [{
  imageUrl: 'images/portraits/Elon-Musk.jpg',
  imageAlt: 'Elon Musk\'s portrait',
  name: 'Elon Musk',
  occupation: 'Entrepreneur, investor, innovator, wealthiest person on the planet',
  detail: 'Who doesn\'t know the, CEO, and Chief Engineer of SpaceX, CEO, and Product Architect of Tesla, and all other cool companies?',
},
{
  imageUrl: 'images/portraits/Al-Gore.jpg',
  imageAlt: 'Al Gore\'s portrait',
  name: 'Al Gore',
  occupation: 'A renowned US politician and environmentalist',
  detail: 'Gore has been involved with environmental issues since 1976. He has held various environmental initiatives tackling climate change, waste, water issues, and more.',
},
{
  imageUrl: 'images/portraits/Ahmed-Aboutaleb.png',
  imageAlt: 'Ahmed Aboutaleb\'s portrait',
  name: 'Ahmed Aboutaleb',
  occupation: 'Mayor of the City of Rotterdam',
  detail: 'In 1998, Aboutaleb became director of the Forum organisation, an institute for multiculturalism in the Netherlands. In 2021, he was the Joint winner of the 2021 World Mayor award by City Mayors Foundation.',
},
{
  imageUrl: 'images/portraits/Boyan-Slat.jpeg',
  imageAlt: 'Boyan Slat\'s portrait',
  name: 'Boyan Slat',
  occupation: 'Dutch inventor, entrepreneur, CEO of The Ocean Cleanup',
  detail: 'One day, Slat found more plastic than fish while diving. He later came up with the idea of building a passive ocean plastic catchment system, which he presented at a TEDx talk in 2012. Then, the rest is history.',
},
{
  imageUrl: 'images/portraits/Sundar-Pichai.jpg',
  imageAlt: 'Sundar Pichai\'s portrait',
  name: 'Sundar Pichai',
  occupation: 'CEO of Alphabet Inc. and its subsidiary Google',
  detail: 'Pichai joined Google in 2004, where he led the innovation efforts for a suite of Google\'s client software products, including Google Chrome, Chrome OS, and Google Drive.',
},
{
  imageUrl: 'images/portraits/Ayesha-Imam.jpg',
  imageAlt: 'Ayesha Imam\'s portrait',
  name: 'Ayesha Imam',
  occupation: 'Chair of the Board of Greenpeace',
  detail: 'Imam is a former Chief of the Culture, Gender and Human Rights department of the UN Population Fund and a founding member and pioneer national coordinating secretary of Women in Nigeria.',
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
// 3.1. Generate speakers
const speakerCardCtr = document.querySelector('.speaker-card-container');

speakers.forEach((speaker) => {
  const speakerCard = addElem('div', ['speaker-card'], speakerCardCtr);
  const speakerImgCtr = addElem('div', ['speaker-img-container'], speakerCard);
  const speakerImg = addElem('img', [], speakerImgCtr);
  speakerImg.setAttribute('src', speaker.imageUrl);
  speakerImg.setAttribute('alt', speaker.imageAlt);
  const speakerInfo = addElem('div', ['speaker-info'], speakerCard);
  const speakerName = addElem('h4', [], speakerInfo);
  speakerName.textContent = speaker.name;
  const speakerOccu = addElem('h5', [], speakerInfo);
  speakerOccu.textContent = speaker.occupation;
  addElem('hr', [], speakerInfo);
  const speakerDetail = addElem('p', [], speakerInfo);
  speakerDetail.textContent = speaker.detail;
});
