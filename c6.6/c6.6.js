const wsUrl = "wss://echo.websocket.org/";

const output = document.getElementById("output");
const send = document.getElementById('send');
const response = document.getElementById('response');
const btnSend = document.querySelector('.btn_send');
const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');
const btn = document.querySelector('.btn_geo');

let websocket;

function writeToScreen(message) {
  let pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
};

window.addEventListener('load', () => {
  websocket = new WebSocket(wsUrl);
  websocket.onopen = function(evt) {
  };
  websocket.onmessage = function(evt) {
    writeToScreen ('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>'
    );
  };
   websocket.onerror = function(evt) {
    writeToScreen(
      '<span style="color: red;">ERROR:</span> ' + evt.data
    );
  };  
   websocket.onclose = function(evt) {
  };
});

btnSend.addEventListener('click', () => {
  const text = document.querySelector('input').value;
  writeToScreen("SENT: " + text);
  websocket.send(text);
});

// Функция, выводящая текст об ошибке
const error = () => {
  status.textContent = 'Невозможно получить ваше местоположение';
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
  console.log('position', position);
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  mapLink.textContent = 'гео-локация';
}

btn.addEventListener('click', () => {
  mapLink.href = '';
  mapLink.textContent = '';
  
  if (!navigator.geolocation) {
    status.textContent = 'Geolocation не поддерживается вашим браузером';
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});