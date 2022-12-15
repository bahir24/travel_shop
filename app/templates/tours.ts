import { ITour } from "../models/tours/tours";

export function tourItemTemplate(item: ITour): string {
    const maxLength = 100;
    const description = item.description.length > maxLength ? item.description.substring(0, maxLength) + '...' : item.description;
    return ` <div class="card h-100 tour-item ">
                <img src="${item.img}" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${description}</p>
                    <p class="card-text text-muted">${item.price}</p>
                </div>
            </div>`
}
