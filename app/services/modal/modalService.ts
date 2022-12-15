import { ITour } from "../../models/tours/tours";
import { createModalTemplate } from "../../templates/modal";

export class ModalService {
     public static modals: any[] = [];  // массив всех экземпляров класса modalService;
    private readonly id: string;

    constructor(private item: ITour) {
        ModalService.modals.push(this);
        this.id = (Math.random() + ModalService.modals.length).toString();
    }

    loadImage(url: string) {
        return new Promise<HTMLElement>(resolve => {
            const image = new Image();
            image.addEventListener('load', () => {
                resolve(image);
            });
            image.src = './app/assets/img/' + url;
        });
    }


    public open(): void {
        ModalService.removeAll();
        const divWrap = document.createElement('div');
        divWrap.id = this.id;
        divWrap.setAttribute('modal-id', this.id);
        divWrap.innerHTML = createModalTemplate(this.item);
        divWrap.classList.add('modal-element');
        document.body.appendChild(divWrap);
        divWrap.querySelector('.remove-btn')?.addEventListener('click', () => {
            this.remove();
        })
    };

    public remove(): void {
        const modalEl = document.getElementById(this.id);
        if (modalEl && modalEl.parentNode) {
            modalEl.parentNode.removeChild(modalEl)

        }

    };

    public static removeById(id: string | null = null): void {
        let modalId = id;

        const findEl = ModalService.modals.find(x => x.id === modalId);
        if (findEl) {
            findEl.remove();
            ModalService.modals = ModalService.modals.filter((el) => el.id !== modalId);
        } else {
            if (Array.isArray(ModalService.modals)) {
                const lastEl = ModalService.modals.pop();
                if (lastEl) {
                    lastEl.remove();
                }
            }
        }
    }

    public static removeAll() {
        if (Array.isArray(ModalService.modals)) {
            ModalService.modals.forEach((el) => {
                el.remove();
            })
        }
    }

}
