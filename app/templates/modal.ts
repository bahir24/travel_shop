import { ITour } from "../models/tours/tours";

export function modalTemplate(item: ITour): string {
    return `<div class="tour-modal">
                <button class="btn btn-dark remove-btn position-absolute top-0 end-0">X</button>
                <div class="img-section text-center">
                    <img src="${item.img}" alt="" class="w-100">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p>${item.tourOperator}</p>
                    <p>${item.price}</p>
                    <p>${item.description}</p>
                    <a href="./ticket.html?id=${item.id}" class="card-link">Buy ticket</a>
                    <a href="index.html" class="card-link">Tours link</a>
                </div>                
            </div>`;
}
