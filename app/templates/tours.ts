import { ITour } from "../models/tours/tours";

const tourClasses = {
    wrapper: 'card h-100 tour-item',
    image: 'card-img-top',
    content: 'card-body d-flex flex-column justify-content-between',
    head: 'card-title',
    description: 'card-text',
    price: 'card-text'
}

export function tourTemplate(item: ITour): string {
    return `<div class="card h-100 tour-item">
                <img src='${item.img}' class="card-img-top">
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">${item.name}</h5>
                    <div class="card-text">${item.description}</div>
                    <div class="card-text">${item.price}</div>
                </div>
            </div>`;
}
