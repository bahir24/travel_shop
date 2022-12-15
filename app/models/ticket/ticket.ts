export interface ITicket {
    description: string,
    hotel: string,
    location: ILocation,
    name: string,
    price: string,
    tourOperator: string,
}

export interface IVipTicket extends ITicket {
    vipNumber: string,
    vipStatus: string
}

export type TicketType = IVipTicket & ITicket;

export interface ILocation {
    x: string,
    y: string
}
