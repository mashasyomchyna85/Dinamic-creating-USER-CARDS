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


const userData = [
    {
        "id": 1,
        "name": "John",
        "description": "Sales Manager",
        "profilePicture": "./profile-foto/1.jpg"
    },
    {
        "id": 2,
        "name": "Josh",
        "description": "Head of Global Product",
        "profilePicture": "./profile-foto/2.jpg"
    },
    {
        "id": 3,
        "name": "Jane",
        "description": "External Consultant",
        "profilePicture": "./profile-foto/3.jpg"
    },
    {
        "id": 4,
        "name": "Iness",
        "description": "External Consultant",
        "profilePicture": "./profile-foto/4.jpg"
    },
    {
        "id": 5,
        "name": "Alex",
        "description": "Sales Manager",
        "profilePicture": "./profile-foto/5.jpg"
    },
    {
        "id": 6,
        "name": "Nathan",
        "description": "Sales Manager",
        "profilePicture": "./profile-foto/6.jpg"
    },
    {
        "id": 7,
        "name": "Tracy",
        "description": "External Consultant",
        "profilePicture": "./profile-foto/7.jpg"
    },
    {
        "id": 8,
        "name": "James",
        "description": "Sales Manager",
        "profilePicture": "./profile-foto/8.jpg"
    }
]



const root = document.querySelector('#root');


function createCard(userObject) {
    const userCard = document.createElement('section');
    const foto = document.createElement('img');
    const fullName = document.createElement('h1');
    const description = document.createElement('div');
    const button = document.createElement('button');

    userCard.classList.add('wrapper', 'none-active');
    foto.classList.add('img');
    fullName.classList.add('fullName');
    description.classList.add('text');
    button.classList.add('btn');

    userCard.append(foto, fullName, description, button);

    foto.setAttribute('src', userObject.profilePicture);
    fullName.textContent = userObject.name;
    description.textContent = userObject.description;
    button.textContent = 'Connect';

    return userCard;
}


const arrayOfCards = userData.map(createCard);
root.append(...arrayOfCards);

console.dir(arrayOfCards);

for (const card of arrayOfCards) {
    card.addEventListener('click', function () {
        arrayOfCards.forEach(element => {
            element.classList.remove('active');
            element.classList.add('none-active');
        });
        
        card.classList.toggle('none-active');
        card.classList.toggle('active');
    });
}




 







