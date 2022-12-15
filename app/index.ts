import {getTours} from "@rest/tours";
import './assets/styles/main.scss';
import {images} from "@services/img/img";
import {ITour} from "./models/tours/tours";
import {tourItemTemplate} from "./templates/tours";
import {openModal} from "@services/modal/modalService";
import {initFooterTitle, initHeaderTitle} from "@services/general/general";
import {isUndefined} from "webpack-merge/dist/utils";
// export let  toursDataArray: ITour[] = [];

// ссылка на изображения нужна чтобы webpack формировал изображения в папке dist
const imagesStore = images;

interface IApp {
    init(): void,

    getTourData(): void

    initToursDivElements(data: ITour[]): void

    tourData: ITour[] | undefined

    rootElement
}

let app: IApp = {
    tourData: this.getTourData(),

    rootElement: () => document.querySelector('.main-app'),
    // tourData(): isUndefined(this) ? undefined : this.getTourData(),

    init() {
        initHeaderTitle('Туры', 'h1');
        initFooterTitle('Туры по всему миру', 'h2');
    },

    async getTourData() {
        return getTours().then((data: ITour[]) => data);

    },

    initToursDivElements(data) {

        // if (Array.isArray(data)) {
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
        // }
    }


    // const tourData: Promise<ITour[]> = getTours();

}


// init data


// tourData.then((data): void => {
//     toursDataArray = data;
//     initToursDivElements(data);
// });


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
    tourWrap.addEventListener('click', function (event) {
        const dataIndex = this.getAttribute('data-tour-item-index');
        openModal('order', Number(dataIndex));
    });
}

