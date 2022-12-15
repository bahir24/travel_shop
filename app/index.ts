import {getTours} from "@rest/tours";
import './assets/styles/main.scss';
import {images} from "@services/img/img";
import {ITour} from "./models/tours/tours";
import {tourItemTemplate} from "./templates/tours";
import {openModal} from "@services/modal/modalService";
import {initFooterTitle, initHeaderTitle} from "@services/general/general";

export let  toursDataArray: ITour[] = [];
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist



initHeaderTitle('Туры', 'h1');
initFooterTitle('Туры по всему миру', 'h2');
// init data
const tourData: Promise<ITour[]> = getTours();

tourData.then((data): void => {
  console.log('call')
  toursDataArray = data;
  initToursDivElements(data);
});


// init app

/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
-   создать метод initApp который будет здесь вызываться, в теле метода добавить эти имортированные методы
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы чтобы не было ошибок
*/
function initToursDivElements(data) {

  if (Array.isArray(data)) {
    const rootElement = document.querySelector('.main-app');
    const tourWrap = document.createElement('div');

    tourWrap.classList.add('tour-wrap');


    // init click for modal
    initTourElemListener(tourWrap);

    let rootElementData = '';
    data.forEach((el, i) => {
      rootElementData += tourItemTemplate(el, i);
    });

    tourWrap.innerHTML = rootElementData;
    tourWrap.querySelectorAll('.tour-item').forEach(card => initTourElemListener(card));
    rootElement.appendChild(tourWrap);
  }
}


function initTourElemListener(tourWrap) {
  tourWrap.addEventListener('click', function(event){
      const dataIndex = this.getAttribute('data-tour-item-index');
      openModal('order', Number(dataIndex));
  });
}

