/*
Частина 1:
    Динамічно створити картки юзерів з даними, що містяться в масиві userData (файл в останньому коміті в репозиторії)
    Приклад вигляду картки юзера:
    https://pbs.twimg.com/media/EIopEQ6XYAEqzUk.jpg
    (всі картки одночасно на екрані)

    В html тільки <div id="root"></div>

    Стилі писати в css, навішувати елементам через classList

Частина 2:
    За натиснення на картку юзера картка має підсвітитися червоним бордером - картка "обрана"
    Якщо обрати іншу картку, то з попередньої картки підсвітка знімається.
    Тобто одночасно може бути обрана тільки одна картка.
*/

const root = document.querySelector('#root');
const cardArray = userData.map(user => createUserCard(user));
root.append(...cardArray);
/* TODO:
1. Refactor repeating code
2. Create image placeholder: first Letter of name + random color
3. Dont show image while it's downloading.
*/


function createUserCard(user){

  const imageWrapper = createImageWrapper(user);
  const h2 = createElement('h2', {}, user.name);
  const p = createElement('p', {classNames: ['desc']}, user.description);
  const button = createElement('button', {}, 'Connect');
 
  const wrapper = createElement('div', {classNames: ['card-wrapper']}, imageWrapper, h2, p, button);
  wrapper.addEventListener('click', getActiveCard);
  return wrapper;
}

/**
* 
* @param {String} type 
* @param {Object} options 
* @param {String[]} options.classNames
* @param  {Node} children 
*/
function createElement(type, {classNames = []}, ...children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...children);
  return elem;
}


function createImageWrapper(user) {
    const imageWrapper = createElement('div', {classNames: ['image-wrapper']}, user.name[0]);
    const color = stringToColor(user.name);
    console.log(color);
    imageWrapper.style.backgroundColor = color;
    imageWrapper.setAttribute('id', `wrapper-${user.id}`);
    const img = createImage(user);
      return imageWrapper;
}


function createImage(user) {
    const img = document.createElement('img');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.dataset.id = user.id; ///data-id;
    img.classList.add('avatar');

    img.addEventListener('load', imageLoadHandler);
    img.addEventListener('error', imageErrorHandler);

    return img
}


/* Handlers */


function imageLoadHandler({target}){
    const parentWrapper = document.querySelector(`#wrapper-${target.dataset.id}`);
    parentWrapper.append(target);
 }
 
 function imageErrorHandler(event) {
     event.target.remove();
 }
 
 
 function getActiveCard(event){
     const activeCard = document.querySelector('.active');
     if (activeCard === event.currentTarget) {
         return;
     }
     if(activeCard){
         activeCard.classList.remove('active');
     }
     event.currentTarget.classList.add('active');
 }



 /* UTILS */


 function stringToColor (str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      colour += value.toString(16);
    }
    return colour.substring(0, 7);
  }