import {getTours} from "@rest/tours";
import './assets/styles/main.scss';
import {images} from "@services/img/img";
import {ITour} from "./models/tours/tours";
import {tourTemplate} from "./templates/tours";
import {openModal} from "@services/modal/modalService";
const imagesStore = images;

interface IApp {
    init(): void,

    getTourData(): void

    makeTicketCard(item: ITour): string

    fillContent(): void
}

class App implements IApp {
    private tourData;
    private tourWrapper;

    private cards;

    constructor() {
    }

    init() {
        this.getTourData();
        this.setTourWrapper();

    };

    getTourData() {
        getTours().then(response => {
            this.tourData = response;
            this.fillContent();
        });
    };

    makeTicketCard(item: ITour) {
        return tourTemplate(item);
    };

    fillContent() {
        this.tourWrapper.innerHTML = this.tourData.map(item => this.makeTicketCard(item));
        this.setCards();
        this.setCardListener();
    };

    setTourWrapper() {
        this.tourWrapper = document.querySelector('.tour-wrap');
    };

    setCards(){
        this.cards = this.tourWrapper.querySelectorAll('.card');
    };

    setCardListener() {
        this.cards.forEach((card, index) =>
            card.addEventListener(
                'click',
                () => openModal(this.tourData[index])
            )
        );
    }
}

let app = new App();
document.addEventListener('DOMContentLoaded', () => app.init());