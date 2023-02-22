let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');

let contexttext1 = document.getElementById('text1');
let contextlink1 = document.getElementById('link1');

let contexttext2 = document.getElementById('text2');
let contextlink2 = document.getElementById('link2');

let contexttext3 = document.getElementById('text3');
let contextlink3 = document.getElementById('link3');

let contexttext4 = document.getElementById('text4');
let contextlink4 = document.getElementById('link4');

let contexttext5 = document.getElementById('text5');
let contextlink5 = document.getElementById('link5');

let contexttext6 = document.getElementById('text6');
let contextlink6 = document.getElementById('link6');

let contexttext7 = document.getElementById('text7');
let contextlink7 = document.getElementById('link7');

let contexttext8 = document.getElementById('text8');
let contextlink8 = document.getElementById('link8');

let contexttext9 = document.getElementById('text9');
let contextlink9 = document.getElementById('link9');

button1.onclick = function() {
  button1.classList.remove('button');
  button1.classList.add('buttonactive');
  button2.classList.remove('buttonactive');
  button2.classList.add('button');
  button3.classList.remove('buttonactive');
  button3.classList.add('button');

  contexttext1.innerHTML = 'Электротурка Arcelik K3300';
  contextlink1.href = 'https://garmoniaptz.ru/index.php?option=com_k2&amp;Itemid=488&amp;id=65&amp;lang=ru&amp;view=item';

  contexttext2.innerHTML = 'Тактильные наклейки';
  contextlink2.href = '#';

  contexttext3.innerHTML = 'Нескользящий коврик';
  contextlink3.href = '#'

  contexttext4.innerHTML = 'Нескользящая разделочная доска';
  contextlink4.href = '#';

  contexttext5.innerHTML = 'Нож-дозатор';
  contextlink5.href = '#';

  contexttext6.innerHTML = 'Сахарница-дозатор';
  contextlink6.href = '#';

  contexttext7.innerHTML = 'Таймер тактильный кухонный';
  contextlink7.href = '#';

  contexttext8.innerHTML = 'Щипцы для разбивания яиц';
  contextlink8.href = '#';

  contexttext9.innerHTML = 'Ограничитель для тарелки';
  contextlink9.href = '#';
};
button2.onclick = function() {
  button1.classList.remove('buttonactive');
  button1.classList.add('button');
  button2.classList.remove('button');
  button2.classList.add('buttonactive');
  button3.classList.remove('buttonactive');
  button3.classList.add('button');

  contexttext1.innerHTML = 'Видеоувеличители';
  contextlink1.href = '#';

  contexttext2.innerHTML = 'Телефоны';
  contextlink2.href = '#';

  contexttext3.innerHTML = 'Тифлофлешплееры портативные';
  contextlink3.href = '#'

  contexttext4.innerHTML = 'Гарнитура с костной проводимостью';
  contextlink4.href = '#';

  contexttext5.innerHTML = 'Тактильные часы для незрячих';
  contextlink5.href = '#';

  contexttext6.innerHTML = 'Термометр для воздуха говорящий';
  contextlink6.href = '#';

  contexttext7.innerHTML = 'Портативный фотоувелечитель';
  contextlink7.href = '#';

  contexttext8.innerHTML = 'Говорящая ручка';
  contextlink8.href = '#';

  contexttext9.innerHTML = 'Тифло диктофон';
  contextlink9.href = '#';
};
button3.onclick = function() {
  button3.classList.remove('button');
  button3.classList.add('buttonactive');
  button2.classList.remove('buttonactive');
  button2.classList.add('button');
  button1.classList.remove('buttonactive');
  button1.classList.add('button');

  contexttext1.innerHTML = 'Экранный доступ';
  contextlink1.href = '#';

  contexttext2.innerHTML = 'Говорящий город';
  contextlink2.href = '#';

  contexttext3.innerHTML = 'Определитель купюр';
  contextlink3.href = '#'

  contexttext4.innerHTML = 'Индфикация объектов';
  contextlink4.href = '#';

  contexttext5.innerHTML = 'Исскуство в слух';
  contextlink5.href = '#';

  contexttext6.innerHTML = 'Звуковое зрение';
  contextlink6.href = '#';

  contexttext7.innerHTML = 'Доступная верстка';
  contextlink7.href = '#';

  contexttext8.innerHTML = 'TalkBack';
  contextlink8.href = '#';

  contexttext9.innerHTML = 'Jieshuo ScreenReader';
  contextlink9.href = '#';

};