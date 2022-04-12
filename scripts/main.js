// 1. Data
// 1.1. Speaker data
const speakers = [{
  imageUrl: 'images/portraits/Elon_Musk_Royal_Society_(crop2).jpg',
  imageAlt: 'Elon Musk portrait',
  name: 'Yochai Benkler',
  occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  detail: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
},
{
  imageUrl: 'images/portraits/Elon_Musk_Royal_Society_(crop2).jpg',
  imageAlt: 'Elon Musk portrait',
  name: 'Yochai Benkler',
  occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  detail: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
},
{
  imageUrl: 'images/portraits/Elon_Musk_Royal_Society_(crop2).jpg',
  imageAlt: 'Elon Musk portrait',
  name: 'Yochai Benkler',
  occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  detail: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
},
{
  imageUrl: 'images/portraits/Elon_Musk_Royal_Society_(crop2).jpg',
  imageAlt: 'Elon Musk portrait',
  name: 'Yochai Benkler',
  occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  detail: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
},
{
  imageUrl: 'images/portraits/Elon_Musk_Royal_Society_(crop2).jpg',
  imageAlt: 'Elon Musk portrait',
  name: 'Yochai Benkler',
  occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  detail: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
},
{
  imageUrl: 'images/portraits/Elon_Musk_Royal_Society_(crop2).jpg',
  imageAlt: 'Elon Musk portrait',
  name: 'Yochai Benkler',
  occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  detail: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
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

// 3. HTML manipulations
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