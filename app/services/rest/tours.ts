import { ITour } from "../../models/tours/tours";

export function getTours(): Promise<ITour[]> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/')
        .then((response: Response) => response.json())
}