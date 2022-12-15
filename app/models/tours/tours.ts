// определить интерфейс ITours - дополнительно добавить к описанию свойство  img: string
export interface ITour {
    id: number
    description: string,
    name: string,
    price: string,
    tourOperator: string
    img: string
    type: string
}