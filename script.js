// Для dot-list (смена текста и заднего фона)
let textArray = ["New Jordan 6 Rings", "New Nike Air Max 720", "New Puma RS-X Squared"];
let textArrayForH4 = ["lorem ipsum dolir sit amet 1", "lorem ipsum dolir sit amet 2", "lorem ipsum dolir sit amet 3"];
let backgroundColorArray = ["rgb(34, 34, 34)", "green", "red"];
let backgroundImage = ["url(./images/air-jordan-6.jpg)", "url(./images/Nike-air-max-720.jpg)", "url(./images/Puma.jpg)"];

function changeColor(dot) {
  if (dot) {
    let dots = document.querySelectorAll(".dot-list");
    let index = Array.from(dots).indexOf(dot);
    document.querySelector(".banner-text h1").textContent = textArray[index];
    document.querySelector(".banner-text h4").textContent = textArrayForH4[index];
    //   document.querySelector(".banner").style.background = backgroundColorArray[index];
    document.querySelector(".banner").style.backgroundImage = backgroundImage[index];
    dots.forEach((dot) => dot.style.background = "");
    dot.style.background = "yellow";
  } else {
    alert("error");
  }
}


// ---------------------------------
// Для разных кнопок (выводит ошибку, показывающая что страница не работает)
let message = document.createElement("div")
message.className = "message"
message.textContent = "At the moment this page is doesn't work"
message.style = `
width: 331px;
background-color: #ff5f5f;
border-radius: 10px;
display: grid;
justify-content: center;
color: white;
padding: 15px;
z-index: 1;
position: fixed;
transition: 1s;
bottom: 0;
left: 0;
margin: 20px;
opacity: 0;
`


function showMessage() {
  let footer = document.querySelector("footer")
  footer.parentNode.appendChild(message)

  // Сделайте плавный переход от прозрачности к непрозрачности
  setTimeout(function () {
    message.style.opacity = 1
  }, 10)

  // Исчезновение сообщения через 2 секунды
  setTimeout(function () {
    message.style.opacity = 0;
    setTimeout(function () {
      message.parentNode.removeChild(message);
    }, 1000);
  }, 2000);
}

// -------------------------------------------------
// Для кнопок buy now (выводит сообщение, показывающая что товар добавлен в корзину)
let itemAdded = document.createElement("div")
itemAdded.className = "itemAdded"
itemAdded.textContent = "This item has been added to your cart"
itemAdded.style = `
width: 331px;
background-color: rgb(51, 180, 61);
border-radius: 10px;
display: grid;
justify-content: center;
color: white;
padding: 15px;
z-index: 1;
position: fixed;
transition: 1s;
bottom: 0;
left: 0;
margin: 20px;
opacity: 0;
`


function showAddedMessage() {
  let footer = document.querySelector("footer")
  footer.parentNode.appendChild(itemAdded)

  // Сделайте плавный переход от прозрачности к непрозрачности
  setTimeout(function () {
    itemAdded.style.opacity = 1
  }, 10)

  // Исчезновение сообщения через 2 секунды
  setTimeout(function () {
    itemAdded.style.opacity = 0;
    setTimeout(function () {
      itemAdded.parentNode.removeChild(itemAdded);
    }, 1000);
  }, 2000);

  var cartElement = document.getElementById("cart");
  var currentNumber = parseInt(cartElement.innerText.match(/\d+/)[0]);
  var newNumber = currentNumber + 1;
  cartElement.innerText = "My cart (" + newNumber + ")";
}
// ---------------------------------------


// Для кнопки отправки (выводит сообщение, показывающая что сообщение было отправлено)
let messageSend = document.createElement("div")
messageSend.className = "itemAdded"
messageSend.textContent = "Your message has been sent"
messageSend.style = `
width: 331px;
background-color: rgb(26, 109, 225);
border-radius: 10px;
display: grid;
justify-content: center;
color: white;
padding: 15px;
z-index: 1;
position: fixed;
transition: 1s;
bottom: 0;
left: 0;
margin: 20px;
opacity: 0;
`


function showSentMessage() {
  let footer = document.querySelector("footer")
  footer.parentNode.appendChild(messageSend)

  // Сделайте плавный переход от прозрачности к непрозрачности
  setTimeout(function () {
    messageSend.style.opacity = 1
  }, 10)

  // Исчезновение сообщения через 2 секунды
  setTimeout(function () {
    messageSend.style.opacity = 0;
    setTimeout(function () {
      messageSend.parentNode.removeChild(messageSend);
    }, 1000);
  }, 2000);
}
// ---------------------------------------

// при наведении на карточки появляется кнопка "buy now"
let button = document.createElement("a");
button.className = "button";
button.textContent = "Buy now";
button.style.cssText = `            
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  background-color: black;
  color: white;
  padding: 18px 30px;
  outline: none;
  font-size: 16px;
  margin-bottom: 15px;
  cursor: pointer;`
button.onclick = showAddedMessage;
const photos = document.querySelectorAll('.photo');

photos.forEach(function(photo) {
  photo.addEventListener('mouseenter', function() {
    photo.appendChild(button);
  });
  photo.addEventListener('mouseout', function() {
    photo.removeChild(button);
  });
});


