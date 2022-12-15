import { ITour } from "../models/tours/tours";
import { TicketType } from "../models/ticket/ticket";

export function ticketItemTemplate(item: ITour | TicketType): string {
    return ` <div class="card h-100 tour-item mt-4 mb-4">
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text text-muted">${item.price}</p>
                </div>
            </div>`
}
