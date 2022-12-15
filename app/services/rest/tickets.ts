export function postTicketData(postData: any): Promise<{success: boolean}> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket').then((response) => response.json())
        .then((data: {success: boolean}) => {
            return data;
        });
}

export function getTicketById<T>(id: string): Promise<T[]> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket/' + id)
        .then((response: Response) => response.json())
}